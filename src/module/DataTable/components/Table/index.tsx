'use client'
import styles from './Table.module.scss'
import TableRow from "../TableRow";
import {TFeedBack} from "@/shared/types/feedback";
import Checkbox from "@/components/ui/Checkbox";
import useCheckboxSelection from "@/module/DataTable/hooks/useCheckboxSelection";
import {useEffect, useState} from "react";
import cn from "classnames";
import {TTableOptions} from "../../../../components/feedback-page/Feedback";
import TableTabs from "@/module/DataTable/components/TableTabs";
import {feedBackMok} from "@/mok/mok";
import RowActions from "@/module/DataTable/components/RowActions";
import useOutsideClick from "@/shared/hooks/useOutsideClick";


interface ITable {
    data: TFeedBack[]
    options: TTableOptions
}

const tabs = ['Старые', 'Новые', "Все"];
export default function Table({data, options}: ITable) {
    const {selectAll, selectedRows, handleSelectAllChange, handleRowSelectChange} = useCheckboxSelection(data);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [filteredData, setFilteredData] = useState(feedBackMok)

    useEffect(() => {
        if (activeTab === 'Старые') {
            setFilteredData(() => {
                return data.filter((item) => !item.isNew)
            })
        }
        if (activeTab === 'Новые') {
            setFilteredData(() => {
                return data.filter((item) => item.isNew)
            })
        }
        if (activeTab === 'Все') {
            setFilteredData(data)
        }

    }, [activeTab])

    useEffect(() => {
        if (selectAll) {
            handleSelectAllChange()
        }
    }, [data])
    return (
        <div className={styles.dataTable}>
            <TableTabs activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab)} tabs={tabs}/>
            <div className={cn(styles.table)}>
                <div className={cn(styles.head, selectAll && styles.active)}>
                    <div>
                        <Checkbox checked={selectAll} onChange={handleSelectAllChange}/>
                    </div>
                    {options.head.map(item => (
                        <div key={item}>{item}</div>
                    ))}
                    <div></div>
                </div>
                <div className={styles.body}>
                    {filteredData.map((item: TFeedBack, index) => (
                        <TableRow item={item} key={index} index={index} isSelected={selectedRows[index]}
                                  onSelectChange={() => handleRowSelectChange(index)}
                                  options={options}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

