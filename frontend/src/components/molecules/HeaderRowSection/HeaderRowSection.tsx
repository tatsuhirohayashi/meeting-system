import type { FC } from "react";
import styles from "./style.module.css";

export const HeaderRowSection: FC = () => (
    <>
        <div className={styles.headerRow} >
            <div className={styles.headerCell}>申込日</div>
            <div className={styles.headerCell}>申込者</div>
            <div className={styles.headerCell}>相談概要</div>
        </div>
    </>
);