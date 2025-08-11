// https://dev.to/gerryleonugroho/responsive-design-breakpoints-2025-playbook-53ih#:~:text=Breakpoints%20are%20specific%20screen%20widths,keeping%20users%20engaged%20and%20satisfied.

const breakpoints = {
  laptop: '1600px',
  tablet: '911px',
  tabletLarge: '1025px',
  phone: '480px',
}

const text = {
  lineHeight: 6,
  fontSize: {
    SMALL: 14,
    BASELINE: 16,
    MEDIUM: 20,
    LARGE: 24,
    HEADING_SMALL: 32,
    HEADING_MEDIUM: 48,
    HEADING_LARGE: 64,
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
}

const padding = {
  ZERO: 0,
  BASELINE: 8,
  CONTAINER: 40,
}

const borderRadius = {
  ZERO: 0,
  BASELINE: 8,
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
  ROUND: 50,
}

const margin = {
  ZERO: 0,
  BASELINE: 8,
}

const spacing = {
  ZERO: 0,
  BASELINE: 8,
}

const gap = {
  BASELINE: 8,
  LARGE: 16,
}

const size = {
  BASELINE: 8,
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
}

const fabSize = {
  small: 40,
  medium: 56,
  large: 72,
}

const tokens = {
  breakpoints,
  gap,
  padding,
  margin,
  spacing,
  text,
  borderRadius,
  size,
  fabSize,
}

export default tokens
