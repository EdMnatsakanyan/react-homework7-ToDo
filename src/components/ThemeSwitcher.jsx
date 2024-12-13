import { useContext } from "react"
import { ToDoContext } from "../todo-context"

export const ThemeSwitcher = () =>{
    const {theme, onSetTheme} = useContext(ToDoContext)

    return <>
        <label className={`flex items-center space-x-2  ${theme=='dark'?"text-gray-300":"text-black"}`}>
            <input 
            type="radio" 
            name="theme"
            checked={theme == 'light'}
            onChange={() => onSetTheme('light')}
            />
            <span>Light</span>
        </label>

        <label className={`flex items-center space-x-2  ${theme=='dark'?"text-gray-300":"text-black"}`}>
            <input 
            type="radio" 
            name="theme"
            checked={theme == 'dark'}
            onChange={() => onSetTheme('dark')}
            />
            <span>Dark</span>
        </label>
    </>
}