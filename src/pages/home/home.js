import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

export default function App( ) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    })
  }

  return (
    <S.HomeContainer>
      <S.Title>Olá, Dev!</S.Title>
      <S.Text>Aqui você pode localizar os mais diversos repositórios hospedados no GitHub.</S.Text>
      <S.Text>Basta inserir o nome do usuário e pesquisar!</S.Text>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>  
        { erro ? <S.ErrorMsg>Usuário não encontrado. Verifique os dados inseridos e tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

