# Project Title

Create and import custom built npm modules!

## Getting Started
First we created a module to export. This can be found in the custom_modules folder. Please read the webpack.config.js and the package.json of the exportmodule to see how to properly create a module that you can later import. In the package.json make sure the 'name' is the name of the folder in this case exportmodule and the 'main' is the path to the bundle.js (dist/export.bundle.js). In the webpack.config.js file make sure you add libraryTarget: 'this', to the output param to make it importable by other modules !

P.D Once you have export.bundle.js generated using webpack you will only need the dist folder where your export.bundle.js is located for the purpose of this tutorial the remaining files are left.

Lets take a look at the importmodule. this is the module that will import the exportmodule we created earlier. Take a good look at webpack.config.js and src/app.js files here. In the webpack.config.js we have a resolve param that links to the custome_module folder letting webpack know that we want to import the modules present in that folder along with the ones in the node_modules. In the app.js file you can see we have import printMe from 'exportmodule' you can then call the printMe function you had in your export module in your import module.

### Prerequisites

What you need ?
```
npm
```

### Installing

Steps if you want to play around

```
Clone repo from github!

cd importmodule/

npm install

cd custom_modules/exportmodule/

npm install

```

You can now modify the src/app.js file in the export and import modules to your likings and bundle them using webpack
The command to run webpack in importmodule and exportmodule is the same once inside the corresponding folder run

```
./node_modules/.bin/webpack -p
```

This will generate the bundle.js files


## Authors

* **Vicky Sundesha** - [vsundesha](https://github.com/vsundesha)

## License

See the [LICENSE.md](LICENSE.md) file for details


