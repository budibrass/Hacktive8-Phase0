/*

ALGORITMA
1. Inisialisasi wadah nama dengan nilai Budi
2. Inisialisasi wadah nilai dengan nilai 95
3. Inisialisasi wadah absen dengan nilai 1
4. Baca nilai dan absen
5. Jika nilai sama dengan diatas 70 dan absen di bawah sama dengan 5
6. Maka kamu dinyatakan LULUS
7. Tapi jika tidak
8. Maka kamu dinyatakan BELUM LULUS

PSEUDOCODE
1. SET nama to 'Budi'
2. SET nilai to 95
3. SET absen to 1
4. READ nilai and absen
5. IF nilai >= 70 && absen <=5
6. PRINT nama and 'LULUS'
7. else
8. PRINT nama and 'BELUM LULUS'
*/


var nama='Budi';
var nilai=95;
var absen=1;

if(nilai >= 70 && absen <=5) {
    console.log('Selamat ' + nama + ' kamu dinyatakan LULUS')
} else {
    console.log('Mohon MAAF ' + nama + ' kamu dinyatakan BELUM LULUS')
}