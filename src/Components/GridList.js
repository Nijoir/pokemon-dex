import React from "react";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, Pagination, Typography, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: '10px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



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
                    <Grid key={pokemon.id} item xs={6}>
                    <Item>
                        <a>Nro: </a>
                        <span>{`${pokemon.id}`}</span>
                        <Divider></Divider>
                        <Grid >
                            <h2>{pokemon.name}</h2>
                            <img alt={pokemon.name} src={pokemon.sprites.front_default}></img>
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