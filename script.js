/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */




// Dichiara la funzione qui.
function saluta (mario)  {
   return `Ciao ${mario}`;
}



// Invoca la funzione qui e stampa il risultato in console
const userName = 'Mario';



// Invoca la funzione qui e stampa il risultato in console
const risultato = saluta(userName);
console.log(risultato);


//Risultato atteso se si passa 'Mario': // ciao Mario
