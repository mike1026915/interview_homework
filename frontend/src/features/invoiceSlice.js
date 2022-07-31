import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getInvoices as getInvoiceApi,
    createInvoices as createInvoicesApi
} from '../apis/invoiceApi';

export const createInvoices = createAsyncThunk('invoice/createInvoices', createInvoicesApi);
export const getInvoices = createAsyncThunk('invoice/getInvoices', getInvoiceApi);

export const lineItemSlice = createSlice({
    name: 'invoice',
    initialState: {
        invoiceLookup: [],
        isInvoicesLoading: false,
    },
    reducers: {
    },
    extraReducers: {
        [getInvoices.pending]: (state, action) => {
            state.isInvoicesLoading = true;
        },
        [getInvoices.fulfilled]: (state, action) => {
            state.invoices = action.payload;
            state.isInvoicesLoading = false;
        },
        [getInvoices.pending]: (state, action) => {
            state.isInvoicesLoading = true;
        },
        [getInvoices.fulfilled]: (state, action) => {
            state.invoiceLookup = action.payload.reduce((lookup, invoice) => {
                lookup[invoice.id] = invoice;

                return lookup;
            }, {});
            state.isInvoicesLoading = false;
        },
    }
});

export default lineItemSlice.reducer