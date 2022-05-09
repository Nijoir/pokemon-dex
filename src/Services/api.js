async function getPokemons() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
           return response.results
        })
};

async function obtainPokemonsData(urlData) {

    return fetch(urlData)
        .then(res => res.json())
        .then(response => {
            return response
        })


    // try {
    //     const res = await fetch(urlData);
    //     const data = await res.json();
    //     console.log(data);
    //     return data;
    // } catch (err) {
    //     console.log(err);
    // }
}

export {
    getPokemons,
    obtainPokemonsData
}