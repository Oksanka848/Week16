let sum   = document.getElementById('sum');
let all   = document.getElementById('all');

let small = document.querySelectorAll('.input-small'); 
let numbers = []; // Массив, куда запишутся все значения инпутов

for( let i = 0; i < small.length; i++ ){
  numbers.push( small[i].value ); // (*1)
  
  small[i].addEventListener('input', function(){
    numbers[i] = this.value; 
    // При вводе чисел в любом инпуте, не будем пересобирать все значения, 
    // а только изменим конкретный элемент массива. 
    // this - указывает на инпут, в котором печатают (который запускает эту функцию)

    // Все значения в массиве обновлены, можно обновить и результаты:
    updateResults();
  });
}
updateResults();

/************/

function updateResults(){
  sum.value = sumArr( numbers );
  all.value = numbers.join(', ');
}

function sumArr(arr){
  let x = 0;
  for( let i = 0; i < arr.length; i++ ){
    x += +arr[i]; // (*2)
  }
  return x;
}


/*function sumInput() {
      //res.value = sumArr( numbers );
      //sort.value = numbers.join(', ');}
      /*numbers.sort(function(a, b) {
        return a - b;
      });
     
      let x = 0;
      for( let i = 0; i < sort.length; i++ ){
        x += +sort[i]; // (*2)
      }
      return x;
    }
    
   /* function sumArr(numbers){
      let x = 0;
      for( let i = 0; i < numbers.length; i++ ){
        x += +numbers[i]; // (*2)
      }
      return x;
      *int.sort((a, b) => b - a);
    /*for (int = 0; i < j.length; i++) {
      sum += j[i];
      }
      return sum;*/

      /*document.getElementById('result').innerHTML=i;
    }*/
     /* sum.value = sumArr( numbers );

}
function sumArr(arr){
  let x = 0;
  for( let i = 0; i < arr.length; i++ ){
    x += +arr[i]; // (*2)
  }
  return x;
}*/
var sum=0;
    var arr = [numbers];
    for (var i in arr) {
      sum += arr[i];
          }
          document.getElementById('result').innerHTML=sum;

          for( let i = 0; i < numbs.length; i++ ){
            numbers.push( numbs[i].value );
            
            numbs[i].addEventListener('numbers', function(){
            numbers[i] = this.value;  
            
            });
      }