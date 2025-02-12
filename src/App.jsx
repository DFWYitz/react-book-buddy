import {Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Books from "./Books"
import BookDetails from "./BookDetails"


function App() {


  return (
    <>
     <h2>Book Buddy </h2>
     <Routes>
      <Route path='/' element={ <Books/> }/>
      <Route path='/Books/:id' element ={<BookDetails/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}

     </Routes>
    
    </>
  )
}

export default App
