
const lib = jest.requireActual('tabbable');

const tabbable = {
  ...lib,
  tabbable: (node, options) => lib.tabbable(node, { ...options, displayCheck: 'none' }),
  focusable: (node, options) => lib.focusable(node, { ...options, displayCheck: 'none' }),
  isFocusable: (node, options) => lib.isFocusable(node, { ...options, displayCheck: 'none' }),
  isTabbable: (node, options) => lib.isTabbable(node, { ...options, displayCheck: 'none' }),
};

module.exports = tabbable;

// File: __mocks__/tabbable.js

// File: __mocks__/tabbable.js

// const createTabbableMock = () => {
//   const tabbable = jest.fn(() => []);
//   tabbable.tabbable = jest.fn(() => []);
//   tabbable.focusable = jest.fn(() => []);
//   tabbable.isFocusable = jest.fn(() => true);
//   tabbable.isTabbable = jest.fn(() => true);
//   return tabbable;
// };

// module.exports = createTabbableMock();

