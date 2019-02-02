//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-6
//----------------------------------------------------------

function angkaPalindrome(num) {
    var numStr = String(num);
    var numArr = []; 
    var amanPal = true; 
    var countNine = 0; 
    var result = "";
    for (var index = 0; index < numStr.length; index++) {
        numArr.push(Number(numStr[index]));
        if (numArr[index] === 9) {
            countNine++;
        }
    }

    if (countNine === numArr.length) {
        numArr.unshift(0);
    }

    numArr[numArr.length - 1]++;
    for (index = numArr.length - 1; index >= 1; index--) {
        if (Math.floor(numArr[index] / 10) !== 0) {
            numArr[index - 1] += Math.floor(numArr[index] / 10);
            numArr[index] = numArr[index] % 10;
        }
    }

    for (index = Math.ceil(numArr.length / 2); index < numArr.length; index++) {
        if (numArr[index] <= numArr[numArr.length - 1 - index]) {
            numArr[index] = numArr[numArr.length - 1 - index];
        } else if (numArr[index] > numArr[numArr.length - 1 - index]) {
            numArr[index] = numArr[numArr.length - 1 - index];
            amanPal = false;
        }
    }
    

    if (!(amanPal)) {
        if (numArr.length % 2 === 0) {
            numArr[Math.floor(numArr.length / 2) - 1]++;
        } else {
            numArr[Math.floor(numArr.length / 2)]++;
        }
        
        for (index = Math.floor(numArr.length / 2); index >= 1; index--) {
            numArr[index - 1] += Math.floor(numArr[index] / 10);
            numArr[index] = numArr[index] % 10;
            if (numArr.length - 1 - index >= index) {
                numArr[numArr.length - 1 - index] = numArr[index];
                numArr[numArr.length - index] = numArr[index - 1];
            }
        }
    }
    for (index = 0; index < numArr.length; index++) {
        result += numArr[index];
    }
    result = Number(result);
    return result;
}

// TEST CASE
console.log(angkaPalindrome(8));      // 9
console.log(angkaPalindrome(10));     // 11
console.log(angkaPalindrome(117));    // 121
console.log(angkaPalindrome(175));    // 181
console.log(angkaPalindrome(1000));   // 1001