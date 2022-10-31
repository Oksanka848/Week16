/*1. Напишите функцию `sumInput()`, которая:
    - Просит пользователя ввести значения, 
    используя текстовое поле `input` и сохраняет их в массив
    - Когда пользователь нажмёт кнопку «Готово»
    - Выводит получившийся массив в отсортированном
    по возрастанию виде
    - Подсчитывает и возвращает сумму элементов массива*/
    
    let button = document.getElementById('button');
    button.onclick = sumInput;
    let numbs = document.getElementById('numbers').value;
    let result  = document.getElementById('result');
    let numbers = [];
    
   

 
        function sumInput() {
            let numbs = document.getElementById("numbers").value;
            numbers = numbs.split(',');
            result = numbers.reduce(sumInput2, 0);
            console.log(numbers);
            let sort=numbers.sort((a, b) => a - b);
            console.log(sort);
            let sort2 = sort.join(", ");
            document.getElementById('sort').value=sort2;
            
            
        }
 
        function sumInput2(total, value) {
            return total + +value;
            document.getElementById('result').innerHTML=sumInput2(total, value);
        }