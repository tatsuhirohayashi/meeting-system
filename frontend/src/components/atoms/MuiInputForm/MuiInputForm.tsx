import { TextField } from "@mui/material";
import type { ComponentProps, FC } from "react";

type MuiInputFormProps = ComponentProps<"input"> & {
    label?: string;
};

export const MuiInputForm: FC<MuiInputFormProps> = ({
    disabled = false,
    type = "text",
    value,
    placeholder,
    onChange,
    onKeyDown,
    label,
}) => (
    <TextField
        fullWidth
        disabled={disabled}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        label={label}
        variant="outlined"
        sx={{
            backgroundColor: "#ebe7e7",
            input: {
                color: "#000",
                fontSize: "18px",
                fontFamily: `"Times New Roman", Times, serif`,
                padding: "10px",
            },
            "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
            },
            "& input::placeholder": {
                color: "#c0c0c0",
            },
        }}
    />
);