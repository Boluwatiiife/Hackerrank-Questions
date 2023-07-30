function superDigitss(n:string,k:number):number{
    let arrOfNum=Array.from(String(n),Number);
    let firstt:number[]=[];
    let sumOfFirstt:number=0;
    let sumOfSecond:number=0;
    let sumOfThirdd:number=0;

    for(let i=0;i<arrOfNum.length;i++){
        firstt.push(arrOfNum[i]*k);
    }
    for(let j=0;j<firstt.length;j++){
        sumOfFirstt=sumOfFirstt+firstt[j];
    }
    let secondd=Array.from(sumOfFirstt.toString()).map(Number);
    for(let k=0;k<secondd.length;k++){
        sumOfSecond=sumOfSecond+secondd[k];
    }
    let thirdd=Array.from(sumOfSecond.toString()).map(Number);
    for(let x=0;x<thirdd.length;x++){
        sumOfThirdd=sumOfThirdd+thirdd[x];
    }
    return sumOfThirdd;
}
console.log(superDigitss('148',3));
console.log(superDigitss('9875',4));
console.log(superDigitss('123',3));