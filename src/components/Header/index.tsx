import Logo from '@/assets/images/logo.png';

import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
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

            </div>
        </header>
    )
}