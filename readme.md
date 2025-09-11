# VitePress-demo
> [官方文档](https://vitepress.dev/zh/guide/getting-started)

> [VitePress中的markdown扩展功能](https://vitepress.dev/zh/guide/markdown)

# 配合 `Github Pages`
- 首先进行任意一次提交，触发 `Github Actions`，从而创建 `gh-pages` 分支；
- 或者，自行创建 `gh-pages` 分支（必须是这个分支名称）

1. 在仓库上方工具栏点击 `Settings`；
2. 点击左侧的 `Pages`；
3. 在 `Build and deployment` 中的 `branch` 中选择 `gh-pages`，默认为 `/(root)`，点击 `Save`。
4. 可以点击仓库上方工具栏的 `Actions` 查看 `pages build and deployment` 的过程。

# DIY
全程**不需要**在本地部署除仓库文件外的任何工具

- 修改 `.vitepress/config.mjs` 中的 `base` 为自己的仓库名
- 只需要修改markdown文件，`push` 到 `Github` 仓库即可自行编译，再通过 `Github Pages` 呈现出笔记显示在网页的效果
