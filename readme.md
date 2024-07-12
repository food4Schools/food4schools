# About this app

This app is used as a basic framework for Knack applications. Using webpack you are able to separate your code into folders, and use ES6 import/export modules.

# Usage

- Any .ts script inside of the pages directory will be compiled into the main.js directory found inside of ./dist.
- CSS files inside of `src/css` will be compiled and injected into the head of the Knack application
- Webpack uses watch to auto-compile any changes

# Browser Compatibility

-webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions

# Install

## 1. prerequisites (tools, configs and libs)

- Node.js version 10.13.0+.
- npm v5.2.0+

## 2. install dependencies

under the root dir of the project folder, run the command below to install dependencies

```
npm install
```

## 3. serve

- Run the following code in the root dir of the project folder to serve the compiled code

```
npm run serve
```




## Using Vue

1. Create or update the .env file in your project directory with `__VUE_PROD_DEVTOOLS__=true`. This will ensure the Vue devtools extension works in your browser. Refer to https://v3.vuejs.org/guide/installation.html#vue-devtools for help with Vue Devtools.
2. In `src/helpers`, create a folder to hold your Vue app.
3. To that folder add an `App.vue` file, a 'components' directory (to hold component files), and a 'helpers' directory (to hold helper functions for your app).
4. If needed, create a scene or view file and add a Knack render function.
5. Initialize your Vue app in that file and run a test build. See `src/pages/views/view_767.ts` for an example of how to initialize your app.
6. Address any build issues, push your changes to a branch, and test out the Vue app in your Knack application.
7. Refer to https://v3.vuejs.org/ for further documentation on using Vue.

# File Structure

```
.
├── dist
└── src
    ├── controllers
    ├── css
    ├── helpers
    └── pages
        ├──  scenes
        └──  views
```
