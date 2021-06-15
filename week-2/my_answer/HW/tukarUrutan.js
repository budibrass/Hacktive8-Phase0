let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let karakter = ['`','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';','"',',','.','<','>','/','?'];

let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let tampungKalimat = ''

function tukarBesarKecil(kalimat) {
    for(let i = 0; i < kalimat.length; i++) {
      for(let j = 0; j < upperCase.length; j++) {
        if(kalimat[i] === upperCase[j]) {
          tampungKalimat += kalimat[i].toLowerCase();
        }
      }
      for(let k = 0; k < lowerCase.length; k++) {
        if(kalimat[i] === lowerCase[k]) {
          tampungKalimat += kalimat[i].toUpperCase()
        }
      }

      for (let m = 0; m < karakter.length; m++) {
        if(kalimat[i] === karakter[m]) {
          tampungKalimat += kalimat[i];
        }
      }

      for(let n = 0; n < number.length; n++) {
        if(kalimat[i] === number[n]) {
          tampungKalimat += kalimat[i]
        }
      }
    }
    return tampungKalimat;
};

// TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"