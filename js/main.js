"use strict"

/*definizione variabili globali*/
const priceForKm = 0.21;
let discount = 0;

/*funzione calcolatrice*/
function myCalc(){
    let userName = document.getElementById('name').value;
    console.log(userName);
    let userKilometers = parseInt(document.getElementById('kilometers').value);
    console.log(userKilometers);
    let userAge = document.getElementById('age').value;
    console.log(userAge);

    let price = userKilometers * priceForKm;

    if(userAge === 'underage'){
        discount = 20;
        price = price - ((price * discount) / 100);
        console.log(price.toFixed(2) + '$' + ' 20% youth discount');
    }else if(userAge === 'over65'){
        discount = 40;
        price = price - ((price * discount) / 100);
        console.log(price.toFixed(2) + '$' + ' 40% discount over 65s');
    }
    else{
        console.log(price.toFixed(2) + '$' + ' no discounts applied')
    }
}

/*funzione di reset*/
function myReset(){
    
}