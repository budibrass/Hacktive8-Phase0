# Angka Prima

```JavaScript
function angkaPrima(angka) 
{
    if (angka > 1) {
        if (angka == 2 || angka ==3){
            return true
        } else if (angka % 2 !== 0 && angka % 3 !== 0 && angka % angka == 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
  
  // TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
```

# Cari Median

```JavaScript
function cariMedian(arr) 
{
    if (arr.length % 2 == 1) {
        let bilangan = Math.floor(arr.length / 2);
        return arr[bilangan]
    } else {
        let bilangan = Math.floor(arr.length / 2);
        let cari =  (arr[bilangan] + arr[bilangan - 1]) / 2;
        return cari
    }
}
  
  // TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
```

# Cari Modus

```JavaScript
function cariModus(arr) 
{
    let modus = ''
    let total = 0
    for (var i = 0; i < arr.length; i++) {
        let counter = 0
        for (var j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
              counter++
          }
        }

        if (counter > total) {
          total = counter
          modus = arr[i]
        }
      }
      
      if (total === arr.length || total === 1) {
        modus = -1
      }
    
      return modus
}
  
  // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

```