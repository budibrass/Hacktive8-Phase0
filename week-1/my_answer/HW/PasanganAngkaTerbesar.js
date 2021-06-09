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