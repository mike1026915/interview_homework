import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'

import Header from '../Header.react';
import InvoiceDataTable from '../InvoiceDataTable.react';
import FilterDialog from '../FilterDialog.react';

import { getInvoices } from '../../features/invoiceSlice';

const InvoicePage = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState([]);
    const [isFilterDialogOpened, setIsFilterDialogOpened] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(getInvoices());
    }, [dispatch])

    const handleSelected = useCallback((s) => {
        setSelected(s);
    }, [])

    const handleFilterIconClick = useCallback(() => {
        setIsFilterDialogOpened(true);
    }, []);

    const handleFilterDialogClose = useCallback(() => {
        setIsFilterDialogOpened(false);
    }, []);

    const handleFilterSet = useCallback((keyword) => {
        setFilter(keyword);
        setIsFilterDialogOpened(false);
    }, []);

    const handleCleanFilter = useCallback((keyword) => {
        setFilter('');
    }, []);

    return (
        <>
            <Header />
            <InvoiceDataTable
                selected={selected}
                setSelected={handleSelected}
                onFilterIconClick={handleFilterIconClick}
                filter={filter}
                cleanFilter={handleCleanFilter}
            />
            <FilterDialog
                open={isFilterDialogOpened}
                onDialogClose={handleFilterDialogClose}
                onFilterSet={handleFilterSet}
                dialogTitle="Invoice Filter"
                dialogContent="Enter invoice name keyword"
            />
        </>
    )
}

export default InvoicePage;