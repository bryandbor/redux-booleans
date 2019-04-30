import {createSelector} from 'reselect';
import {get} from 'dotty';

/**
 * Micro-selector which returns the full boolean state from the Redux state
 * @param {Object} state The Redux state
 * @returns {Object} The boolean state
 */
export const getBooleanState = state => get(state, 'booleans') || {};

/**
 * Micro-selector which is used to access the second argument of a call to getBooleanValue. This selector should only
 * be used within a selector created using the createSelector utility.
 * @param {any} _ The Redux state (This argument is ignored)
 * @param {*} key The boolean key to return
 * @returns {String} The boolean key being accessed
 */
export const getBooleanKeyArg = (_, key) => key;

/**
 * Selector to access boolean key from Redux state
 * @param {Object} state The Redux state
 * @param {String} key The boolean key to check
 * @returns {Boolean} The state of the indicated boolean key
 */
export const getBooleanValue = createSelector(
  getBooleanState,
  getBooleanKeyArg,
  (state, key) => Boolean(get(state, key))
);

/**
 * Creates a selector which can be used to access a specific key within the boolean Redux state
 * @param {String} key The boolean key to create a permanent selector for
 * @returns {Function} A selector for the provided boolean key
 */
export const createBooleanSelector = key =>
  createSelector(
    getBooleanState,
    state => Boolean(get(state, key))
  );
