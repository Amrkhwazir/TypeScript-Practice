// boolean assignments
function dividableValue(a) {
    return a % 4 === 0 || a % 6 === 0;
}
// func call
console.log(dividableValue(8));
// big Int Assignment
// let bigNum = Number.MAX_SAFE_INTEGER
var bigNum = 9007199254740992n;
// console.log(bigNum);
var anotherBigNum = BigInt("9007199254740995");
// console.log(anotherBigNum);
var sum = bigNum + anotherBigNum;
var difference = bigNum - anotherBigNum;
var multiply = bigNum * anotherBigNum;
var divide = bigNum / anotherBigNum;
console.log(sum);
console.log(difference);
console.log(multiply);
console.log(divide);
