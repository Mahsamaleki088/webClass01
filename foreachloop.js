

let sum = 0;
let numbers = [65, 44, 12, 4,10];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = sum;

//let item;
function myFunction(item) {
  sum += item;
  console.log(sum);
 }
