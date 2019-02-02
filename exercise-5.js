//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-5
//----------------------------------------------------------

function palindrome(kata) {
    kata = kata.toUpperCase();
    for (var index = 0; index < Math.floor(kata.length / 2); index++) {
        if (kata[index] !== kata[kata.length-1-index]) {
            return false;
        }
    }
    return true;
}

// TEST CASE
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false