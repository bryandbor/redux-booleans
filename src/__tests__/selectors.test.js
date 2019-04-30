import {getBooleanState, getBooleanKeyArg, getBooleanValue, createBooleanSelector} from '../selectors';

describe('Selectors | getBooleanState', () => {
  it('returns default value', () => {
    expect(getBooleanState()).toEqual({});
  });

  it('returns boolean state', () => {
    const state = {
      booleans: {
        something: true,
        somethingElse: true,
        'other-thing': true,
      },
    };
    expect(getBooleanState(state)).toEqual(state.booleans);
  });
});

describe('Selectors | getBooleanKeyArg', () => {
  it('returns second arguement', () => {
    expect(getBooleanKeyArg(0, 1, 2, 3)).toEqual(1);
    expect(getBooleanKeyArg('a', 'b', 'c', 'd')).toEqual('b');
  });
});

describe('Selectors | getBooleanValue', () => {
  it('returns false for undefined state', () => {
    const state = {
      something: true,
    };
    expect(getBooleanValue.resultFunc(state, 'somethingElse')).toEqual(false);
  });

  it('returns true for defined, true state', () => {
    const state = {
      something: true,
      somethingElse: true,
    };
    expect(getBooleanValue.resultFunc(state, 'something')).toEqual(true);
    expect(getBooleanValue.resultFunc(state, 'somethingElse')).toEqual(true);
  });
});

describe('Selectors | createBooleanSelector', () => {
  const key = 'somethingElse';

  it('returns false for undefined state', () => {
    const state = {
      something: true,
    };
    let selector;
    expect(() => (selector = createBooleanSelector(key))).not.toThrow();
    expect(selector.resultFunc(state)).toEqual(false);
  });

  it('returns true for defined, true state', () => {
    const state = {
      something: true,
      somethingElse: true,
    };
    let selector;
    expect(() => (selector = createBooleanSelector(key))).not.toThrow();
    expect(selector.resultFunc(state)).toEqual(true);
  });
});
