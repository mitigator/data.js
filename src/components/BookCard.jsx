import React from 'react'

function BookCard({book}) {
  return (
    <div>
        <div className='book-card'>
          <img src={book.image} alt={book.alt}/>
          <h3>{book.tile}</h3>
          <p>{book.author}</p>
          <p>{book.price}</p>
          <p>{book.description}</p>

          <form>
            <label>Write your Review:</label>
            <textarea name='review'/>
            <button>Submit</button>
          </form>
        </div>

    </div>
  )
}

export default BookCard