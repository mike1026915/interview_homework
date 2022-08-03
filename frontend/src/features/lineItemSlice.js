import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getLineItems,
    getLineItemsByCampaignId,
    updateAdjustment as updateAdjustmentAction,
} from '../apis/lineItemApi';

export const fetchLineItems = createAsyncThunk('lineItem/getLineItems', getLineItems);
export const fetchLineItemsByCampaignId = createAsyncThunk('lineItem/getLineItemsByCampaignId', getLineItemsByCampaignId);
export const updateAdjustment = createAsyncThunk('lineItem/updateAdjustment', updateAdjustmentAction);

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
        [updateAdjustment.fulfilled]: (state, action) => {
            state.items.find((item) => {
                return item.id === Number(action.payload.id)
            }).adjustment = action.payload.adjustment;
        },
    }
});

export default lineItemSlice.reducer