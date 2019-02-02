//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-4
//----------------------------------------------------------

function dataHandling2(inpArr) {
    var tmpArr = 0;
    var tmpArrSort = 0;
    var tmpArrStr = "";
    // inpArr[1] += "Elsharawy";
    inpArr.splice(1, 1, "Roman Alamsyah Elsharawy");
    // inpArr[2] = "Provinsi ".concat(inpArr[2]);
    inpArr.splice(2, 1, "Provinsi Bandar Lampung");
    inpArr.pop();
    inpArr.push("Pria");
    inpArr.push("SMA Internasional Metro");
    console.log(inpArr);
    
    tmpArr = inpArr[3].split("/");
    switch (tmpArr[1]) {
        case "01":
            console.log("Januari");
            break;
        case "02":
            console.log("Februari");
            break;
        case "03":
            console.log("Maret");
            break;
        case "04":
            console.log("April");
            break;
        case "05":
            console.log("Mei");
            break;
        case "06":
            console.log("Juni");
            break;
        case "07":
            console.log("Juli");
            break;
        case "08":
            console.log("Agustus");
            break;
        case "09":
            console.log("September");
            break;
        case "10":
            console.log("Oktober");
            break;
        case "11":
            console.log("November");
            break;
        case "12":
            console.log("Desember");
            break;
        default:
            console.log("Invalid");
            break;
    }
    
    tmpArrSort = tmpArr.slice();
    tmpArrSort.sort(function(value1, value2) { return value2 - value1 });
    console.log(tmpArrSort);

    tmpArrStr = tmpArr.join("-");
    console.log(tmpArrStr);

    console.log(inpArr[1].slice(0,15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */