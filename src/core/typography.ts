import styled from '@emotion/styled'
import { css } from '@emotion/react'
import tokens from './tokens'

export type TypographyProps = {
  accent?: boolean
  bold?: boolean
  centered?: boolean
  color?: string
  demi?: boolean
  error?: boolean
  light?: boolean
  lowercase?: boolean
  medium?: boolean
  onAccent?: boolean
  onSecondary?: boolean
  regular?: boolean
  underline?: boolean
  uppercase?: boolean
  margin?: string
}

const shouldForwardProp = (prop: string) =>
  ![
    'accent',
    'bold',
    'centered',
    'color',
    'demi',
    'error',
    'light',
    'lowercase',
    'medium',
    'onAccent',
    'onSecondary',
    'regular',
    'underline',
    'uppercase',
    'margin',
  ].includes(prop)

const TextBaseComponent = styled('p', { shouldForwardProp })<TypographyProps>``

export const textProps = (props: TypographyProps) => css`
  ${props.uppercase && 'text-transform: uppercase;'}
  ${props.lowercase && 'text-transform: lowercase;'}
    ${props.underline && 'text-decoration: underline;'}
    ${props.centered && 'text-align: center;'}
    ${props.color && `color: ${props.color};`}
    ${props.bold && 'font-weight: bold;'}
    ${props.demi && 'font-weight: 600;'}
    ${props.margin && `margin: ${props.margin};`}
`

const BodyLarge = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.LARGE}px;
  line-height: ${tokens.text.lineHeight * 3.5}px;
  ${textProps}
`

const BodyMedium = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.MEDIUM}px;
  line-height: 20px;
  ${textProps}
`

const BodyBase = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.BASELINE}px;
  line-height: ${tokens.text.lineHeight * 3}px;
  ${textProps}
`

const BodySmall = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.SMALL}px;
  line-height: ${tokens.text.lineHeight * 3}px;
  ${textProps}
`

const BodyXSmall = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.SMALL - 2}px;
  line-height: ${tokens.text.lineHeight * 3}px;
  ${textProps}
`

export const Heading1 = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.HEADING_LARGE}px;
  ${textProps}

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.text.fontSize.HEADING_MEDIUM}px;
  }

  @media (max-width: ${tokens.breakpoints.tabletLarge}) {
    font-size: ${tokens.text.fontSize.HEADING_SMALL}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: ${tokens.text.fontSize.MEDIUM}px;
  }
`

const Heading2 = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.HEADING_MEDIUM}px;
  ${textProps}

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.text.fontSize.MEDIUM}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: ${tokens.text.fontSize.SMALL}px;
  }
`

const Heading3 = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.HEADING_SMALL}px;
  ${textProps}

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.text.fontSize.HEADING_SMALL}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: ${tokens.text.fontSize.MEDIUM}px;
`

export const Typography = {
  BodyLarge,
  BodyMedium,
  BodySmall,
  BodyBase,
  BodyXSmall,
  Heading1,
  Heading2,
  Heading3,
}
