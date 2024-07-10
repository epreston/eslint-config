# eslint-config

Shared [ESLint Configuration](https://eslint.org/docs/latest/extend/shareable-configs) for my projects. Version 2.0 and beyond uses the "flat config format".

[![NPM version][npm-badge]][npm-url]
[![License][license-badge]][license-url]

## Install

```sh
npm install @epreston/eslint-config --save-dev
```

## Usage

```js
// eslint.config.js
import sharedConfig from "@epreston/eslint-config";

export default [
  ...sharedConfig,

  // anything from here will override sharedConfig
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
```

## Tools

| Tool         | Reference                |
| ------------ | ------------------------ |
| ESLint       | https://eslint.org       |
| Node.js      | https://nodejs.org       |
| EditorConfig | https://editorconfig.org |

## References

| Website          | Reference                                               |
| ---------------- | ------------------------------------------------------- |
| Shareable Config | https://eslint.org/docs/latest/extend/shareable-configs |
| Configure ESLint | https://eslint.org/docs/latest/use/configure/           |
| ESlint Rules     | https://eslint.org/docs/rules/                          |

## License

This project is released under the MIT [License](LICENSE).

[npm-badge]: https://img.shields.io/npm/v/@epreston/eslint-config
[npm-url]: https://www.npmjs.com/package/@epreston/eslint-config
[license-badge]: https://img.shields.io/npm/l/@epreston/eslint-config.svg
[license-url]: LICENSE
