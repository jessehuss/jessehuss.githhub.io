/**
 * Calls New Game and Bind Grid on load
 * Waits for Start button click
 */
window.onload = function () {
    NewGame();
    document.getElementById("Startbutton").onclick = NewGame;
    BindGrid();
};
//Array of cell colors [Red][Blue][Green][Yellow]
var cellColors = ["#FB000D", "#1807f6", "#0dff00", "#fbfe00"];
//Max Row and Max Column are initially set to the biggest game board sizes
var max_row = 10;
var max_col = 14;
//Holds the total score initially set to 0
var totalScore = 0;
//initial delay for the speed at which the squares drop (animation speed)
var delay = 250;
//2D array of cells
var cellArray = new Array(max_row);
for (var i = 0; i < max_row; i++)
    cellArray[i] = new Array(max_col);

/**
 * Holds Cell Information and Cell Functions
 * @param {int} row
 * @param {int} col
 * @param {Color} color
 * @param {bool} highlight
 * @param {bool} alive
 * @returns {Cell}
 */
function Cell(row, col, color, highlight, alive)
{
    //initializes the cell to the Information to the parameters
    this._row = row;
    this._col = col;
    this._color = color;
    this._highlight = highlight;
    this._alive = alive;
    
    /**
     * Constuctor for Cell
     * @param {int} row
     * @param {int} col
     * @returns {undefined}
     */
    Cell.prototype.CTOR = function (row, col)
    {
        //initialize the row and column
        this._row = row;
        this._col = col;
        //choose a random color from the color array for the cell
        this._color = cellColors[Math.floor(Math.random() * cellColors.length)];
        //initialize to alive and not highlighted
        this._highlight = false;
        this._alive = true;
    };
    /**
     * Show for the Cell 
     * This function choses the styling for the cell based on cell information
     * @returns {undefined}
     */
    Cell.prototype.Show = function ()
    {
        //ceate a cellID for the current cell
        var _cellID = "CellPos" + this._row + "," + this._col;
        //if the cell is alive leave the cell color the same
        if (this._alive)
            document.getElementById(_cellID).style.backgroundColor = this._color;
        //if the cell is dead change the background color to grey (the color of the page) and kill the border
        else {
            document.getElementById(_cellID).style.backgroundColor = '#d3d3d3';
            document.getElementById(_cellID).style.border = "0px";
        }
        //if the cell is highlighted make the border 2 px solid white
        if (this._highlight)
            document.getElementById(_cellID).style.border = "solid 2px #ffffff";
        //if the cell is not highlighted make the border solid 1px black
        else {
            document.getElementById(_cellID).style.border = "solid 1px #000000";            
            if (this._alive)
                document.getElementById(_cellID).style.border = "solid 1px #000000";
            //if the cell is not highlighted and dead kill the border
            else
                document.getElementById(_cellID).style.border = "0px";

        }
    };
    /**
     * Bind function for Cell
     * Recreates a cell and then uses that cell
     * when it is clicked or hovered over
     * @returns {undefined}
     */
    Cell.prototype.Bind = function ()
    {
        //creates a new row and column and color using the cell invoking cells row/col/color
        var row = this._row;
        var col = this._col;
        var checkCol = this._color;
        //creates a temporary CellID used to get the cell from document
        var _cellID = "CellPos" + this._row + "," + this._col;
        var anyCell = document.getElementById(_cellID);
        
        /**
         * on click will itterate through the cellArray and 
         * kill all the cells that were highlighted and then 
         * updates the score
         * @returns {undefined}
         */
        anyCell.onclick = function () {
            //nested for loops for itterating through the 2D cell array
            //sets all the highlighted cells to dead and unhighlights them
            for (var x = 0; x < max_row; x++)
            {
                for (var y = 0; y < max_col; y++)
                {
                    if (cellArray[x][y]._highlight === true) {
                        cellArray[x][y]._highlight = false;
                        cellArray[x][y]._alive = false;
                    }
                }
            }
            
            //takes the possible score from the page
            var tempScore = document.getElementById("count").innerHTML;
            //parses the score and adds it to the total score
            tempScore = parseInt(tempScore);
            totalScore += tempScore;
            //puts the total score to the page
            document.getElementById("score").innerHTML = totalScore;
            //Calls ShowGrid function
            ShowGrid();            
        };
        /**
         * on mousemove will itterate through the cell Array and 
         * un highlights all of them shows the grid and then calls check
         * which will return the possible score
         * @returns {undefined}
         */
        anyCell.onmousemove = function () {
            //nested for loop for itterating through the Cell Array and sets 
            //all cells highlight to false
            for (var x = 0; x < max_row; x++)
                for (var y = 0; y < max_col; y++)
                    cellArray[x][y]._highlight = false;

            //Calls the show grid function 
            ShowGrid();
            //Check function recursively checks all the surrounding cells and 
            //returns the possible score 
            possibleScore = Check(col, row, checkCol);
            //updates the possible score on the page
            document.getElementById("count").innerHTML = possibleScore;
            //calls show grid function
            ShowGrid();
        };
    };
    /**
     * Move function reassigns the invoking cell with the argument cell
     * @param {Cell} tempCell
     * @returns {undefined}
     */
    Cell.prototype.Move = function (tempCell)
    {
        //assigns the argument cells properties to the invoking cell
        this._color = tempCell._color;
        this._alive = tempCell._alive;
        cellArray[this._row][this._col] = this;
        tempCell._alive = false;
    };
}
/**
 * New Game function resets the score to 0
 * Sets the maxRow/Col and delay based on difficulty value
 * Fills the Cell array with new cells and calls new grid
 * @returns {undefined}
 */
