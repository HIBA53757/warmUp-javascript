const temperatures = [-5, 10, 22, 34];

function celsius(celsius) {
    return celsius * 9 / 5 + 32;
}

function decrireTemp(celsius) {
    if (celsius < 10) {
        return "Froid";
    } else if (celsius <= 25) {
        return "Doux";
    } else {
        return "Chaud";
    }
}

console.log(celsius(22));
console.log(celsius(-5));
console.log(decrireTemp(-5));
console.log(decrireTemp(10));
console.log(decrireTemp(34));