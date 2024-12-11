import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTabls from '../components/home/BooksTabls'
import Bookscard from "../components/home/Bookscard"
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowtype] = useState('table')
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://book-store-mern-du8v.vercel.app/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })

  }, []);

  return (
    <div className='p-4 h-[100vh] w-[100vw]'>

      <div className='gap-x-4 flex justify-center items-center '>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
          onClick={() => setShowtype('table')} >
          Table
        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
          onClick={() => setShowtype('card')} >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center  '>

        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl'></MdOutlineAddBox>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
       showtype==='table'? (<BooksTabls books={books}></BooksTabls>):(<Bookscard books={books}></Bookscard>)
      )}
    </div>
  )
}

export default Home
