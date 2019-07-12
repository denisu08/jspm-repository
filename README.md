npm install -g jspm
mkdir wirecase-angular-component
cd wirecase-angular-component

jspm install lodash @babel/core angular

create index 

jspm map ./test.js --flat-scope -o importmap.json --cdn