# Deret Geometri

```JavaScript
function tentukanDeretGeometri(arr) 
{
    let pembagi = arr[1] / arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        //3 9 27 81 di bandingkan dengan 1 3 9 27  lalu diulang sebanyak console yg di masukkan
        if(arr[i] !== arr[i - 1] * pembagi) {
            return false;
        }
    }
    return true;
}
  
  // TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
```

# Target Terdekat

```JavaScript
function targetTerdekat(arr) 
{
    let O = 0;
    let X = [];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] == 'o') {
            O = i
        } else if (arr[i] == 'x') {
            X.push(i);
        }
    }
    
    if (X.length == 0) {
        return 0
    } else {
        if (X[0] > O) {
            return X[0] - O
        } else {
            return O - X[X.length-1]
        }
    }
}
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
```

# Mengelompokkan Angka

```JavaScript
function mengelompokkanAngka(arr) 
{
    let kelipatan = [];
    let ganjil = [];
    let genap = [];
    let hasil = [genap, ganjil, kelipatan];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0){
            kelipatan.push(arr[i])
        } else if (arr[i] % 2 === 0){
            genap.push(arr[i])
        } else if (arr[i] % 2 === 1) {
            ganjil.push(arr[i])
        }
    }
    return hasil;
}
  
  // TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
```