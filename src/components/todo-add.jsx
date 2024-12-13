import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToDoContext } from "../todo-context";

export const ToDoAdd = () => {
    const {onAdd, theme} = useContext(ToDoContext)
    const {register, reset, handleSubmit, formState:{errors}} = useForm()

    const [isUrgent, setIsUrgent] = useState(false)

    const handleAdd = (data) => {
        const newTodo = {...data, isUrgent:isUrgent}
        onAdd(newTodo)
        reset()
        setIsUrgent(false)
    }

    return (
        <div className={`max-w-md mx-auto p-6 ${theme=='dark'?"bg-gray-900":"bg-gray-200"} rounded-lg shadow-lg`}>
            <h1 className={`text-2xl font-bold ${theme=='dark'?"text-gray-200":"text-black"} mb-4`}>Add To Do</h1>

            <label className={`flex items-center space-x-2 ${theme=='dark'?"text-gray-200":"text-black"}`}>
                <input 
                type="checkbox"
                checked = {isUrgent}
                onChange={() => setIsUrgent(!isUrgent)}
                />
                <span >urgent</span>
            </label>

            

            <form onSubmit={handleSubmit(handleAdd)} className="space-y-4">
                {errors.text && <p className="text-red-500 p-2 mg-2">{errors.text.message}</p>}
                <p id="message" className="text-sm text-amber-400"></p>
                
                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Text</label>
                    <input
                        {...register("text", {required:"Fill ara"})}
                        type="text"
                        className={`p-2 bg-gray-800 ${theme=='dark'?"bg-gray-800":"bg-white"} rounded-lg focus:ring-emerald-400 focus:outline-none`}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Description</label>
                    <input
                    {...register("description", {required:"Fill ara"})}
                        type="text"
                        className={`p-2 bg-gray-800 ${theme=='dark'?"bg-gray-800":"bg-white"} rounded-lg focus:ring-emerald-400 focus:outline-none`}                    />
                </div>
                
                <button className="w-full px-4 py-2 text-lg font-semibold text-white bg-indigo-800 rounded-lg hover:bg-indigo-500">
                    Save
                </button>
            </form>

        </div>
    );
};
