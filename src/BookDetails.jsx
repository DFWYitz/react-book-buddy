import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getBookDetails = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      const responseJsonObj = await response.json();
      const bookDetails = responseJsonObj.book
      console.log(bookDetails)
      setBook(bookDetails)
    }
    getBookDetails();
  }, []);
  return (
    <>
      <ol>

        <h4>*Single Book Details*</h4>
        <li>
          <h2>{book.title}</h2>
        </li><li>
          <h2>{book.author}</h2>
        </li><li>
          <h4>{book.description}</h4>
        </li>
      </ol>
    </>
    // fetch('/api/books', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // }).BookDetails(Response => Response.json())
    // .BookDetails(result=>{
    //   console.log(result)
    // })
    // }

    // api call to display single book details
    //useParams to grab id from url
    //dispaly info on bookdetailspage/id
  )
}

export default BookDetails