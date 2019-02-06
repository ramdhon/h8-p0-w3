//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-2
//----------------------------------------------------------

function balikString(inpString) {
    var outString = "";
    for (var index = inpString.length - 1; index >= 0; index--) {
        outString += inpString[index]; //---> mengakses elemen pada index terkini
    }
    return outString;
}

var input = "hello  world!";
console.log(balikString(input));