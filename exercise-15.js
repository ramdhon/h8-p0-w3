//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-15
//----------------------------------------------------------
function groupAnimals(animals) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var i = 0;
    var result = [];
    var temp = [];
    
    while (i < alphabet.length) {
        temp = [];
        for (var j = 0; j < animals.length; j++) {
            if (animals[j][0] === alphabet[i]) {
                temp.push(animals[j]);
            }
        }
        if (temp.length !== 0) {
            result.push(temp);
        }
        i++;
    }
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]