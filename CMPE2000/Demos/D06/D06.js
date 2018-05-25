window.onload = function(){
    document.myForm.onsubmit = Validate;   
    var buildings = document.getElementsByName("Building");
    for(var i = 0; i < buildings.length; i++)
    {
        buildings[i].onclick = Process;
    }    
    
    ShowStatus("Fill in the blanks!");
};

function Validate(){    
    var one = document.myForm.NumUnits;
    var two = document.forms[0]['NumUnits'];
    var three = document.myForm['NumUnits'];
    var four = document.forms['myForm']['NumUnits'];
    
    if(isNaN(one.value) || Number(one.value) % 2 !== 1)
    {
        ShowStatus("No Good!");
        return false;
    }
    
    if(!document.myForm.Tip.checked)
    {
        ShowStatus("CHEAP cheap cheap!");
        return false;        
    }
    
    var parking = document.myForm.Parking;
    if(parking.value < 10)
    {
        ShowStatus("Too Low!");
        return false;
    }
    
    var buildings = document.getElementsByName("Building");
    var atLeastOneChecked = false;
    for(var i = 0; i < buildings.length; i++)
    {
        atLeastOneChecked |= buildings[i].checked;
    }
    
    if(!atLeastOneChecked)
    {
        ShowStatus("Choose a building!");
        return false;
        
    }
    return true;
}

function Process(){
    var result = this.value;
    
    //alert(result);
}
function ShowStatus(message){
    document.getElementById("status").innerHTML = message;
}