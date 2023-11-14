// ! Scrivo in console i primi 20 numeri, scrivendoli a due a due. es. 0, 2, 4, 6 ...


const listElem = document.querySelector('div.list');

for (let i=0; i<=10; i++){
     const elem=`<h1>${i*2}</h1>`;
     listElem.innerHTML += elem;


}