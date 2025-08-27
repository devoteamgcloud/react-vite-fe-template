import { useContext } from "react"
import { ThemeProviderContext, type ThemeContext } from "./ThemeContext"

export const useTheme = (): ThemeContext => {
    return useContext(ThemeProviderContext)
}