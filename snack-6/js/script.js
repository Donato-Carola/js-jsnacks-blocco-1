
/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby 
(createlo voi con almeno 5 nomi), 
chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.*/

const arrayName = ['mario', 'gigino','topolino', 'paperino', 'pippo'];



const inputUser = document.querySelector("button");

let found=false;

inputUser.addEventListener("click",
function(){
const nameUser = document.querySelector('input').value
for (let i=0; i<arrayName.length;i++){
    const name=arrayName[i];
    console.log(name);
    if(nameUser == name){
        found = true;
        console.log(`nome trovato ${nameUser}`)
    }
}

if(found ) {
    console.log('nome non trovato');

}


})
