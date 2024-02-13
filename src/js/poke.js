window.onload = init;

async function init() {
  displayPokemon();
}

async function getPokemonData(id) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + id;
  try {
    const respons = await fetch(url);
    return await response.json();
  } catch {
    document.getElementById("error").innerHTML = "Något gick fel...";
  }
}

async function displayPokemon() {
  const pokeDivEl = document.getElementsByClassName("poke-div");

  pokeDivEl[0].innerHTML = "";

  for (let i = 1; i <= 9; i++) {
    let data = await getPokemonData(i);

    let name = data.species.name;
    let image = data.sprites.front_default;

    pokeDivEl[0].innerHTML += `<h2>${name.toUpperCase()}</h2>
    <img src="${image}" alt="${name}">
    `;
  }
}
