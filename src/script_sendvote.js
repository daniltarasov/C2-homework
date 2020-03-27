const btn_cats = document.querySelector('.btn-cats');
const btn_parrots = document.querySelector('.btn-parrots');
const btn_dogs = document.querySelector('.btn-dogs');

function sendVote (animal){
    fetch(`https://sf-pyw.mosyag.in/sse/vote/${animal}`, 
        {
        method: 'POST',
        mode: 'no-cors',
        })
    console.log(`проголосовано за ${animal}`)
    }

btn_parrots.onclick = function () {
      sendVote("parrots");  
}

btn_cats.onclick = function () {
      sendVote("cats");  
}

btn_dogs.onclick = function () {
      sendVote("dogs"); 
}

