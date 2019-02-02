//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-2
//----------------------------------------------------------

function balikString(inpString) {
    endIndex = inpString.length;
    for (var index = endIndex-1; index >= 0; index--) {
        inpString += inpString[index]; //---> mengakses elemen pada index terkini
    }
    inpString = inpString.substr(endIndex);

    return inpString;
}

var input = "hello  world!";
console.log(balikString(input));