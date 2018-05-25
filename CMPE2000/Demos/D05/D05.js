window.onload = function ()
{
    document.getElementById("testButton").onclick = FunctionName;
}
function FunctionName()
{
    var suppliedValue = parseFloat(prompt('Enter something: ', 100));
    var result;
    if (typeof (suppliedValue) === 'string' || isNaN(suppliedValue))
        result = "Bad Operation";
    else
        result = suppliedValue * 2;

    var table = "<table><tr><td>" + result + "</td></tr></table>";
    document.getElementById("bottomDiv").innerHTML = table;
}