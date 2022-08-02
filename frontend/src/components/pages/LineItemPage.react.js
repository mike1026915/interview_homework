

import React, { useEffect, useState, useCallback } from 'react';

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import Header from '../Header.react';
import LineItemDataTable from '../LineItemDataTable.react';
import FilterDialog from '../FilterDialog.react';

import { fetchLineItemsByCampaignId } from '../../features/lineItemSlice';
import { fetchCampaignById } from '../../features/campaignSlice';

const LineItemPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchLineItemsByCampaignId(id));
        dispatch(fetchCampaignById(id));
    }, [dispatch, id])

    const [isFilterDialogOpened, setIsFilterDialogOpened] = useState(false);
    const [filter, setFilter] = useState('');

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
            <LineItemDataTable
                campaignId={id}
                onFilterIconClick={handleFilterIconClick}
                filter={filter}
                cleanFilter={handleCleanFilter}
            />
            <FilterDialog
                open={isFilterDialogOpened}
                onDialogClose={handleFilterDialogClose}
                onFilterSet={handleFilterSet}
                dialogTitle="Line-item Filter"
                dialogContent="Enter line-item name keyword"
            />
        </>
    )
}

export default LineItemPage;