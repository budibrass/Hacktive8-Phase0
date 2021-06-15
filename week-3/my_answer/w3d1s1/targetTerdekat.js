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