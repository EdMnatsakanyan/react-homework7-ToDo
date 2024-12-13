import { useContext, useState } from "react";
import { ToDoContext } from "../todo-context";
import { useForm } from "react-hook-form";
import { Subtask } from "./subtask";

export const ToDoItem = ({ todo }) => {
    const { onUpdate, onChange, theme, onDelete} = useContext(ToDoContext);

    const [addMode, setAddMode] = useState(false);
    const {register, reset, handleSubmit, formState:{errors}} = useForm()
    const [subtasks,setSubtasks] = useState([])

    const handleAdd = (data) =>{
        setSubtasks([...subtasks, {...data, id:Date.now(), completed:false}])
        reset()
        setAddMode(false)
    }

    const changeSubtaskState = (id) => {
        const found = subtasks.find(subtask => subtask.id === id)
        found.completed = !found.completed
        setSubtasks([...subtasks])
        if(subtasks.every(elm => elm.completed)){
            onChange(todo, true)
        }else{
            onChange(todo, false)
        }
    }

    return (
        <div className={`flex flex-col items-start justify-between p-4 ${theme=='dark'?"bg-gray-800":"bg-gray-100"} rounded-lg shadow-md ${theme=='dark'?"hover:bg-gray-700":"hover:bg-white"} ${todo.completed ? 'opacity-40' : ''}`}>
            
            {todo.isUrgent && (
                <small className="text-red-500 text-sm font-semibold">Urgent!</small>
            )}

            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col space-y-1">
                    <h1 className={`${theme=='dark'?"text-gray-300":"text-black"} text-lg font-medium`}>{todo.text}</h1>
                    <small className={`${theme=='dark'?"text-gray-400":"text-black"} text-sm`}>{todo.description}</small>
                </div>

                <div className="flex space-x-2 ml-4">
                    <button 
                        onClick={() => {
                            onUpdate(todo.id)
                            if(!todo.completed){
                                setSubtasks([...subtasks.map(item => {
                                    return {...item, completed:true}
                                } )])
                            } else {
                                setSubtasks([...subtasks.map(item => {
                                    return {...item, completed:false}
                                } )])
                            }
                        }} 
                        className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                        {todo.completed ? "Cancel" : "Complete"}
                    </button>

                    <button 
                        onClick={() => onDelete(todo.id)}
                        className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-md shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300">
                        Delete
                    </button>

                    <button 
                        onClick={() => setAddMode(!addMode)} 
                        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Add Subtask
                    </button>
                </div>
            </div>

            {addMode && (
                <div className="mt-4 w-full">
                    <form onSubmit={handleSubmit(handleAdd)} className="flex flex-col space-y-2">
                        <input 
                            {...register("text")}
                            type="text" 
                            placeholder="Enter subtask" 
                            className="px-2 py-1 text-sm rounded-md border border-gray-400 text-gray-900 focus:ring-2 focus:ring-indigo-300" 
                        />
                        <button 
                            type="submit" 
                            className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md shadow hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300">
                            Add
                        </button>
                    </form>
                </div>
            )}

            {
                subtasks.map(subtask => 
                    <Subtask key={subtask.id} subtask={subtask} onChange={changeSubtaskState}/>
                )
            }
        </div>
    );
};
