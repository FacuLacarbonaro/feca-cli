import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isAdm: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isAdm: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "asdasdasdasdasdasdasdasd",
          isAdm: false,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
