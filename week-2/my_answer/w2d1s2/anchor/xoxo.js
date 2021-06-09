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
