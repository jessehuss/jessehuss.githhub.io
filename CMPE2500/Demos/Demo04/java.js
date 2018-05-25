$(document).ready(function(){
    
    GetTitles();
    
    $("#submit").click(GetTitles);
    $("#update").click(UpdatePrices);
});
function UpdatePrices(){
    var postData = {};
    postData["filter"] = $("#filter").val();
    postData["multiplier"] = $("#multiplier").val();
    AjaxCaller("/~jhuss222/CMPE2500/Demos/Demo04/titlesWebService.php","post","html",postData,successCallback, errorCallback);     
}
function GetTitles(){
    var postData = {};
    postData["filter"] = $("#filter").val();
    AjaxCaller("/~jhuss222/CMPE2500/Demos/Demo04/titlesWebService.php","post","html",postData,successCallback, errorCallback);    
};

function AjaxCaller(url,method,returnedDataType,inputData,successCallback,errorCallback){
    var options = {};
    options["url"] = url;
    options["type"] = method;
    options["datatype"] = returnedDataType;
    options["data"] = inputData;
    options["success"] = successCallback;
    options["error"] = errorCallback;
    $.ajax(options);
};
function successCallback(returnedData, returnedStatus, jqObject){
    $("#output").html(returnedData);    
}
function errorCallback(jqObject,returnedStatus, errorThrown){
    console.log("Failure has ensued! " + errorThrown + " : " + returnedStatus);
};