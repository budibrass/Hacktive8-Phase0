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
  