import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(),
    margin: '10px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function GridCards({ pokemon, id}) {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
    return (
        <Grid key={id} item xs={6}>
            <Item>
              <Grid item xs="auto">
                <h2>{name}</h2>
                <img alt={name} src={pokemon.sprites.front_default}></img>
              </Grid>
              <Grid item xs="auto">
                  <p><b>HP:</b> {pokemon.stats[0].base_stat} <b>Ataque:</b> {pokemon.stats[1].base_stat}</p>
                  <p><b>Defensa:</b> {pokemon.stats[2].base_stat} <b>At.Especial:</b> {pokemon.stats[3].base_stat}</p>
                  <p><b>Df.Especial:</b> {pokemon.stats[4].base_stat} <b>Velocidad:</b> {pokemon.stats[5].base_stat}</p>
              </Grid>
            </Item>
        </Grid>
    )
}