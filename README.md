# Parcel + React + Semantic-UI Setup

Initialize workspace

```sh
yarn init
git init .
```

Edit `package.json` for your own information

```json
{
  "name": "parcel-semantic-ui-less",
  "main": "dist/main/index.js",
  "module": "dist/module/index.js",
  "browser": "dist/browser/index.js",
  "browserslist": [
    "> 1%",
    "not dead"
  ],
  "engines": {
    "node": ">=4.x"
  },
  "source": "src/index.js",
  "targets": {
    "main": {
      "node": [
        "^4.0.0"
      ]
    },
    "module": {
      "node": [
        "^8.0.0"
      ]
    },
    "browser": {
      "browsers": [
        "> 1%",
        "not dead"
      ]
    }
  }
}
```

Setup `parcel` + `babel 7` + `react`.

```sh
yarn add --dev parcel @babel/core @babel/preset-env @babel/preset-react
yarn add react react-dom
```

Setup `.babelrc`:

```json
{
    "presets": [
        "@babel/preset-env", "@babel/preset-react"
    ],
    "env": {
        "development": {
            "presets": [
                [
                    "@babel/preset-react",
                    {
                        "development": true
                    }
                ]
            ]
        }
    }
}
```

Add Semantic UI with `semantic-ui-react` and `semantic-ui-less`.

```sh
yarn add --dev less
yarn add semantic-ui-react semantic-ui-less
```

Setup `semantic-ui-less`:

```sh
# prepare directory for semantic ui
mkdir src/semantic-ui -p

# copy skels from semantic-ui-less package
cp node_modules/semantic-ui-less/_site src/semantic-ui/site -a
cp node_modules/semantic-ui-less/theme.config.example src/semantic-ui/theme.config

# copy or link semantic-ui-less modules
#   here we use link
cd src/semantic-ui
ln ../../node_modules/semantic-ui-less/semantic.less . -sf
ln ../../node_modules/semantic-ui-less/definitions . -sf
ln ../../node_modules/semantic-ui-less/theme.less . -sf
# link themes
ln ../../node_modules/semantic-ui-less/themes . -sf
# or link sub-themes, copy a theme from semantic-ui-less, or use any theme you have.
mkdir themes
ls ../../../node_modules/semantic-ui-less/themes |xargs -i ln ../../../node_modules/semantic-ui-less/themes/{} . -sf
```
