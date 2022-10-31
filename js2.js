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


    for( let i = 0; i < numbs.length; i++ ){
      numbers.push( numbs[i].value );
      small[i].addEventListener('input', function(){
        numbers[i] = this.value; 
        console.log(numbers);
        
      });
    }  
    console.log(numbers);
function sumInput() {

  result.value=numbers.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  all.value = numbers.join(', ');
  document.getElementById('result').innerHTML=result;
  document.getElementById('result').innerHTML=all.value;
}

