# Pasangan Angka Terbesar

```JavaScript
function panggil(num) 
{
    var angka = String(num);
    var p = angka.length;
    var maks = Number(angka[0]+angka[1]);
    for (var i = 1; i < p-1; i++) {
      if (maks < Number(angka[i]+angka[i+1])) {
        maks = Number(angka[i]+angka[i+1]);
      }
    }
    return maks;
  }
  
  console.log(panggil(641573)); // 73
  console.log(panggil(12783456)); // 83
  console.log(panggil(910233)); // 91
  console.log(panggil(79918293)); // 99
```

# Ubah Huruf

```Javascript
var kata='i love javascript';
console.log(kata.length);
var x = "";
for(var i = 0; i <= kata.length - 1; i++) 
{
    if (kata[i] === 'a') 
    {
      x += '$';
    } 
    else if (kata[i] === 'i') 
    {
      x += '$';
    }
    else if (kata[i] === 'u') 
    {
      x += '$';
    }
    else if (kata[i] === 'e') 
    {
      x += '$';
    }
    else if (kata[i] === 'o') 
    {
      x += '$';
    }
    else { x += kata[i];
    }
    console.log(x[i]);
}
console.log(x);
```