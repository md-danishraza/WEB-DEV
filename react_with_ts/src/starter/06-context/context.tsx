import { createContext,useContext,useState } from "react";

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderState = {
    theme:Theme,
    setTheme:(theme:Theme)=>void;
}

const ThemeProviderContext = createContext< ThemeProviderState | null>(null);

export const getContext = () => {
    const context =  useContext(ThemeProviderContext);
    if(!context){
        throw new Error("get Context should be used within Theme provider wrapped component")
    }
    return context;
};

export default function ThemeProvider({children}:{children:React.ReactNode}){
    
    const [theme,setTheme] = useState<Theme>("system");
    return (
        <ThemeProviderContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeProviderContext.Provider>
    )
}