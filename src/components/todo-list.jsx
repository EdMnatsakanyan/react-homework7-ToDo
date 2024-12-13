import { useContext } from "react";
import { List } from "./list"
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ToDoAdd } from "./todo-add"
import { ToDoFilter } from "./todo-filter"
import { ToDoContext } from "../todo-context";

export const ToDoList = () => {
    const {theme} = useContext(ToDoContext)

    return (
        <div className={`flex items-center justify-center min-h-screen ${theme=='dark'?"bg-gray-900":"bg-gray-100"}`}>
            <div className={`w-full max-w-2xl p-6 ${theme=='dark'?"bg-gray-800":"bg-white"} rounded-lg shadow-lg space-y-6`}>
                <div>
                    <ThemeSwitcher />
                    <ToDoAdd />
                    <ToDoFilter />
                </div>
                <div>
                    <List />
                </div>
            </div>
        </div>
    );
};
