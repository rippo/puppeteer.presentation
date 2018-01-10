````
yarn init
yarn add --dev puppeteer mocha chai
yarn add --dev yargs looks-same chai-string
````

mocha --timeout 10000 ./runner.js tests/test002.js --show
mocha --timeout 10000 ./runner.js tests/test002.js --show --slowmo=10
mocha --timeout 10000 ./runner.js tests/test003.js --show --appurl=http://localhost:5000


https://medium.com/@ivanmontiel/using-that-headless-chrome-youve-been-hearing-about-543a8cc07af5