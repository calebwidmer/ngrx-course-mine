import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

//action creater function
export const login = createAction(
  "[Login Page] User Login",
  props<{user:User}>(),
);

//const newLoginAction = login( );
