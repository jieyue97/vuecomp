# VS 安装

- 下载并安装(版本 1.67.1)<br>
- 下载地址: "https://code.visualstudio.com"

![An image](/vuecomp/img/vsaz.png)

## 建议配置

#### - Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code<br>

![An image](/vuecomp/img/Chinese.webp)<br>

#### - Prettier - Code formatter

(安装成功后，编辑器默认的格式化处理就会被 prettier 代替， 默认快捷键是 alt + shift + f)<br>

![An image](/vuecomp/img/prettier.webp)<br>

#### - ESLint<br>

![An image](/vuecomp/img/eslint.webp)<br>

ESLint 是一个以可扩展、每条规则独立的，被设计为完全可配置的 lint 工具，一个 QA 工具，用来作为静态代码检查,避免低级错误和统一代码的风格。<br>

通俗的讲，就是后台代码会由 IDE 去编译代码，在项目运行前就可以对代码进行警告或报错；但是前端以前是不具备这种功能的，而 eslint 就是实现了这个功能。有了 eslint，公司可以统一所有前端代码的代码风格，并且通过静态代码检查，可以提前排除或避免一些不必要的 bug。

- 测试 npm<br>
  win+r 输入 cmd 打开命令行，输入 npm -v，显示当前 npm 版本（6.13.4）

- 替换 npm 地址

  由于 npm 是国外的，使用起来速度可能会比较慢。所以我们使用淘宝的 cnpm 镜像。淘宝的 cnpm 命令管理工具可以代替默认的 npm 管理工具。<br>
  在 cmd 中输入命令即可: npm i -g cnpm --registry=https://registry.npm.taobao.org
