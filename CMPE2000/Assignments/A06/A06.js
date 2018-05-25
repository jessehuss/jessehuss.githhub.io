
window.onload = function () {
    document.myForm.onsubmit = validate;
    document.myForm.Subtotal.onchange = update;
    document.myForm.ShippingType.onchange = updateShipping;
    var getTax = document.getElementsByName("Tax");
    for (var i = 0; i < getTax.length; i++)
    {
        getTax[i].onclick = updatePST;
    }
    document.myForm.GSTCheck.onclick = updateGST;
}

function updateGST() {
    var gstTax;
    if (document.myForm.GSTCheck.checked)
        gstTax = 0.05;
    else
        gstTax = 0;

    if (!(isNaN(document.myForm.Subtotal.value)))
        document.myForm.GST.value = parseFloat(document.myForm.Subtotal.value * gstTax).toFixed(2);

    updateTotal();
}
function updatePST() {
    var pstTax = document.myForm.Tax.value;
    if (!(isNaN(document.myForm.Subtotal.value)))
        document.myForm.PST.value = parseFloat(document.myForm.Subtotal.value * pstTax).toFixed(2);

    updateTotal();
}
function updateShipping() {
    var shipMethod = document.myForm.ShippingType;
    document.myForm.Shipping.value = parseFloat(shipMethod.value).toFixed(2);

    updateTotal();
}
function updateTotal() {
    document.myForm.Total.value = '$ ' + (parseFloat(document.myForm.Subtotal.value) + parseFloat(document.myForm.GST.value) + parseFloat(document.myForm.PST.value) + parseFloat(document.myForm.Shipping.value)).toFixed(2);
}
function update() {
    var temp = document.myForm.Subtotal.value;
    if (parseFloat(temp) < 0 || (isNaN(temp)))
        temp = 0;
    document.myForm.Subtotal.value = parseFloat(temp).toFixed(2);

    updateGST();
    updatePST();
    updateTotal();
}
function validate() {
    if (isNaN(document.myForm.Subtotal.value)) {
        alert("Invalid Entry");
        return false;
    }
}


