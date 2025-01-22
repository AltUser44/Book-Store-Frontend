import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch('https://book-store-backend-blond.vercel.app/all-books')
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 9)));

    }, [])
  return (
    <div>
        <BookCard books={books} headline="Best Selling Books"/>
    </div>
  )
}

export default FavoriteBooks
