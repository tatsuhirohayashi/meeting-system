import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useId, useState, type FC } from "react";
import { NavLink } from "react-router";
import { MENUES } from "../../../constants/data";
import styles from "./style.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NAVIGATION_LIST } from "../../../constants/navigation";

const data = [
  { q: "Q. 返品できますか？", a: "はい、商品到着から7日以内なら可能です。" },
  { q: "Q. 配送はどれくらい？", a: "通常2〜3営業日でお届けします。" },
  { q: "Q. 支払い方法は？", a: "クレカ・振込・代引きに対応しています。" },
];

export const SideBar: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean | null>(false);
    const [open, setOpen] = useState<number | null>(null);
    const base = useId();

    const onDrowerMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <aside className={styles.sidebarContainer}>
            <h2 className={styles.title}>サイドバー</h2>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {MENUES.map(({ to, label, icon }) => (
                        <li className={styles.li}>
                            <NavLink to={to} className={styles.link}>
                                <FontAwesomeIcon icon={icon} size="lg" />
                                <span className={styles.text}>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                    <li className={styles.li}>
                        <button
                            type="button"
                            className={styles.toggle}
                            onClick={onDrowerMenu}
                        >
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                            <span className={styles.text}>アコーディオン</span>
                            {
                                !isOpen ?
                                    <span className={styles.chevron}>+</span>
                                    :
                                    <span className={styles.chevron}>-</span>
                            }
                        </button>
                        {/*下に出るアコーディオン風のサブメニュー*/}
                        {
                            isOpen ?
                                <ul className={styles.subDrawer}>
                                    <li className={styles.subItem}>
                                        <NavLink to={NAVIGATION_LIST.LOGIN} className={styles.subLink}>
                                            <span className={styles.pointBadge}>①</span>
                                            <span className={styles.subText}>ポイント①</span>
                                        </NavLink>
                                    </li>
                                    <li className={styles.subItem}>
                                        <NavLink to={NAVIGATION_LIST.LOGIN} className={styles.subLink}>
                                            <span className={styles.pointBadge}>②</span>
                                            <span className={styles.subText}>ポイント②</span>
                                        </NavLink>
                                    </li>
                                    <li className={styles.subItem}>
                                        <NavLink to={NAVIGATION_LIST.LOGIN} className={styles.subLink}>
                                            <span className={styles.pointBadge}>③</span>
                                            <span className={styles.subText}>ポイント③</span>
                                        </NavLink>
                                    </li>
                                </ul>
                                : null
                        }
                    </li>
                </ul>
            </nav>

            <div className={styles.qaContainer}>
                {data.map((it, i) => {
                    const isOpen = open === i;
                    const btnId = `${base}-q-${i}`;
                    const panelId = `${base}-a-${i}`;
                    return (
                        <div className={styles.item} key={i}>
                            <button
                                id={btnId}
                                className={styles.question}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpen(isOpen ? null : i)}
                                type="button"
                            >
                                {it.q}
                                <span
                                    className={`${styles.chev} ${isOpen ? styles.chevronOpen : ""}`}
                                    aria-hidden
                                >
                                    ➡
                                </span>
                            </button>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={btnId}
                                aria-hidden={!isOpen}
                                className={`${styles.answer} ${isOpen ? styles.isOpen : ""}`}
                            >
                                <p>{it.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </aside>
    );
};