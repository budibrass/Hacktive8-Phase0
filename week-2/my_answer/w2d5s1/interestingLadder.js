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