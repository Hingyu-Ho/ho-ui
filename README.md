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

## husky + lint-staged + commitizen 配置提交代码规范

https://blog.csdn.net/lhz_333/article/details/126461947#:~:text=lint-staged%20%E8%BF%99%E4%B8%AA%E5%B7%A5%E5%85%B7%E4%B8%80%E8%88%AC%E7%BB%93%E5%90%88%20husky%20%E6%9D%A5%E4%BD%BF%E7%94%A8%EF%BC%8C%E5%AE%83%E5%8F%AF%E4%BB%A5%E8%AE%A9%20husky%20%E7%9A%84,hook%20%E8%A7%A6%E5%8F%91%E7%9A%84%E5%91%BD%E4%BB%A4%E5%8F%AA%E4%BD%9C%E7%94%A8%E4%BA%8E%20git%20add%20%E9%82%A3%E4%BA%9B%E6%96%87%E4%BB%B6%EF%BC%88%E5%8D%B3%20git%20%E6%9A%82%E5%AD%98%E5%8C%BA%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%89%E3%80%82

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
