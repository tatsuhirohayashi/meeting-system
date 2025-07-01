import type { ComponentProps, FC } from "react";
import styles from "./style.module.css";
import { TextArea } from "../../atoms";
// import { MuiTextArea } from "../../atoms";

type TextAreaSectionProps = ComponentProps<"textarea"> & {
    errorMessage?: string;
    label?: string;
};

export const TextAreaSection: FC<TextAreaSectionProps> = (props) => (
    <>
        <p className={styles.item}>{props.label}</p>
        <TextArea placeholder={"Content"} {...props} />
        {props?.errorMessage && (
            <p className={styles.error}>{props.errorMessage}</p>
        )}
        {/* <MuiTextArea placeholder={"Content"} {...props} />
        {props?.errorMessage && (
            <p className={styles.error}>{props.errorMessage}</p>
        )} */}
    </>
);