import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import fetchInitialData from '@root/core/redux/thunks/fetch_initial_data';

export const peopleAdapter = createEntityAdapter({
  selectId: (item) => item.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const peopleSlice = createSlice({
  name: 'people',
  initialState: peopleAdapter.getInitialState(),
  reducers: {
    addPerson: peopleAdapter.addOne,
  },
  extraReducers: {
    [fetchInitialData.fulfilled](state, {payload}) {
      peopleAdapter.setAll(state, payload);
    },
  },
});

/*
 * Actions
 */
export const {addPerson} = peopleSlice.actions;

/*
 * Selectors
 */
export const {
  selectAll: selectPeopleAll,
  selectById: selectPeopleById,
  selectEntities: selectPeopleEntities,
  selectIds: selectPeopleIds,
  selectTotal: selectPeopleTotal,
} = peopleAdapter.getSelectors((state) => state.people);

export default peopleSlice;
