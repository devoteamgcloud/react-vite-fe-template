import type { Theme } from "@emotion/react"
import {createContext} from 'react'


export type ThemeContext = {
    theme?: Theme
    toggleTheme?: () => void
}

export const ThemeProviderContext = createContext<ThemeContext>({ theme: undefined, toggleTheme: undefined });
