import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "../auth/reducers/course.reducers";

import * as fromCourses from "../auth/reducers/course.reducers";

export const selectCoursesState =
  createFeatureSelector<CoursesState>("courses");

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) =>
  (course.category === "BEGINNER" || course.category === "INTERMEDIATE" ))
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category === "ADVANCED")
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  state => state.allCoursesLoaded
)