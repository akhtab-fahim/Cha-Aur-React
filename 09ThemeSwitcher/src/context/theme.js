import React, { createContext,useContext } from "react";

export const ThemeContext = createContext({
    thememode : "light",
    darktheme: ()=>{},
    lightTheme : ()=>{},
});

export const ThemeProvider = ThemeContext.provider

export default function useTheme(){
    return useContext(ThemeContext)
}