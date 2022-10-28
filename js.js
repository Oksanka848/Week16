/*1. Напишите функцию `sumInput()`, которая:
    - Просит пользователя ввести значения, 
    используя текстовое поле `input` и сохраняет их в массив
    - Когда пользователь нажмёт кнопку «Готово»
    - Выводит получившийся массив в отсортированном
    по возрастанию виде
    - Подсчитывает и возвращает сумму элементов массива*/
    
/*let mas = [];
          
            for(i=0;i<=3;i++){
                mas[i]=nums[i].value; // Из инпутов в массив
            }
            var result = {};
    var elements = document.forms.foo.getElementsByTagName("input");
    for(var i = 0; i < elements.length; i++)
    {
       /* do whatever you need to do with each input 
    }*/
window.onload = init;

function init() {
  let button = document.getElementById('button');
  button.onclick = sumInput;
}
let numbers = document.getElementById("numbers");
    
function sumInput() {

  const str = document.getElementById("numbers");
  const chars = str.split('');
  
  for (var inputs of numbers) {
    numbers.push(Number(numbers.value));
  }

  return numbers;

  }
  document.getElementById("result").innerHTML= numbers;
 