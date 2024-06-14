'use client'
import styles from './Feedback.module.scss'
import PageTitle from "@/components/ui/PageTitle";
import Table from "../../../module/DataTable/components/Table";
import TableTabs from "@/module/DataTable/components/TableTabs";
import {useEffect, useState} from "react";
import {feedBackMok} from "@/mok/mok";

interface IFeedBack {

}



export type TTableOptions = {
    head: string[],
    headActions: any,
    rowActions: any,
}
const tableOptions:TTableOptions = {
    head: ['Статус', 'Имя' , 'Телефон' , 'Дата'],
    headActions: [
        {
            name: 'Удалить все',
            function: () => {
                console.log('Удалить все')
            }
        },
    ],
    rowActions: [
        {
            name: 'Удалить',
            function: () => {
                console.log('Удалить')
            }
        },
        {
            name: 'Посмотреть',
            function: () => {
                console.log('Посмотреть')
            }
        },
    ]
}

export default function Feedback({}: IFeedBack) {

    return (
        <Table data={feedBackMok} options={tableOptions}/>
    );
};

