// 1

var i;

for (i=1; i<=100; i+=3) {
    if(i % 2 === 1) {
        console.log(i + ' - ganjil');
    } else {
        console.log(i + ' - genap');
    }
    
}

//2
var i;

for(i=50; i<=200; i+=5) {
    if(i % 3 === 0) {
        console.log(i + ' faktor 3 ');
    } else {
        console.log(i + ' tidak bisa di bagi 3 ');
    }    
}

//3
var i;

for(i=100; i<=200; i+=7) {
    if(i % 8 === 0) {
        console.log(i);
    }
}