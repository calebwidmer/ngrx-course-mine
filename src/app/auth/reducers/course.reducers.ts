import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course } from "../../courses/model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../../courses/action-types";

export interface CoursesState  extends EntityState<Course> {

}

export const  adapter = createEntityAdapter<Course>();
export const  initialCourseState =adapter.getInitialState();

export const courseReducer = createReducer(
initialCourseState,

on(CourseActions.allCoursesLoaded,
   (state,action) => adapter.setAll(action.courses, state))
);

export const {selectAll} = adapter.getSelectors();
 