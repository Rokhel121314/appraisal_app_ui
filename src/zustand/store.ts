import { create } from "zustand";
import Axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;

interface UserType {
  email: string;
  full_name: string;
  role: "PROCESSOR" | "APPRAISER";
  user_id?: string;
}

interface InitialStateType extends UserType {
  status: "loading" | "idle" | "failed";
  error_message?: string;
}

interface UserState {
  initialState: InitialStateType;
  addUser: (payload: UserType) => void;
  loginUser: (payload: { email: string; password: string }) => void;
}

const initialState: InitialStateType = {
  email: "",
  full_name: "",
  role: "APPRAISER",
  user_id: "",
  status: "idle",
  error_message: "",
};

const useUserStore = create<UserState>((set) => ({
  initialState: initialState,

  addUser: async (payload: UserType) => {
    set((state) => ({ ...state, status: "loading" }));
    try {
      const user = await Axios.post(
        `${URL}/user`,
        { payload },
        { withCredentials: true }
      );
      set((state) => ({
        initialState: (state.initialState = user.data),
        status: "idle",
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        status: "loading",
        error_message: error.message,
      }));
    }
  },

  loginUser: async (payload: { email: string; password: string }) => {
    console.log("payload:", payload);

    set((state) => ({ ...state, status: "loading" }));
    try {
      const user = await Axios.post(`${URL}/user/login`, payload, {
        withCredentials: true,
      });
      set((state) => ({
        initialState: (state.initialState = user.data),
        status: "idle",
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        status: "loading",
        error_message: error,
      }));
    }
  },
}));

export default useUserStore;
