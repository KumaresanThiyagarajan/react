/*var a;// declaration
a = 10;
var a = 20 ;
console.log(a)
let b ;
b = 30;
b= 40;
cpnsole.log(b)
const c =20;
console.log(c)
function sum(){
    comsole.log("Hi this is normal function")
}
var sum1 = () =>{
    console.log("This is arrow function")
}
sum();
sum1();
var num = 5;
var result = (5 === 5.0);
console.log(result)

//spread operator

var arr = [10,20,30];
var arr1  = [...arr,40];
console.log(arr);
console.log(arr1);

var marks = [005,88];
var[m1,m2,m3,m4,m5] = marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
*/
// map
var arr = [1,2,3,4,5];
var double = arr.map(num => num*2)
console.log(double);
// fiilter,

var odd = double.filter(double =>double >5)
console.log(odd);

//reduce

var total = odd.reduce((val,odd) => val + odd,0);
console.log(total)