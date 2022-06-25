import { configureStore } from '@reduxjs/toolkit';
import { userReducers } from '../reducers';

export default configureStore({
  reducer: userReducers,
});
