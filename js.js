/*1. Напишите функцию `sumInput()`, которая:
    - Просит пользователя ввести значения, 
    используя текстовое поле `input` и сохраняет их в массив
    - Когда пользователь нажмёт кнопку «Готово»
    - Выводит получившийся массив в отсортированном
    по возрастанию виде
    - Подсчитывает и возвращает сумму элементов массива*/
    /*var str = document.getElementById("numbers")+ ' ';
  var arr = [str];
  var arr = str.split(' ');
  
  arr.sort(function (a, b) {
    return a - b;
});*/
/*let mas = [];
          
            for(i=0;i<=3;i++){
                mas[i]=nums[i].value; // Из инпутов в массив
            }
            arr.sort((a, b) => b - a);
            var result = {};
    var elements = document.forms.foo.getElementsByTagName("input");
    for(var i = 0; i < elements.length; i++)
    {
       /* do whatever you need to do with each input 
    }let number = numbers.split(' ')
    var arr = str.split(' ');*/
    var numbs = document.getElementById('numbers').value;
    var sort = document.getElementById('sort');
    var sum  = document.getElementById('result');
    var button = document.getElementById('button');
    button.onclick = sumInput;
    
    var numbers = [numbs];
    

function sumInput() {
  numbers.sort((a, b) => b - a);
  document.getElementById('result').innerHTML=numbers;}


        
