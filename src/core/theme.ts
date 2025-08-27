const neutrals = {
  black: '#0F0F0F',
  blackOpacity: '#00000010',
  grayOpacity: '#D1D5DBB3',
  white: '#FFFFFF',
  whiteOpacity: '#FFFFFFE6',
}

const brandColors = {
  primary: '#f8485e',
  secondary: '#3c3c3a',
  tertiary: '#fca2ae',
}

const background = {
  primaryGrey: '#f4f4f4',
  secondaryGrey: '#F5F5F5',
  tertiaryGrey: '#CCCCCC',
}

const systemColors = {
  error: '#D32F2F',
  danger: '#C62828',
  success: '#10B981',
  warning: '#FACC15',
  info: '#0EA5E9',
}

const textColors = {
  primary: '#000000E5',
  secondary: '#FFFFFF',
  disabled: '#0000006D',
  iconColor: '#3C4A63',
  black: neutrals.black,
  white: neutrals.white,
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
  info: systemColors.info,

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
    white: textColors.white,
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
  hover?: { background: string; text: string }
  border: string
}

type ButtonStyles = {
  [key: string]: {
    filled: ButtonVariantStyle
    outlined?: ButtonVariantStyle
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
    info: string

    black: string
    white: string

    boxShadow: string
    scrollBar: string

    text: {
      primary: string
      secondary: string
      disabled: string
      iconColor: string
      white: string
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
    fontFamily: "'Montserrat', Inter, sans-serif",
    fontSize: 16,
  },
  buttonStyles: {
    primary: {
      filled: {
        background: brandPalette.primaryButton,
        text: brandPalette.white,
        border: 'none',
      },
      outlined: {
        background: 'transparent',
        text: brandPalette.primaryButton,
        border: `inset 0 0 0 2px ${brandPalette.primaryButton}`,
        hover: {
          background: brandPalette.primaryButton,
          text: brandPalette.white,
        },
      },
    },
    secondary: {
      filled: {
        background: brandPalette.primaryBackground,
        text: brandPalette.text.primary,
        border: 'none',
      },
      outlined: {
        background: 'transparent',
        text: brandPalette.secondary,
        border: `inset 0 0 0 1px ${brandPalette.secondary}`,
        hover: {
          background: brandPalette.secondary,
          text: brandPalette.white,
        },
      },
    },
    danger: {
      filled: {
        background: brandPalette.danger,
        text: brandPalette.white,
        border: 'none',
      },
    },
    success: {
      filled: {
        background: brandPalette.success,
        text: brandPalette.white,
        border: 'none',
      },
    },
    info: {
      filled: {
        background: brandPalette.info,
        text: brandPalette.white,
        border: 'none',
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

export default themes.light
