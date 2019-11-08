import React, { useState } from 'react';

export default function Inicial({ history }){

  const [nome_word, setNome] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    //const response = await api.get('/consulta', { headers: {nome_word} });
    
    const nome = nome_word;
    
    localStorage.setItem('nome', nome);
    history.push('/consulta');
  }

  return (
    <>
      <p>
        Digite a palavra desejada
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Palavra *</label>
        <input 
          type="text" 
          id="nome"
          value={nome_word}
          onChange={event => setNome(event.target.value)}
        />
          
        <button type="submit">Search</button>
      </form>
    </>
  )
}