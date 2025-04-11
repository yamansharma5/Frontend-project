// ques 1
// let n = prompt("enter the number ")
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
    
// }

// game : enter a valur a in the memory and  input numbers from the user and user keep guessing the number until the correct number number with only 3 chances

let correctNum = 21;
let cm = 22;
let userNum = prompt("guess the number :");

while(userNum != correctNum){
    userNum = prompt("wrong number enter again :");
}
console.log("congratulations!! you Won");