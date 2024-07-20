import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_BASE_URL;

export interface UserRegisterType {
  email: string;
  password: string;
  role: string;
  full_name: string;
}

// USER LOGIN

export const userLogin = createAsyncThunk(
  "user/login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const user = await Axios.post(`${URL}user/login`, payload, {
        withCredentials: true,
      });
      return user.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// USER REGISTER

export const userRegister = createAsyncThunk(
  "users/register",
  async (payload: UserRegisterType, { rejectWithValue }) => {
    try {
      const user = await Axios.post(`${URL}user`, payload, {
        withCredentials: true,
      });
      return user.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
