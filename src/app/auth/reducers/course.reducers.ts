import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course } from "../../courses/model/course";

export interface CoursesState  extends EntityState<Course> {

}


