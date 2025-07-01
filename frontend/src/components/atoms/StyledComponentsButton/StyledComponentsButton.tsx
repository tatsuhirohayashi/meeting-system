import styled from "styled-components";
import type { ComponentProps, FC, ReactNode } from "react";

export type StyledComponentsButtonProps = ComponentProps<"button"> & {
    children: ReactNode;
};

const StyledButton = styled.button`
  display: block;
  width: 100%;
  background-color: #ff9900;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  appearance: none;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #d87e00;
  }
`;

export const StyledComponentsButton: FC<StyledComponentsButtonProps> = ({
    type,
    children,
    onClick,
}) => (
    <StyledButton type={type} onClick={onClick}>
        {children}
    </StyledButton>
);