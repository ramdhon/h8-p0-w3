//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-3_Exercise-7
//----------------------------------------------------------

function hitungJumlahKata(kalimat) {
    var kalArr = kalimat.split(" ");
    return kalArr.length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream"));                    // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake"));  // 6
console.log(hitungJumlahKata("A song to sing"));                    // 4
console.log(hitungJumlahKata("I"));                                 // 1
console.log(hitungJumlahKata("I believe I can code"));              // 5