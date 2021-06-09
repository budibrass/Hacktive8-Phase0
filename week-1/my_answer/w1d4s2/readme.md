# Grade Students

```JavaScript
var nilai=100;
var nama='Budi';

if(nilai >= 0 && nilai <= 34) {
    console.log(nama + ' Kamu mendapatkan nilai ' + 'E')
} else if(nilai >= 35 && nilai <= 49) {
    console.log(nama + ' Kamu mendapatkan nilai ' + 'D')
} else if(nilai >= 50 && nilai <= 64) {
    console.log(nama + ' Kamu mendapatkan nilai ' + 'C')
} else if(nilai >= 65 && nilai <= 79) {
    console.log(nama + ' Kamu mendapatkan nilai ' + 'B')
} else if(nilai >= 80 && nilai <= 100) {
    console.log(nama + ' Kamu mendapatkan nilai ' + 'A')
} else {
    console.log(nama + ' mohon maaf ' + 'Nilai Invalid')
}
```

# Graduates

- Algoritma
```JavaScript
ALGORITMA
1. Inisialisasi wadah nama dengan nilai Budi
2. Inisialisasi wadah nilai dengan nilai 95
3. Inisialisasi wadah absen dengan nilai 1
4. Baca nilai dan absen
5. Jika nilai sama dengan diatas 70 dan absen di bawah sama dengan 5
6. Maka kamu dinyatakan LULUS
7. Tapi jika tidak
8. Maka kamu dinyatakan BELUM LULUS
```

- Pseudocode
```JavaScript
PSEUDOCODE
1. SET nama to 'Budi'
2. SET nilai to 95
3. SET absen to 1
4. READ nilai and absen
5. IF nilai >= 70 && absen <=5
6. PRINT nama and 'LULUS'
7. else
8. PRINT nama and 'BELUM LULUS'
```

- Code
```Javascript
var nama='Budi';
var nilai=95;
var absen=1;

if(nilai >= 70 && absen <=5) {
    console.log('Selamat ' + nama + ' kamu dinyatakan LULUS')
} else {
    console.log('Mohon MAAF ' + nama + ' kamu dinyatakan BELUM LULUS')
};
```