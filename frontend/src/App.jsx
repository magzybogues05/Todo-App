import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos,setTodos]=useState([{title:"first title",description:"Description of first todo",completed:false},{title:"second todo title",description:"here's what needs to do for second todo",completed:true}]);

  useEffect(()=>{
      fetch('http://127.0.0.1:3000/todos').then(async(response)=>{
          const json=await response.json();
          setTodos(json.todos);
      })
  },[todos]);

  return (
    <>
        <CreateTodo/>
        <Todos todos={todos}/>
    </>
  )
}

export default App
