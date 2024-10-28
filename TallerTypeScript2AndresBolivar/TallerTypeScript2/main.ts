
import { Serie } from './serie.js';

import { data } from './data.js';

// 1. cómo se referencian los objetos del DOM desde el código TS
let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedio: HTMLElement = document.getElementById('promedio')!;
let card: HTMLElement = document.getElementById('card')!;

renderSeriesInTable(data);
promedio.innerHTML = `Seasons average: ${calcularPromedio(data)}`;

let breackingBad: HTMLElement = document.getElementById("1")!;
let orange: HTMLElement = document.getElementById("2")!;
let got: HTMLElement = document.getElementById("3")!;
let bbt: HTMLElement = document.getElementById("4")!;
let sherlock: HTMLElement = document.getElementById("5")!;
let ves: HTMLElement = document.getElementById("6")!;

breackingBad.onclick = () => displayCardBreackingBad();
orange.onclick = () => displayCardOrange();
got.onclick = () => displayCardGot();
bbt.onclick = () => displayCardBbt();
sherlock.onclick = () => displayCardSherlock();
ves.onclick = () => displayCardVes();

// 2. cómo se crean nuevos elementos HTML
function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => { // 4. explicar el arrow function
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td style="font-weight:bold;">${serie.id}</td>
                           <td style="color:#1E90FF;" id = "${serie.id}">${serie.name}</td>
                           <td >${serie.channel}</td>
                           <td >${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function calcularPromedio(series: Serie[]): number {
  console.log("Calculando promedio");
  let totalSeasons: number = 0;
  let seasonsCount: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  series.forEach((serie) => seasonsCount = seasonsCount + 1);
  let nPromedio: number=totalSeasons/seasonsCount;
  return nPromedio;
}

function displayCardBreackingBad()
{
  let serie: Serie = data[0]
  card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="./img/BreackingBad.png" class="card-img-top" alt="Foto">
                    <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.url}">${serie.url}</a>
                    </div>
                    </div>`
}

function displayCardOrange()
{
  let serie: Serie = data[1]
  card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="./img/Orange.png" class="card-img-top" alt="Foto">
                    <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.url}">${serie.url}</a>
                    </div>
                    </div>`
}

function displayCardGot()
{
  let serie: Serie = data[2]
  card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="./img/Got.png" class="card-img-top" alt="Foto">
                    <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.url}">${serie.url}</a>
                    </div>
                    </div>`
}

function displayCardBbt()
{
  let serie: Serie = data[3]
  card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="./img/Bbt.png" class="card-img-top" alt="Foto">
                    <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.url}">${serie.url}</a>
                    </div>
                    </div>`
}

function displayCardSherlock()
{
  let serie: Serie = data[4]
  card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="./img/Sherlock.png" class="card-img-top" alt="Foto">
                    <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.url}">${serie.url}</a>
                    </div>
                    </div>`
}

function displayCardVes()
{
  let serie: Serie = data[5]
  card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="./img/Ves.png" class="card-img-top" alt="Foto">
                    <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.url}">${serie.url}</a>
                    </div>
                    </div>`
}