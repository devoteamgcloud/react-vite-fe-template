// Inspired by: https://codepen.io/hardik-chaudhary/pen/GGjQyx
import React from "react";
import styled from "@emotion/styled";
import { css, type Theme } from "@emotion/react";
import { Typography as T } from "../../../../core/typography";

type Variant = "square" | "round" | "strip";

type StyledSwitchProps = {
    variant: Variant;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    theme?: Theme,
    width?: number | string;
    text?: string
}

const SwitchRoot = styled.label<{ variant: Variant; width?: number | string }>`
  --w: ${({ width = 50 }) => (typeof width === "number" ? `${width}px` : width)};
  --h: calc(var(--w) / 2);

  position: relative;
  display: inline-block;
  width: var(--w);
  height: var(--h);
  margin: 15px 0;
  cursor: pointer;

  ${({ variant }) =>
        variant === "strip"
            ? css`
                --h: 12px;
                `
            : null}
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const Slider = styled.span<{ variant: Variant, theme?: Theme }>`
  --k: ${({ variant }) =>
        variant === "strip" ? "calc(var(--h) * 1.92)" : "calc(var(--h) - 2px)"};
  --dx: calc(var(--w) - var(--k) - 2px);

  position: absolute;
  inset: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme?.colors.tertiaryBackground ?? ""};
  transition: 0.4s;

  border-radius: ${({ variant }) =>
        variant === "round" ? "999px" : variant === "strip" ? "7px" : "0"};

  input:focus + & {
    box-shadow: 0 0 6px ${({ theme }) => theme?.colors.tertiaryBackground ?? ""};
  }

  input:checked + & {
    background-color: ${({ theme }) => theme?.colors.primary ?? ""};
  }

  &::before {
    content: "";
    position: absolute;
    height: var(--k);
    width: var(--k);
    left: 1px;
    bottom: ${({ variant }) =>
        variant === "strip" ? "calc((var(--k) - var(--h)) / -2)" : "1px"};
    transition: 0.4s;

    background: ${({ theme }) => theme?.colors.primary ?? ""};
    border-radius: ${({ variant }) => (variant === "square" ? "0" : "50%")};

    box-shadow: ${({ variant, theme }) =>
        variant === "strip" ? `0 0 10px 3px ${theme?.colors.boxShadow ?? ""}` : "none"};
  }

  input:checked + &::before {
    transform: translateX(var(--dx));
    background: #fff;
  }
`;

export const StyledSwitch: React.FC<StyledSwitchProps> = ({
    variant,
    onChange,
    theme,
    width,
    text,
    ...inputProps
}) => {
    return (
        <div style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
            <label style={{ fontSize: theme?.typography.fontSize }}>
                <T.Paragraph2 color={theme?.colors.text.primary}>
                    {text}
                </T.Paragraph2>
            </label>
            <SwitchRoot variant={variant} width={width}>
                <HiddenCheckbox type="checkbox" onChange={onChange} {...inputProps} />
                <Slider variant={variant} theme={theme} />
            </SwitchRoot>
        </div>
    );
};
