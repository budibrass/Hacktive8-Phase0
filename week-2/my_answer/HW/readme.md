# Urutkan Abjad

```JavaScript
let dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function urutkanAbjad(str) {
    let tmp = ''

    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(str[j] === dictionary[i]) {
                tmp += str[j]
            }
        }
    }
    console.log(tmp);
};
  
  // TEST CASES
  urutkanAbjad('hello'); // 'ehllo'
  urutkanAbjad('truncate'); // 'acenrttu'
  urutkanAbjad('developer'); // 'deeeloprv'
  urutkanAbjad('software'); // 'aeforstw'
  urutkanAbjad('aegis'); // 'aegis'
```

# Tukar Ukuran

```JavaScript
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
```

# Sort

```JavaScript
// Release 0 => Sorting Num
function sorting(arr){
    let temp = 0;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            // Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ];

// Release 1 => Sorting By Type Data
function sortingByType(array) {
    let dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let tmpString = [];
    let tmpNum = [];
    let tmpBool = [];
    let tmpAll = [];

    // cek semua type data dan masukkan ke masing - masing array kosong
    for (let i = 0; i < array.length; i++) {
        if(typeof(array[i]) === 'number') {
            tmpNum.push(array[i])
        } else if(typeof(array[i]) === 'string') {
            tmpString.push(array[i])
        } else {
            tmpBool.push(array[i])
        } 
    }

    // mengurutkan array bertipe number
    let num = 0;
    for(let m = 0; m < tmpNum.length-1; m++){
        for(let j = m+1; j < tmpNum.length; j++){
            if(tmpNum[m] > tmpNum[j]){
                num = tmpNum[m];
                tmpNum[m] = tmpNum[j];
                tmpNum[j] = num;
            }
        }
    };

    // mengurutkan array bertipe String

    let idx1 = 0;
    let idx2 = 0;
    for(let x = 0; x < tmpString.length; x++) {
       for(let y = 0; y < dictionary.length; y++) {
            if(tmpString[0][0] === dictionary[y]) {
                idx1 = dictionary.indexOf(dictionary[y])
            }
            if(tmpString[1][0] === dictionary[y]) {
                idx2 = dictionary.indexOf(dictionary[y])
            }
       }
    }

    if(idx1 > idx2) {
        tmpString.push(tmpString[0]);
        tmpString.shift(tmpString[0])
    }

    // mengurutkan array bertipe boolena
    for(let z = 0; z < tmpBool.length; z++) {
        if(tmpBool.length > 1) {
            if(tmpBool[z] === false) {
                tmpBool.unshift(tmpBool[z]);
                tmpBool.pop(tmpBool.indexOf(tmpBool[z] - 1));
            }
        }
    };

    tmpAll.push(tmpNum, tmpString, tmpBool)
    return tmpAll;
};

console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]

// Release 3 =>  sorting data yang tidak diinginkan seperti null, undefined, NaN dan array kosong dengan menghapus data aneh tersebut dari array sebelum di sortir
function sortAllClean(array) {
    let dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let tmpString = [];
    let tmpNum = [];
    let tmpBool = [];
    let tmpAll = [];
    let tmpEtc = [];

    // cek semua type data dan masukkan ke masing - masing array kosong
    for (let i = 0; i < array.length; i++) {
        if(array[i] === undefined || array[i] === 'def' || array[i] === Number(NaN) || array[i] === null || array[i].length === 0 || typeof(array[i]) === "object") {
            tmpEtc.push(array[i])
        }
        if(typeof(array[i]) === 'number') {
            if(array[i] === array[i]) {
                tmpNum.push(array[i])
            }
        } else if(typeof(array[i]) === 'string') {
            tmpString.push(array[i])
        } else if(typeof(array[i]) === 'boolean'){
            tmpBool.push(array[i])
        } 
    }

    // mengurutkan array bertipe number
    let num = 0;
    for(let m = 0; m < tmpNum.length-1; m++){
        for(let j = m+1; j < tmpNum.length; j++){
            if(tmpNum[m] > tmpNum[j]){
                num = tmpNum[m];
                tmpNum[m] = tmpNum[j];
                tmpNum[j] = num;
            }
        }
    };

    // mengurutkan array bertipe String

    let idx1 = 0;
    let idx2 = 0;
    for(let x = 0; x < tmpString.length; x++) {
       for(let y = 0; y < dictionary.length; y++) {
            if(tmpString[0][0] === dictionary[y]) {
                idx1 = dictionary.indexOf(dictionary[y])
            }
            if(tmpString[1][0] === dictionary[y]) {
                idx2 = dictionary.indexOf(dictionary[y])
            }
       }
    }

    if(idx1 > idx2) {
        tmpString.push(tmpString[0]);
        tmpString.shift(tmpString[0])
    }

    // mengurutkan array bertipe boolena
    for(let z = 0; z < tmpBool.length; z++) {
        if(tmpBool.length > 1) {
            if(tmpBool[z] === false) {
                tmpBool.unshift(tmpBool[z]);
                tmpBool.pop(tmpBool.indexOf(tmpBool[z] - 1));
            }
        }
    };

    tmpAll.push(tmpNum, tmpString, tmpBool)
    return tmpAll;
}

console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([ NaN, undefined ])); // []

```