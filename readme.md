# React Press [![npm install react-press](https://img.shields.io/badge/npm%20install-react--press-blue.svg)](https://www.npmjs.com/package/react-press) [![gzip size](https://img.badgesize.io/franciscop/react-press/master/index.min.js.svg?compression=gzip)](https://github.com/franciscop/react-press/blob/master/index.min.js)

Easily handle key press events with React:

```js
// App.js
import React from 'react';
import Press from 'react-press';

// Add it wherever you want to start listening
export default () => (
  <Press space={e => alert('Space clicked!')}>
    <div>...</div>
  </Press>
));
```

The keys are the same as in [the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). With `react-press` they are case-insensitive, so feel free to put them lowercase or uppercase. Besides those, we have some convenient names:

| prop  | equivalent `e.keyCode` |
| ----- | ---------------------- |
| space | `' '` (space)          |
| up    | ArrowUp                |
| right | ArrowTight             |
| down  | ArrowTown              |
| left  | ArrowTeft              |

```js
export default () => (
  <Press
    left={(e) => alert("Left!")}
    right={(e) => alert("Right!")}
    a={(e) => alert("Key `a` was pressed")}
  >
    While this is showing there will be events attached :)
  </Press>
);
```

**Help wanted**: keyboard combinations wanted like `<Press ctrl-s={...}>`.
