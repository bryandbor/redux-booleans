# redux-booleans

> Simple boolean Redux integration

[![NPM](https://img.shields.io/npm/v/redux-booleans.svg)](https://www.npmjs.com/package/@bryandbor/redux-booleans) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
