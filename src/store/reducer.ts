import {createReducer} from '@reduxjs/toolkit';

import {offers} from '../mock/offers.ts';

import {CITIES} from '../constant/cities-constant.ts';
import {SortType, SortListState} from '../constant/constant.ts';

import {changeCity, fillingOffers, changeSortType, changeSortListState} from './action.ts';

import {getSelectedCity} from '../utils/utils.tsx';

const DEFAULT_CITY = getSelectedCity('Paris', CITIES);
const DEFAULT_SORT: string = SortType.Popular;
const DEFAULT_SORT_LIST_STATE: string = SortListState.Closed;

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  sort: DEFAULT_SORT,
  sortListState: DEFAULT_SORT_LIST_STATE
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortListState, (state, action) => {
      state.sortListState = action.payload;
    })
    .addCase(fillingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sort = action.payload;
    });
});

export {mainReducer};
