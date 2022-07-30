

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Header from '../Header.react';
import CampaignDataTable from '../CampaignDataTable.react';

import { fetchCampaigns } from '../../features/campaignSlice';

const CampaignPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, [dispatch])

    return (
        <>
            <Header />
            <CampaignDataTable />
        </>
    )
}

export default CampaignPage;