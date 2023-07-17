//code to find the mini and maxi values that can be calculated by summing exactly four of five integers.

function miniMax(arrayy){
    let newArray=arrayy.sort();

    let mini=newArray[0]+newArray[1]+newArray[2]+newArray[3];
    let maxi=newArray[4]+newArray[1]+newArray[2]+newArray[3];
    
    return `${mini}, ${maxi}`;
}

console.log(miniMax([7,69, 2 ,221 ,8974]))