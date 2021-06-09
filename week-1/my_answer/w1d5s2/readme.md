# Laundry Day

- Algoritma
```JavaScript
1. Siapkan wadah tempat mesin cuci
2. Siapkan baju yang akan di laundry
3. Masukan baju laundry satu persatu 
4. Ulangi sampai baju yang dimasukkan berjumlah 20
5. Mesin bisa dinyalakan
```

- Pseudocode
```JavaScript
1. SET i to 0
2. GET i to mesin cuci
3. IF i <= 20
4. INCREAMENT to i = 20
5. READ i = 20
6. TURN ON Mesin Cuci
```

# I Love Coding

```Javascript
//1. Melakukan Looping Menggunakan For

console.log('LOOPING FOR PERTAMA')

var i;
for (i=1;i<=20;i++) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING FOR KEDUA')
var j;
for (j=20; j>=1; j--) {
    console.log(j + ' - I will become fullstack developer');
}

//2. While
console.log('LOOPING FOR PERTAMA')

var i=2;
while(i <=20) {
    console.log(i + ' - I love coding');
    i+=2;
}

console.log('LOOPING FOR KEDUA')

var j=20;
while(j >=2) {
    console.log(j + ' - I will become fullstack developer');
    j-=2;
}
```

# Odd and Even Numbers

```JavaScript
// 1

var i;

for (i=1; i<=100; i+=3) {
    if(i % 2 === 1) {
        console.log(i + ' - ganjil');
    } else {
        console.log(i + ' - genap');
    }
    
}

//2
var i;

for(i=50; i<=200; i+=5) {
    if(i % 3 === 0) {
        console.log(i + ' faktor 3 ');
    } else {
        console.log(i + ' tidak bisa di bagi 3 ');
    }    
}

//3
var i;

for(i=100; i<=200; i+=7) {
    if(i % 8 === 0) {
        console.log(i);
    }
}
```