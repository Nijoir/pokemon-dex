import React, { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(),
    margin: '10px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function GridCards({ pokemon, id}) {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase()

    
    return (
        <Grid key={id} item xs={6}>
            <Item>
                <a>Nro: </a>
                <span>{`${pokemon.id}`}</span>
                <Divider></Divider>
                <Grid item xs="auto">
                    <h2>{name}</h2>
                    <img alt={name} src={pokemon.sprites.front_default}></img>
                </Grid>
                <a>Type:</a>
                {pokemon.types.map((types, id) => {
                    return (
                        <span key={id}>{types.type.name}</span>
                    )
                })}
                <Divider></Divider>
                { pokemon.stats.map( (stats, id) => {
                    const statName = stats.stat.name.toUpperCase()
                    return (
                        <Grid item xs="auto">
                            <a>{`${stats.stat.name}: `}</a>
                            <span>{`${stats.base_stat}`}</span>
                        </Grid>
                    )
                })
                }
            </Item>
        </Grid>
    )
}