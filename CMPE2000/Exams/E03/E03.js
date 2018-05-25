var timerID = 0;
var globCount = 0;
$(document).ready(function () {
    var temp = $("input[type='radio']").first("label");
    temp.prop("checked", "true");
    $("#imgPartE").prop("src", $(temp).val());

    $("#btnPartA").click(function () {
        $("#btnPartA").html("Part A Complete");
        $("#divPartA").css("background-color", "green");
        $("#divPartA").css("text-align", "center");
    });
    $("input[type='radio']").click(function () {
        $("input[type='radio']").next("label");
        if ($(this).prop("checked"))
            $("#imgPartE").prop("src", $(this).val());
    });

    $("#btnPartF").click(function () {
        $("#spanPartFA").fadeOut(1000, function () {
            $("#spanPartFB").fadeOut(1000, function () {
                $("#spanPartFC").fadeOut(1000, function () {
                    $("#spanPartFD").hide(1000, function () {
                        $("span").fadeIn(2000);
                    });
                });
            });
        });
    });

    $("#btnPartC").click(function () {
        if (timerID === 0) {
            timerID = setInterval(updateMeterLabel, 100);
            $("#btnPartC").html("Stop");
        } else {
            globCount = 0;
            $("#mPartC").val(0);
            $("#lblPartC").html("0.00");
            clearInterval(timerID);
            timerID = 0;
            $("#btnPartC").html("Start");
        }
    });
    
    $("#btnPartB").click(function(){
       var one = $("#rOperand1").val(); 
       var two = $("#rOperand2").val(); 
       var three = $("#rOperand3").val(); 
       var ans = (one * two) / three;
       $("#lblPartBOutput").html(one + " * " + two+ " / " + three+ " = " + ans.toFixed(2));
    });
   
});
function updateMeterLabel() {
    var temp = Math.random() * 50 + 50;
    globCount += temp;
    if (globCount > 2000)
    {
        globCount = 0;
        temp = 0;
        $("#mPartC").val(0);
        $("#lblPartC").html("0.00");
        clearInterval(timerID);
        timerID = 0;
        $("#btnPartC").html("Start");
    }
    else
    {
        $("#lblPartC").html(temp.toFixed(2));
        $("#mPartC").val(globCount);
    }
}