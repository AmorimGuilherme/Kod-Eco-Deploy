import React from 'react';
import './Search.css';

function SearchBar() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className='form-pesquisar' onSubmit={handleSubmit}>
      <input type="text" placeholder="Pesquisar..." className='input-pesquisar' />
      <button className='pesquisar'>Pesquisar</button>
    </form>
  );
}

export default SearchBar;
