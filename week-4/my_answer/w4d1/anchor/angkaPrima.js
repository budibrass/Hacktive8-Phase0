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