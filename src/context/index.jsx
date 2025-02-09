import { createContext, useEffect, useState } from "react";

const context = createContext()
// drak mode light mood context

const Provider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        // For Tailwind CSS dark mode
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // For custom data-theme styles
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        < context.Provider value={{ darkMode, setDarkMode }} >
            {children}
        </context.Provider>
    )



}


export { context, Provider };
