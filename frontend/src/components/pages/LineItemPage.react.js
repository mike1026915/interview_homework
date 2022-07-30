

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import Header from '../Header.react';
import LineItemDataTable from '../LineItemDataTable.react';

import { fetchLineItemsByCampaignId } from '../../features/lineItemSlice';
import { fetchCampaignById } from '../../features/campaignSlice';

const LineItemPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchLineItemsByCampaignId(id));
        dispatch(fetchCampaignById(id));
    }, [dispatch, id])

    return (
        <>
            <Header />
            <LineItemDataTable
                campaignId={id}
            />
        </>
    )
}

export default LineItemPage;