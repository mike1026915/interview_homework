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
        items: []
    },
    reducers: {
    },
    extraReducers: {
        [fetchLineItems.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchLineItemsByCampaignId.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
    }
});

export default lineItemSlice.reducer