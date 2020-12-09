import React from 'react'

import { AppContext } from './context';

function Buttons() {

  const { handlePage, page, nbPages } = React.useContext(AppContext);


  return (
    <div className='btn-container'>
      <button onClick={()=>handlePage('dec')} className=''>Prev</button>
  <p>{page + 1} of {nbPages}</p>
      <button onClick={()=>handlePage('inc')} className=''>Next</button>

    </div>
  )
}

export default Buttons
