// JavaScript Document
console.log("Howdy!");


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

var pElement = document.querySelector("section:nth-of-type(2) p")

var sectionImage = document.querySelector("section:nth-of-type(3) img")
var sectionP = document.querySelector("section:nth-of-type(2) p")

var Stuur = document.querySelector("section:first-of-type img");

var marioKart1 = document.querySelector("section:nth-of-type(3) img");
var marioKart2 = document.querySelector("section:nth-of-type(3) img");
var marioKart3 = document.querySelector("section:nth-of-type(3) img");
var marioKart4 = document.querySelector("section:nth-of-type(3) img");
var marioKart5 = document.querySelector("section:nth-of-type(3) img");
var marioKart6 = document.querySelector("section:nth-of-type(3) img");
var marioKart7 = document.querySelector("section:nth-of-type(3) img");
var marioKart8 = document.querySelector("section:nth-of-type(3) img");
var marioKart9 = document.querySelector("section:nth-of-type(3) img");
var marioKart10 = document.querySelector("section:nth-of-type(3) img");

var Jaartal = document.querySelector("h3");
var h3Element = document.querySelector("h3");




deEersteMario.addEventListener("click", function() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!');
    Stuur.classList.add("naarRechts1");
    Stuur.classList.remove("naarRechts2", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts10");
    // Het aanpassen van de p tekst per draai
    // https://en.wikipedia.org/wiki/Super_Mario_Kart
    pElement.textContent = "Super Mario Kart is a kart racing video game developed and published by Nintendo for the Super Nintendo Entertainment System. The first game of the Mario Kart series, it was released in Japan and North America in 1992, and in Europe the following year in 1993.";
    marioKart1.classList.add("marioEen");
    marioKart1.classList.remove("marioTwee", "marioDrie", "marioVier", "marioVijf", "marioZes", "marioZeven", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "1992";
    h3Element.classList.add("activate");

})




deTweedeMario.addEventListener("click", tweedeDraai);

function tweedeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!2');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts2");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart_64
    pElement.textContent = "Mario Kart 64 is a kart racing video game developed and published by Nintendo for the Nintendo 64. It was also released for the iQue Player in China in 2003. The game is the second main entry in the Mario Kart series and is the successor to Super Mario Kart (1992) for the Super Nintendo Entertainment System. The game was first released in Japan on December 14, 1996 and in the United Kingdom on June 24, 1997.";
    marioKart2.classList.add("marioTwee");
    marioKart2.classList.remove("marioEen", "marioDrie", "marioVier", "marioVijf", "marioZes", "marioZeven", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "1996";
}

deDerdeMario.addEventListener("click", derdeDraai);

function derdeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!! 3');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts3");
    Stuur.classList.remove("naarRechts1", "naarRechts2", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart:_Super_Circuit
    pElement.textContent = "Mario Kart: Super Circuit is a kart racing video game developed by Intelligent Systems and published by Nintendo for the Game Boy Advance in 2001. The game is the third main entry in the Mario Kart series and the first for handhelds, following Super Mario Kart (1992) and Mario Kart 64 (1996). The game retains traditional game elements of Mario Kart set by its predecessors, and received critical acclaim upon release.";
    marioKart3.classList.add("marioDrie");
    marioKart3.classList.remove("marioEen", "marioTwee", "marioVier", "marioVijf", "marioZes", "marioZeven", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "2001";
}

deVierdeMario.addEventListener("click", vierdeDraai);

function vierdeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!4');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts4");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts2", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart:_Double_Dash
    pElement.textContent = "Mario Kart: Double Dash is a 2003 kart racing video game developed and published by Nintendo for the GameCube. The game is the fourth main entry in the Mario Kart series and the third for home consoles after Mario Kart 64. It was preceded by Mario Kart: Super Circuit for the Game Boy Advance in 2001. It is the first game in the series to use 3D polygon graphics for the racers, as opposed to sprites.";
    marioKart4.classList.add("marioVier");
    marioKart4.classList.remove("marioEen", "marioTwee", "marioDrie", "marioVijf", "marioZes", "marioZeven", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "2003";
}


deVijfdeMario.addEventListener("click", vijfdeDraai);

function vijfdeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!5');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts5");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts2", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart_DS
    pElement.textContent = "Mario Kart DS is a 2005 kart racing video game developed by Nintendo EAD Group No. 1 and published by Nintendo. It was released for the Nintendo DS handheld game console in November 2005 in North America, Europe, and Australia. The game is the fifth main entry in the Mario Kart series of video games, and the first to be playable via the Nintendo Wi-Fi Connection online service; the service has since been terminated, along with other games playable via the service.";
    marioKart5.classList.add("marioVijf");
    marioKart5.classList.remove("marioEen", "marioDrie", "marioVier", "marioTwee", "marioZes", "marioZeven", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "2005";
}

deZesdeMario.addEventListener("click", zesdeDraai);

function zesdeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!6');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts6");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts2", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart_Wii
    pElement.textContent = "Mario Kart Wii is a kart racing game developed and published by Nintendo for the Wii. It is the sixth installment in the Mario Kart series, and was released in April 2008. The game features multiple single-player and multiplayer game modes including two to four person split screen. Online multiplayer was supported until the discontinuation of Nintendo Wi-Fi Connection in May 2014. Mario Kart Wii uses the Wii Remote's motion-controls to provide intuitive and conventional steering controls.";
    marioKart6.classList.add("marioZes");
    marioKart6.classList.remove("marioEen", "marioDrie", "marioVier", "marioVijf", "marioTwee", "marioZeven", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "2008";
}

deZevendeMario.addEventListener("click", zevendeDraai);

function zevendeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!7');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts7");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts2", "naarRechts8", "naarRechts9", "naarRechts10");
    // 
    pElement.textContent = "Mario Kart 7 is a kart racing video game developed by Nintendo EAD in cooperation with Retro Studios and published by Nintendo for the Nintendo 3DS in 2011. As with the previous games in the Mario Kart series, players participate in racing on various Mario-themed tracks, playing as one of seventeen different Mario characters. New additions to the game include hang-gliding attachments for karts, the ability to drive underwater and the ability to drive in first person.";
    marioKart7.classList.add("marioZeven");
    marioKart7.classList.remove("marioEen", "marioDrie", "marioVier", "marioVijf", "marioZes", "marioTwee", "marioAcht", "marioNegen", "marioTien");
    Jaartal.textContent = "2011";
}

deAchtsteMario.addEventListener("click", achtsteDraai);

function achtsteDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!8');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts8");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts2", "naarRechts9", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart_8
    pElement.textContent = "Mario Kart 8 is a kart racing video game developed and published by Nintendo for the Wii U in May 2014. Mario Kart 8 introduces anti-gravity driving on walls or ceilings, and allows players to bump into each other for a short boost. It has single-player and multiplayer modes, including online via the Nintendo Network. Critics praised its new additions, tracks, graphics, gameplay, but criticized its limited battle mode. It is the best-selling Wii U game.";
    marioKart8.classList.add("marioAcht");
    marioKart8.classList.remove("marioEen", "marioDrie", "marioVier", "marioVijf", "marioZes", "marioZeven", "marioTwee", "marioNegen", "marioTien");
    Jaartal.textContent = "2014";
}

