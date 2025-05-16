// src/features/materi/materiSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMateri = createAsyncThunk(
    'materi/fetchMateri',
    async ({ courseSlug, sectionId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/materi/${courseSlug}/section/${sectionId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Gagal memuat materi');
        }
    }
);

const materiSlice = createSlice({
    name: 'materi',
    initialState: {
        materials: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearMateri: (state) => {
            state.materials = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMateri.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMateri.fulfilled, (state, action) => {
                state.loading = false;
                state.materials = action.payload;
            })
            .addCase(fetchMateri.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearMateri } = materiSlice.actions;

export default materiSlice.reducer;
