let kata = 'budi';
//console.log(typeof kata)

if(typeof kata === 'string') {
    console.log(`username ${kata}`)
} else if (typeof kata === 'number') {
    if(kata===0) {
        console.log(`invalid data ${kata}`)
    } else {
        console.log(`age ${kata}`)
    }
} else if (typeof kata === 'boolean') {
    if(kata==='true') {
        console.log(`thank you for agreeing`)
    } else {
        console.log(`cannot proceed without agreement`)
    }
} else {
    console.log(`invalid data`)
}
