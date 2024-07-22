import React from 'react'

const Todos = ({todos}) => {

    const toggleComplete=async(todo)=>{
        console.log(todo);
        if(!todo.completed)
        {
            fetch('http://127.0.0.1:3000/completed',{
                method:"PUT",
                body:JSON.stringify({
                    id:todo._id
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(async(response)=>{
                const json=await response.json();
                console.log(json.message);
            })
        }
    }

  return (
    <div>
    {todos.map((todo)=>{
        return <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={()=>toggleComplete(todo)}>{todo.completed==true?"Completed":"Mark as Complete"}</button>
        </div>
    })}
    </div>
    
  )
}

export default Todos
