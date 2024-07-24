// boolean assignments

function dividableValue(a:number):boolean{
  return a % 4 === 0 || a % 6 === 0
}

// func call

console.log(dividableValue(8));

// big Int Assignment

// let bigNum = Number.MAX_SAFE_INTEGER
let bigNum = 9007199254740992n;
// console.log(bigNum);

let anotherBigNum = BigInt("9007199254740995");
// console.log(anotherBigNum);

 let sum = bigNum + anotherBigNum;
 let difference = bigNum - anotherBigNum;
 let multiply = bigNum * anotherBigNum;
 let divide = bigNum / anotherBigNum;

 console.log(sum);
 console.log(difference);
 console.log(multiply);
 console.log(divide);
 
 
