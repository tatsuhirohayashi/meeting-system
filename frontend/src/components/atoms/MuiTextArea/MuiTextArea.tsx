import { TextField } from "@mui/material";
import type { ComponentProps, FC } from "react";

type MuiTextAreaProps = ComponentProps<"textarea"> & {
    label?: string;
};

export const MuiTextArea: FC<MuiTextAreaProps> = ({
    disabled = false,
    value,
    placeholder,
    onChange,
    label,
}) => (
    <TextField
        fullWidth
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        label={label}
        multiline
        minRows={10}
        variant="outlined"
        sx={{
            backgroundColor: "#ebe7e7",
            fontFamily: `"Times New Roman", Times, serif`,
            fontSize: "18px",
            "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                padding: "10px",
            },
            "& textarea": {
                color: "#000",
                fontSize: "18px",
                fontFamily: `"Times New Roman", Times, serif`,
                padding: 0,
                resize: "none",
            },
            "& textarea::placeholder": {
                color: "#c0c0c0",
            },
        }}
    />
);