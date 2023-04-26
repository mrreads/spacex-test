import Feature from "@/components/Feature";

import styles from '@/App.module.scss';

export default () => {
    return (
        <div className={styles.right}>
            <div className={styles.features}>
                <Feature topText="мы" centerText="1" bottomText="на рынке" hoverPosition="top-left" />
                <Feature topText="гарантируем" centerText="50" bottomText="безопасность" hoverPosition="top-right" />
                <Feature topText="календарик за" centerText="2001" centerTextAdditional='г.' bottomText="в подарок" hoverPosition="bottom-left" />
                <Feature topText="путешествие" centerText="597" bottomText="дней" hoverPosition="bottom-right" />
            </div>
        </div>
    )
};