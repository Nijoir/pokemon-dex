import React from "react";

import GridCards from '../Components/GridCards';
import { Grid, Pagination, Typography } from "@mui/material";



export default function GridList({ loading,pokemons,page,setPage,totalPages }) {


    const handleChange = (e,page) => {
        setPage(page)
    }

    return (
        <>
        <Grid container direction={'column'} justifyContent='center' alignItems={'center'}>
        <Typography>Page: {page}</Typography>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Grid>
        { loading ? 
        <>
            <a>Buscando Pokemones...</a>
            </>
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