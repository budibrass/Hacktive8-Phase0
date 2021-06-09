# Triangle

```JavaScript
let num = 5

for (let i = 1; i <= num; i++) {
    let hasil = ""
    for(let s = 1; s <= num - i; s++) {
        // console.log(s, `<<<<<<<< s`);
        hasil += " "
    };

    for (let j = 1; j <= i + (i - 1); j++) {
        // console.log(j, `<<<<<<<<< j`);
        if(j % 2 ===0) {
            hasil += 'O'
        } else {
            hasil += 'X'
        }
    }
    console.log(hasil);
};
```