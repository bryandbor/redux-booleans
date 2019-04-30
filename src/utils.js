import {createBooleanSelector} from './selectors';
import {createToggleBooleanAction} from './actions';

/**
 * Creates an action and selector based on the provided key
 * @param {String} key The boolean key which will be used for the Redux action and selector
 * @returns {Object} An action and selector based on the provided key
 */
export const getBooleanActionAndSelector = key => ({
  action: createToggleBooleanAction(key),
  selector: createBooleanSelector(key),
});
