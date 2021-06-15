let dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function urutkanAbjad(str) {
    let tmp = ''

    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(str[j] === dictionary[i]) {
                tmp += str[j]
            }
        }
    }
    console.log(tmp);
};
  
  // TEST CASES
  urutkanAbjad('hello'); // 'ehllo'
  urutkanAbjad('truncate'); // 'acenrttu'
  urutkanAbjad('developer'); // 'deeeloprv'
  urutkanAbjad('software'); // 'aeforstw'
  urutkanAbjad('aegis'); // 'aegis'