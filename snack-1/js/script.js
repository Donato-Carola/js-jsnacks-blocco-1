
//chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande


const firstAge = parseInt(prompt('inserisci gli anni della prima persona'));
const secondAge = parseInt(prompt('inserisci gli anni della prima persona'));

if (firstAge > secondAge) {
    
    console.log('First age è più grande');
}else if (secondAge>firstAge ){
    console.log('Secondage è più grande');

}else{
    console.log('eta sono uguali');
}
