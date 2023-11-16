
//!L'utente inserisce due parole in successione, con due prompt.
//!Il software stampa prima la parola più corta, poi la parola più lunga.

const firstUser = prompt(' utente uno inserisci parola');
const secondUser = prompt('utente due inserisci parola');

const lengthFirstWord= firstUser.length;
console.log(lengthFirstWord);

const lengthSecondWord = secondUser.length;
console.log(lengthSecondWord);

if ( lengthFirstWord > lengthSecondWord){
    console.log(secondUser,firstUser)
}else{
    console.log(firstUser,secondUser)
}