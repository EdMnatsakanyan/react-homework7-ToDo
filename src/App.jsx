import { useState } from "react"
import { ToDoList } from "./components/todo-list"
import { ToDoContext } from "./todo-context"

export default function App(){
  const [todos, setTodos] = useState([
    {id:101, text:"css task", description:"responsibles", completed:false, isUrgent: false, },
    {id:102, text:"html task", description:"homework", completed:true, isUrgent: false, },
    {id:103, text:"js task", description:"array polyfils", completed:false, isUrgent: true, },
    {id:104, text:"node task", description:"make a server", completed:true, isUrgent: false,}
  ])
  const [currentFilter, setCurrentFilter] = useState('all')
  const [filters, setFilters] = useState(['all', 'active', 'completed', 'urgent'])
  const [theme,setTheme] = useState('dark')

  const handleUpdate = (id) => {
    setTodos(todos.map(todo => {
       return todo.id == id ? {...todo, completed: !todo.completed}:todo
    }))
  }

  const handleAdd = (todo) => {
    setTodos([...todos, {...todo, completed:false, id:Date.now(), subtasks:[]}])
  }

  const changeTodoState = (todo, isCompleted) =>{
    const found = todos.find(elm => elm.id === todo.id)
    if(isCompleted){
      found.completed = true
      setTodos([...todos])
    } else {
      found.completed = false
      setTodos([...todos])
    }
  }

  return <>
    <ToDoContext.Provider value={{
      todos,
      filters,
      currentFilter,
      onFilter:setCurrentFilter,
      onUpdate: handleUpdate,
      onAdd:handleAdd,
      onChange:changeTodoState,
      theme,
      onSetTheme:setTheme
      }}>
      <ToDoList />
    </ToDoContext.Provider>
  </>
}