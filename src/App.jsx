import React, { useState , useEffect } from 'react'

const Ch5 = () => {
  const [Todo , setTodo] = useState([])
  const [inp , setInputs] = useState()

  const handleClick = ()=>{
    setTodo([...Todo , {id:new Date() , Data:inp , Done:false }])
  }


  const HandleDelete =  (id) =>{
        setTodo(Todo.filter((Tid)=>Tid.id !== id))
  }

  const HandleEdit = (id) =>{
    const NewData = prompt("Enter new Data")

    if(NewData.trim()){
     setTodo(Todo.map(todo=>(
      todo.id == id?{...todo , Data:NewData } : todo
    )))

    }
 
  }

  const handleDone = (id) =>{
    setTodo(Todo.map(todo =>(
          todo.id == id ? {...todo , Done:!todo.Done} : todo
        )))
  }

  return (
    <>
    <input type="text" placeholder='Enter Your Todos' onChange={(e)=>setInputs(e.target.value)}/>
    <button onClick={handleClick}>Add Todo</button>

    {Todo.length==0?(
      <h1> You Don't Have any Todos </h1>
    ) : (Array.from(Todo).map(todos =>(
       <div key={todos.id}>
         <p style={{textDecoration:todos.Done?"line-through":"none"}}>{todos.Data}</p>
         <button onClick={()=>HandleDelete(todos.id)}>Delete</button>
         <button onClick={() => HandleEdit(todos.id)}>Edit</button>
         <button onClick={()=>handleDone(todos.id)}> {todos.Done?"Not Done":"Done"}</button>
       </div>
    )))}
 
    </>
  )
}

export default Ch5
