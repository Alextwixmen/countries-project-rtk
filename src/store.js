import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './config';
import { themeReducer } from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { countryReducer } from './features/countries/countries-slice';
import { detailsReducers } from './features/details/details-slice';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducers,
  },
  devTools: true,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      thunk: {
        extraArgument: {
          client: axios,
          api: api,
        },
      },
      serializableCheck: false,
    }),
});
