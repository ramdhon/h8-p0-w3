//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-13
//----------------------------------------------------------

function targetTerdekat(arr) {
    var resultDist = 0;
    var i = 0;
    var j = 0;

    while (i < arr.length-1) {
        if (arr[i] === "x") {
            for (var j = i; j < arr.length; j++) {
            
            }
        } else if (arr[i] === "o") {
            j = i;
            while (j < arr.length) {
                resultDist++;
                if (arr[j] === "x") {
                    
                } else if (arr[j]) {
                    
                } else {
                    j++;
                }
            }
        } else {
            i++
        }
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2