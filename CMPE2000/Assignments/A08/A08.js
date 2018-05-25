var preloadimg;
var preloadName;
var maxIndex;
var currentIndex;
var intervalVal;
var timerID = 0;

$(document).ready(function () {
    preloadName = ["Beach", "Sand", "Ocean", "Sun"];
    preloadimg = [new Image(), new Image(), new Image(), new Image()];
    for (var i = 0, max = preloadimg.length; i < max; i++) {
        preloadimg[i].src = "../A07/" + (i + 1) + ".jpg";
    }
    intervalVal = 300;
    currentIndex = 0;
    maxIndex = preloadimg.length - 1;

    $("#myPic").prop("src", preloadimg[currentIndex].src);
    $("#name").prop("value", preloadName[currentIndex]);

    $("#backButton").click(Back);
    $("#NextButton").click(Next);
    $("#StartButton").click(StartStop);
    $("input[type='radio']").change(transition);

});
function Back() {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = maxIndex;
    ShowPic();
}
;
function Next() {
    currentIndex++;
    if (currentIndex > maxIndex)
        currentIndex = 0;
    ShowPic();
}
;
function StartStop() {
    if (timerID === 0) {
        timerID = setInterval(Next, intervalVal);
        $("#StartButton").val("Stop SlideShow");
    } else {
        clearInterval(timerID);
        timerID = 0;
        $("#StartButton").val("Start SlideShow");
    }
}
;
function ShowPic() {
    if ($("#trans1").prop("selected")) {
        $("#myPic").fadeOut(intervalVal / 2, function () {
            $("#myPic").prop("src", preloadimg[currentIndex].src);
            $("#myPic").fadeIn(intervalVal / 2);
        });
    }
    if ($("#trans2").prop("selected")) {
        $("#myPic").slideToggle(intervalVal/2, function () {
            $("#myPic").prop("src", preloadimg[currentIndex].src);
            $("#myPic").slideToggle(intervalVal/2);
        });
    }
     $("#name").prop("value", preloadName[currentIndex]);
}
;
function transition() {
    if ($(this).prop("checked"))
        intervalVal = $(this).val();
    if (timerID !== 0) {
        clearInterval(timerID);
        timerID = 0;
        timerID = setInterval(Next, intervalVal);
    }
}
;