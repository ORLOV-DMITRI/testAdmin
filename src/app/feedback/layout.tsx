import cn from "classnames";
import Aside from "../../components/layouts/Aside";
import Header from "../../components/layouts/Header";
import styles from "@/components/feedback-page/Feedback/Feedback.module.scss";
import PageTitle from "@/components/ui/PageTitle";
import Table from "@/module/DataTable/components/Table";
import {feedBackMok} from "@/mok/mok";

export default function FeedBackLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={'page'}>
            <PageTitle title='Обратная связь' subtitle='Посмотрите обратную свзяь'/>
            {children}
        </div>
    );
}
