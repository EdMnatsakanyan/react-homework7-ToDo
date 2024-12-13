import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoFilter = () => {
    const {filters, currentFilter, onFilter, theme} = useContext(ToDoContext)
    return (
        <div className={`flex items-center justify-center gap-5 p-4 ${theme=='dark'?"bg-gray-800":"bg-gray-200"} rounded-lg shadow-md`}>
            <p className="text-indigo-400">current filter:<strong>{currentFilter}</strong></p>
            {
                filters.map(filter => 
                    <label key={filter} className={`flex items-center space-x-2 ${theme=='dark'?"text-gray-200":"text-black"}`}>
                        <input
                        onChange={(e) => onFilter(e.target.value)}
                        checked = {filter == currentFilter}
                        value={filter}
                        type="radio"
                        name="filter"
                        className="text-black focus:ring-emerald-400 focus:ring-offset-gray-900"
                        />
                        <span>{filter}</span>
                     </label>
                )
            }
        </div>
    );
};
