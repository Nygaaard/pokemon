const url = "https://pokeapi.co/api/v2/pokemon/";
let flexContainerEl = document.getElementById("flex-container");

window.onload = init;

function init() {
  writePokemon();
}

async function getPokemon(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch {
    console.log("error");
  }
}

async function writePokemon() {
  for (let i = 1; i <= 12; i++) {
    const pokemon = await getPokemon(url + i);
    const name = pokemon.species.name.toUpperCase();
    const type = pokemon.types[0].type.name.toUpperCase();
    const pic = pokemon.sprites.front_default;

    let divEl = document.createElement("div");
    divEl.classList.add("poke-div");

    let h2El = document.createElement("h2");
    h2El.textContent = name;

    let imgEl = document.createElement("img");
    imgEl.src = pic;
    imgEl.alt = name;
    imgEl.classList.add("poke-pic");

    let pEl = document.createElement("p");
    pEl.textContent = type;

    divEl.appendChild(h2El);
    divEl.appendChild(imgEl);
    divEl.appendChild(pEl);

    flexContainerEl.appendChild(divEl);
  }
}
