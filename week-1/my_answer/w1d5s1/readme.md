# Play with String

```JavaScript
// 1. Let's Form a Sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ');

// 2. Index Accessing - 1 by 1
var word2 = 'wow JavaScript is so cool';
var exampleFirstWord = word2[0] + word2[1] + word2[2];
var secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13]; // do your own!
var thirdWord = word2[15] + word2[16]; // do your own!
var fourthWord  = word2[18] + word2[19]; // do your own!
var fifthWord = word2[21] + word2[22] + word2[23] + word2[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// 3. Breaking Sentence (Again) using Substring
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // do your own!
var thirdWord3 = word3.substring(15, 17); // do your own!
var fourthWord3 = word3.substring(18, 20); // do your own!
var fifthWord3 = word3.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// 4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
var dua = secondWord4.length;
var tiga = thirdWord4.length;
var empat = fourthWord4.length;
var lima = fifthWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + dua);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + tiga);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + empat);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + lima);
```

# Cafe Visitation

- Pseudocode
```JavaScript
SET name to Steven 
 SET age to 25
 SET money to 500000
 IF name equals empty
      PRINT to 'Anda tidak boleh masuk'
 ELSE
    IF age < 17
        IF money < jus
            PRINT to 'Uang anda tidak cukup, pulang sana'
        ELSE 
            SET sisa equals money - jus
            PRINT to 'Anda bisa pesan minum, sisa uang anda Rp' + sisa
    ELSE 
        IF money < anggur
            PRINT to 'Uang anda tidak cukup, pulang sana'
        ELSE 
            SET sisa equals money - anggur
            PRINT to 'Anda bisa pesan minum, sisa uang anda Rp' + sisa
    END IF
```

- Code
```Javascript
var name='Steven';
var age='25';
var money=500000;
var jus=50000;
var anggur=300000;

if(!name) {
    console.log('Anda tidak boleh masuk');
} else {
    if(age < 17) {
        //console.log('Silahkan masuk, namun anda hanya boleh memesan jus');//tdk perlu
        //console.log('');
        if(money < jus) {
            console.log('Uang anda tidak cukup, pulang sana')
        } else {
            var sisa = money - jus;
            console.log('Anda bisa pesan minum, sisa uang anda Rp' + sisa);
        }
    } else {
        //console.log('Silahkan masuk, namun anda hanya boleh memesan anggur');//tdk perlu
        //console.log('');
        if(money < anggur) {
            console.log('Uang anda tidak cukup, pulang sana')
        } else {
            var sisa = money - anggur;
            console.log('Anda bisa pesan minum, sisa uang anda Rp' + sisa);
        }
    }
}
```

# Gatcha

- Pseudocode
```JavaScript
SET hasil as int number with any random values within 0 - 5 

PRINT hasil
SWITCH hasil
    case hasil = 1
        PRINT 'coba lagi ya'
        BREAK
    case set to 2
        PRINT 'coba lagi ya'
        BREAK
    case set to 3
        PRINT 'coba lagi ya'
        BREAK
    case set to 4
        PRINT 'coba lagi ya'
        BREAK
    case set to 5
        PRINT 'coba lagi ya'
END SWITCH CASE
```

- Code
```JavaScript
var hasil = Math.floor(Math.random() * 5);
console.log(hasil);
switch (hasil) {
    case 1 :
        console.log('coba lagi ya');
        break;
    case 2:
        console.log('selamat kamu mendapatkan kupon sebanyak 5');
        break;
    case 3 :
        console.log('selamat kamu mendapatkan kupon sebanyak 15');
        break;
    case 4 :
        console.log('selamat kamu mendapatkan kupon sebanyak 50');
        break;
    case 5 :
        console.log('WOW, kamu menang jackpot! Selamat');
}
```