import omit from 'object.omit';

import {TOGGLE_BOOLEAN} from '../constants';

import {initialState, reducer} from '../reducer';

describe('Reducer', () => {
  it('initializes correctly', () => {
    const action = {
      type: '@@INIT',
    };
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('handles other actions', () => {
    const state = {
      something: true,
    };
    const action = {
      type: 'ANOTHER_ACTION',
    };
    expect(reducer(state, action)).toEqual(state);
  });

  it('toggles with no explicit value (false -> true)', () => {
    const state = {
      something: true,
    };
    const action = {
      type: TOGGLE_BOOLEAN,
      payload: {
        key: 'somethingElse',
      },
    };
    expect(reducer(state, action)).toEqual({...state, somethingElse: true});
  });

  it('toggles with explicit value (false -> false)', () => {
    const state = {
      something: true,
    };
    const action = {
      type: TOGGLE_BOOLEAN,
      payload: {
        key: 'somethingElse',
        value: false,
      },
    };
    expect(reducer(state, action)).toEqual(state);
  });

  it('toggles with explicit value (true -> true)', () => {
    const state = {
      something: true,
      somethingElse: true,
    };
    const action = {
      type: TOGGLE_BOOLEAN,
      payload: {
        key: 'somethingElse',
        value: true,
      },
    };
    expect(reducer(state, action)).toEqual(state);
  });

  it('toggles with no explicit value (true -> false)', () => {
    const state = {
      something: true,
      somethingElse: true,
    };
    const action = {
      type: TOGGLE_BOOLEAN,
      payload: {
        key: 'somethingElse',
      },
    };
    expect(reducer(state, action)).toEqual(omit(state, 'somethingElse'));
  });
});
