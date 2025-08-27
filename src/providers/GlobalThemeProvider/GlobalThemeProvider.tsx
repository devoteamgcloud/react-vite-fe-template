import {Global, css} from "@emotion/react"
import '../../index.css'
import {useTheme } from "../ThemeContext/provider/hooks"

export default function(){
    const {theme} = useTheme();
    
    const style = css`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color-scheme: ${theme?.colorScheme};
        font-family: ${theme?.typography.fontFamily}};
    }`

    return (
        <Global styles={style} />
    )
}