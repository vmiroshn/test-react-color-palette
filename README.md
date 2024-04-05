# Recreate the issue with attempt to test a React application (CRA) with react-color-palette

## Main issue

If run `npm run test` it shows the following error

`2d context not supported or canvas already initialized`

## Try to solve

Reference:
https://stackoverflow.com/questions/48828759/unit-test-raises-error-because-of-getcontext-is-not-implemented

I tried the approach with installing 
`npm i --save-dev jest-canvas-mock`
but it didn't work for me. So, I removed this package and commented all additional setup.

### Additional issue

In the readme of the react-color-palette to make it work it needs to have this import:
`import "react-color-palette/css";`
It doesn't work for me, the file could not be located there.

Instead, this works:
`import 'react-color-palette/dist/css/rcp.css';`