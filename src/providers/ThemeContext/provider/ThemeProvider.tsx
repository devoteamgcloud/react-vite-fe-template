import { useState, type PropsWithChildren } from 'react'

import type { Theme } from '@emotion/react';
import { themes } from '../../../core/theme';
import { ThemeProvider as DefaultThemeProvider } from '@emotion/react'
import { ThemeProviderContext } from '../provider/ThemeContext';
import GlobalThemeProvider from '../../GlobalThemeProvider/GlobalThemeProvider';



export const ThemeProvider =  ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(themes.light)

    const toggleTheme = () => {
        theme.colorScheme === "light"
            ? setTheme(themes.dark)
            : setTheme(themes.light)
    }
    return (
        <ThemeProviderContext value={{theme, toggleTheme}}>
            <DefaultThemeProvider theme={theme}>
                <GlobalThemeProvider />
                {children}
            </DefaultThemeProvider>
        </ThemeProviderContext>
    )
}