function NewGame()
{
    //reset the total score
    totalScore = 0;
    document.getElementById("score").innerHTML = totalScore;
    //gets the difficulty from the document selection input
    var difficulty = document.getElementById("Difficulty");
    //sets the max row/col and delay based on the difficulty value
    if (difficulty.value === '1') {
        max_row = 3;
        max_col = 8;
        delay = 250;
    }
    //sets the max row/col and delay based on the difficulty value
    if (difficulty.value === '2') {
        max_row = 4;
        max_col = 12;
        delay = 200;
    }
    //sets the max row/col and delay based on the difficulty value
    if (difficulty.value === '3') {
        max_row = 6;
        max_col = 15;
        delay = 150;
    }
    //sets the max row/col and delay based on the difficulty value
    if (difficulty.value === '4') {
        max_row = 10;
        max_col = 21;
        delay = 100;
    }
    //fills the cell array with new cells
    for (var x = 0; x < max_row; x++)
    {
        for (var y = 0; y < max_col; y++)
        {
            var tempCell = new Cell();
            tempCell.CTOR(x, y);
            cellArray[x][y] = tempCell;
        }
    }
    //calls new grid function
    NewGrid();
}
/**
 * New Grid uses a nested for loop to make a table of buttons in html 
 * @returns {undefined}
 */
function NewGrid()
{
    //game grid holds the html code for the table of buttons
    var gameGrid = "<table align=\"center\" class=\"gameTable\">";
    //makes an html table of buttons using a nested for loop the same size
    //as the cell array
    for (var x = 0; x < max_row; x++)
    {
        //add a new table row
        gameGrid += "<tr>";
        for (var y = 0; y < max_col; y++)
        {
            //add a new table column with a button in it
            gameGrid += ("<td>" + "<button id=\"" + "CellPos" + x + "," + y + "\" type=\"button\"/>" + "</td>");
        }
        //add the closing to the table row
        gameGrid += "</tr>";
    }
    //add the closing to the table
    gameGrid += "</table>";
    
    //write the table to the html document
    document.getElementById("gameArea").innerHTML = gameGrid;
    //use the timer to call showgrid function
    setInterval(ShowGrid, delay);
}
/**
 * Show Grid function itterates through the cell array and calls move
 * and show which move and show the cells
 * @returns {undefined}
 */
function ShowGrid()
{
    //loops through the columns
    for (var y = 0; y < max_col; y++)
    {
        //create a flag variable
        var tempFlag = false;
        //loops through the row
        for (var x = 0; x < max_row; x++)
        {
            //creates a temporary cell at the position in the nested loop
            var tempCell = cellArray[x][y];
            //if the cell is dead and not at the top
            //send move the cell above so it will essentially "drop" the cell 
            //down a position
            if (x > 0 && tempCell._alive === false)
                tempCell.Move(cellArray[x - 1][y]);
            //set the flag to true if there is a live cell in the row
            if (tempCell._alive)
                tempFlag = true;
        }
        //if the flag is still false after that row the row is checked
        //that means we need to shift all the cells over a row
        if (!tempFlag)
        {
            //goes through the row again and sends move the cells beside it 
            //which essentially shifts the cells left
            for (var tempRow = 0; tempRow < max_row; tempRow++) {
                var tempCell = cellArray[tempRow][y];
                if (y < (max_col - 1))
                    tempCell.Move(cellArray[tempRow][y + 1]);
            }
        }
    }
    //itterates through the cell array and shows each of the cells
    for (var x = 0; x < max_row; x++)
    {
        for (var y = 0; y < max_col; y++)
        {
            var tempCell = cellArray[x][y];
            tempCell.Show();
        }
    }
    //calls bind grid function
    BindGrid();
}
/**
 * bind grid itterates through the cell array and calls bind for each cell
 * @returns {undefined}
 */
function BindGrid()
{
    //itterates through the 2D cell array and calls bind for each cell
    for (var x = 0; x < max_row; x++)
    {
        for (var y = 0; y < max_col; y++)
        {
            var tempCell = cellArray[x][y];
            tempCell.Bind();
        }
    }
}
/**
 * Check is a recursive function that checks each side up and down
 * to see if the cell meets all of the parameters and returns the possible score
 * @param {int} col
 * @param {int} row
 * @param {color} checkColor
 * @returns {Number}
 */
function Check(col, row, checkColor)
{
    //sets the possible score to 0
    var possibleScore = 0;
    //if the col and row are within the max row and column and 0
    if (col < max_col && row < max_row && col >= 0 && row >= 0 
            // If the cell is alive
            && (cellArray[row][col]._alive === true) 
            // If the cell is the same color as the parameter color
            && (cellArray[row][col]._color === checkColor) 
            // If the cell is not highlighted
            && (cellArray[row][col]._highlight === false))
    {
        //increment the possible score
        possibleScore++;
        //Set the highlight to true for that cell
        cellArray[row][col]._highlight = true;
        //Check the right cell
        possibleScore += Check(col + 1, row, checkColor);
        //Check the left cell
        possibleScore += Check(col - 1, row, checkColor);
        //check the lower cell
        possibleScore += Check(col, row + 1, checkColor);
        //check the upper cell
        possibleScore += Check(col, row - 1, checkColor);
        //return the possible score    
        return possibleScore;
    } else
        //otherwise return 0
        return 0;
}