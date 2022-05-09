import React, { useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";

export default function SearchComponent({onSearch}) {
    const [search, setSearch] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()

        onSearch(search)
    }

    const handleSet = (evt) => {
        setSearch(evt.target.value)
        
    }

    return (
        <Grid container>
            <form onSubmit={handleSubmit}>
                <input placeholder="Busca nombre Pokemon" onChange={handleSet}
                type='text' value={search} />
                <button>Buscar</button>
            </form>
        </Grid>
    )
}