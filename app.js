
const { AnLetter, Search } = require('./validate')

const wordsToFind = [
    'cat',
    'elephant',
    'horse',
    'dinosaur',
    'bear',
    'giraffe'
]

let inputLetterUser = '';
const buttonSEND = document.querySelector('#buttonShow')
const fieldCapture = document.querySelector('#field')

buttonSEND.addEventListener('click', () => {
    let tester = AnLetter(fieldCapture.value) ? inputLetterUser = tester : 'El argumento debe tener solo una letra'
})

// *****GAME******
// const word = RandomWord()

// const value = AnLetter(fieldCapture)

// if (value) {
//     const valueReturn = Search(value ,word)

//     console.log(valueReturn)
// }
// ***************

//Random function
function RandomWord() {
    const random = wordsToFind[Math.floor(Math.random() * wordsToFind.length)]
    return random
}



