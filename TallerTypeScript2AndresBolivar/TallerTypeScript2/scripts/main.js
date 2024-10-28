import { data } from './data.js';
// 1. cómo se referencian los objetos del DOM desde el código TS
var seriesTbody = document.getElementById('series');
var promedio = document.getElementById('promedio');
var card = document.getElementById('card');
renderSeriesInTable(data);
promedio.innerHTML = "Seasons average: ".concat(calcularPromedio(data));
var breackingBad = document.getElementById("1");
var orange = document.getElementById("2");
var got = document.getElementById("3");
var bbt = document.getElementById("4");
var sherlock = document.getElementById("5");
var ves = document.getElementById("6");
breackingBad.onclick = function () { return displayCardBreackingBad(); };
orange.onclick = function () { return displayCardOrange(); };
got.onclick = function () { return displayCardGot(); };
bbt.onclick = function () { return displayCardBbt(); };
sherlock.onclick = function () { return displayCardSherlock(); };
ves.onclick = function () { return displayCardVes(); };
// 2. cómo se crean nuevos elementos HTML
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight:bold;\">".concat(serie.id, "</td>\n                           <td style=\"color:#1E90FF;\" id = \"").concat(serie.id, "\">").concat(serie.name, "</td>\n                           <td >").concat(serie.channel, "</td>\n                           <td >").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedio(series) {
    console.log("Calculando promedio");
    var totalSeasons = 0;
    var seasonsCount = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return seasonsCount = seasonsCount + 1; });
    var nPromedio = totalSeasons / seasonsCount;
    return nPromedio;
}
function displayCardBreackingBad() {
    var serie = data[0];
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"./img/BreackingBad.png\" class=\"card-img-top\" alt=\"Foto\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                    </div>\n                    </div>");
}
function displayCardOrange() {
    var serie = data[1];
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"./img/Orange.png\" class=\"card-img-top\" alt=\"Foto\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                    </div>\n                    </div>");
}
function displayCardGot() {
    var serie = data[2];
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"./img/Got.png\" class=\"card-img-top\" alt=\"Foto\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                    </div>\n                    </div>");
}
function displayCardBbt() {
    var serie = data[3];
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"./img/Bbt.png\" class=\"card-img-top\" alt=\"Foto\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                    </div>\n                    </div>");
}
function displayCardSherlock() {
    var serie = data[4];
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"./img/Sherlock.png\" class=\"card-img-top\" alt=\"Foto\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                    </div>\n                    </div>");
}
function displayCardVes() {
    var serie = data[5];
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"./img/Ves.png\" class=\"card-img-top\" alt=\"Foto\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                    <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                    </div>\n                    </div>");
}
