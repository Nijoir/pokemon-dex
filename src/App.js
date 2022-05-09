import React, { useEffect, useState } from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { getPokemons, obtainPokemonsData } from './Services/api';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState()


  const obtainPokemons = async () => {
    try {
      const data = await getPokemons();
      const response = data.map(async (pokemons) => {
        return await obtainPokemonsData(pokemons.url)
      });
      const results = await Promise.all(response)
      setPokemons(results)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    obtainPokemons()
  }, []);

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
          {pokemons.map((pokemon, id) => {
            return (
              <Grid key={id} item xs={4}>
                <Item>
                  <span>{pokemon.id}</span>
                  <span>{pokemon.name}</span>
                </Item>
              </Grid>
            )
          })}
      </Grid>
    </Box>
    </div>
  );
}

export default App;
