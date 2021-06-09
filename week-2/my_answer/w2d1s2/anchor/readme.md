# Bandingkan Angka

```JavaScript
let angka1 = 5;
let angka2 = 5;
var angka=0;

if(angka2 > angka1)
{
    console.log(true);
} 
else if(angka2 < angka1)
{
    console.log(false);
}
else
{
    console.log('-1');
}
```

# Konversi Menit

```Javascript
var angka=67;

var menit=Math.floor(angka/60);
var detik=angka%60;

var tmp=0;
if(detik<10)
{
    
    console.log('detik = ' + angka);
    console.log('maka output adalah ' + menit + ':0'+detik);
}
else
{
    console.log('detik = ' + angka);
    console.log('maka output adalah ' + menit + ':'+detik);
};
```

# XO

```JavaScript
var kata='xoxoxo';
let x = [];
let o = [];

for (let i = 0; i < kata.length; i++) {
  if(kata[i] === 'x') {
    x.push(kata[i])
  } else {
    o.push(kata[i])
  }
};

if (x.length === o.length) {
  console.log(true);
} else {
  console.log(false);
};

```