import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "../../courses/model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../../courses/action-types";
import { allCoursesLoaded } from "../../courses/course.actions";

export interface CoursesState  extends EntityState<Course> {
allCoursesLoaded:false
}

export const  adapter = createEntityAdapter<Course>({
  sortComparer:compareCourses
});
export const  initialCourseState =adapter.getInitialState();

export const courseReducer = createReducer(
initialCourseState,

on(CourseActions.allCoursesLoaded,
   (state,action) => adapter.setAll(
    action.courses,
     {...state,
     allCoursesLoaded:true
    }))
);

export const {selectAll} = adapter.getSelectors();
