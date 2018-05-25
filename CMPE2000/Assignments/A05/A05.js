window.onload = function ()
{
    document.getElementById("promptTest").onclick = PromptTest;
    document.getElementById("google").onclick = OpenGoogle;
    document.getElementById("chrome").onclick = RedirectGoogle;
    document.getElementById("back").onclick = back;
    document.getElementById("dims").onclick = showDims;
    document.getElementById("cookies").onclick = cookiesAllowed;
    document.getElementById("darken").onclick = darkenSkies;
    document.getElementById("table").onclick = tablize;
}
function PromptTest()
{
    //var oldName = document.getElementById("promptTest").value;  
    var suppliedValue = prompt('Hey '+ this.innerHTML +' enter a new name', this.innerHTML);    
    document.getElementById("promptTest").innerHTML = suppliedValue;
    
}
function OpenGoogle()
{
    window.open("http://www.google.ca", "_blank", "width=600,height=400");   
}
function RedirectGoogle()
{
    window.location = "https://www.google.ca";
}
function back()
{
   window.history.back();
}
function showDims()
{
    document.getElementById("output").value = '[' + window.innerWidth + ',' + window.innerHeight + ']'
}
function cookiesAllowed()
{
    document.getElementById("cookies").innerHTML = "Cookies are a " + navigator.cookieEnabled;
}
function darkenSkies()
{
    document.body.style.backgroundColor = "#444";
    document.body.style.color = "white";
}
function tablize()
{
    var row = document.getElementById("outOne").value;
    var col = document.getElementById("outTwo").value;
    var table = "<table>";
    row++;
    col++;
    for (var i = 0 ; i < row; i++) 
    {
        table+= "<tr>";
        for (var j = 0 ; j < col; j++) 
        {
            if(i == 0 && j == 0)
                table += ("<td>" + "x" + "</td>" );
            else if(i == 0)
                table += ("<td>" + j + "</td>");
            else if(j == 0)
                table += ("<td>" + i + "</td>");
            else
                table += ("<td>" + i  *  j + "</td>" );
        }
        table+= "</tr>"
    }
    table += "</table>";
    
    document.getElementById("bottomDiv").innerHTML = table;    
}