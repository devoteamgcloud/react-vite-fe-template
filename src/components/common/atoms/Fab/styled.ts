import styled from '@emotion/styled'

export const Container = styled.div<{
    position?: 'absolute' | 'fixed' | 'relative'
    bottom?: number
    right?: number
    top?: number
    left?: number
    zIndex?: number
}>`
    position: ${({ position }) => position ?? 'fixed'};
    bottom: ${({ bottom }) => bottom ?? 20}px;
    right: ${({ right }) => right ?? 20}px;
    top: ${({ top }) => top ?? 'auto'};
    left: ${({ left }) => left ?? 'auto'};
    z-index: ${({ zIndex }) => zIndex ?? 1000};
`;
