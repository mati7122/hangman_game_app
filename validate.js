//Validate functions
function AnLetter(input) { //verify is the letter ingresed by user length = 1
    if (input.length == 1) {
        return true
    }
    return false
}

//Search - search the user letter in the secret word
// function Search(letter, word) {
//     let alert = ''
//     const value = word.find(e => e == letter)
//     value
//         ? alert = { msg: `la letra ${letter} se encuentra en la palabra secreta`, state: true }
//         : alert = { msg: 'La letra no se encuentra en la palabra secreta', state: false }
//     return alert;
// }

const alerts = {
    success: {
        msg: `la letra se encuentra en la palabra secreta`,
        state: true
    },
    failed: {
        msg: 'La letra no se encuentra en la palabra secreta',
        state: false
    }
}

//Filters to verify letter joined by user
//First filter: Verifica si la letra ah sido ingresada anteriormente
//Second filter: Verifica si la letra se encuentra en la palabra secreta
function FilterLetter(letter, array) {
    let result;
    const res = array.find(e => e == letter)
    res
        ? result = alerts.success
        : result = alerts.failed
    return result
}
//Third filter: Si la letra se encuentra dentro la palabra secreta, colocamos este
//dato en el array de letras correctas
//Si la letra no se encuentra dentro de la palabra secreta arrojamos un error y pasamos ese dato al array de letras ya ingresadas
function FilterLetterInsert(letter, array, arrayMod) {
    const result = array.find(e => e == letter)
    result
        ? arrayMod.push(letter)
        : (
            () => {
                console.log('La letra no se encuentra dentro la palabra secreta!')
                arrayMod.push(letter)
            }
        )()
}