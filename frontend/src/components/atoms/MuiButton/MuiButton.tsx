import { Button } from "@mui/material";
import type { ComponentProps, FC, ReactNode } from "react";

type MUIButtonProps = ComponentProps<"button"> & {
    children: ReactNode;
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

export const MUIButton: FC<MUIButtonProps> = ({
    type = "button",
    children,
    onClick,
    variant = "contained",
    color = "primary",
}) => {
    return (
        <Button type={type} onClick={onClick} variant={variant} color={color} fullWidth sx={{
            py: 2.5,
            px: 2.5,
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "normal",
        }} >
            {children}
        </Button>
    );
};