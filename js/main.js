"use strict"

/*definizione variabili globali*/
const priceForKm = 0.21;
let discount = 0;

/*funzione calcolatrice*/
function myCalc(){
    let userName = document.getElementById('name').value;
    document.getElementById('userName').innerHTML = userName;
    let userKilometers = parseInt(document.getElementById('kilometers').value);
    let userAge = document.getElementById('age').value;

    let price = userKilometers * priceForKm;

    if(userAge === 'underage'){
        discount = 20;
        price = price - ((price * discount) / 100);
        document.getElementById('userOffer').innerHTML = 'Underage Ticket';
        document.getElementById('userCarriage').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById('userCpCode').innerHTML = Math.floor(Math.random() * 99999);
        document.getElementById('userPrice').innerHTML = price.toFixed(2) + ' $';
    }else if(userAge === 'over65'){
        discount = 40;
        price = price - ((price * discount) / 100);
        document.getElementById('userOffer').innerHTML = 'Over 65 Ticket';
        document.getElementById('userCarriage').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById('userCpCode').innerHTML = Math.floor(Math.random() * 99999);
        document.getElementById('userPrice').innerHTML = price.toFixed(2) + ' $';
    }
    else{
        document.getElementById('userOffer').innerHTML = 'Standard Ticket';
        document.getElementById('userCarriage').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById('userCpCode').innerHTML = Math.floor(Math.random() * 99999);
        document.getElementById('userPrice').innerHTML = price.toFixed(2) + ' $';
    }
}

/*funzione di reset*/
function myReset(){

    document.getElementById('name').value = '';
    document.getElementById('kilometers').value = '';

    document.getElementById('userName').innerHTML = '- - - - - - - -';
    document.getElementById('userOffer').innerHTML = '- - - -';
    document.getElementById('userCarriage').innerHTML = '- - - -';
    document.getElementById('userCpCode').innerHTML = '- - - -';
    document.getElementById('userPrice').innerHTML = '- - - -';
}