import clone from 'lodash/clone.js';

console.log(clone({ a: 'b' }));

import('@babel/core').then(({ default: babel }) => {
  console.log(babel.transform('test').code);
});
