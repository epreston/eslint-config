# eslintrc

Shared [ESLint Configuration](https://eslint.org/docs/latest/use/configure/) for my projects.

[![NPM version][npm-badge]][npm-url]
[![License][license-badge]][license-url]

## Install

```sh
npm install @epreston/eslintrc --save-dev
```

## Usage

`package.json`

```json
{
  "eslintConfig": {
    "extends": "@epreston/eslintrc",
    "rules": {
      "no-console": "off"
    }
  }
}
```

## Tools

| Tool         | Reference                |
| ------------ | ------------------------ |
| ESLint       | https://eslint.org       |
| Node.js      | https://nodejs.org       |
| EditorConfig | https://editorconfig.org |

## References

| Website          | Reference                                     |
| ---------------- | --------------------------------------------- |
| Configure ESLint | https://eslint.org/docs/latest/use/configure/ |

## License

This project is released under the MIT [License](LICENSE).

[npm-badge]: https://img.shields.io/npm/v/@epreston/eslintrc
[npm-url]: https://www.npmjs.com/package/@epreston/eslintrc
[license-badge]: https://img.shields.io/npm/l/@epreston/eslintrc
[license-url]: LICENSE
