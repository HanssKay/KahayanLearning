import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// registerStudent thunk
export const registerStudent = createAsyncThunk(
    "auth/registerStudent",
    async (formDataToSend, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/registrants/register",
                formDataToSend,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }
            );

            // ✅ Hanya reject jika tidak ada response.data (misal network error)
            if (!response.data) {
                return rejectWithValue({ message: "Tidak ada response dari server" });
            }

            // ✅ Langsung return response.data (tanpa cek success)
            return response.data;

        } catch (err) {
            // ✅ Hanya untuk error network/500
            return rejectWithValue({
                message: err.response?.data?.message || "Terjadi kesalahan server"
            });
        }
    }
);
// Login Siswa
export const loginStudent = createAsyncThunk(
    "auth/loginStudent",
    async (userData) => {
        const response = await axios.post("http://localhost:5000/api/studentLog/login", userData);
        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerStudent.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(loginStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(loginStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
