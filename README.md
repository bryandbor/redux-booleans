# redux-booleans

> Simple boolean Redux integration

[![NPM](https://img.shields.io/npm/v/redux-booleans.svg)](https://www.npmjs.com/package/@bryandbor/redux-booleans) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

It is often necessary to extend your Redux state for a simple boolean. A common example is adding Redux state for whether a modal is open or not. This package can handle any number of boolean keys with minimal state; due to the fact that `undefined` keys are treated as `false`, the state is always as small as possible by only holding values which are evaluated as `true`. The rest of your Redux state can remain simple and focused without bloat for simple boolean values.

## Install

```bash
npm install --save redux-booleans
```

## Usage

```js
import {createStore} from 'redux';
import {reducer as booleansReducer, toggleBoolean, getBooleanState} from '@bryandbor/redux-booleans';

const rootReducer = combineReducers({
  booleans: booleansReducer,
  // ...
});

const store = createStore(rootReducer);

const termsAndConditionsModalKey = 'modals.term-and-conditions';
store.dispatch(toggleBoolean(termsAndConditionsModalKey));

console.log(store.getState());
/*
{
  booleans: {
    'modals.term-and-conditions': true
  },
}
*/

console.log(getBooleanState(store.gesState(), termsAndConditionsModalKey));
// true

store.dispatch(toggleBoolean(termsAndConditionsModalKey));

console.log(store.getState());
/*
{
  booleans: {},
}
*/
console.log(getBooleanState(store.gesState(), termsAndConditionsModalKey));
// false
```

## License

MIT © [bryandbor](https://github.com/bryandbor)
