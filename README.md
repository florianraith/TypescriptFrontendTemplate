# Typescript Frontend Template

A simple typescript boilerplate for personal frontend projects

## Project structure
```c++
    ├── dist                // output directory for webpack build files
    ├── src
    │   ├── scripts         // directory for your typescript files
    │   │   ├── greeter.ts
    │   │   └── index.ts
    │   ├── styles          // directory for your css files
    │   │   └── style.css
    │   ├── views           // directory for your html files
    │   │   ├── about.html
    │   │   └── index.html
    │   └── bootstrap.ts    // application entry point
    ├── static              // directory for static assets like images
    │   └── .gitkeep
    ├── .babelrc            // babel config
    ├── .gitignore
    ├── package.json        
    ├── package-lock.json
    ├── README.md
    ├── server.js           // development server
    ├── tsconfig.json       // typescript config
    └── webpack.config.js   // webpack config
```

## Commands

* `npm run build`  
  builds production files via webpack and puts them into the /dist folder.  

* `npm run server`  
  Starts a development server, which is accessible under localhost:3000. A file is reloaded as soon as it is saved, eliminating the need to restart the development server.  

