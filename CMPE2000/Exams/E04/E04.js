$(document).ready(function(){
    
    
    $("#btnPartA").click(function(){
        var name = "Jesse";        
        
        var getData = {};    
        getData["part"]= 'A';
        getData["name"] = name;       
        
        var targetDiv = $("#lblPartA");
        
        var jqObject = $.get("/~demo/cmpe2000/labexam04.php",getData);
        
        jqObject.done(function(returnedData, returnedStatus){
            console.log(returnedData + " : " + returnedStatus);
            targetDiv.html(returnedData);                   
        });        
        jqObject.fail(function(failedData,failedStatus){
            console.log("Get operation failed! " + failedData + " : " + failedStatus);  
             alert("Operation failed! " + failedData + " : " + failedStatus);
        });
        
    });
    
    $("#btnPartB").click( function() {
        var getData = {};
        getData["part"] = 'B';   
        
        var options = {};
        options["url"] = "/~demo/cmpe2000/labexam04.php";
        options["type"] = "get";
        options["dataType"] = "json";
        options["data"] = getData;
        options["success"] = getAvgCallBack;
        options["error"] = errorCallBack;
        
        $.ajax(options);
    });
    
    $("#btnPartC").click(function(){
        var postData = {};
        postData["part"] = "C";      
        postData["seed"] = $("#tbPartC").val();        
                
        var options = {};
        options["url"] = "/~demo/cmpe2000/labexam04.php";
        options["type"] = "post";
        options["dataType"] = "json";
        options["data"] = postData;
        options["success"] = successCallback;
        options["error"] = errorCallBack;
        
        $.ajax( options );
    });
    
    $("#btnPartD").click(function(){        
        var postData = {};    
        postData["part"]= 'D';
        postData["X"] = $("#tbPartDX").val();        
        postData["Y"] = $("#tbPartDY").val();        
        
        var options = {};
        options["url"] = "/~demo/cmpe2000/labexam04.php";
        options["type"] = "post";
        options["dataType"] = "html";
        options["data"] = postData;
        options["success"] = help;
        options["error"] = errorCallBack;
        
        $.ajax( options );
        
    });
});
function help(retData, retStatus){
    var serverAns = retData;
    
    $("#tbPartDAnswer").val("Server says : " + serverAns);
    
    var x = $("#tbPartDX").val();
    var y = $("#tbPartDY").val();
    
    var ans = Math.pow(x,y);
    if(parseInt(serverAns) !== ans)
        $("#divPartDMessage").html("WRONG");
    else
        $("#divPartDMessage").html("Right");
    console.log("Status : " + retStatus);
}
function successCallback(retData, retStatus){
    var hay = retData;
    $("#divPartC").css({"width" : hay["width"], "height" : hay["height"],"background-color" : hay["color"]});
    console.log("Status : " + retStatus);
}
function getAvgCallBack(retData,retStatus){     
   var arrData = retData;
   $("#tbPartB_A").val(arrData[0]);
   $("#tbPartB_B").val(arrData[1]);
   $("#tbPartB_C").val(arrData[2]);
   var sum = 0;
   for (var i = 0; i < 3; i++) {
       sum += arrData[i];
   }
   $("#lblPartB").html(sum); 
   
   console.log("Status : " + retStatus);
};
function errorCallBack(jqObject, failedStatus, errorThrown){
     console.log("Post operation failed! " + errorThrown + " : " + failedStatus); 
};

