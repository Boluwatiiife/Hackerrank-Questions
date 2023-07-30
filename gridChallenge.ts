function gridChallengee(grid:string[]){
    let alphabets:any=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let indexxx:number[]=[];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            for(let k=0;k<alphabets.length;k++){
                if(grid[i][j]===alphabets[k]){
                    indexxx.push(k);
                }
            }
        }
    }
    console.log(indexxx.length);
    return indexxx;
}
console.log(gridChallengee(['abc','ade','efg']));