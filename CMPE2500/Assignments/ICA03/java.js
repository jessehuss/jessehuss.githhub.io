$(document).ready(function(){
    
    GetTable();
});

function GetTable(){
    var postData = {};   
    AjaxCaller("/~jhuss222/CMPE2500/Assignments/ICA03/FillTable.php","post","json",postData,successCallback, errorCallback);    
};

function AjaxCaller(url,method,returnedDataType,inputData,successCallback,errorCallback){
    var options = {};
    options["url"] = url;
    options["type"] = method;
    options["dataType"] = returnedDataType;
    options["data"] = inputData;
    options["success"] = successCallback;
    options["error"] = errorCallback;
    $.ajax(options);
};
function successCallback(returnedData, returnedStatus, jqObject){
    console.log(returnedStatus,returnedData);
    MakeTable(returnedData);
}
function errorCallback(jqObject,returnedStatus, errorThrown){
    console.log("Failure has ensued! " + errorThrown + " : " + returnedStatus);
};
function MakeTable(users){
    var table = '<tr><th colspan="2">Op</th><th colspan="2">userID</th><th colspan="4">Username</th><th colspan="4">Encrypted Password</th></tr>';        
    for (var i in users)
    {
        table += "<tr>";
        table += '<td colspan="2"></td>';
        table += '<td colspan="2">' + users[i]["userID"] + "</td>";
        table += '<td colspan="4">' + users[i]["username"] + "</td>";   
        table += '<td colspan="4">' + users[i]["password"] + "</td>";                    
        table += "</tr>";
    }
    $("#firstTable").find("tbody").empty().append(table);    
}
