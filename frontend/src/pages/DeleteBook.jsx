
import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`https://book-store-mern-du8v.vercel.app/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((err) => {
        setLoading(false)
        alert("An error occured  Please check console ")
        console.log(err)
      })
  }
  return (
    <div>
      <BackButton></BackButton>
      <h1 className="text-3xl my-4 ">
        Delete Book
      </h1>

      {
        loading ? <Spinner></Spinner> : ''
      }
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto ">
        <h3 className="text-2xl">
          Are you Sure you want to delete this book
        </h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full rounded " onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook
