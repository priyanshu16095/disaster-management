import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {return localStorage.getItem('theme') || 'light'})

    useEffect(() => {
        document.documentElement.setAttribute('theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider

export const ThemeState = () => {
    return useContext(ThemeContext)
}