# VitePress-demo
> 官方文档：[https://vitepress.dev/zh/guide/getting-started](https://vitepress.dev/zh/guide/getting-started)


## Installation

执行以下命令安装并初始化 VitePress：

```bash
npm install
npx vitepress init
```


### 初始化配置流程

执行 `npx vitepress init` 后会出现交互式配置向导，流程如下：

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./
│
◇  Where should VitePress look for your markdown files?
│  ./
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│ 
│
└  Done! Now run pnpm run docs:dev and start writing.
```

### 后续操作
配置完成后，可通过以下命令启动开发服务器：
```bash
npm run docs:dev
```