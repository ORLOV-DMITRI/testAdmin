import styles from './TableRow.module.scss'
import cn from "classnames";
import {useState} from "react";
import {TFeedBack} from "@/shared/types/feedback";
import useOutsideClick from "@/shared/hooks/useOutsideClick";
import Checkbox from "@/components/ui/Checkbox";
import RowActions from "@/module/DataTable/components/RowActions";
import {TTableOptions} from "../../../../components/feedback-page/Feedback";
import {useFormatDate} from "@/shared/hooks/useFormatDate";

interface ITableRow {
    item: TFeedBack
    index: number
    isSelected: boolean
    onSelectChange: () => void
    options: TTableOptions
}

export default function TableRow({item, index, onSelectChange, isSelected, options}: ITableRow) {
    const {name, date, id, phone, isNew} = item;

    const [isOpenActions, setIsOpenActions] = useState(false);
    const ref = useOutsideClick<HTMLButtonElement>(() => setIsOpenActions(false));

    return (
        <div className={cn(styles.row, isSelected && styles.selected)} style={{zIndex: 1000 - index}}>
            <div>
                <Checkbox checked={isSelected} onChange={onSelectChange}/>
            </div>
            <div>
                <span className={cn(styles.status, isNew && styles.new)}>
                    {isNew ? 'Новый' : 'Старый'}
                </span>
            </div>
            <div>{name}</div>
            <div>{phone}</div>
            <div>{useFormatDate(new Date(date))}</div>
            <RowActions actions={options.rowActions} iref={ref} isOpen={isOpenActions}
                        toggleOpen={() => setIsOpenActions(prevState => !prevState)}/>
        </div>
    );
};

