
[简体中文](./README.zh.md) | [EN](../README.md)

# 介绍

支持在`astro`应用中注入全局样式的`astro integration`

# 安装

## 快速安装

``` sh
# Using NPM
npx astro add astro-common
# Using Yarn
yarn astro add astro-common
# Using PNPM
pnpm astro add astro-common
```

## 手动安装

手动安装  `astro-common`

``` sh
npm install astro-common
```

使用`astro integration`

``` js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import common from 'astro-common';

export default defineConfig({
  integrations: [common()],
});
```

# 用法

## 公共样式

向  `css` 属性传入公共样式文件路径，目前支持：

- 绝对路径, 如 `path.resolve(dirname, './public/background.css')`
- `node_modules`中的样式文件, 如 `'bootstrap/dist/css/bootstrap.css'`

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
