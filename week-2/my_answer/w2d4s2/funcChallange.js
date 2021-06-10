// 1. Antrian
let people = ['upin', 'ipin']

function antrian (line, person ) {
    line.push(person)
};

antrian(people, 'susi');
console.log(people, `<<<<<< hasil function antrian`);

// 2. Panggil Antrian
function panggil (line) {
    line.shift()
};

panggil(people);
console.log(people, `<<<<<< hasil function panggil`);

//  3. Tumpukan
function tumpukan (line, title) {
    line.unshift(title)
};

tumpukan(people, 'udin');
console.log(people, `<<<<<< hasil function tumpukan`);

//  4. Ganjil Genap
let ganjil = [];
let genap = [];
let angkaAkhir = 0;

function ganjilGenap(plat) {
    if (plat === undefined) {
        console.log(`invalid data`);
    } else if (plat.length < 1) {
        console.log(`plat tidak ditemukan`);
    } else {
        for (let i = 1; i <= plat.length; i++) {
            angkaAkhir = Number(plat[plat.length - 1])
            if(plat[i] === ';') {
                let angka = Number(plat[i - 1])
                if(angka % 2 === 0) {
                    genap.push(plat[i - 1])
                } else {
                    ganjil.push(plat[i - 1])
                }
            }
        }
    
        if(angkaAkhir % 2 === 0) {
            genap.push(angkaAkhir)
        } else {
            ganjil.push(angkaAkhir)
        }
    } 

    if (ganjil.length && genap.length){
        console.log(`plat genap sebanyak ${genap.length} dan plat ganjil sebanyak ${ganjil.length}`);
    } else if (ganjil.length && genap.length === 0) {
        console.log(`plat ganjil sebanyak ${ganjil.length} dan plat genap tidak ditemukan`);
    } else if (ganjil.length === 0 && genap.length) {
        console.log(`plat genap sebanyak ${genap.length} dan plat ganjil tidak ditemukan`);
    } 
};

(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
// (ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
// (ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// ganjilGenap('') //plat tidak ditemukan
// ganjilGenap() //invalid data