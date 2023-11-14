

// ! Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

const listElem = document.querySelector('div.list');

for (let i=1; i<=6; i++){
     const elem=`<h1>${i}</h1>`;
     listElem.innerHTML += elem;


}