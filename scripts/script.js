// JavaScript Document
console.log("Howdy!");

var deButton = document.querySelector('button:first-of-type');
var deTweedeButton = document.querySelector('button:nth-of-type(2)');
var imgStuur = document.querySelector('article img');
var stuurDraai = 0

function stuurLinks() {
    imgStuur.classList.add("naarLinks")
}
deTweedeButton.addEventListener("click", stuurLinks);


function stuurRechts() {
    imgStuur.classList.add("naarRechts")
}
deButton.addEventListener("click", stuurRechts);