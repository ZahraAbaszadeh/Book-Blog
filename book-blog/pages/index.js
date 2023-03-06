import React from 'react'
import { getFeaturedBooks } from '@/book-data'
import BookList from '@/components/books/bookList';

const Home = () => {
  const FeaturedBooks = getFeaturedBooks();
  return (
   <div className='mx-auto'>
   <BookList items={FeaturedBooks}/>
   </div>
  )
}

export default Home