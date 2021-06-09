angka=23;
    // init variables
let nextAngka = angka + 1;
let palindrome = false;
  
while (palindrome === false) 
{
    let stringNextAngka = String(nextAngka);
    let stringNextAngkaPalindrome = "";
  
    //  lakukan perulangan untuk mengulang angka sebanyak length
    for (let i = stringNextAngka.length - 1; i >= 0 ; i--)  {
      stringNextAngkaPalindrome += stringNextAngka[i];
    }
  
    // Deteksi apakah palindrome atau bukan
    if (stringNextAngkaPalindrome === stringNextAngka)  {
      palindrome = true;
    } else {
      nextAngka ++
    }
}
console.log(nextAngka);