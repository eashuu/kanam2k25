// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a User Context
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};

// Create a provider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : {};
    });

    // Update localStorage whenever userData changes
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};
