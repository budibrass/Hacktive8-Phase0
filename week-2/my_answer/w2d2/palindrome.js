let kata = 'katak';
let tmp = ''

for (let i = kata.length - 1; i >= 0; i--) {
    tmp = tmp + kata[i];
} if(kata === tmp) {
    console.log(true)
} else (
    console.log(false)
);