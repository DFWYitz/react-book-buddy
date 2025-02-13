import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Books from "./Books"
import BookDetails from "./BookDetails"
import NavBar from "./NavBar"
import Login from "./Login.jsx"
import Account from "./Account.jsx"




function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <NavBar />
      <h2>Book Buddy </h2>
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/login' element={<Login setToken={setToken}/>}/>
        <Route path='/account' element={<Account token={token}/>}/>
      </Routes>

    </>
  )
}

export default App
