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


deEersteMario.addEventListener("click", function() {
    sectionImage.classList.toggle("activate");
    sectionP.classList.toggle("activate");
    console.log('holy shit hij doet het!!');
    Stuur.classList.add("naarRechts1");
    // Het aanpassen van de p tekst per draai
    pElement.textContent = "Mario";
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
}

deDerdeMario.addEventListener("click", derdeDraai);

function derdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts3");
    pElement.textContent = "3";
}

deVierdeMario.addEventListener("click", vierdeDraai);

function vierdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts4");
    pElement.textContent = "4";
}


deVijfdeMario.addEventListener("click", vijfdeDraai);

function vijfdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts5");
}

deZesdeMario.addEventListener("click", zesdeDraai);

function zesdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts6");
}

deZevendeMario.addEventListener("click", zevendeDraai);

function zevendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts7");
}

deAchtsteMario.addEventListener("click", achtsteDraai);

function achtsteDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts8");
}

deNegendeMario.addEventListener("click", negendeDraai);

function negendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts9");
}

deTiendeMario.addEventListener("click", tiendeDraai);

function tiendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts10");
}
deTiendeMario.addEventListener("click", testImg);

// Functions voor het aanpassen van de afbeelingen
function testImg() {
    var marioKart10 = document.querySelector("section:nth-of-type(2) img");
    marioKart10.classList.toggle("test");
}









// deEersteMario.addEventListener("dblclick", eersteDraai);

// function eersteDraai() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts1");
// }


// deTweedeMario.addEventListener("dblclick", tweedeDraaiLinks);

// function tweedeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts2");
// }

// deDerdeMario.addEventListener("dblclick", derdeDraaiLinks);

// function derdeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts3");
// }

// deVierdeMario.addEventListener("dblclick", vierdeDraaiLinks);

// function vierdeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts4");
// }


// deVijfdeMario.addEventListener("dblclick", vijfdeDraaiLinks);

// function vijfdeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts5");
// }

// deZesdeMario.addEventListener("dblclick", zesdeDraaiLinks);

// function zesdeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts6");
// }

// deZevendeMario.addEventListener("dblclick", zevendeDraaiLinks);

// function zevendeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts7");
// }

// deAchtsteMario.addEventListener("dblclick", achtsteDraaiLinks);

// function achtsteDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts8");
// }

// deNegendeMario.addEventListener("dblclick", negendeDraaiLinks);

// function negendeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts9");
// }

// deTiendeMario.addEventListener("dblclick", tiendeDraaiLinks);

// function tiendeDraaiLinks() {
//     var Stuur = document.querySelector("article img");
//     Stuur.classList.add("naarRechts10");
// }