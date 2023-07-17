function plusMinus(arrrr){
    let positive=[];
    let negative=[];
    let zeroo=[];

    arrrr.forEach(element => {
        if(element>0){
            positive.push(element);
        }
        else if(element<0){
            negative.push(element);
        }
        else if(element===0){
            zeroo.push(element);
        }
    });
    console.log((positive.length/arrrr.length).toFixed(6));
    console.log((negative.length/arrrr.length).toFixed(6));
    console.log((zeroo.length/arrrr.length).toFixed(6));
}
console.log(plusMinus([1,1,0,-1,-1]));