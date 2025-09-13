import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthState = () => {
    return useContext(AuthContext)
}