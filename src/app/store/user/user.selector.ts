import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectProfile = createFeatureSelector<UserState | null>('user');

export const selectProfileValue = createSelector(
  selectProfile,
  (state) => state
);