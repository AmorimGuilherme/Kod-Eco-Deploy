import React from 'react';
import './Search.css';

function SearchBar() {
  return (
    <form className='form-pesquisar'>
      <input type="text" placeholder="Pesquisar..." className='input-pesquisar' />
      <button className='pesquisar' >Pesquisar</button>
    </form>
  );
}

export default SearchBar;
