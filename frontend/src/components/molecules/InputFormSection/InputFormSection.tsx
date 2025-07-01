import type { ComponentProps, FC } from "react";
import { InputForm } from "../../atoms";
import styles from "./style.module.css";
// import { MuiInputForm } from "../../atoms";

type InputFormSectionProps = ComponentProps<"input"> & {
    errorMessage?: string;
    label?: string;
};

export const InputFormSection: FC<InputFormSectionProps> = (props) => (
    <>
        <p className={styles.item}>{props.label}</p>
        <InputForm placeholder={"Title"} {...props} />
        {props?.errorMessage && (
            <p className={styles.error}>{props.errorMessage}</p>
        )}
        {/* <MuiInputForm placeholder={"Title"} {...props} />
        {props?.errorMessage && (
            <p className={styles.error}>{props.errorMessage}</p>
        )} */}
    </>
);