import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Consulta({ history }){

  const [word, setWord] = useState('');
  useEffect(() => {
    async function loadWord() {
      const nome_word = localStorage.getItem('nome')
      const response = await api.get('/consulta', {
        headers: { nome_word }

      });

      if(!response.data){

        return (
          <>
            <p>Erro durante a busca, tente novamente</p>
            <form onSubmit={voltar}>
              <button type="submit">Voltar</button>
            </form>
          </>
        );

      }

      //console.log(response.data);
      setWord(response.data);
      console.log(word);
    }

    loadWord();
  }, []);

  function voltar(){
    history.push('/');
  }

  console.log(word);
  return (
    <>
      <p>Word: {word.nome}</p>
      <p>Definition: {word.def}</p>
      <p>Type: {word.type}</p>
      <p>Exemple: {word.exemple}</p>

      <form onSubmit={voltar}>
        <button type="submit">Voltar</button>
      </form>
    </>
  );
}