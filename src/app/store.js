import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import {
  dataReducer,
  userReducer,
  contributionReducer,
  courseReducer,
  curriculumReducer,
  gradeReducer,
  groupReducer,
  newsReducer
} from "../features/data/";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contribution: contributionReducer,
    course: courseReducer,
    curriculum: curriculumReducer,
    grade: gradeReducer,
    group: groupReducer,
    news: newsReducer,
    data: dataReducer,
    user: userReducer,
  },
});
