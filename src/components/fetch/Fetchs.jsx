import React, { useEffect } from 'react'
import { useState } from 'react'

const loadingMessage=<p>Data is loading...........</p>
const errorMessage=<p>Error 404</p>

export default function Fetchs() {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)


  useEffect(()=>{
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            if(!res.ok){
                throw Error("Data no Fetch")
            }else{
                return res.json()
            }
       
    }).then((data)=>{
        setData(data)
        setError(false)
        setLoading(true)
       
    }).catch((error)=>{
        setError(error.message)
        setLoading(false)
    })
    }, 3000);
  })

   

    const elementTodos=data&& data.map((todo)=>{
        return <div key={todo.id}>
        <p>{todo.id}. {todo.title}</p>
        </div>
    })
  
  return (
    <div>
        <h1>Fake API Fetching</h1>
        {elementTodos}
        {loading&&loadingMessage}
        {error&&errorMessage}
    </div>
  )
}
