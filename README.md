# React TypeScript template with Vite

This is a [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org/) boilerplate built with [Vite](https://vitejs.dev).

## What's inside?

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Cypress](https://www.cypress.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Polyfills](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

## Getting started

1. Create the project.

   ```bash
   npx degit fabien-ml/react-ts-vite-template my-app
   ```

2. Access the project directory.

   ```bash
   cd my-app
   ```

3. Initialize a git repository.

   ```bash
   git init
   ```

4. Install dependencies.

   ```bash
   npm install
   ```

5. Start dev server with hot reload at http://localhost:3000.
   ```bash
   npm run dev
   ```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Other commands

### Lint commands

```bash
npm run lint
```

### Build commands

```bash
npm run build
```

### Run the app in production mode at http://localhost:3000.

```bash
npm run serve
```

### Test commands

- Run unit tests and watch
  ```bash
  npm run test:unit
  ```
- Run unit tests with coverage
  ```bash
  npm run test:unit:coverage
  ```
- Run e2e tests
  ```bash
  npm run test:e2e
  ```

## License

This project is licensed under the MIT License.

## 协同

- Run commit
  commitizen、cz-customizable 提交 commit 更新检查信息

- Run log
  生成版本日志，自动根据版本号更新

## 样式规范工具(styleline)

样式规则配置文件 styleline.config.js

vsCode 配置 styleline 插件（工具市场搜索【styleline<Official Stylelint extension for Visual Studio Code>】

vsCode 打开【首先项-设置】，搜索 styleline 配置，

- 检查 Stylelint.Enable 设置为 true
- Stylelint.Snippet、Stylelint.Validate 点击添加项 scss
- npm 安装开发依赖

```
npm i -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-config-standard-scss
```
