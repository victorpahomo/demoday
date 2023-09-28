// Importa las funciones necesarias de Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importa el reducer de autenticación
import authReducer from "../features/auth/authSlice"; 
// Importa los reducers relacionados con los datos
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
// Configura la store de Redux
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
