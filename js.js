/*1. Напишите функцию `sumInput()`, которая:
    - Просит пользователя ввести значения, используя текстовое поле `input` и сохраняет их в массив
    - Когда пользователь нажмёт кнопку «Готово»
    - Выводит получившийся массив в отсортированном
    по возрастанию виде
    - Подсчитывает и возвращает сумму элементов массива*/
    let num = document.getElementById("num");
    let result = document.getElementById("result");
    let button = document.getElementById("button");
    button.onclick = sumInput;
let i=0;

sumInput  = () => {
    if ($("#num").val() != "") {
        $("#error").hide();
        $("#error").text("");
        var storedValue = $("#num").val();
        $("#number").show();
        $("#number").text(storedValue);
      } else {
        $("#error").show();
        $("#error").text("Please complete the above field.");
      }
    }
    let n1 = parseInt(document.getElementById("num").value);
document.getElementById("result").innerHTML = (+n1 - +n2);
