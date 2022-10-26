/*$(document).ready(function() {
    document.getElementById('total').textContent = "Итоговая стоимость: тысяч рублей (вкл.НДС)";
  });*/


  document.getElementById('button').onclick = function refreshTotal() {

    var brand = document.getElementById ('brand').value [0];
    var model = document.getElementById ('model').value [0];
    var bodytype = document.getElementById ('bodytype').value [0];
    var mileage = document.getElementById ('mileage').value [0];
    var gas = document.querySelector('input[type=checkbox][name="gas"]:checked').value;
    var age = document.querySelector('input[type=checkbox][name="age"]:checked').value;
    

    if (isNaN(brand)) brand = 0;
    if (isNaN(model)) model = 0;
    if (isNaN(bodytype)) bodytype = 0;
    if (isNaN(mileage)) mileage = 0;
    if (isNaN(gas)) gas = 0;
    if (isNaN(age)) age = 0;

    var total = brand + model + bodytype + mileage + gas + age;
    document.getElementById('total').textContent ="Итоговая стоимость: " + total + " (вкл.НДС)";
}
