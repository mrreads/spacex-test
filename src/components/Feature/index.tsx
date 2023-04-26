import styles from './Feature.module.scss';

interface IProps {
    topText: string, 
    centerText: string,
    bottomText: string,
    hoverPosition: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
}
export default function Feature({ topText, centerText, bottomText, hoverPosition }: IProps) {
    return (
    <div className={styles.feature} data-hover={hoverPosition}>
        <p className={styles.top}>{topText}</p>
        <p className={styles.center}>{centerText}</p>
        <p className={styles.bottom}>{bottomText}</p>
    </div>
    )
}