import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Books = () => {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getBooks = async () => {
      const books = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      const allBooks = await books.json();
      console.log(allBooks)
      setBooks(allBooks.books) 
    }
    getBooks();
    
  }, [])
  return (
      books.map((book)=>{
        return (
          <ul key={book.id}>
            <li>{book.title}</li>
            <li>{book.id}</li>
            <li>{book.author}</li>
          <button onClick={()=>navigate(`/books/${book.id}`)}>Book Details</button>
          {/* //onclick render single page view */}
          </ul>
        )
      })
  )
}

export default Books