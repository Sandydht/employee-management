import { createReducer, on } from "@ngrx/store";
import { getProfile } from "./user.actions";
import { UserData } from "../../models/user";

export interface UserState {
  user: UserData | null;
}

export const initialState: UserState = {
  user: null
}

export const userReducer = createReducer(
  initialState,
  on(getProfile, (state, { user }) => ({ ...state, user }))
)