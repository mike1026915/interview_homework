

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import Header from '../Header.react';
import CampaignDataTable from '../CampaignDataTable.react';
import ConfirmDialog from '../ConfirmDialog.react';

import { fetchCampaigns } from '../../features/campaignSlice';
import { createInvoices } from '../../features/invoiceSlice';

const CampaignPage = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, [dispatch])

    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = React.useState(false);

    const handleConfirmDialogOpen = useCallback(() => {
        setIsConfirmDialogOpen(true);
    }, []);

    const handleConfirmDialogClose = useCallback(() => {
        setIsConfirmDialogOpen(false);
    }, []);

    const handleConfirmCreateInvoice = useCallback(() => {
        setIsConfirmDialogOpen(false);

        dispatch(createInvoices(selected)).then(() => {
            navigate('/invoices')
        })
    }, [dispatch, selected, navigate]);

    const handleSelected = useCallback((s) => {
        setSelected(s);
    }, [])

    return (
        <>
            <Header />
            <CampaignDataTable
                selected={selected}
                onCreateInvoiceClick={handleConfirmDialogOpen}
                setSelected={handleSelected}
            />
            <ConfirmDialog
                title="Create Invoices"
                mainText="Are you sure to create invoices?"
                primaryButtonText="Yes"
                secondaryButtonText="Cancel"
                isOpen={isConfirmDialogOpen}
                onClose={handleConfirmDialogClose}
                onPrimaryAction={handleConfirmCreateInvoice}
            />
        </>
    )
}

export default CampaignPage;