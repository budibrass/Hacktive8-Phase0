# Data Type Challenge

```JavaScript
let kata = 'budi';
//console.log(typeof kata)

if(typeof kata === 'string') {
    console.log(`username ${kata}`)
} else if (typeof kata === 'number') {
    if(kata===0) {
        console.log(`invalid data ${kata}`)
    } else {
        console.log(`age ${kata}`)
    }
} else if (typeof kata === 'boolean') {
    if(kata==='true') {
        console.log(`thank you for agreeing`)
    } else {
        console.log(`cannot proceed without agreement`)
    }
} else {
    console.log(`invalid data`)
}
```

# Hitung Jumlah Kata

```JavaScript
let kalimat = 'i have a dream';
var tempKalimat = 0;
    for(var i = 0; i<kalimat.length;i++){
        if(kalimat[i] == ' '){
            tempKalimat++
        }
    }
console.log(tempKalimat + 1)
```

# Palindrome

```JavaScript
let kata = 'katak';
let tmp = ''

for (let i = kata.length - 1; i >= 0; i--) {
    tmp = tmp + kata[i];
} if(kata === tmp) {
    console.log(true)
} else (
    console.log(false)
);
```

# Palindrome Angka

```JavaScript
angka=23;
    // init variables
let nextAngka = angka + 1;
let palindrome = false;
  
while (palindrome === false) 
{
    let stringNextAngka = String(nextAngka);
    let stringNextAngkaPalindrome = "";
  
    //  lakukan perulangan untuk mengulang angka sebanyak length
    for (let i = stringNextAngka.length - 1; i >= 0 ; i--)  {
      stringNextAngkaPalindrome += stringNextAngka[i];
    }
  
    // Deteksi apakah palindrome atau bukan
    if (stringNextAngkaPalindrome === stringNextAngka)  {
      palindrome = true;
    } else {
      nextAngka ++
    }
}
console.log(nextAngka);
```

