# Shape Of I

```JavaScript
let num = 11

if (num > 4 && num < 10) {
    for (let j = 0; j < num; j++) {
    
        let tmp = ''
        for (let i = 0; i < num; i++) {
            if (j === 0) {
                tmp += '#'
            } else if (j === num - 1 ) {
                tmp += '#'
            } else if (num % 2 === 0) {
                let a = num / 2;
                if(i === a) {
                    tmp += '|'
                } 
                if (i === a - 1) {
                    tmp += "|"
                } else {
                    tmp += " "
                }
            } else if (num % 2 !== 0) {
                let a = num / 2 - 0.5;
                if (i === a) {
                    tmp += "|"
                } else {
                    tmp += " "
                }
            }
        }
        console.log(tmp);
    }   
} else {
    console.log(`invalid number`);
}
```