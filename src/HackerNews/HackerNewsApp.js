
import React from 'react'
import {AppContext} from './context'
import SearchForm from './SearchForm'
import Buttons from './Buttons'
import Stories from './Stories'
import './story.css'

function HackerNewsApp() {

 

  return (
    <div>
      
      <SearchForm /> 
      <Buttons />
      <Stories />

    </div>
  )
}

export default HackerNewsApp
