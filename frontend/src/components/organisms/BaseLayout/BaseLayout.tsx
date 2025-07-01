import type { FC, ReactNode } from "react";
import styles from "./style.module.css";
import { Navigation } from "../../molecules";

type BaseLayoutProps = {
    children: ReactNode;
    title: string;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children, title }) => (
    <div>
        <header className={styles.header}>
            <Navigation />
        </header>
        <main className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </main>
    </div>
);