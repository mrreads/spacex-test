import { Parallax } from 'react-scroll-parallax';

import styles from '@/App.module.scss';

export default () => {
    return(
        <div className={styles.center}>
            <div className={styles.planet} />
            <Parallax speed={5}>
            <div className={styles.rocketWrapper}>
                <div className={styles.button}>
                <div className={styles.borderOne} />
                <div className={styles.lineOne} />
                <p>Начать путешествие</p>
                <div className={styles.borderTwo} />
                <div className={styles.lineTwo} />
                </div>
                <div className={styles.lines}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                </div>
                <div className={styles.rocket} />
            </div>
            </Parallax>
        </div>
    )
};