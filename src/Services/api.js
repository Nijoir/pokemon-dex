async function getPokemons(limit = 20, offset = 0) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
           return response
        })
};

async function obtainPokemonsData(urlData) {

    return fetch(urlData)
        .then(res => res.json())
        .then(response => {
            return response
        })

}

export {
    getPokemons,
    obtainPokemonsData
}