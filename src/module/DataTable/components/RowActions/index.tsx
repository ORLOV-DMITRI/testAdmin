import styles from './RowActions.module.scss'
import cn from "classnames";
import DotsIcon from "/public/svg/dots.svg";
import {RefObject} from "react";

interface ITableActions {
    iref: RefObject<HTMLButtonElement>
    isOpen: boolean,
    toggleOpen: () => void
    actions: any
}

export default function RowActions({iref, isOpen, toggleOpen, actions}: ITableActions) {
    return (
        <button ref={iref} className={cn(styles.actions, isOpen && styles.active)}
                onClick={toggleOpen}
        >
            <DotsIcon/>
            <ul className={cn(styles.menuActions)}>
                {actions.map((item: any, index: number) => (
                    <span onClick={() => item.function()} key={index}>{item.name}</span>
                ))}
            </ul>
        </button>
    );
};

