var timerID = 0;
var counter = 0;
window.onload = function () {
    document.getElementById("StartButton").onclick = StartStop;

    preloadimg = [new Image(), new Image(), new Image(), new Image()];
    for (var i = 0, max = preloadimg.length; i < max; i++) {
        preloadimg[i].src = "images/tux" + (i) + ".jpg";
    }
    document.getElementById("myPic").src = "images/tux0.jpg";
    document.getElementById("wol").onclick = changePic;
    document.getElementById("bat").onclick = changePic;
    document.getElementById("cap").onclick = changePic;

    document.getElementById("Red").onmouseenter = changeBackground;
    document.getElementById("Red").onmouseleave = reverttt;
    document.getElementById("Blue").onmouseenter = changeBackground;
    document.getElementById("Blue").onmouseleave = reverttt;
    document.getElementById("Custom").onmouseenter = changeBackground;
    document.getElementById("Custom").onmouseleave = reverttt;



    document.getElementById("r1").onblur = fix;
    document.getElementById("r2").onblur = fix;

};

function fix() {
    if ((isNaN(this.value)))
        this.style.backgroundColor = "Red";
    
    document.getElementById("pr").value = parseFloat((1/(1/parseFloat(document.getElementById("r1").value))+(1/parseFloat(document.getElementById("r2").value)))).toFixed(2) + "&8486;";
}

function reverttt() {
    document.getElementById("aDiv").style.backgroundColor = "white";
}
function changeBackground() {

    if (this.value === "Red") {
        document.getElementById("aDiv").style.backgroundColor = document.getElementById("Red").value;
    }
    if (this.value === "Blue") {
        document.getElementById("aDiv").style.backgroundColor = document.getElementById("Blue").value;
    }
    if (this.value === "Custom") {
        document.getElementById("Custom").style.backgroundColor = document.getElementById("Colorchooser").value;
        document.getElementById("aDiv").style.backgroundColor = document.getElementById("Colorchooser").value;
    }

}

function StartStop() {

    if (timerID === 0) {
        counter = 0;
        timerID = setInterval(update, 100);
        document.getElementById("StartButton").value = "Stop";
    }
    else {
        clearInterval(timerID);
        timerID = 0;
        document.getElementById("StartButton").value = "Start";
        document.getElementById("name").value = "stop"
        document.getElementById("name").value = parseFloat(counter / 1000).toFixed(3);
    }
}
;
function update() {
    counter += 100;
    document.getElementById("name").value = parseFloat(counter / 1000).toFixed(3);
}

function changePic() {
    if (this.value === "Wolverine") {
        var img = document.getElementById("myPic");
        img.src = preloadimg[3].src;
    }
    if (this.value === "Batman") {
        var img = document.getElementById("myPic");
        img.src = preloadimg[2].src;
    }
    if (this.value === "Captain") {
        var img = document.getElementById("myPic");
        img.src = preloadimg[1].src;
    }
}

