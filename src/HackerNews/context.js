import React,{useContext, useEffect, useReducer, createContext} from 'react'

import {reducer} from './reducer'



const ENDPOINT = 'https://hn.algolia.com/api/v1/search?'




const initialState = {

  hits:[],
  query:'react',
  page:0,
  nbPages:0

}




export const AppContext = createContext()

const AppProvider = ({children}) => {

  const [state, dispatch]=useReducer(reducer, initialState)


  useEffect(()=>{

    fetchStories(`${ENDPOINT}query=${state.query}&page=${state.page}`)

  },[state.page, state.query])


  const fetchStories= async(url)=>{

    const res = await fetch(url)
    const data = await res.json()


    dispatch({type:'SET_STORIES', payload:{hits:data.hits, nbPages:data.nbPages}})



  }

  const removeStory =(id)=>{

    dispatch({type:'REMOVE_STORY', payload:id})


  }

  const handleSearch = (query) =>{

    dispatch({type:'HANDLE_SEARCH', payload:query})


  }
  const handleSubmit = (e) =>{


    e.preventDefault()

  }


  const handlePage = (value) =>{

   dispatch({type:'HANDLE_PAGE', payload:value})

  }
  
  
  return (
    <AppContext.Provider
      value={{...state, removeStory, handleSearch, handleSubmit, handlePage
}}
    >
      {children}
    </AppContext.Provider>
  )
}


export {AppProvider}