import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../extraReducers/userReducer";

//TYPES

export interface UserType {
  email: string;
  full_name: string;
  role: "APPRAISER" | "PROCESSOR" | "";
  user_id?: string;
}

export interface InitialStateType {
  user: UserType;
  status: "idle" | "loading" | "failed";
  message?: any;
}

const initialState: InitialStateType = {
  user: {
    email: "",
    full_name: "",
    role: "",
    user_id: undefined,
  },
  status: "idle",
  message: "",
};

// USER LOGIN

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: () => {
      return initialState;
    },
  },

  extraReducers: (build) => {
    build

      // USER LOGIN
      .addCase(userLogin.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ user: action.payload },
          ...{ status: "idle" },
          ...{ message: "SUCCESSFULLY LOGGED IN!" },
        };
      })
      .addCase(userLogin.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      //USER REGISTER
      .addCase(userRegister.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ user: action.payload },
          ...{ status: "idle" },
          ...{ message: "USER REGISTERED SUCCESSFULLY!" },
        };
      })
      .addCase(userRegister.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      });
  },
});

export const { resetUserState } = userSlice.actions;

export default userSlice.reducer;
