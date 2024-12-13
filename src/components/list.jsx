import { useContext } from "react"
import { ToDoItem } from "./todo-item"
import { ToDoContext } from "../todo-context"

export const List = () => {
    const {todos, currentFilter, theme} = useContext(ToDoContext)
    const list = currentFilter == 'all'?
                            todos:
                            currentFilter == 'active'?
                            todos.filter(todo => !todo.completed):
                            currentFilter == 'completed'?
                            todos.filter(todo => todo.completed):
                            todos.filter(todo => todo.isUrgent)
    return <div className={`space-y-4 p-4 ${theme=='dark'?"bg-gray-900":"bg-gray-200"} rounded-lg shadow-lg`}>
        {
            list.map(todo => 
                <ToDoItem key={todo.id} todo={todo}/>
            )
        }
    </div>
}

