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