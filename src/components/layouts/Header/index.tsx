import styles from './Header.module.scss'
import MokImg from '/public/image/placeholder-user.webp'
import MokSvg from '/public/svg/user.svg'
import Image from "next/image";
interface IHeader {

}

export default function Header({}: IHeader) {
    return (
        <header className={styles.header}>
            <div className={styles.searchBlock}>
                <input type="text" placeholder="Начните искать"/>
            </div>
            <button className={styles.user}>
                <MokSvg/>
            </button>
        </header>
    );
};

