import React from "react"
import type { ChangeEventHandler } from "react"
import { StyledSwitch } from "./styled"
import { useTheme } from "../../../../providers/ThemeContext"

type Props = {
    variant: "square" | "round" | "strip"
    onChange: ChangeEventHandler<HTMLInputElement>
    text: string
    width?: number | string
}

const Switch: React.FC<Props> = ({ variant, onChange, width, text, ...rest }) => {
    const { theme } = useTheme()
    return <StyledSwitch theme={theme} text={text} variant={variant} onChange={onChange} width={width} {...rest} />
}

export default Switch
