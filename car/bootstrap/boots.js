/*$(document).ready(function() {
    document.getElementById('total').textContent = "Итоговая стоимость: тысяч рублей (вкл.НДС)";
  });*/
  

 
    let button = document.getElementById('button');
    button.onclick = subtotal;
  

 function subtotal() {
  var brand , model , bodytype , mileage , gas , age;
    var brand = document.getElementById ('brand').value;
    brand = parseInt(brand);
    var model = document.getElementById ('model').value;
    model = parseInt(model);
    var bodytype = document.getElementById ('bodytype').value;
    bodytype = parseInt(bodytype);
    var mileage = document.getElementById ('mileage').value;
    mileage = parseInt(mileage);
    var gas = document.querySelector('input[type=checkbox][name="gas"]:checked').value;
    gas = parseInt(gas);
    var age = document.querySelector('input[type=radio][name="age"]:checked').value;
    age = parseInt(age);
    

    /*if (isNaN(brand)) brand = 0;
    if (isNaN(model)) model = 0;
    if (isNaN(bodytype)) bodytype = 0;
    if (isNaN(mileage)) mileage = 0;
    if (isNaN(gas)) gas = 0;
    if (isNaN(age)) age = 0;*/
    /*var total='';
for (var i=1; i<=12; i++) {
  document.getElementById('total').innerHTML+= total;
}
document.getElementById('total').innerHTML+= total;*/


let total = brand + model + bodytype + mileage + gas + age;
if (total = 0) {
  alert('Это обязательное поле');
}
else {

     document.getElementById ('total').innerHTML+= total + 'тысяч рублей';
}
 }