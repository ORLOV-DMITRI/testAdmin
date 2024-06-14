'use client'
import styles from './Aside.module.scss'
import Link from "next/link";
import HomeIcon from '/public/svg/home.svg'
import VacancyfIcon from '/public/svg/briefcase-business.svg'
import CallIcon from '/public/svg/headset.svg'
import TextIcon from '/public/svg/scroll-text.svg'
import cn from "classnames";
import {usePathname} from "next/navigation";


interface IAside {

}

const pathArray = [
    {
        link: '/',
        icon: HomeIcon,
        text: 'Главная'
    },
    {
        link: '/feedback',
        icon: CallIcon,
        text: 'Обратная связь',
        new: 5
    },
    {
        link: '/vacancy',
        icon: VacancyfIcon,
        text: 'Вакансии'
    },
    {
        link: '/brief',
        icon: TextIcon,
        text: 'Брифы'
    },
]

export default function Aside({}: IAside) {
    const path = usePathname();
    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <div>Logo</div>
            </div>
            <nav className={styles.menu}>
                {pathArray.map(item => (
                    <Link href={item.link} 
                          className={cn(styles.item, path === item.link && styles.active)} 
                          key={item.link}>
                        <item.icon/>
                        {item.text}
                        {item.new && (
                            <div className={styles.countNew}>
                                {item.new}
                            </div>
                        )}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

