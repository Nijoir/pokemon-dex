import React from "react";


import { Grid, Pagination, Typography } from "@mui/material";



function GridList({ loading,pokemons,page,setPage,totalPages }) {


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
                    <Grid key={id} item xs={6}>
                    <Item>
                        <a>Nro: </a>
                        <span>{`${pokemon.id}`}</span>
                        <Divider></Divider>
                        <Grid >
                            <h2>{name}</h2>
                            <img alt={name} src={pokemon.sprites.front_default}></img>
                        </Grid>
                        <Grid >
                            <a>Type:</a>
                            {pokemon.types.map((types, id) => {
                                return (
                                    <span key={id}>{types.type.name}</span>
                                )
                            })}
                        </Grid>
                        <Divider></Divider>
                        { pokemon.stats.map( (stats, id) => {
                            return (
                                <Grid key={id} item xs="auto">
                                    <a>{`${stats.stat.name}: `}</a>
                                    <span >{`${stats.base_stat}`}</span>
                                </Grid>
                            )
                        })
                        }
                    </Item>
                </Grid>
                )
            })}
            </>
        }
        </>
    )
}

export default GridList