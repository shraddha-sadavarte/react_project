import { useState } from 'react'
import axios from "axios"
import './App.css'

const App=()=> {
  const[query,setQuery]=useState("")
  const[books,setBooks]=useState([])
  const[error,setError]=useState("")

  //fetch books from google books API
  const fetchBook = async()=>{
    if(!query){
      setError("Please enter a search term.");
      return
    }

    try{
      const response=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`);
      setBooks(response.data.items || [])
      setError("");
    } catch(err){
      setError("Failed to fetch books. Please try again later.")
    }
  };

  return (
    <>
    <div className='container'>
      <h1 className='title'>Personalized Book Recommendation Engine</h1>
      <div className='searchContainer'>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter book title,author...' className='input'/>
        <button onClick={fetchBook} className='buttton'>search</button> 
      </div>

      {error && <p className='error'>{error}</p>}

      <div className='booksContainer'>
        {books.map((book)=>(
          <div key={book.id} className='bookCard'>
            <img src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/128x192?text=No+Image"
              } 
              alt={book.volumeInfo.title}
              className='bookImage'
            />
            <h3 className='bookTitle'>{book.volumeInfo.title}</h3>
            <p className='bookAuthor'>{book.volumeInfo.authors?.join(",") || "Unknown Author"}</p>
          </div>
        ))}
      </div>

    </div>
     
        
    </>
  )
}

export default App
