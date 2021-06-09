// let kalimat='i have a dream'

// let wordCount = kalimat.split(" ");
// let jumlah=wordCount.length;
// console.log(jumlah);
let kalimat = 'i have a dream';
var tempKalimat = 0;
    for(var i = 0; i<kalimat.length;i++){
        if(kalimat[i] == ' '){
            tempKalimat++
        }
    }
console.log(tempKalimat + 1)