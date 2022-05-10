import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { getPokemons, obtainPokemonsData } from './Services/api';
import {  Divider } from '@mui/material';


import GridList from './Components/GridList';
import SearchComponent from './Components/SearchComponent';
import { searchPokemonByName } from './Services/search';



function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [found, setNotFound] = useState(false)
  


  const obtainPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(20,20 * (page -1));
      const response = data.results.map(async (pokemons) => {
        return await obtainPokemonsData(pokemons.url)
      });
      const results = await Promise.all(response)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / 20))
      setNotFound(false)
    } catch (err) {
      console.log(err)
    }
  }

  

  const onSearch = async (pokemonName) => {
    if (!pokemonName) {
      return obtainPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const results = await searchPokemonByName(pokemonName)
    if (!results) {
      setNotFound(true)
      setLoading(false)
      return
    }else {
      setPokemons([results])
      setPage(1)
      setTotalPages(1)
    }
    setLoading(false)
    
  }

  useEffect(() => {
    obtainPokemons()
  }, [page]);

  return (
    <div className='App'>
      <h1>PokeDex</h1>
      <Divider></Divider>
      <SearchComponent 
        onSearch={onSearch}
      />
      {found ? 
        <p>No se a encontrado el pokemon que buscas</p>
       : <>
        <Grid container spacing={1}>
          <GridList
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            totalPages={totalPages} 
          />
        </Grid>
        </>
      }
    </div>
  );
}

export default App;
