// arr=[];
// let n;
// // n=prompt("Enter the size of array: ");
// let i=0;
// while(true)
// {
//     let x=prompt(`Enter element ${i+1} :`);
//     arr.push(x);
//     if(x==0)
//     break;
//     i++;
// }
// console.log(arr);


let arr=[3,30,40,23,43,65,80];
console.log(arr.filter(function check(element){ return element%10==0;}));

let newarr=[];
arr.forEach(element => {
    newarr.push(element*element);
});
console.log(newarr)

let num=[1,2,3,4,5];
let factorial=num.reduce(function(a,b){
    return a*b;
});
console.log(num);
console.log(`factorial of ${num.length} is ${factorial}`);
