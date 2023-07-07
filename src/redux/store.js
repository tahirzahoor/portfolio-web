import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectSlice';
import categoryReducer from "./categorySlice"

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    category:categoryReducer,
  },
});

export default store;