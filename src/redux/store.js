import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  subscriptionReducer,
  userReducer,
} from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
  },
});

export default store;
// export const server = 'https://coursebundler-pdii.onrender.com/api/v1';
export const server = 'https://subscription-backend-kappa.vercel.app/api/v1';
