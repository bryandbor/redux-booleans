import {TOGGLE_BOOLEAN} from '../constants';

import {toggleBoolean, createToggleBooleanAction} from '../actions';

describe('Actions | toggleBoolean', () => {
  const key = 'some-boolean-key';
  it('returns action correctly (no argument)', () => {
    expect(toggleBoolean(key)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
      },
    });
  });

  it('returns action correctly (true argument)', () => {
    expect(toggleBoolean(key, true)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: true,
      },
    });
  });

  it('returns action correctly (truthy argument)', () => {
    expect(toggleBoolean(key, 'something')).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: true,
      },
    });
  });

  it('returns action correctly (false argument)', () => {
    expect(toggleBoolean(key, false)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: false,
      },
    });
  });

  it('returns action correctly (falsy argument)', () => {
    expect(toggleBoolean(key, 0)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: false,
      },
    });
  });
});

describe('Actions | createToggleBooleanAction', () => {
  const key = 'some-boolean-key';
  it('returns action correctly (no argument)', () => {
    let action;
    expect(() => (action = createToggleBooleanAction(key))).not.toThrow();
    expect(action()).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
      },
    });
  });

  it('returns action correctly (true argument)', () => {
    let action;
    expect(() => (action = createToggleBooleanAction(key))).not.toThrow();
    expect(action(true)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: true,
      },
    });
  });

  it('returns action correctly (truthy argument)', () => {
    let action;
    expect(() => (action = createToggleBooleanAction(key))).not.toThrow();
    expect(action('something')).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: true,
      },
    });
  });

  it('returns action correctly (false argument)', () => {
    let action;
    expect(() => (action = createToggleBooleanAction(key))).not.toThrow();
    expect(action(false)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: false,
      },
    });
  });

  it('returns action correctly (falsy argument)', () => {
    let action;
    expect(() => (action = createToggleBooleanAction(key))).not.toThrow();
    expect(action(0)).toEqual({
      type: TOGGLE_BOOLEAN,
      payload: {
        key,
        value: false,
      },
    });
  });
});
