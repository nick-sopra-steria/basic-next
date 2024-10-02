// src/app/components/header/Header.tsx
import Link from "next/link";
import { FC } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/">Hjem</Link></li>
                <li className={styles.navItem}><Link href="/about">Om</Link></li>
                <li className={styles.navItem}><Link href="/about/deg">Om deg</Link></li>
                <li className={styles.navItem}><Link href="/companies">Firmaer</Link></li>
            </ul>
        </header>
    );
};

export default Header;