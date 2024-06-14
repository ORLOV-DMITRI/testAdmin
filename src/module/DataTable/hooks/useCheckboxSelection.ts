import { useState, useCallback } from 'react';

const useCheckboxSelection = (initialItems: any[]) => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState<boolean[]>(initialItems.map(() => false));

    const handleSelectAllChange = useCallback(() => {
        setSelectAll((prev) => {
            const newSelectAll = !prev;
            setSelectedRows(initialItems.map(() => newSelectAll));
            return newSelectAll;
        });
    }, [initialItems]);

    const handleRowSelectChange = useCallback((index: number) => {
        setSelectedRows((prev) => {
            const updatedSelectedRows = [...prev];
            updatedSelectedRows[index] = !updatedSelectedRows[index];
            setSelectAll(updatedSelectedRows.every((selected) => selected));
            return updatedSelectedRows;
        });
    }, []);

    return {
        selectAll,
        selectedRows,
        handleSelectAllChange,
        handleRowSelectChange,
    };
};

export default useCheckboxSelection;
