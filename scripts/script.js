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
    console.log('hij doet het!!');
    Stuur.classList.add("naarRechts1");
    // Het aanpassen van de p tekst per draai
    // https://en.wikipedia.org/wiki/Super_Mario_Kart
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
    // https://en.wikipedia.org/wiki/Mario_Kart_64
    pElement.textContent = "Mario Kart 64 is a kart racing video game developed and published by Nintendo for the Nintendo 64. It was also released for the iQue Player in China in 2003. The game is the second main entry in the Mario Kart series and is the successor to Super Mario Kart (1992) for the Super Nintendo Entertainment System. The game was first released in Japan on December 14, 1996 and in the United Kingdom on June 24, 1997.";
    marioKart2.classList.toggle("marioTwee");
}

deDerdeMario.addEventListener("click", derdeDraai);

function derdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts3");
    // https://en.wikipedia.org/wiki/Mario_Kart:_Super_Circuit
    pElement.textContent = "Mario Kart: Super Circuit is a kart racing video game developed by Intelligent Systems and published by Nintendo for the Game Boy Advance in 2001. The game is the third main entry in the Mario Kart series and the first for handhelds, following Super Mario Kart (1992) and Mario Kart 64 (1996). The game retains traditional game elements of Mario Kart set by its predecessors, and received critical acclaim upon release.";
    marioKart3.classList.toggle("marioDrie");
}

deVierdeMario.addEventListener("click", vierdeDraai);

function vierdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts4");
    // https://en.wikipedia.org/wiki/Mario_Kart:_Double_Dash
    pElement.textContent = "Mario Kart: Double Dash is a 2003 kart racing video game developed and published by Nintendo for the GameCube. The game is the fourth main entry in the Mario Kart series and the third for home consoles after Mario Kart 64. It was preceded by Mario Kart: Super Circuit for the Game Boy Advance in 2001. It is the first game in the series to use 3D polygon graphics for the racers, as opposed to sprites.";
    marioKart4.classList.toggle("marioVier");
}


deVijfdeMario.addEventListener("click", vijfdeDraai);

function vijfdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts5");
    // https://en.wikipedia.org/wiki/Mario_Kart_DS
    pElement.textContent = "Mario Kart DS is a 2005 kart racing video game developed by Nintendo EAD Group No. 1 and published by Nintendo. It was released for the Nintendo DS handheld game console in November 2005 in North America, Europe, and Australia. The game is the fifth main entry in the Mario Kart series of video games, and the first to be playable via the Nintendo Wi-Fi Connection online service; the service has since been terminated, along with other games playable via the service. Like the other games in the series, Mario Kart DS features characters from the Mario series, and pits them against each other as they race in karts on tracks based on locations in the Mario series.";
    marioKart5.classList.toggle("marioVijf");
}

deZesdeMario.addEventListener("click", zesdeDraai);

function zesdeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts6");
    // https://en.wikipedia.org/wiki/Mario_Kart_Wii
    pElement.textContent = "Mario Kart Wii is a kart racing game developed and published by Nintendo for the Wii. It is the sixth installment in the Mario Kart series, and was released in April 2008. The game features multiple single-player and multiplayer game modes including two to four person split screen. Online multiplayer was supported until the discontinuation of Nintendo Wi-Fi Connection in May 2014. Mario Kart Wii uses the Wii Remote's motion-controls to provide intuitive and conventional steering controls.";
    marioKart6.classList.toggle("marioZes");
}

deZevendeMario.addEventListener("click", zevendeDraai);

function zevendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts7");
    // 
    pElement.textContent = "Mario Kart 7 is a kart racing video game developed by Nintendo EAD in cooperation with Retro Studios and published by Nintendo for the Nintendo 3DS in 2011. As with the previous games in the Mario Kart series, players participate in racing on various Mario-themed tracks, playing as one of seventeen different Mario characters. New additions to the game include hang-gliding attachments for karts, the ability to drive underwater, the ability to drive in first person, and the ability to fully customize the vehicles' build. The game supports online multiplayer for up to eight players.";
    marioKart7.classList.toggle("marioZeven");
}

deAchtsteMario.addEventListener("click", achtsteDraai);

function achtsteDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts8");
    // https://en.wikipedia.org/wiki/Mario_Kart_8
    pElement.textContent = "Mario Kart 8 is a kart racing video game developed and published by Nintendo for the Wii U in May 2014. Mario Kart 8 introduces anti-gravity driving on walls or ceilings, and allows players to bump into each other for a short boost. It has single-player and multiplayer modes, including online via the Nintendo Network. Critics praised its new additions, tracks, graphics, gameplay, but criticized its limited battle mode. It is the best-selling Wii U game, with more than eight million copies sold worldwide. Nintendo continued to release patches and downloadable content, including additional characters, vehicles, and tracks.";
    marioKart8.classList.toggle("marioAcht");
}

deNegendeMario.addEventListener("click", negendeDraai);

function negendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts9");
    // https://en.wikipedia.org/wiki/Mario_Kart_8
    pElement.textContent = "Mario Kart 8 Deluxe, an enhanced version for the Nintendo Switch, was released in April 2017. Critics lauded the expanded battle mode and it became the best-selling Switch game with 48.41 million copies sold. Mario Kart 8 has sold a total of more than 56 million copies on Wii U and Switch, making it the 7th best-selling video game of all time as of November 2022.";
    marioKart9.classList.toggle("marioNegen");
}

deTiendeMario.addEventListener("click", tiendeDraai);

function tiendeDraai() {
    var Stuur = document.querySelector("article img");
    Stuur.classList.add("naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart_Tour
    pElement.textContent = "Mario Kart Tour is a 2019 kart racing mobile game, the fourteenth in the franchise in the Mario Kart series, developed by Nintendo EPD and published by Nintendo for iOS and Android devices. The game was announced in January 2018 and was released on September 25, 2019, on Apple App Store and Google Play. This game features biweekly, downloadable themed tours with different cups, each of which has three courses and a bonus challenge. In addition to courses which have already appeared in the Mario Kart series, Mario Kart Tour includes courses located in world cities (New York, Tokyo, Paris, London, Los Angeles, Berlin, Sydney, Amsterdam, and Bangkok).";
    marioKart10.classList.toggle("marioTien");
}

// deTiendeMario.addEventListener("click", testImg);

// // Functions voor het aanpassen van de afbeeldingen
// function testImg() {

// }