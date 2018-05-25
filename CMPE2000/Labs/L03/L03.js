var timerID = 0;
$(document).ready(function () {
    $('#getAll').click(function () {
        $('#LiveCb').attr("checked", false);
        CbChanged();
        var postData = {};

        postData["tagId"] = "all";
        var datatype = "json";
        var url = "/~demo/cmpe2000/ica11_json.php";
        var type = "post";
        var data = postData;
        AjaxRequest(url, type, data, datatype, ShowAllTags, errorCallback);
    });

    $('#addTag').click(function () {
        var tempMin = $("#minTagVal").val();
        var tempMax = $("#maxTagVal").val();

        var postData = {};

        postData["action"] = "add";
        postData["tagDesc"] = $("#tagDesc").val();
        postData["tagMin"] = $("#minTagVal").val();
        postData["tagMax"] = $("#maxTagVal").val();
        var datatype = "json";
        var url = "/~demo/cmpe2000/ica11_json.php";
        var type = "post";
        var data = postData;
        AjaxRequest(url, type, data, datatype, AddTagCallBack, errorCallback);
    });

    $('#getLive').click(function () {
        $('#LiveCb').attr("checked", false);
        CbChanged();
        var postData = {};

        postData["action"] = "live";
        postData["tagDescription"] = $("#tagDescFilter").val();
        var datatype = "json";
        var url = "/~demo/cmpe2000/ica11_json.php";
        var type = "post";
        var data = postData;
        AjaxRequest(url, type, data, datatype, ShowAllMatching, errorCallback);
    });
    $('#filter').click(function () {
        var postData = {};

        postData["action"] = "filter";
        postData["tagDesc"] = $("#tagDescFilter").val();
        var datatype = "json";
        var url = "/~demo/cmpe2000/ica11_json.php";
        var type = "post";
        var data = postData;
        AjaxRequest(url, type, data, datatype, filterCallBack, errorCallback);
    });
    $('#getHistorical').click(function () {
        $('#LiveCb').attr("checked", false);
        CbChanged();
        var postData = {};

        postData["action"] = "historical";
        postData["tagId"] = $("#choiceBox").find(":selected").val();
        var datatype = "json";
        var url = "/~demo/cmpe2000/ica11_json.php";
        var type = "post";
        var data = postData;
        AjaxRequest(url, type, data, datatype, getHistoricalCallback, errorCallback);
    });
    $('#LiveCb').change(CbChanged);
});
function CbChanged() {
    if ($(this).prop("checked"))
        timerID = setInterval(refreshLive, 500);
    else {
        clearInterval(timerID);
        timerID = 0;
    }
}
;
function AjaxRequest(url, type, data, dataType, successFunction, errorFunction) {
    console.log(data);
    var options = {};
    options["url"] = url;
    options["type"] = type;
    options["dataType"] = dataType;
    options["data"] = data;
    options["success"] = successFunction;
    options["error"] = errorFunction;

    $.ajax(options);
}
;
function getHistoricalCallback(retData, ajaxStatus) {
    $("#firstTable").hide();
    $("#secondTable").hide();
    $("#thirdTable").show();

    var table = document.getElementById("thirdTable");
    $("#thirdTable").empty();

    var thMin = document.createElement("TH");
    thMin.colspan = "3";
    var min = document.createTextNode("Minimum");
    thMin.appendChild(min);
    table.appendChild(thMin);

    var thMax = document.createElement("TH");
    thMax.colspan = "3";
    var max = document.createTextNode("Maximum");
    thMax.appendChild(max);
    table.appendChild(thMax);

    var thVal = document.createElement("TH");
    thVal.colspan = "2";
    var val = document.createTextNode("Value");
    thVal.appendChild(val);
    table.appendChild(thVal);

    var thts = document.createElement("TH");
    thts.colspan = "2";
    var ts = document.createTextNode("TimeStamp");
    thts.appendChild(ts);
    table.appendChild(thts);

    var thbar = document.createElement("TH");
    thbar.colspan = "2";
    thbar.id = "bar";
    var bar = document.createTextNode("Bar");
    thbar.appendChild(bar);
    table.appendChild(thbar);


    var array = retData["data"];
    for (var i in array)
    {
        var tr = document.createElement("TR");

        var tempData = array[i];
        for (var c in tempData)
        {
            if (c === 'tagMax')
                var max = parseInt(tempData[c]);
            if (c === 'value')
                var val = parseFloat(tempData[c]);
            if (c === 'tagMin')
                var min = parseInt(tempData[c]);
            if (tempData.hasOwnProperty(c)) {
                var tempVal = tempData[c];
                if (c === 'value') {
                    tempVal = parseFloat(tempVal).toFixed(2);
                    var td = document.createElement("TD");
                    td.colspan = "2";
                    var text = document.createTextNode(tempVal);
                    td.appendChild(text);
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
                if (c === 'tagMin') {
                    var td = document.createElement("TD");
                    td.colspan = "3";
                    var text = document.createTextNode(tempVal);
                    td.appendChild(text);
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
                if (c === 'tagMax') {
                    var td = document.createElement("TD");
                    td.colspan = "3";
                    var text = document.createTextNode(tempVal);
                    td.appendChild(text);
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
                if (c === 'timeStamp') {
                    var td = document.createElement("TD");
                    td.colspan = "2";
                    var text = document.createTextNode(tempVal);
                    td.appendChild(text);
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
            }
        }
        var bar = ((val - min) / (max - min)) * 100;
        bar = parseInt(bar);
        var td = document.createElement("TD");
        var meter = document.createElement("METER");
        meter.id = "secondMeterVal";
        meter.value = bar;
        meter.max = "100";
        meter.min = "0";
        var text = document.createTextNode("Bar");
        meter.appendChild(text);
        td.appendChild(meter);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    $("#statusDiv").html("Status : " + retData["status"]);
    console.log(retData["status"]);
}
;
function refreshLive()
{
    var postData = {};

    postData["action"] = "live";
    postData["tagDescription"] = $("#tagDescFilter").val();
    var datatype = "json";
    var url = "/~demo/cmpe2000/ica11_json.php";
    var type = "post";
    var data = postData;
    AjaxRequest(url, type, data, datatype, ShowAllMatching, errorCallback);
}
function filterCallBack(retData, ajaxStatus) {
    var array = retData["data"];
    var options = "";
    for (var i in array)
    {
        var tempData = array[i];
        options += '<option value="' + tempData["tagId"] + '">' + tempData["tagDescription"] + '</option>';
        $("#choiceBox").empty().append(options);
    }

    $("#statusDiv").html("Status : " +  retData["status"]);
    console.log(retData["status"]);
}
;
function ShowAllMatching(retData, ajaxStatus) {
    $("#firstTable").hide();
    $("#thirdTable").hide();
    $("#secondTable").show();
    var table = '<tr><th colspan="2">ID</th><th colspan="4">Tag Description</th><th colspan="1">Min</th><th colspan="1">Max</th><th colspan="2">Value</th><th colspan="2" id="bar">Bar</th></tr>';
    var array = retData["data"];
    for (var i in array)
    {
        table += "<tr>";
        var tempData = array[i];
        for (var c in tempData)
        {
            if (c === 'tagMax')
                var max = parseInt(tempData[c]);
            if (c === 'value')
                var val = parseFloat(tempData[c]);
            if (c === 'tagMin')
                var min = parseInt(tempData[c]);
            if (tempData.hasOwnProperty(c)) {
                var tempVal = tempData[c];
                if (c === 'value') {
                    tempVal = parseFloat(tempVal).toFixed(2);
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'tagId') {
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'tagMax') {
                    table += '<td colspan="1">' + tempVal + "</td>";
                }
                if (c === 'tagMin') {
                    table += '<td colspan="1">' + tempVal + "</td>";
                }
                if (c === 'tagDescription') {
                    table += '<td colspan="4">' + tempVal + "</td>";
                }
            }
        }
        var bar = ((val - min) / (max - min)) * 100;
        bar = parseInt(bar);
        table += '<td><meter id="meterVal" value="' + bar + '" min="0" max="100">Bar</meter></td>';
        table += "</tr>";
    }
    $("#secondTable").find("tbody").empty().append(table);
    $("#statusDiv").html("Status : " +  retData["status"]);
    console.log(retData["status"]);
}
;
function AddTagCallBack(retData, ajaxStatus) {
    $("#targetDiv").html("Status : " +  retData["status"]);
    console.log( retData["status"]);
    var string = retData["status"],
            substring = "Success";
    if(string.indexOf(substring) !== -1)
        $('#getAll').click();
}
;
function ShowAllTags(retData, ajaxStatus) {
    $("#firstTable").show();
    $("#secondTable").hide();
    $("#thirdTable").hide();
    var table = '<tr><th colspan="2">ID</th><th colspan="6">Tag Description</th><th colspan="2">Min</th><th colspan="2">Max</th></tr>';
    var array = retData["data"];
    for (var i in array)
    {
        table += "<tr>";
        var tempData = array[i];
        for (var c in tempData)
        {
            if (tempData.hasOwnProperty(c)) {
                var tempVal = tempData[c];
                if (c === 'tagId') {
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'tagMax') {
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'tagMin') {
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'tagDescription') {
                    table += '<td colspan="6">' + tempVal + "</td>";
                }

            }
        }
        table += "</tr>";
    }

    $("#firstTable").find("tbody").empty().append(table);
    $("#statusDiv").html("Status : " + retData["status"]);
    console.log(retData["status"]);
}
;
function errorCallback(jqObject, textStatus, errorThrown) {
    console.log("Operation failed! " + errorThrown + " : " + textStatus);
    $("#statusDiv").html("Status : " + textStatus);
}
;