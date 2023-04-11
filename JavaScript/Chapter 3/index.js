arr=[2,3,4,5,9];

// arr.forEach(element => {
//     console.log(element);
// });

obj={
    harry:98,
    rohan:70,
    raj:97
};
// for ((element in obj){
//     console.log(element," -> ",obj[element]);
// }

// do{
//     num=prompt("Enter Number 50: ");
// }while(num!=50)

let sum=0;
arr.forEach(element => {
    sum+=element;
});
console.log(sum/arr.length);


let name1="Harry";
let name2="Naman";
let name3=name1.concat(name2,"Yes","Hello")
console.log(name3);
