import React from 'react'
import './BookList.css'
import BookCard from './BookCard'
import bookData from './data'

function BookList() {
  return (
    <div>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
        </div>
        <div className='book-list'>
          {bookData.map((book)=>(
            <BookCard key={book.id} book={book}/>
          ))}
        </div>
    </div>
  )
}

export default BookList