//^PALIDROMA
//*Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata

function isPalidrama(word){
if(word==reverseWord(word)){
    console.log("questa parola è Palidrama");
    return true
} else {
    console.log("questa parola non è Palidrama")
    return false
}
}

function reverseWord(word){
    let reversedWord = "";
    for(let i = word.length-1; i>=0; i--){
        reversedWord += word[i];
       }
       return reversedWord;
//~altra opzione: => 
//~ reversedWord = [...word].reversed().join("");
}

 //* Pari e Dispari=>
 //* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

 //* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//* Sommiamo i due numeri
//* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//* Dichiariamo chi ha vinto.
