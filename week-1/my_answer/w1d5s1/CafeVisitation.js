//PSEUDOCODE
//  SET name to Steven 
//  SET age to 25
//  SET money to 500000
//  IF name equals empty
//       PRINT to 'Anda tidak boleh masuk'
//  ELSE
//       IF age < 17
//            
//                 IF money < jus
//                    PRINT to 'Uang anda tidak cukup, pulang sana'
//                 ELSE 
//                    SET sisa equals money - jus
//                    PRINT to 'Anda bisa pesan minum, sisa uang anda Rp' + sisa
//       ELSE 
//           
//                 IF money < anggur
//                    PRINT to 'Uang anda tidak cukup, pulang sana'
//                 ELSE 
//                    SET sisa equals money - anggur
//                    PRINT to 'Anda bisa pesan minum, sisa uang anda Rp' + sisa
//  END IF


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