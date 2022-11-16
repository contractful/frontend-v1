# contractful frontent v1

For details on the project, please visit [https://github.com/contractful/protocol-v1].

## setup

```
1. git clone https://github.com/contractful/frontend-v1.git
2. cd frontend-v1
3. cd contractful-app
4. npm i --legacy-peer-deps
5. npx next dev

Use to build / test:

npx next build
npx next lint

Additional packages

npx create-next-app@latest --typescript

npm install --legacy-peer-deps --save react-trafficlight
npm install --legacy-peer-deps tailwindcss@latest
npm install --legacy-peer-deps mui@latest
npm uninstall --legacy-peer-deps tailwindcss@latest
npm uninstall --legacy-peer-deps material-ui
npm uninstall --legacy-peer-deps react-trafficlight

npm install --legacy-peer-deps @mui/material @emotion/react @emotion/styled
npm install --legacy-peer-deps @mui/icons-material
npm install --legacy-peer-deps @mui/x-date-pickers
npm install --legacy-peer-deps dayjs
# TODO module seems to be an outdated dependency
# react-trafficlight is an outdated dependency

npm i react-cookie
```

Using the following VS Code (Version: 1.73.0 (Universal)) formatter for Typescript/React: `vscode.typescript-language-features`.
