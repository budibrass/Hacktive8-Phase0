# Vocal Seeker

```JavaScript
let board = [
  ['*', '*', '*', 10],
  ['*', '*', -5, -10, '*', 100],
  ['a', 'A', 'o', 'b']
]

function vocalSeeker(arrMulti) {
    let vokal = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];
    let tampungKarakter = ''
    let tampungVokal = ''

    for(let i = 0; i < arrMulti.length; i++) {
        for(let j = 0; j < arrMulti[i].length; j++) {
            tampungKarakter += arrMulti[i][j];
        }
    }

    for(let a = 0; a < vokal.length; a++) {
        for (let b = 0; b < tampungKarakter.length; b++) {
            if(tampungKarakter[b] === vokal[a]) {
                tampungVokal += tampungKarakter[b]
            }
        }
    }
    
    console.log(tampungVokal);
}

vocalSeeker(board); // vokal ditemukan 3 dan kumpulan vokal adalah aAo
```

# Sitting Arrangement

```JavaScript
function sittingArrangement(person, column) {
    let kolom = []

    if(column < 1) {
        console.log('Invalid Number');
    } else {
        for (let i = 0; i < person.length; i += column) {
            let baris = [];
            for (let j = i; j < i + column; j++) {
                if(person[j] === undefined) {
                    baris.push('kursi kosong')
                } else {
                    baris.push(person[j])
                }
            }
            kolom.push(baris);
        }
        console.log(kolom);
    }
};

//DRIVER CODE

sittingArrangement(['A', 'B', 'C'], 0 ); //Invalid number
sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4);
// // [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]
```