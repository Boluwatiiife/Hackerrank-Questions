// find the midian of any given odd lengthed array.
function find_the_midian(arr){
    let to_sort=function(a,b){
        return a-b;
    }
    let sorteddd=arr.sort(to_sort);
    let answerr=sorteddd[(sorteddd.length-1)/2];
    return answerr;
}
console.log(find_the_midian([0,2,4,6,3]));
console.log(find_the_midian([20,10,22,4,8,9,1,4,7,24,33]));