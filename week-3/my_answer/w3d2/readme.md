# Deep Sum

```JavaScript
function deepSum (arr) {
    let tampungAngka = 0;
    if(arr.length === 0) {
        return 'No Number'
    } else {
        for(let x = 0; x < arr.length; x++) {
            for(let y = 0; y < arr[x].length; y++) {
                for(let z = 0; z < arr[x][y].length; z++) {
                    tampungAngka += arr[x][y][z];
                }
            }
        }
        return tampungAngka;
    }
}

//TEST CASE
console.log(deepSum([
[
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
],
[
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
],
[
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
]
])); // 316

console.log(deepSum([
[
    [20, 10],
    [15],
    [1, 1]
],
[
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
],
[
    [3, 5, 1],
    [1, 5, 3],
    [1]
],
[
    [2]
]
])); // 156

console.log(deepSum([])); // No number
```

# Most Frequent Largest Numbers

```JavaScript
function sorting(arrNumber) {
    let temp = 0;
    for(let i = 0; i < arrNumber.length-1; i++){
        for(let j = i+1; j < arrNumber.length; j++){
            if(arrNumber[i] > arrNumber[j]){
                temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    let listSort = sorting(arrNumber);

    if(listSort.length === 0) {
        return []
    } else {
        let largeNum = listSort[listSort.length - 1];
        let totLargeNum = 0;
        for(let i = 0; i < listSort.length; i++) {
            if(largeNum === listSort[i]) {
                totLargeNum += 1
            }
        }
        return `angka paling besar adalah ${largeNum} dan jumlah kemunculan sebanyak ${totLargeNum} kali`
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
```

# Melee Ranged

```JavaScript
function splitting(str) {
    if(str === '') {
        return []
    } else {

        // Buat dulu object penampung untuk Hero Name dan Hero Type nya, sesuai tanda koma di tambah .length - 1
        let arrOfObject = [];
        let hero = 0;
    
        for(let i = 0; i < str.length; i++) {
            let hurufSetiapStr = str[i];
    
            if(hurufSetiapStr === ',') {
                arrOfObject.push(hero = {
                    heroName : "",
                    heroType : ""
                })
                hero++;
            } else if(i === str.length - 1) {
    
                arrOfObject.push(hero = {
                    heroName : "",
                    heroType : ""
                });
                hero++;
            }
        };
    
        // Setelah membuat template object kosong seperti diatas, lanjut masukkan nama hero ke index aray.heroName, dan type hero nya ke index array.heroType;
        let indexOfHeroesName = 0; // disiapkan untuk menambah value atau object 
        let indexOfHeroesRole = 'heroName'; // disiapkan untuk mengganti hero Type
    
        for(let j = 0; j < str.length; j++) {
            let hurufSetiapStr = str[j];
    

            if(hurufSetiapStr !== '-' && hurufSetiapStr !== ',') {
                arrOfObject[indexOfHeroesName][indexOfHeroesRole] += hurufSetiapStr
            } else if (hurufSetiapStr === '-') {
                indexOfHeroesRole = 'heroType';
            } else if (hurufSetiapStr === ',') {
                indexOfHeroesName++;
                indexOfHeroesRole = 'heroName';
            }
        };
        return arrOfObject;
    }
};

function meleeRangedGrouping (str) {
    let heroSplit = splitting(str);
    let arrHeroesRole = [[],[]];

    // lakukan pengelompokan sesuai type nya
    
    for(let i = 0; i < heroSplit.length; i++) {
        if(heroSplit[i].heroType === 'Ranged') {
            arrHeroesRole[0].push(heroSplit[i].heroName)
        } else if(heroSplit[i].heroType === 'Melee') {
            arrHeroesRole[1].push(heroSplit[i].heroName)
        }
    }
    return arrHeroesRole;
};

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
[ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
```

# Damage Calculation

```JavaScript
function attack (damage) {
    return damage - 2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    let att = attack(damagePerAttack);
    let totDamagae = numberOfAttacks * att;
    
    return totDamagae;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
```