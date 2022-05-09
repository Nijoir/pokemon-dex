import React from "react";

import GridCards from './GridCards';
import { Grid, Pagination, Typography } from "@mui/material";



export default function GridList({ loading,pokemons,page,setPage,totalPages }) {


    const handleChange = (e,page) => {
        setPage(page)
    }

    return (
        <>
        <Grid container>
        <Typography>Page: {page}</Typography>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Grid>
        { loading ? 
            <a>Cargando Pokemones...</a>
         : <>
            { pokemons.map((pokemon) => {
                return (
                  <GridCards 
                    key={pokemon.id}
                    pokemon={pokemon}
                  />
                )
            })}
            </>
        }
        </>
    )
}