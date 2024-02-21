# css-speed-test

Simple speed test for various types of styling Vite + Vue apps

## Description

The test consists of 3 Vue + Vite projects rendering styles in 3 different ways:

1. Vanilla CSS
2. SASS (SCSS)
3. CSS in JS ([Emotion](https://emotion.sh/docs/introduction))

## `test.js`

is an automated performance testing script written in TypeScript that uses the [Playwright](https://playwright.dev/) library to measure the rendering time of said web pages.

The script uses Playwright to open a headless browser, repeatedly loading web pages styled with different CSS frameworks, measuring how long each takes to load, and calculating the average loading time for each framework.

## Running the tests

Start the projects with concurrently by running:

```bash
$ pnpm start
```

After all the projects are running, in a new terminal start the test with:

```bash
$ pnpm test
```
