// given an integer array, move all the 0's to the end while maintaining the relative order of the non-zero elements.
function moveZeroes(nums) {
    var saveZeroes = [];
    nums.forEach(function (element) {
        if (element === 0) {
            saveZeroes.push(element);
        }
    });
    var removedd = nums.filter(function (value, index, arr) {
        return value > 0;
    });
    saveZeroes.forEach(function (element) {
        removedd.push(element);
    });
    return removedd;
}
console.log(moveZeroes([0, 1, 0, 3, 12, 0]));
console.log(moveZeroes([0]));
