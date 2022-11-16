import { Button, Grid, TextField, Typography } from '@mui/material';

import axios from "axios";
import { useState } from 'react';

const api = axios.create({
  baseURL: "http://localhost:5555/",
  headers: { "Access-Control-Allow-Origin": "*" },
});

function App() {

  const [nome, setNome] = useState();
  const [cpf, setCPF] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [cidade, setCidade] = useState();
  const [uf, setUF] = useState();


  const CadastrarNovoDado = (e) => {
    e.preventDefault();
    console.log(e);

    api.post('/clientes', {
      nome, cpf, telefone, email, cidade, uf
    }).then(res => {
      console.log(res);
      window.alert("Cadastrado com sucesso!");
    }).catch(err => {
      console.log(err);
      window.alert("Erro na API");
    })
  }

  return (
    <div className="App">
      <form onSubmit={CadastrarNovoDado}>
        <Grid container display="flex" flexDirection="column" padding="8px">
          <Grid item xs={3} display="flex" justifyContent="center">
            <Typography>Cadastro de Clientes</Typography>
          </Grid>
          <Grid item xs={3} pt="8px">
            <TextField label="Nome" fullWidth onChange={e => setNome(e.target.value)} />
          </Grid>
          <Grid item xs={3} pt="8px">
            <TextField label="CPF" fullWidth onChange={e => setCPF(e.target.value)} />
          </Grid>
          <Grid item xs={3} pt="8px">
            <TextField label="Telefone" fullWidth onChange={e => setTelefone(e.target.value)} />
          </Grid>
          <Grid item xs={3} pt="8px">
            <TextField label="E-mail" fullWidth onChange={e => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={3} pt="8px">
            <TextField label="Cidade" fullWidth onChange={e => setCidade(e.target.value)} />
          </Grid>
          <Grid item xs={3} pt="8px">
            <TextField label="UF" fullWidth onChange={e => setUF(e.target.value)} />
          </Grid>
          <Grid item xs={3} pt="8px" display="flex" justifyContent="right">
            <Button variant="contained" type="submit">Cadastrar</Button>
          </Grid>
        </Grid>
      </form>
    </div >
  );
}

export default App;
