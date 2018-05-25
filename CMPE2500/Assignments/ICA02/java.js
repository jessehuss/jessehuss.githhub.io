$(document).ready(function () {

    var retData = {data: [{userID: "123", user: "Kirk", pass: "NCC1701"},
            {userID: "667", user: "Spock", pass: "Fascinating"}], status: "Passed"};

    MakeTable(retData);
});
function MakeTable(retData, status) {
    var table = '<tr><th colspan="2">Op</th><th colspan="2">userID</th><th colspan="4">Username</th><th colspan="4">Encrypted Password</th></tr>';    
    var array = retData["data"];
    for (var i in array)
    {
        table += "<tr>";
        table+='<td colspan="2"></td>';
        var tempData = array[i];
        for (var c in tempData)
        {
            if (tempData.hasOwnProperty(c)) {
                var tempVal = tempData[c];
                if (c === 'Op') {
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'userID') {
                    table += '<td colspan="2">' + tempVal + "</td>";
                }
                if (c === 'user') {
                    table += '<td colspan="4">' + tempVal + "</td>";
                }
                if (c === 'pass') {
                    table += '<td colspan="4">' + tempVal + "</td>";
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