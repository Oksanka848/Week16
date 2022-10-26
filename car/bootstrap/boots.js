$(document).ready(function() {
    $(".total").text("Итоговая стоимость: тысяч рублей (вкл.НДС)");
  });

$('input,select').on('change', refreshTotal);

function refreshTotal() {
    var brand = +$('#brand').val();
    var model = +$('#model').val();
    var bodytype = +$('#bodytype').val();
    var mileage = +$('#mileage').val();
    var gas = +$('input[name="gas"]:checked', '#gas').val();
    var age = +$('input[name="age"]:checked','#age').val();

    if (isNaN(brand)) brand = 0;
    if (isNaN(model)) model = 0;
    if (isNaN(bodytype)) bodytype = 0;
    if (isNaN(mileage)) mileage = 0;
    if (isNaN(gas)) gas = 0;
    if (isNaN(age)) age = 0;

    var total = brand + model + bodytype + mileage + gas + age;
    $(".total").text("Итоговая стоимость: " + total + " (вкл.НДС)");
}
