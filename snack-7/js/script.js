
// !Snack A:
//Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

//? Creo un array vuoto

const array = [];
const number = document.getElementById('number');
const numberOrder = document.getElementById('numberOrder');

//? Chiedere all'utente i 6 numeri
for (let i=1; i<=6;i++){
const numberUser = prompt(`inserisci numero ${i}`);
console.log(numberUser);
if(numberUser % 2 === 1){
    array.push(numberUser);
    console.log(`numeri dispari in disordine: ${array}`);
    number.innerHTML = `numeri dispari in disordine: ${array}`;
    array.sort();
    console.log(`numeri dispari in ordine: ${array}`);
    numberOrder.innerHTML = `numeri dispari in ordine: ${array}`;
}





}



