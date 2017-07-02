const url = require('url');
const qs = require('querystring');
const blog = 'http://ksh-code.tistory.com/hello.php?greet=i&bye=m';

let urlQuery = url.parse(blog);
console.log(urlQuery);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'ksh-code.tistory.com',
  port: null,
  hostname: 'ksh-code.tistory.com',
  hash: null,
  search: '?greet=i&bye=m',
  query: 'greet=i&bye=m',
  pathname: '/hello.php',
  path: '/hello.php?greet=i&bye=m',
  href: 'http://ksh-code.tistory.com/hello.php?greet=i&bye=m' }
*/
console.log(urlQuery.query);//greet=i&bye=m
console.log(qs.parse(urlQuery.query));// print { greet: 'i', bye: 'm' }