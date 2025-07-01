/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps, FC, ReactNode } from "react";

type EmotionButtonProps = ComponentProps<"button"> & {
    children: ReactNode;
};

const buttonStyle = css`
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

export const EmotionButton: FC<EmotionButtonProps> = ({
    type,
    children,
    onClick,
}) => (
    <button css={buttonStyle} type={type} onClick={onClick}>
        {children}
    </button>
);