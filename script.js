//^PALIDROMA
//*Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
//chiedi ad user di dirti parola finchè contenuto non è vuoto. 
let userWord;
do {
userWord = prompt("inserisci la parola desiderata");
} while (userWord.trim()=="")

//dare esecuzione alla funzione
isPalidrama(userWord);


function isPalidrama(word){
if(word == reverseWord(word)){
    console.log("questa parola è Palidrama");
    display("questa parola è palidrama");
    return true
} else {
    console.log("questa parola non è Palidrama")
    display("questa parola non è Palidrama");
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


 //^ Pari e Dispari=>
 //* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

 //* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//* Sommiamo i due numeri
//* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//* Dichiariamo chi ha vinto (utente vince se la somma è pari);

//chiedi all'utente di inserire il numero sempre finchè non inserisce il numero richiesto. 
let userChoice;
do {
userChoice = +prompt("inserisci il numero tra 1 e 5");
} while (typeof userChoice != "number" || userChoice<=1 || userChoice >=5)

let computerChoice = generateRandom(1,5);
winner(sumNumbers(userChoice,computerChoice));


function display(text){
let container = document.querySelector(".container");
let element =document.createElement(`h1`);
element.textContent = text;
container.append(element);
}


function winner(sum){
//~ pari(sum) returns true se pari, false se dispari

  if(pari(sum)){
console.log("Hai vinto!");
result = "Hai vinto!"
display(result);
   return true
 } else {
console.log("hai perso");
result= "Hai perso!"
display(result);
   return false
 }
}

function pari(number){
return number%2==0 ? true:false;
}

function sumNumbers(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum
}

function generateRandom(start,end){
let randomNumber = Math.floor(Math.random()*(end-start+1) + start); 
return randomNumber;
}
