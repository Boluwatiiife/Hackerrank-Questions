function superDigitss(n, k) {
    var arrOfNum = Array.from(String(n), Number);
    var firstt = [];
    var sumOfFirstt = 0;
    var sumOfSecond = 0;
    var sumOfThirdd = 0;
    for (var i = 0; i < arrOfNum.length; i++) {
        firstt.push(arrOfNum[i] * k);
    }
    for (var j = 0; j < firstt.length; j++) {
        sumOfFirstt = sumOfFirstt + firstt[j];
    }
    var secondd = Array.from(sumOfFirstt.toString()).map(Number);
    for (var k_1 = 0; k_1 < secondd.length; k_1++) {
        sumOfSecond = sumOfSecond + secondd[k_1];
    }
    var thirdd = Array.from(sumOfSecond.toString()).map(Number);
    for (var x = 0; x < thirdd.length; x++) {
        sumOfThirdd = sumOfThirdd + thirdd[x];
    }
    return sumOfThirdd;
}
console.log(superDigitss('148', 3));
console.log(superDigitss('9875', 4));
console.log(superDigitss('123', 3));
