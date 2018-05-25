var preloadimg;
var preloadName;
var maxIndex;
var currentIndex;

var timerID = 0;

window.onload = function () {
    preloadName = ["Beach", "Sand", "Ocean", "Sun"]
    preloadimg = [new Image(), new Image(), new Image(), new Image()];
    for (var i = 0, max = preloadimg.length; i < max; i++) {
       preloadimg[i].src = (i+1) + ".jpg"; 
    }
    currentIndex = 0;
    maxIndex = preloadimg.length - 1;
    
    ShowPic();

    document.getElementById("backButton").onclick = Back;
    document.getElementById("NextButton").onclick = Next;
    document.getElementById("StartButton").onclick = StartStop;
};

function Back() {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = maxIndex;
    ShowPic();
};

function Next() {
    currentIndex++;
    if (currentIndex > maxIndex)
        currentIndex = 0;
    ShowPic();
};

function StartStop() {

    if (timerID === 0){
        timerID = setInterval(Next, 1000);
        document.getElementById("StartButton").value = "Stop SlideShow";
    }
    else {
        clearInterval(timerID);
        timerID = 0;
        document.getElementById("StartButton").value = "Start SlideShow";
    }
};
function ShowPic() {
    var img = document.getElementById("myPic");
    img.src = preloadimg[currentIndex].src;
    var text = document.getElementById("name");
    text.value = preloadName[currentIndex];
};
