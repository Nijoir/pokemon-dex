import React, { useState } from "react";
import { Box, 
        Button,
        TextField,
        FormControl
        } from "@mui/material";


function SearchComponent({onSearch}) {
    const [searchName, setSearchName] = useState('')
    const [searchId, setSearchId] = useState('')

    const handleChangeName = evt => {
        evt.preventDefault()
        setSearchName(evt.target.value)

    }

    const handleChangeId = evt => {
        evt.preventDefault()
        setSearchId(evt.target.value)

    }

    const handleSubmitName = () => {
        onSearch(searchName)
    }

    const handleSubmitId = () => {
        onSearch(searchId)
    }

    return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <FormControl>
                <TextField
                    id="searchPokemon"
                    label='Nombre pokemon'
                    helperText='Porfavor introduce el nombre'
                    value={searchName}
                    onChange={handleChangeName}
                    size='small'
                />
            </FormControl>
            <Button variant="outlined" onClick={handleSubmitName}>Buscar</Button>
            <FormControl>
                <TextField
                    id="searchPokemonByID"
                    label='Id o numero pokemon'
                    helperText='Porfavor introduce el numero'
                    value={searchId}
                    onChange={handleChangeId}
                    size='small'
                />
            </FormControl>
            <Button variant="outlined" onClick={handleSubmitId}>Buscar</Button>
            </Box>
    )
}

export default SearchComponent