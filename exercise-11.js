//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-11
//----------------------------------------------------------

function tentukanDeretAritmatika(arr) {
    var difDefault = Math.abs(arr[0] - arr[1]);
    var booArit = true;
    for (var i = 0; i < arr.length - 1; i++) {    
        if (Math.abs(arr[i] - arr[i+1]) === difDefault) {
            booArit = true;
        } else {
            booArit = false;
        }
    }
    return booArit;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));   // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));    // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8]));         // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54]));       // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9]));   // false