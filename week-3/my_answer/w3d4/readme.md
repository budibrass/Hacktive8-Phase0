# Shoping Time

```JavaScript
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
```

# Toko X

```JavaScript
function countProfit(shoppers) {
    var data = [];
	let listBarang = [
		['Sepatu Stacattu', 1500000, 10],
		['Baju Zoro', 500000, 2],
		['Sweater Uniklooh', 175000, 1],
	];
	if (shoppers.length > 0) {
		for (var item of listBarang) {
			data.push({
				product: item[0],
				shoppers: [],
				leftOver: item[2],
				totalProfit: 0,
			});
		}

		for (var person of shoppers) {
			for (var i = 0; i < data.length; i++) {
				if ( data[i].product === person.product && data[i].leftOver >= person.amount ) {
					data[i].shoppers.push(person.name);
					data[i].leftOver -= person.amount;
					data[i].totalProfit += person.amount * listBarang[i][1];
				}
			}
		}
    }
    return data;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]
```