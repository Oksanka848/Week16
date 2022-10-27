/*1. Напишите функцию `sumInput()`, которая:
    - Просит пользователя ввести значения, 
    используя текстовое поле `input` и сохраняет их в массив
    - Когда пользователь нажмёт кнопку «Готово»
    - Выводит получившийся массив в отсортированном
    по возрастанию виде
    - Подсчитывает и возвращает сумму элементов массива*/
    /*et num = document.getElementById("num");
    let result = document.getElementById("result");
    let button = document.getElementById("button");
    button.onclick = sumInput;
let i=0;


document.getElementById("result").innerHTML = result;

let num = document.getElementById("num");
let masnum = str.split (' ');
let result = document.getElementById("result");*/
    /*let button = document.getElementById("button");
    button.onclick = sumInput;
    function sumInput() {
      let num = document.getElementById("num");
      console.log(typeof num);
      let mas = num.split (' ');
      console.log(mas);
      mas.sort(function (a, b) {
          return a - b;
});
document.getElementById("result").innerHTML= (mas);
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
    }*/
    window.onload = init;

function init() {
  let button = document.getElementById('button');
  button.onclick = sumInput;
}
        sumInput = () => {
    let mas = document.getElementById("num")[0];
    mas = mas.toString().split (',');
    
    
   
    mas.sort(function (a, b) {
      return a - b;
});
    document.getElementById("result").innerHTML= mas;
  }