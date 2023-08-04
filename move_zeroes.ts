// given an integer array, move all the 0's to the end while maintaining the relative order of the non-zero elements.

function moveZeroes(nums:number[]):number[]{
    let saveZeroes:number[]=[];

    nums.forEach(element => {
        if(element===0){
            saveZeroes.push(element);
        }
    });
    let removedd=nums.filter((value,index,arr)=>{
        return value>0;
    })
    saveZeroes.forEach(element => {
        removedd.push(element)
    });
    return removedd;
}
console.log(moveZeroes([0,1,0,3,12,0]));
console.log(moveZeroes([0]));