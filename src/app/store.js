import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/webs/loginSlice';
import prodReducer from '../features/webs/prodSlice';
import registerReducer from '../features/webs/registerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prod: prodReducer,
    login: loginReducer,
    register: registerReducer,
  },
});
