var genNums = new Array(20);

$(document).ready(function () {
    $("#getCall").click(function () {
        var name = $("#Name").val();
        var hobby = $("#Hobby").val();
        var HowMuch = $("#HowMuch").val();

        var getData = {};
        getData["Name"] = name;
        getData["Hobby"] = hobby;
        getData["HowMuch"] = HowMuch;

        var targetDiv = $("#firstDiv");

        var jqObject = $.get("/~demo/cmpe2000/ica10_Hobby.php", getData);

        jqObject.done(function (returnedData, returnedStatus) {
            console.log("GET done: " + returnedStatus);
            targetDiv.html(returnedData);
        });
        jqObject.fail(function (returnedData, returnedStatus) {
            console.log("GET failed : " + returnedStatus);
        });
    });
    $("#RowCount").change(function () {
        $("#PostMakeTable").val("Post to Make " + $("#RowCount").val() + "x" + $("#ColumnCount").val() + "Table");
    });
    $("#ColumnCount").change(function () {
        $("#PostMakeTable").val("Post to Make " + $("#RowCount").val() + "x" + $("#ColumnCount").val() + "Table");
    });
    $("#PostMakeTable").click(function () {
        var postData = {};
        postData["RowCount"] = $("#RowCount").val();
        postData["ColumnCount"] = $("#ColumnCount").val();

        var url = "/~demo/cmpe2000/ica10_Table.php";
        var type = "post";
        var data = postData;

        AjaxRequest(url, type, data, successCallback, errorCallback);
    });
    $("#GenerateNums").click(function () {
        var endString = "";
        for (var i = 0; i < 20; i++) {
            genNums[i] = Math.floor(Math.random() * 20) + 1;
        }
        $("#generateDiv").html("");
        for(var j = 0; j < 20; j++){
            if(j === 19)
                endString += genNums[j];
            else
                endString += genNums[j] + ", ";
        }
        $("#generateDiv").html(endString);
    });
    $("#PostShow").click(function(){
        var postData = {};
        postData["Numbers"] = genNums;
        
        var url = " /~demo/cmpe2000/ica10_Numbers.php";
        var type = "post";
        var data = postData;
        
        AjaxRequest(url, type, data, successCallbackTwo, errorCallback)
    });
    $("#FAIL").click(function(){
        var postData = {};
        postData["Numbers"] = genNums;
        
        var url = " /~demo/cmpe2000/ica10_Numberds.php";
        var type = "post";
        var data = postData;
         AjaxRequest(url, type, data, successCallbackTwo, errorCallback)
    });
});

function AjaxRequest(url, type, data, successFunction, errorFunction) {
    console.log(data);
    var options = {};
    options["url"] = url;
    options["type"] = type;
    options["datatype"] = "html";
    options["data"] = data;
    options["success"] = successFunction;
    options["error"] = errorFunction;

    $.ajax(options);
}
;
function successCallback(data, ajaxStatus) {
    $("#targetDiv").html(data);
    console.log(ajaxStatus);
}
;
function errorCallback(jqObject, textStatus, errorThrown) {
    console.log("Operation failed! " + errorThrown + " : " + textStatus);
    alert("Operation failed! " + errorThrown + " : " + textStatus);
}
;
function successCallbackTwo(data, ajaxStatus){
    $("#PostDiv").html(data);
    console.log(ajaxStatus);
}