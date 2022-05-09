import React from "react";

import GridCards from './GridCards';



export default function GridList({ pokemons }) {

    return (
        pokemons.map((pokemon) => {
            return (
              <GridCards 
                key={pokemon.id}
                pokemon={pokemon}
              />
            )
        })
    )
}