// 
// SET hasil as int number with any random values within 0 - 5 
// 
// PRINT hasil
// SWITCH hasil
//         case hasil = 1
//             PRINT 'coba lagi ya'
//             BREAK
//         case set to 2
//             PRINT 'coba lagi ya'
//             BREAK
//         case set to 3
//             PRINT 'coba lagi ya'
//             BREAK
//         case set to 4
//             PRINT 'coba lagi ya'
//             BREAK
//         case set to 5
//             PRINT 'coba lagi ya'
// END SWITCH CASE

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