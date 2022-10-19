//Validate functions
function AnLetter(input) { //verify is the letter ingresed by user length = 1
    if (input.length == 1) {
        return true
    }
    return false
}

function Search(input, word) {
    const value = word.find(e => e == input)
    if (!value) {
        return 'La letra no se encuentra en la palabra secreta'
    }
    return `la letra ${input} se encuentra en la palabra secreta`
}

exports.module = {
    AnLetter,
    Search
}