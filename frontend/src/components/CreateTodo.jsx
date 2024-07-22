import React, { useState } from 'react'

const CreateTodo = () => {


    //optimization- use react-query instead

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    const addTodo=()=>{

        //optimization- use axios instead

        fetch('http://127.0.0.1:3000/todo',{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(async(response)=>{
            const json=await response.json();
            console.log(json.message);
        })
    }

  return (
    <div>
      <input style={{
        padding:10,
        margin:10
      }}type="text" 
      onChange={(e)=>setTitle(e.target.value)}
      placeholder='Enter Title'/>
      <input style={{
        padding:10,
        margin:10
      }} type="text" 
      onChange={(e)=>setDescription(e.target.value)}
      placeholder='Enter Description'/>
      <button onClick={addTodo}>Add a Todo</button>
    </div>
  )
}

export default CreateTodo