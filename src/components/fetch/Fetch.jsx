import React, { useEffect, useState } from 'react'
const loadingMassage=<p>API fetch is loading Please waiting.....</p> 

export default function Fetch() {

    const [todos,setTodos]=useState(null)
    const [isLoading,setIsloading]=useState(true)
    const [error,setError]=useState(null)


useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
    if(!res.ok){
        throw Error('fetch not succesful')
    }else{
        return res.json() 
    }
        
           
        
          
        }).then((data)=>{
            setTodos(data)
            setIsloading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsloading(false)
        })
    } );


   
    const elementTodos=
        todos&&
            todos.map((todo)=>{
                return <div key={todo.id}>
                    <p>{todo.id}. {todo.title}</p>
                </div>
            })
    

  return (
    <div>
        {error&&<p>{'fetch error 404'}</p>}
        {isLoading&&loadingMassage}
        
        {elementTodos}
    </div>
  )
}
