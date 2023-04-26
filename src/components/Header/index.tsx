import Logo from '@/assets/images/logo.png';

import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';

import useOnClickOutside from "@/hooks/useOnClickOutside";

export default function Header() {
    const MOBILE_WIDTH = 1200;

    const [isHeaderOpen, setHeaderOpen] = useState(false);
    const toggleOpen = () => setHeaderOpen(!isHeaderOpen);

    const refHeader = useRef(null);
    useOnClickOutside(refHeader, () => setHeaderOpen(false));

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const resizeHandler = () => (document.documentElement.clientWidth > MOBILE_WIDTH) ? setHeaderOpen(false) : null;

    return (
        <header ref={refHeader} className={styles.header} data-opened={isHeaderOpen}>
            <div className={`container ${styles.container}`}>

                <a className={styles.logo} href="#">
                    <div className={styles.borderOne} />
                    <img src={Logo} alt='Логотип' />
                    <div className={styles.borderTwo} />
                </a>

                <nav className={styles.nav}>
                    <a href='#' className={styles.item}>Главная</a>
                    <a href='#' className={styles.item}>Технология</a>
                    <a href='#' className={styles.item}>График полётов</a>
                    <a href='#' className={styles.item}>Гарантии</a>
                    <a href='#' className={styles.item}>О компании</a>
                    <a href='#' className={styles.item}>Контакты</a>
                </nav>

                <div className={styles.burger} onClick={toggleOpen}>
                    <p>|||</p>
                </div>

            </div>
        </header>
    )
}