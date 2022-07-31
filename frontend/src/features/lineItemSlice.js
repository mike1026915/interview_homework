import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getLineItems,
    getLineItemsByCampaignId
} from '../apis/lineItemApi';

export const fetchLineItems = createAsyncThunk('lineItem/getLineItems', getLineItems);
export const fetchLineItemsByCampaignId = createAsyncThunk('lineItem/getLineItemsByCampaignId', getLineItemsByCampaignId);

export const lineItemSlice = createSlice({
    name: 'lineItem',
    initialState: {
        items: [],
        isItemLoading: false,
    },
    reducers: {
    },
    extraReducers: {
        [fetchLineItems.pending]: (state, action) => {
            state.isItemLoading = true;
        },
        [fetchLineItems.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isItemLoading = false;
        },
        [fetchLineItemsByCampaignId.pending]: (state, action) => {
            state.isItemLoading = true;
        },
        [fetchLineItemsByCampaignId.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isItemLoading = false;
        },
    }
});

export default lineItemSlice.reducer