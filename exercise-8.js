//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-8
//----------------------------------------------------------

function pasanganTerbesar(num) {
    var numTmp = num;
    var result = 0;
    while (numTmp !== 0) {
        if (numTmp % 100 > result) {
            result = numTmp % 100;
        }
        numTmp = Math.floor(numTmp / 10);
    }
    return result
}

// TEST CASES
console.log(pasanganTerbesar(641573));      // 73
console.log(pasanganTerbesar(12783456));    // 83
console.log(pasanganTerbesar(910233));      // 91
console.log(pasanganTerbesar(71856421));    // 85
console.log(pasanganTerbesar(79918293));    // 99