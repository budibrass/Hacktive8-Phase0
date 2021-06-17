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