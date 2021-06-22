function shoppingTime(memberId, money) {
    let uang = money;
    let barang = {
        memberId: memberId,
        money: money,
        listpurchased : [],
        changeMoney: uang
    };

    const shopes = [
        { name : 'Sepatu Stacattu', harga : 1500000 },
        { name : 'Baju Zoro', harga : 500000 },
        { name : 'Baju H&N', harga : 250000 },
        { name : 'Sweater Uniklooh', harga : 175000 },
        { name : 'Casing Handphone', harga : 50000 }
    ];

    if(memberId === '') {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    } else if(money < 49000) {
        return `Mohon maaf, uang tidak cukup`
    } else if(memberId === undefined && money === undefined) {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    } else {    
        for (let i = 0; i < shopes.length; i++) {
            if(uang >= shopes[i].harga) {
                uang -= shopes[i].harga
                barang.listpurchased.push(shopes[i].name)
                barang.changeMoney = uang
            }
        };
    
        return barang;
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  