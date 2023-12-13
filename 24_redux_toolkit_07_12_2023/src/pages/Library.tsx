import React from 'react'
import Header from '../components/Header/Header'
import CreateBook from '../components/books/CreateBook'
import BooksPage from '../components/books/BooksPage'

const Library = () => {
  return (
    <>
    <Header/>
    <CreateBook/>
    <BooksPage/>
    </>
  )
}

export default Library