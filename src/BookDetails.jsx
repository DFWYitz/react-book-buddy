import { useEffect } from "react"
import { useParams } from "react-router-dom";

const BookDetails = ()=>{
  const{id}=useParams
useEffect(()=>{
  const BookDetails = async (id)=>{
    const BookDetails = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
    const book= await BookDetails.json();
    console.log(book)
    setBook (book.books)
  }
  BookDetails();
}, []);
  return(
    <>
    <h4>Deets</h4>
    <h1>{books.title}</h1>
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