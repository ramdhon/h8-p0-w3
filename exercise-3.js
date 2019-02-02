//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-3
//----------------------------------------------------------

function dataHandling(inpArr) {
    arrId = ["Nomor ID: ", "Nama Lengkap: ", "TTL: ", "", "Hobi: "] // arrId[3] kosong karena konten [2] dan [3] pada indexY jadi satu penjelasan, yaitu "TTL"
    for (var indexX = 0; indexX < inpArr.length; indexX++) {
        for (var indexY = 0; indexY < inpArr[indexX].length; indexY++) {
            if (indexY == 2) {
                console.log(arrId[indexY] + inpArr[indexX][indexY] + " " + inpArr[indexX][indexY+1]);
                indexY++;
            } else {
                console.log(arrId[indexY] + inpArr[indexX][indexY]);
            }
        }
        console.log();
    } 
    
    return 0;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);