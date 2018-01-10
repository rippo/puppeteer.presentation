# Puppeteer Presentation

Slides can be found at:

https://slides.com/rippo/headless-testing-with-puppeteer/

To install type

```
$ yarn init
$ yarn add --dev puppeteer mocha chai
$ yarn add --dev yargs looks-same chai-string
````

Demo website can be found at:

https://github.com/rippo/testing.website.react

## Blog to set up puppeteer

https://medium.com/@ivanmontiel/using-that-headless-chrome-youve-been-hearing-about-543a8cc07af5

---

To run the grab demos

```
$ node grabs/grab001.js --show
```

To run the test demos

```
$ mocha --timeout 10000 ./runner.js tests/test001.js --show
```

Ask me questions on twitter [@rippo](https://twitter.com/rippo)