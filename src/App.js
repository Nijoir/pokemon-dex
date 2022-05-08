import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
