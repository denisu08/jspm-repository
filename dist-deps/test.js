import clone from './clone-486b986d.js';

console.log(clone({ a: 'b' }));

import('./core-3c839986.js').then(({ default: babel }) => {
  console.log(babel.transform('test').code);
});
