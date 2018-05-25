var preload;
var timerID = 0;
var growOrShrink = true;

window.onload = function(){
  
    preload = new Image();
    preload.src = "sweg.jpg";
    
    document.getElementById("loadButton").onclick = Load;
    document.getElementById("animate").onclick = StartStop;
};

function Load(){
    
  var img = document.getElementById("myPic"); 
  img.src = preload.src;
  img.style.width = '600px';
  
};

function StartStop(){
  
    if(timerID === 0)
        timerID = setInterval(GrowOrShrinkImage, 1);
    else{
        clearInterval(timerID);
        timerID = 0;        
    }
    
};

function GrowOrShrinkImage(){
    
    var currentWidth = parseInt(document.getElementById("myPic").style.width);
    
    if(growOrShrink){
        currentWidth += 20;
        if(currentWidth >= 1000)
            growOrShrink = false;      
    }
    else{
        currentWidth -= 20;
        if(currentWidth <= 5)
            growOrShrink = true;
    }
    
    document.getElementById("myPic").style.width  = currentWidth + "px";
        
    
}