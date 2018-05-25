$(document).ready(function(){
    
    $("#btnAjaxGet").click(function(){
        var name = "Jesse";
        var score = 5;
        
        var getData = {};        
        getData["name"] = name;
        getData["mark"] = score;
        
        var targetDiv = $("#target");
        
        var jqObject = $.get("/~demo/cmpe2000/ica10_formtest.php",getData);
        
        jqObject.done(function(returnedData, returnedStatus){
            console.log(returnedData + " : " + returnedStatus);
            targetDiv.html(returnedData);
            $("#status").html(returnedStatus);            
        });        
        jqObject.fail(function(failedData,failedStatus){
            console.log("Get operation failed! " + failedData + " : " + failedStatus);        
        });
        
        jqObject.always(function(){
            console.log("I will always happennnn!");
        });
    });
    
    $("#btnAjaxPost").click(function(){
        var postData = {};
        postData["Name"] = "James";
        
        var arrayData = [];
        
        for(var i = 0; i < 10; ++i)
            arrayData.push(i *10);
        
        postData["markArray"] = arrayData;
        
        console.log(postData);
                
        var options = {};
        options["url"] = "/~demo/cmpe2000/ica10_formtest.php";
        options["type"] = "post";
        options["datatype"] = "html";
        options["data"] = postData;
        options["success"] = successCallback;
        options["error"] = errorCallback;
        
        $.ajax( options );
    });
}) ;

function successCallback(returnedData, returnedStatus, jqObject){
  $("#target").html(returnedData );  
  $("#status").html( returnedStatus );
};
function errorCallback(jqObject, failedStatus, errorThrown){
     console.log("Post operation failed! " + errorThrown + " : " + failedStatus); 
};
