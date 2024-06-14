import styles from './PageTitle.module.scss'

interface IPageTitle {
    title: string,
    subtitle: string
}

export default function PageTitle({title, subtitle}: IPageTitle) {
    return (
        <div className={styles.pageTop}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
};

