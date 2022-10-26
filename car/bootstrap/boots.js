/*$(document).ready(function() {
    document.getElementById('total').textContent = "Итоговая стоимость: тысяч рублей (вкл.НДС)";
  });*/
  

 
    let button = document.getElementById('button');
    button.onclick = total;
  

 function total() {
  var brand , model , bodytype , mileage , gas , age , total;
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
    
/*
    if (isNaN(brand)) brand = value;
    if (isNaN(model)) model = value;
    if (isNaN(bodytype)) bodytype = value;
    if (isNaN(mileage)) mileage = value;
    if (isNaN(gas)) gas = value;
    if (isNaN(age)) age = value;
*/
    var total = brand + model + bodytype + mileage + gas + age;
    document.getElementById('total').innerHTML = total;
}
