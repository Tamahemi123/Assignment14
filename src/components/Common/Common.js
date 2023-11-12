// common.js

const add = (a, b) => {
    return a + b;
  };
  
  const subtract = (a, b) => {
    return a - b;
  };
  
  module.exports = {
    add,
    subtract,
  };

  

  // SomeOtherFile.js

import { add, subtract } from './common';

// Use the add and subtract functions here
const result1 = add(5, 3);
const result2 = subtract(10, 4);
