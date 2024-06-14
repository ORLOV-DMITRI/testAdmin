import styles from './TableTabs.module.scss'
import cn from "classnames";

interface ITableTabs {
    activeTab: string
    tabs: string[]
    setActiveTab: (tab: string) => void
}

export default function TableTabs({tabs, activeTab, setActiveTab}: ITableTabs) {
    return (
        <div className={styles.tabs}>
            {tabs.map((tab, index) => (
                <button key={index} className={cn(styles.tab, activeTab === tab && styles.active)}
                        onClick={() => setActiveTab(tab)}>{tab}</button>
            ))}
        </div>
    );
};

