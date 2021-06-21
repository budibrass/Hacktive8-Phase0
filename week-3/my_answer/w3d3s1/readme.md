# Change Me

```JavaScript
function changeMe(arr) {
    if(arr.length === 0 ) {
        return ""
    } else {

        let yearNow = 2021;
        let tmp = []
        let idx = 0;
    
        for (let i = 0; i < arr.length; i++) {
            tmp.push(
                idx = {
                    firstName : '',
                    lastName : '',
                    gender : '',
                    age: ''
                }
            )
            idx++;
        };
    
        for (let j = 0; j < arr.length; j++) {
            for(let m = j; m < 2; m++) {
                tmp[m].firstName = arr[j][0]
                tmp[m].lastName = arr[j][1]
                tmp[m].gender = arr[j][2]
    
                if(arr[j][3]) {
                    tmp[m].gender = yearNow - arr[j][3]
                } else {
                    tmp[m].age = 'Invalid Birth Year';
                }
            }
        };
    
        console.log(tmp);
    }
};

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
```