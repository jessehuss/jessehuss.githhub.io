$(document).ready(function(){
   
    $('#btnSimple').click( function() {
       
        var arrData = [];
        for(var i = 0; i < 10; ++i)
            arrData.push(i*i);
        
        var stuff = {};
        stuff["Blah"] = "Zerg";
        stuff["blarg"] = "Zarg";
        
        var getData = {};
        getData["Name"] = "A guy";
        getData["Mark"] = 98;
        getData["Stuff"] = stuff;
        getData["Grades"] = arrData;
        
        var options = {};
        options["url"] = "/~demo/cmpe2000/ica11_jsontest.php";
        options["type"] = "get";
        options["datatype"] = "json";
        options["data"] = getData;
        options["success"] = getCallBack;
        options["error"] = errorCallBack;
        
        $.ajax(options);
    });
    
    $("#btnGetAvg").click( function() {
       
        var arrData = [];
        for(var i = 0; i < 10; ++i)
            arrData.push(i*i*i - i*i - i*i - i*i );
        
        var getData = {};
        getData["Grades"] = arrData;
        
        var options = {};
        options["url"] = "/~demo/cmpe2000/ica11_jsontest.php";
        options["type"] = "get";
        options["dataType"] = "json";
        options["data"] = getData;
        options["success"] = getAvgCallBack;
        options["error"] = errorCallBack;
        
        $.ajax(options);
    });
    
        $("#btnComplex").click( function() {
       
        var arrData = [];
        for(var i = 0; i < 10; ++i)
            arrData.push(i*i*i - i*i - i*i - i*i );
        
        var getData = {};
        getData["Grades"] = arrData;
        
        var options = {};
        options["url"] = "/~demo/cmpe2000/ica11_jsontest.php";
        options["type"] = "get";
        options["dataType"] = "json";
        options["data"] = getData;
        options["success"] = complexCallBack;
        options["error"] = errorCallBack;
        
        $.ajax(options);
    });
});
function errorCallBack(jqRequest, retStatus, errThrown){
    console.log("Failur has ensued! " + errThrown + " : " + retStatus);
};
function getCallBack(retData,retStatus){
    $("#target").html(retData);
    $("#status").html("Status : " + retStatus);
};
function getAvgCallBack(retData,retStatus){    
    data = retData["Grades"];
    var sum = 0;
    for(var c = 0; c < data.length; ++c)
       sum += parseInt(data[c]);
   sum /= data.length;
   
   $("#status").html("Status : " + retStatus + " - Average : " + sum);
};
function complexCallBack(retData, retStatus){
    var list = "";
    var grades = retData["Grades"];
    for(var i in grades)
        list += "<li>" + grades[i] + "</li>";
    
    $("#orderedList").append(list);
    
};