deNegendeMario.addEventListener("click", negendeDraai);

function negendeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!9');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts9");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts2", "naarRechts10");
    // https://en.wikipedia.org/wiki/Mario_Kart_8
    pElement.textContent = "Mario Kart 8 Deluxe, an enhanced version for the Nintendo Switch, was released in April 2017. Critics lauded the expanded battle mode and it became the best-selling Switch game with 48.41 million copies sold. Mario Kart 8 has sold a total of more than 56 million copies on Wii U and Switch, making it the 7th best-selling video game of all time as of November 2022.";
    marioKart9.classList.add("marioNegen");
    marioKart9.classList.remove("marioEen", "marioDrie", "marioVier", "marioVijf", "marioZes", "marioZeven", "marioAcht", "marioTwee", "marioTien");
    Jaartal.textContent = "2017";
}

deTiendeMario.addEventListener("click", tiendeDraai);

function tiendeDraai() {
    sectionImage.classList.add("activate");
    sectionP.classList.add("activate");
    console.log('hij doet het!!10');
    var Stuur = document.querySelector("section:first-of-type img");
    Stuur.classList.add("naarRechts10");
    Stuur.classList.remove("naarRechts1", "naarRechts3", "naarRechts4", "naarRechts5", "naarRechts6", "naarRechts7", "naarRechts8", "naarRechts9", "naarRechts2");
    // https://en.wikipedia.org/wiki/Mario_Kart_Tour
    pElement.textContent = "Mario Kart Tour is a 2019 kart racing mobile game, the fourteenth in the franchise in the Mario Kart series, developed by Nintendo EPD and published by Nintendo for iOS and Android devices. The game was announced in January 2018 and was released on September 25, 2019, on Apple App Store and Google Play. This game features biweekly, downloadable themed tours with different cups, each of which has three courses and a bonus challenge.";
    marioKart10.classList.add("marioTien");
    marioKart10.classList.remove("marioEen", "marioDrie", "marioVier", "marioVijf", "marioZes", "marioZeven", "marioAcht", "marioNegen", "marioTwee");
    Jaartal.textContent = "2019";
}

// deTiendeMario.addEventListener("click", testImg);

// // Functions voor het aanpassen van de afbeeldingen
// function testImg() {

// }