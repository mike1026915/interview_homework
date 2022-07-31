import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'

import Header from '../Header.react';
import InvoiceDataTable from '../InvoiceDataTable.react';

import { getInvoices } from '../../features/invoiceSlice';

const InvoicePage = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        dispatch(getInvoices());
    }, [dispatch])

    const handleSelected = useCallback((s) => {
        setSelected(s);
    }, [])

    return (
        <>
            <Header />
            <InvoiceDataTable
                selected={selected}
                setSelected={handleSelected}
            />
        </>
    )
}

export default InvoicePage;