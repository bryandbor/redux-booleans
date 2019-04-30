import {createAction} from 'redux-actions';

import {TOGGLE_BOOLEAN} from './constants';

/**
 * Selector to determine if a boolean key is active
 * @param {Object} state The Redux state
 * @param {String} key The boolean key to check
 * @returns {Boolean} Whether the provided key is currently present
 */
export const toggleBoolean = createAction(TOGGLE_BOOLEAN, (key, value) => ({
  key,
  ...(value !== undefined && {
    value: Boolean(value),
  }),
}));

/**
 * Creates an action which, when called, always toggles the boolean key initially provided
 * @param {String} key The permanent key which will be used in the returned Redux action
 * @returns {Function} A Redux action creator which will always toggle the provided boolean key
 */
export const createToggleBooleanAction = key => (...args) => toggleBoolean(key, ...args);
