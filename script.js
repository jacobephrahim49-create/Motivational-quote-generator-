async function newQuote(){

const res = await fetch("https://api.quotable.io/random");

const data = await res.json();

document.getElementById("quote").innerText = data.content;

document.getElementById("author").innerText = "- " + data.author;

}

function copyQuote(){

const quote = document.getElementById("quote").innerText;

navigator.clipboard.writeText(quote);

alert("Quote copied!");

}

function shareWhatsApp(){

const quote = document.getElementById("quote").innerText;

window.open("https://wa.me/?text=" + quote);

}

function shareTwitter(){

const quote = document.getElementById("quote").innerText;

window.open("https://twitter.com/intent/tweet?text=" + quote);

}

newQuote();

setInterval(newQuote,10000);
