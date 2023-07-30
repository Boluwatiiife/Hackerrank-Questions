function gridChallengee(grid) {
    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var indexxx = [];
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            for (var k = 0; k < alphabets.length; k++) {
                if (grid[i][j] === alphabets[k]) {
                    indexxx.push(k);
                }
            }
        }
    }
    console.log(indexxx.length);
    return indexxx;
}
console.log(gridChallengee(['abc', 'ade', 'efg']));
