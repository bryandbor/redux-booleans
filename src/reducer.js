import {handleActions} from 'redux-actions';
import omit from 'object.omit';

import {TOGGLE_BOOLEAN} from './constants';

export const initialState = {};
export const reducer = handleActions(
  {
    [TOGGLE_BOOLEAN]: (state, {payload}) => {
      const {key} = payload;
      const value = payload.value !== undefined ? payload.value : !state[key];

      return value ? {...state, [key]: true} : omit(state, [key]);
    },
  },
  initialState
);
export default reducer;
