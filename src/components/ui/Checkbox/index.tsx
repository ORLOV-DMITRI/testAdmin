import styles from './Checkbox.module.scss'
import {ButtonHTMLAttributes} from "react";

interface ICheckbox extends ButtonHTMLAttributes<HTMLInputElement>{
    checked: boolean;
    onChange: () => void;
} 

export default function Checkbox({checked,onChange, ...props}: ICheckbox) {
    return (
        <input className={styles.checkbox} type="checkbox" checked={checked} onChange={onChange} {...props}/>
    );
};

