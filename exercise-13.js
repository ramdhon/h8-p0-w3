//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-13
//----------------------------------------------------------

function targetTerdekat(arr) {
    var i = 0;
    var distance = 0;
    var firstPosition = [0, "", false];
    var nextPosition = [0, "", false];
    
    while (i < arr.length) {
        if ((!firstPosition[2] || arr[i] === firstPosition[1]) && (arr[i] === "x" || arr[i] === "o")) {
            firstPosition = [i, arr[i], true];
        } else if (firstPosition[2] && (arr[i] === "x" || arr[i] === "o")) {
            nextPosition = [i, arr[i], true];
            if (nextPosition[0] - firstPosition[0] < distance || distance === 0) {
                distance = nextPosition[0] - firstPosition[0];
            }
            firstPosition = nextPosition.slice(0);
        }
        i++;
    }
    return distance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2