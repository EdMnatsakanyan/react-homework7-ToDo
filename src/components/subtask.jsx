import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const Subtask = ({ subtask, onChange }) => {
    const {theme} = useContext(ToDoContext)
    return (
        <div className={`flex items-center justify-between p-2 ${theme=='dark'?"bg-gray-700":"bg-gray-200"} rounded-md shadow-sm mb-2`}>
            <p className={`text-sm ${theme=='dark'?"text-gray-400":"text-black"}`}>{subtask.text}</p>

            {/* Adding more space by applying ml-3 to the button */}
            <button 
                onClick={() => onChange(subtask.id)} 
                className={`px-3 py-1 text-xs font-semibold ${subtask.completed ? 'bg-red-500 hover:bg-red-400' : 'bg-green-500 hover:bg-green-400'} text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ml-3`}
            >
                {subtask.completed ? "Cancel" : "Complete"}
            </button>
        </div>
    );
};
