import { create } from "zustand";
import Axios from "axios";
import { devtools } from "zustand/middleware";

const URL = import.meta.env.VITE_BASE_URL;

interface UserType {
  email: string;
  full_name: string;
  role: "PROCESSOR" | "APPRAISER";
  user_id?: string;
}

interface InitialStateType {
  user: UserType;
  status: "loading" | "idle" | "failed";
  message?: string;
}

interface UserState {
  initialState: InitialStateType;
  addUser: (payload: UserType) => void;
  loginUser: (payload: { email: string; password: string }) => void;
}

const initialState: InitialStateType = {
  user: {
    email: "",
    full_name: "",
    role: "APPRAISER",
    user_id: "",
  },
  status: "idle",
  message: "",
};

const useUserStore = create<UserState>((set) => ({
  initialState,

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
        initialState: { ...initialState, message: error.response.data.message },
      }));
    }
  },

  loginUser: async (payload: { email: string; password: string }) => {
    console.log("payload:", payload);

    set((state) => ({
      initialState: { ...state.initialState, status: "loading" },
    }));
    try {
      const user = await Axios.post(`${URL}/user/login`, payload, {
        withCredentials: true,
      });

      set((state) => ({
        initialState: {
          ...state.initialState,
          user: user.data,
          status: "idle",
          message: "SUCCESSFULLY LOGGED IN!",
        },
      }));
    } catch (error: any) {
      set((state) => ({
        initialState: {
          ...state.initialState,
          status: "failed",
          message: error.response.data.message,
        },
      }));
    }
  },
}));

export default useUserStore;
