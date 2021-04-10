import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import peopleSlice from '@root/core/redux/people_slice';

const reducer = combineReducers({
  [peopleSlice.name]: peopleSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
