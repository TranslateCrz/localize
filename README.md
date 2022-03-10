# Hetic Localise

> Hetic Localize Project

[![NPM](https://img.shields.io/npm/v/localize.svg)](https://www.npmjs.com/package/localize) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

NOTE : This package is part of the [Hetic Localize project](http://localhost). Any support requests, bug reports, or development contributions should be directed to that project.

With our solution, you can easily manage translation among your project.
This is the package that support [React](https://reactjs.org/).


## Installation

To begin, install the preferred dependency manager for JavaScript, [NPM](https://www.npmjs.com/).

Now to install just this package:
```bash
npm install --save localize
```

## Authentication

You must add your API_TOKEN in your environment variables. You can find it on the [Hetic Localize website](http://localhost), in your profile. Once authenticated, you'll be ready to start making requests.

## Sample

First, create a React Context :

```tsx
<TranslationContext.Provider>
  ...
</TranslationContext.Provider>
```

You can then add our Translate component in your project :

```tsx
<Translate code="home.greetings"/>
```
## CLI

You can import all the `Translate.code` in your React components at once with this cli command :

```bach
npm explore localize -- npm run cli API_TOKEN=************
```

## Version

This component is considered GA (generally available). As such, it will not introduce backwards-incompatible changes in any minor or patch releases. We will address issues and requests with the highest priority.

## Next Steps

* Understand the [official documentation](http://localhost).
* Take a look at [our demo](http://localhost) on github.


## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'localize'
import 'localize/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [CorentinCrz](https://github.com/CorentinCrz)
