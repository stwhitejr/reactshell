import {ADD_ARTICLE} from '@root/actions';

// Reducers
const articlesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_ARTICLE:
      return [...state, payload];
    default:
      return state;
  }
};

// Selectors
const selectArticles = state => state.articles;

export {articlesReducer, selectArticles};
