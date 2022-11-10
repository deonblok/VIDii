// JavaScript Document
console.log("Howdy!");

// var deButton = document.querySelector('button:first-of-type');
// var deTweedeButton = document.querySelector('button:nth-of-type(2)');
// var imgStuur = document.querySelector('article img');
// var stuurDraai = 0

// function stuurLinks() {
//     imgStuur.classList.add("naarLinks")
// }
// deTweedeButton.addEventListener("click", stuurLinks);


// function stuurRechts() {
//     imgStuur.classList.add("naarRechts")
// }
// deButton.addEventListener("click", stuurRechts);


// Variabelen voor elke button image
var deEersteMario = document.querySelector('ol li:first-of-type button img');
var deTweedeMario = document.querySelector('ol li:nth-of-type(2) button img');
var deDerdeMario = document.querySelector('ol li:nth-of-type(3) button img');
var deVierdeMario = document.querySelector('ol li:nth-of-type(4) button img');
var deVijfdeMario = document.querySelector('ol li:nth-of-type(5) button img');
var deZesdeMario = document.querySelector('ol li:nth-of-type(6) button img');
var deZevendeMario = document.querySelector('ol li:nth-of-type(7) button img');
var deAchtsteMario = document.querySelector('ol li:nth-of-type(8) button img');
var deNegendeMario = document.querySelector('ol li:nth-of-type(9) button img');
var deTiendeMario = document.querySelector('ol li:nth-of-type(10) button img');

var pElement = document.querySelector("section:first-of-type p")

var sectionImage = document.querySelector("section:nth-of-type(2) img")
var sectionP = document.querySelector("section:first-of-type p")

var Stuur = document.querySelector("article img");

var marioKart1 = document.querySelector("section:nth-of-type(2) img");
var marioKart2 = document.querySelector("section:nth-of-type(2) img");
var marioKart3 = document.querySelector("section:nth-of-type(2) img");
var marioKart4 = document.querySelector("section:nth-of-type(2) img");
var marioKart5 = document.querySelector("section:nth-of-type(2) img");
var marioKart6 = document.querySelector("section:nth-of-type(2) img");
var marioKart7 = document.querySelector("section:nth-of-type(2) img");
var marioKart8 = document.querySelector("section:nth-of-type(2) img");
var marioKart9 = document.querySelector("section:nth-of-type(2) img");
var marioKart10 = document.querySelector("section:nth-of-type(2) img");


deEersteMario.addEventListener("click", function() {
    sectionImage.classList.toggle("activate");
    sectionP.classList.toggle("activate");
    console.log('holy shit hij doet het!!');
    Stuur.classList.add("naarRechts1");
    // Het aanpassen van de p tekst per draai
    pElement.textContent = "Super Mario Kart is a kart racing video game developed and published by Nintendo for the Super Nintendo Entertainment System. The first game of the Mario Kart series, it was released in Japan and North America in 1992, and in Europe the following year in 1993.";
    marioKart1.classList.toggle("marioEen");
})


// deEersteMario.addEventListener("click", eersteDraai);
// // Functions voor het draaien van het stuur per uitgebrachte Mario Kart game
// function eersteDraai() {
//     Stuur.classList.add("naarRechts1");
//     // Het aanpassen van de p tekst per draai
//     pElement.textContent = "Mario";
// }

deTweedeMario.addEventListener("click", tweedeDraai);

function tweedeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts2");
    pElement.textContent = "luigi";
    marioKart2.classList.toggle("marioTwee");
}

deDerdeMario.addEventListener("click", derdeDraai);

function derdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts3");
    pElement.textContent = "3";
    marioKart3.classList.toggle("marioDrie");
}

deVierdeMario.addEventListener("click", vierdeDraai);

function vierdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts4");
    pElement.textContent = "4";
    marioKart4.classList.toggle("marioVier");
}


deVijfdeMario.addEventListener("click", vijfdeDraai);

function vijfdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts5");
    pElement.textContent = "5";
    marioKart5.classList.toggle("marioVijf");
}

deZesdeMario.addEventListener("click", zesdeDraai);

function zesdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts6");
    pElement.textContent = "6";
    marioKart6.classList.toggle("marioZes");
}

deZevendeMario.addEventListener("click", zevendeDraai);

function zevendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts7");
    pElement.textContent = "7";
    marioKart7.classList.toggle("marioZeven");
}

deAchtsteMario.addEventListener("click", achtsteDraai);

function achtsteDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts8");
    pElement.textContent = "8";
    marioKart8.classList.toggle("marioAcht");
}

deNegendeMario.addEventListener("click", negendeDraai);

function negendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts9");
    pElement.textContent = "9";
    marioKart9.classList.toggle("marioNegen");
}

deTiendeMario.addEventListener("click", tiendeDraai);

function tiendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts10");
    pElement.textContent = "10";
    marioKart10.classList.toggle("marioTien");
}

// deTiendeMario.addEventListener("click", testImg);

// // Functions voor het aanpassen van de afbeeldingen
// function testImg() {

// }