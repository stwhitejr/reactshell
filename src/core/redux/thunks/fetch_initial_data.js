import {createAsyncThunk} from '@reduxjs/toolkit';
// import wretch from 'wretch';

// const getInitialAppData = () =>
//   wretch('https://swapi.dev/api/people/1/')
//     .get()
//     .json();

const getInitialAppData = () =>
  Promise.resolve([
    {
      name: 'steve',
      age: 32,
      color: 'red',
      music: 'blues',
    },
    {
      name: 'bill',
      age: 36,
      color: 'yellow',
      music: 'rock',
    },
  ]);

const ACTION_TYPE = 'fetchInitialData';

const fetchInitialData = createAsyncThunk(ACTION_TYPE, () =>
  getInitialAppData()
);

fetchInitialData.type = ACTION_TYPE;

export default fetchInitialData;
