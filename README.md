[EN](./README.md) | [简体中文](./docs/README.zh.md)

# Introduction

An `astro intergation` that supports injecting common css to any page in `astro`.

# Installation

## Quick Install

``` sh
# Using NPM
npx astro add astro-common
# Using Yarn
yarn astro add astro-common
# Using PNPM
pnpm astro add astro-common
```

## Manual Install

Firstly.

``` sh
npm install astro-common
```

Then.

``` js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import common from 'astro-common';

export default defineConfig({
  integrations: [common()],
});
```

# Usage

## common css

Passing the css file path to the `css` property, which supports the following.

- absolute path of `css` file, eg `path.resolve(dirname, './public/background.css')`
- css file above `node_modules`, eg `'bootstrap/dist/css/bootstrap.css'`

``` js
// astro.config.mjs
import { resolve } from 'path'
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import common from 'astro-common';

const dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  integrations: [
    common({
      css: [
        resolve(dirname, './public/background.css'),  // absolute path
        'bootstrap/dist/css/bootstrap.css'  // css above node_modules
      ]
    })
  ],
});
```
