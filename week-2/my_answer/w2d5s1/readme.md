# Slice

```JavaScript
let hewan = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let tampungHewan = ''
let tampungData = []

function slice(data, start, end) {
    if(start && end) {
        for (let i = start; i < end; i++) {
            tampungData.push(data[i])
        }
    } else if(start) {
       for (let i = start; i < data.length; i++) {
           tampungData.push(data[i])
       }
    } else if (start > data.length) {
        tampungData = []
    } else {
        for (let i = 0; i < data.length; i++) {
            tampungData.push(data[i])
        }
    }
    console.log(tampungData);
};

slice(hewan, 2);
```

# Interesting Ladder - Array Multidimensi

```JavaScript
let kata = 'hacktiv8';
let arr2 = [];

function ladder(word) {

    for (let j = 0; j < word.length; j++) {
        let arr1 = [];
        for(let i = 0; i < word.length - j; i++) {
            arr1.push(word[i])
        }
        arr2.push(arr1)
    }
    console.log(arr2);
};

ladder(kata);
```