function superDigits(n,k){
    let numArr=[];
    let arr=[];
    let summ=0;

    [...n].forEach(element=>{ //to separate the integers
        numArr.push(element);
    });
    numArr.forEach(element => { // to convert the string integer into number.
        arr.push(parseInt(element));
    });

    arr.forEach(element => { // to sum up the integer.
       summ=summ+element; 
    });
    let newSumm=summ*k;
    let strSum=newSumm.toString();
    let stringArr=[];
    [...strSum].forEach(element => {
        stringArr.push(element);
    });
    let numArrayy=[];
    stringArr.forEach(element => {
        numArrayy.push(parseInt(element));
    });
    let finalAnswer=0;
    numArrayy.forEach(element => {
        finalAnswer=finalAnswer+element; 
     });
     return finalAnswer;
}

console.log(superDigits('123',3));