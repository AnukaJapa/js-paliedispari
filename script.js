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
       //console.log(reversedWord);
       return reversedWord;
}
