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