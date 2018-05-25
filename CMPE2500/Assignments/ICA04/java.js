$(document).ready(function(){    
    GetTable();
    $("#addUser").click(AddUser);           
});
function GetTable(){
    var postData = {};   
    AjaxCaller("/~jhuss222/CMPE2500/Assignments/ICA04/FillTable.php","post","json",postData,successCallback, errorCallback);    
};
function DeleteUser(){
    var postData = {};
    postData["action"] = "DeleteUser";
    postData["userID"] = $(this).attr('id');
    AjaxCaller("/~jhuss222/CMPE2500/Assignments/ICA04/FillTable.php","post","json",postData,DeleteUserSuccess,DeleteUserError);        
}
function AddUser()
{
    var postData = {};
    postData["action"] = "AddUser";
    postData["user"] = $("#user").val();
    postData["pass"] = $("#pass").val();
    
    AjaxCaller("/~jhuss222/CMPE2500/Assignments/ICA04/FillTable.php","post","json",postData,AddUserSuccess,AddUserError);    
}
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
    var count = 0;
    for (var i in returnedData)
        count++;
    retrievedUsers = count;
    $("#statusDiv").html("Retrieved : "+ retrievedUsers + " User Records");
    console.log(returnedStatus,returnedData);
    MakeTable(returnedData);
}
function errorCallback(jqObject,returnedStatus, errorThrown){
    console.log("Failure has ensued! " + errorThrown + " : " + returnedStatus);
};
function AddUserSuccess(returnedData,returnedStatus,jqObject)
{   
    $("#statusDiv2").html(returnedData + " Users Added");
    console.log(returnedStatus,returnedData);      
    GetTable();
}
function AddUserError(jqObject, returnedStatus, errorThrown)
{
    console.log("Failure has ensued! " + errorThrown + " : " + returnedStatus); 
}
function DeleteUserSuccess(returnedData,returnedStatus,jqObject)
{      
    if(returnedData == -1)
        $("#statusDiv2").html("You cannot delete yourself!");
    else
        $("#statusDiv2").html(returnedData + " Users Deleted");
    console.log(returnedStatus,returnedData);      
    GetTable();
}
function DeleteUserError(jqObject, returnedStatus, errorThrown)
{
    console.log("Failure has ensued! " + errorThrown + " : " + returnedStatus); 
}
function MakeTable(users){
    var table = '<tr><th colspan="2">Op</th><th colspan="2">userID</th><th colspan="4">Username</th><th colspan="4">Encrypted Password</th></tr>';        
    for (var i in users)
    {
        table += "<tr>";
        table += '<td colspan="2"><input class="deleteButton" id="'+users[i]["userID"]+'" type="button" value="Delete"></td>';
        table += '<td colspan="2">' + users[i]["userID"] + "</td>";
        table += '<td colspan="4">' + users[i]["username"] + "</td>";   
        table += '<td colspan="4">' + users[i]["password"] + "</td>";                    
        table += "</tr>";
    }
    $("#firstTable").find("tbody").empty().append(table); 
    $(".deleteButton").click(DeleteUser);
}
