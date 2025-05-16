import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ==============================
// Async Thunks
// ==============================

// Ambil semua forum untuk course dan section
export const fetchForums = createAsyncThunk(
    "forum/fetchForums",
    async ({ courseSlug, sectionId }) => {
        const response = await axios.get(`/api/forum/${encodeURIComponent(courseSlug)}/${sectionId}`);
        return response.data;
    }
);

// Ambil semua balasan untuk forum tertentu
export const fetchReplies = createAsyncThunk(
    "forum/fetchReplies",
    async (forumId) => {
        const response = await axios.get(`http://localhost:5000/api/forum/${forumId}/replies`);
        return response.data;
    }
);

// Buat balasan baru
export const createReply = createAsyncThunk(
    "forum/createReply",
    async ({ forumId, userId, content, token }) => {
        const response = await axios.post(
            `http://localhost:5000/api/forum/${forumId}/replies`,
            { user_id: userId, content },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    }
);

// Edit balasan
export const updateReply = createAsyncThunk(
    "forum/updateReply",
    async ({ replyId, content, token }, thunkAPI) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/forum-reply/${replyId}`,
                { content },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Gagal mengedit balasan");
        }
    }
);

// ✅ HANYA SEKALI
export const deleteReply = createAsyncThunk(
    "forum/deleteReply",
    async ({ replyId, token }, thunkAPI) => {
        try {
            await axios.delete(`http://localhost:5000/api/forum-reply/${replyId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return replyId;
        } catch (error) {
            return thunkAPI.rejectWithValue("Gagal menghapus balasan");
        }
    }
);


// ==============================
// Slice
// ==============================
const forumSlice = createSlice({
    name: "forum",
    initialState: {
        forums: [],
        replies: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearReplies: (state) => {
            state.replies = [];
        },
    },
    extraReducers: (builder) => {
        builder

            // Forums
            .addCase(fetchForums.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchForums.fulfilled, (state, action) => {
                state.loading = false;
                state.forums = action.payload;
            })
            .addCase(fetchForums.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Replies
            .addCase(fetchReplies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReplies.fulfilled, (state, action) => {
                state.loading = false;
                state.replies = action.payload;
            })
            .addCase(fetchReplies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Create Reply
            .addCase(createReply.fulfilled, (state, action) => {
                state.replies.push(action.payload);
            })

            // Update Reply
            .addCase(updateReply.fulfilled, (state, action) => {
                const index = state.replies.findIndex((r) => r.id === action.payload.id);
                if (index !== -1) {
                    state.replies[index] = action.payload;
                }
            })

            // Delete Reply
            .addCase(deleteReply.fulfilled, (state, action) => {
                state.replies = state.replies.filter((r) => r.id !== action.payload);
            });
    },
});

// ==============================
// Exports
// ==============================
export const { clearReplies } = forumSlice.actions;
export default forumSlice.reducer;
