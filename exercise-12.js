//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-12
//----------------------------------------------------------

function tentukanDeretGeometri(arr) {
    var divDefault = arr[1] / arr[0];
    var booGeo = true;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] / arr[i] === divDefault) {
            booGeo = true;
        } else {
            booGeo = false;
        }
    }
    return booGeo;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));      // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));      // true
console.log(tentukanDeretGeometri([2, 4, 6, 8]));           // false
console.log(tentukanDeretGeometri([2, 6, 18, 54]));         // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));     // false