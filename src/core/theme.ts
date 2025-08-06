const neutrals = {
    black: '#0F0F0F',
    blackOpacity: '#00000010',
    grayOpacity: '#D1D5DBB3',
    white: '#FFFFFF',
    whiteOpacity: '#FFFFFFE6',
}

const brandColors = {
    primary: '#',
    secondary: '#',
    tertiary: '#'
}

const background = {
    primaryGrey: '#EFEFE9',
    secondaryGrey: '#F5F5F5',
    tertiaryGrey: '#CCCCCC',
}

const systemColors = {
    error: '#',
    danger: '#',
    success: '#',
    warning: '#',
}

const textColors = {
    primary: '#000000E5',
    secondary: '#0000009E',
    disabled: '#0000006D',
    iconColor: '#3C4A63',
    black: neutrals.black,
}

const hover = {
    primaryGrey: '#EFEFE966',
}


const brandPalette = {
    // Primary
    primary: brandColors.primary,
    secondary: brandColors.secondary,
    tertiary: brandColors.tertiary,

    // Background
    primaryBackground: background.primaryGrey,
    secondaryBackground: background.secondaryGrey,
    tertiaryBackground: background.tertiaryGrey,

    // System colors
    error: systemColors.error,
    danger: systemColors.danger,
    success: systemColors.success,
    warning: systemColors.warning,

    // Neutrals
    black: neutrals.black,
    white: neutrals.white,
    boxShadow: neutrals.blackOpacity,
    scrollBar: neutrals.grayOpacity,

    // Text
    text: {
        primary: textColors.primary,
        secondary: textColors.secondary,
        disabled: textColors.disabled,
        iconColor: textColors.iconColor,
        black: textColors.black,
    },
   

    // Hover
    hoverPrimaryBackground: hover.primaryGrey,
    hoverIconDisabled: background.tertiaryGrey,

    // Buttons
    primaryButton: brandColors.primary,
}

type ButtonVariantStyle = {
    background: string
    text: string
    hover: string
    border: string
}

type ButtonStyles = {
 
    [key: string]: {
        filled: ButtonVariantStyle
        outlined: ButtonVariantStyle
    }
}

type ThemeConfig = {
    colors: {
        primary: string
        secondary: string
        tertiary: string

        primaryBackground: string
        secondaryBackground: string
        tertiaryBackground: string

        error: string
        danger: string
        success: string
        warning: string

        black: string
        white: string

        boxShadow: string
        scrollBar: string

        text: {
            primary: string
            secondary: string
            disabled: string
            iconColor: string
        }

    }
    typography: {
        fontFamily?: string
        fontSize?: number
    }
    buttonStyles: ButtonStyles
}

const light: ThemeConfig = {
    colors: {
        ...brandPalette,
        
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 16,
    },
    buttonStyles: {
        primary: {
            filled: {
                background: brandPalette.primaryButton,
                text: brandPalette.white,
                border: 'none',
                hover: brandPalette.primaryButton,
            },
            outlined: {
                background: 'transparent',
                text: brandPalette.primaryButton,
                border: `inset 0 0 0 1px ${brandPalette.primaryButton}`,
                hover: brandPalette.primaryButton,
            },
        },
        danger: {
            filled: {
                text: brandPalette.white,
                border: 'none',
                background: brandPalette.danger,
                hover: brandPalette.danger,
            },
            outlined: {
                background: 'transparent',
                text: brandPalette.danger,
                border: `inset 0 0 0 1px ${brandPalette.danger}`,
                hover: brandPalette.danger,
            },
        },
    },
}

export const themes = {
    light,
}

declare module '@emotion/react' {
    export interface Theme {
        colors: ThemeConfig['colors']
        typography: ThemeConfig['typography']
        buttonStyles: ThemeConfig['buttonStyles']
    } 
}