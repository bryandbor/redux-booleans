import * as actions from '../actions';
import * as selectors from '../selectors';

import {getBooleanActionAndSelector} from '../utils';

describe('Utils | getBooleanActionAndSelector', () => {
  it('returns action and selector', () => {
    const createToggleBooleanAction = jest
      .spyOn(actions, 'createToggleBooleanAction')
      .mockImplementation(key => `${key} action`);
    const createBooleanSelector = jest
      .spyOn(selectors, 'createBooleanSelector')
      .mockImplementation(key => `${key} selector`);

    const key = 'something';
    expect(getBooleanActionAndSelector(key)).toEqual({
      action: `${key} action`,
      selector: `${key} selector`,
    });

    createToggleBooleanAction.mockRestore();
    createBooleanSelector.mockRestore();
  });
});
