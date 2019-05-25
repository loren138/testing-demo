# Testing Demo

This repository is the code sample to go with my visual regression and types of testing talks.

The talk links will be added when they are available.

## To Do:

2. Create an `es-lint` rule that `prepareBaseImage` must be false to prevent merges 
   that would create false positives.
4. Fork the comparison software/maintain it?
5. Import allure support
6. Import puppeteer support
7. Add tests

## Project setup (vue)
1. You will need JDK installed for selenium to work (`brew cask install java`)
2. Run `npm install`

### Run your visual tests
1. Run the site `npm run serve`
2. Run `npm run selenium` (Leave this running while running tests)
3. Run `npm run test:codecept`
4. When entirely done, kill the selenium process and site serve process

### Run your unit tests
```
npm run test:unit
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
