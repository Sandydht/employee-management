import { createAction, props } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const getProfile = createAction(
  '[User] get profile',
  props<UserState>()
);
