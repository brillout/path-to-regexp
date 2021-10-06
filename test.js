const { matchPath } = require('./dist/index.js');

console.log(matchPath('/hello/jon', {path: '/hello/:name', exact: true}));
