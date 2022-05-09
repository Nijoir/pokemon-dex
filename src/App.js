import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { getPokemons, obtainPokemonsData } from './Services/api';
import {  Divider } from '@mui/material';


import GridList from './Components/GridList';



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
    <div className='App'>
      <h1>PokeDex</h1>
      <Divider></Divider>
      <Grid container spacing={4}>
          <GridList 
            pokemons={pokemons} 
          />
      </Grid>
    
    </div>
  );
}

export default App;
