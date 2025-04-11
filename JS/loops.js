

/*ques- for calculating number og digits in a given number*/
let num = prompt("enter the number for checking :");
let size = 0;

for(let i of num){
    console.log("values=",i);
    size++;
}
 console.log("size=",size);
let last;
let sum = 0;
while(num/10!=0){
    last = num%10;
    sum=sum+last;
    num=num/10;

}
console.log("sum is ", sum);
// for in loops used only for objects

// let student = {
//     fullName: "yaman shrma",
//     agr: 20,
//     cgpa : 7.5,
//     isPass : true,
// };
 
// for(let key in student){
//     console.log("keys=",key,"value=",student[key]);
//  }