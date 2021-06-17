function attack (damage) {
    return damage - 2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    let att = attack(damagePerAttack);
    let totDamagae = numberOfAttacks * att;
    
    return totDamagae;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90