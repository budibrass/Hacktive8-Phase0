//1. Menyusun Barisan Bintang

var i;

for(i=0; i<5; i++)
{
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var angka=5;

for(var i=0; i<angka; i++)
{
    var bintang='';
    for(var j=0; j< angka; j++)
    {
        bintang+= '*';
    }
    console.log(bintang)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var panjang = 5;

for (i=0; i<=panjang; i++)
{
    var hasil='';

    for(j=0; j<i; j++)
    {
        hasil+= '*';
        // console.log(hasil[j]);
    }
    console.log(hasil);
}

//4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
var panjang = 5;

for (i=panjang; i>0; i--)
{
    var hasil='';

    for(j=0; j<i; j++)
    {
        hasil+= '*';
        // console.log(hasil[j]);
    }
    console.log(hasil);
}