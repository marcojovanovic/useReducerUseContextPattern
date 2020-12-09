import React from 'react'

import { AppContext } from './context';



function SearchForm() {

  const { handleSearch, query, handleSubmit } = React.useContext(AppContext);


  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
        <input 
        type='text'
        className='form-input'
        value={query} 
        onChange={(e)=> handleSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchForm
