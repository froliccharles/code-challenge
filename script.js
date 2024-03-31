function swapCase(inputString) {
    let characters = inputString.split('');
    let swappedCharacters = characters.map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    });
    return swappedCharacters.join('');
}

let inputString = "The Quick Brown Fox";
console.log(swapCase(inputString));
