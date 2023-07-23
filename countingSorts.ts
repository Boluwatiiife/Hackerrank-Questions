function countingSort(param:number[]):number[]{
    let zeroArr:number[]=[];//[0,0,0,0]

    let maxInParam:number=Math.max(...param);
    for(let i:number=0;i<=maxInParam;i++){
        zeroArr.push(0);
    }
    for(let x:number=0;x<param.length;x++){
        //console.log(param[x]);
        for(let j:number=0;j<zeroArr.length;j++){
            if(j===param[x]){
                zeroArr[j]=zeroArr[j]+1;
            }
        }
    }
   return zeroArr;
}
console.log(countingSort([1,1,3,2,1]));
