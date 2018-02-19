# AIRfly Music APP

## Usage

**Warning: we strongly recommend node >=v6.9.0 and npm >=3.0.0**

`npm i` - Installs everything needed

`npm start` - Starts the app. Then, go to `localhost:4200`

`npm run build` - Builds the app for production

`npm run release` - Creates a new release using standard-version

`npm run docker` - Builds the docker image and run the container

**Windows: use precompilation to speed up**

`tsc --project tsconfig.json`
`npm start`

## Features
* Responsive layout (flex layout module)
* Internationalization
* Lazy loading modules
* Interceptors and Events (Progress bar active, if a request is pending)
* Custom example library
* Search bar, to look for songes
* Custom loading page
* Modal and toasts (snakbar)!
* Following the [best practices](https://angular.io/guide/styleguide)!

## Docker

You can build the image and run the container with Docker. The configuration is in the nginx folder if you want to change it.

`docker build -t angularexampleapp .`

`docker run -d -p 4200:80 angularexampleapp`

## License

MIT

Enjoy :metal:

We are always happy to hear your feedback!
