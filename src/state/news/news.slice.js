import { createSlice } from '@reduxjs/toolkit'

import { getIds } from './news.actions'

const initialState = {
    loading: false,
    error: null,
    list: [],
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getIds.pending, (state) => {
        return state = {
            loading: true,
            error: false,
            list: [],
        };
        });
        builder.addCase(getIds.fulfilled, (state, action) => {
        return state = {
            loading: false,
            error: false,
            list: action.payload,
        };
        });
        builder.addCase(getIds.rejected, (state, action) => {
        return state = {
            loading: false,
            error: action.payload,
            list: [],
        };
        });
    }
});

export default newsSlice.reducer;