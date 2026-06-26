# 基本命令：设置
## 初始化git仓库 `init`
`git init`

## 设置用户名和邮箱 `config`
- 用户名：`git config user.name xxx` 设置了用户名为xxx；`git config user.name "xxx xx"` 设置包含空格的用户名
- 邮箱：`git config user.email xxx` 设置了邮箱为xxx
- 查看：`git config user.name` `git config user.email`

其他设置：
- `merge.ff no`: 设置为分支合并不用快进式合并
- `push.default matching [or] simple`: `git push` 采用matching模式（推送所有有对应的远程分支的本地分支）还是simple模式（只推送当前分支）

### core
- `core.fileMode` 是否保存文件权限，设置为false后，文件权限的改变不会触发状态的修改

### option
`--global` 作为全局设置。优先局部的值；存放在 `.gitconfig` 文件中

信息存放在 `./.git/config` 中

# 基本命令：查看
## 查看状态 `status`
`git status` 查看当前仓库的状态，包括分支、修改和提交信息

## 查看提交信息 `log`
`git log`: 打印最近的提交，根据屏幕大小决定输出多少。按 `Enter` 键继续输出一行，按 `Q` 键退出

### option
`--oneline` 每个提交只输出一行

## 标签 `tag`
`git tag`: 查看所有的标签信息

### option
- `-a` 添加标签，如：`git tag -a tag0 -m "this is a commit tagged tag0"` 在当前提交中添加了一个tag0并指定一条存储在该标签中的信息
- `-d` 删除指定标签，如：`git tag -d tag0`

## 比较 `diff` 与 `difftool`
比较文件的不同，有多种用法：
- 工作区和暂存区（`git add .` 后的）
  - `git diff` 比较工作区和暂存区的不同；`git diff -- {文件名1} {文件名2}` 比较工作区和暂存区中指定文件之间的不同 
- 工作区和版本库
  - `git diff HEAD` 比较工作区和最新版本库中的不同；`git diff HEAD -- {文件名1} {文件名2}` 比较工作区和最新版本库中指定文件之间的不同
  - `git diff {hash number}` 比较工作区和最新版本库中的不同；`git diff {hash number} -- {文件名1} {文件名2}` 比较工作区和最新版本库中指定文件之间的不同
- 暂存区和版本库
  - `git diff --cached` 比较暂存区和最新版本库中的不同；`git diff --cached -- {文件名1} {文件名2}` 比较暂存区和最新版本库中指定文件之间的不同
  - `git diff --cached {hash number}` 比较暂存区和版本库中的不同；`git diff --cached {hash number} -- {文件名1} {文件名2}` 比较暂存区和版本库中指定文件之间的不同
- 不同版本之间
  - `git diff {hash number1} {hash number2}` 比较两个版本的不同；`git diff {hash number1} {hash number2} -- {文件名1} {文件名2}` 比较两个版本指定文件之间的不同；`git diff {hash number1} {hash number2} src` 比较两个版本在 `src` 文件夹的不同
  - `git diff {hash number1} {hash number2} --stat` 查看版本间改动的文件列表 

`git difftool` 是差不多的，就是用一个图形界面（vim类型的）进行比较

# 基本命令：提交
## 添加 `add`
- `git add xxx.cpp` 添加了 `xxx.cpp` 到 `HEAD` 分支（指向当前工作区状态的分支/指针），待提交
- `git add .` 添加了当前仓库中所有已更改的文件到缓存区

## 提交 `commit`
- `git commit -m "提交信息"` 提交缓存区的部分
- `git commit` 在终端运行也可以，进入 `vim` 界面进行编辑，且可以编辑多行提交信息

### 提交规范
> [如何规范你的Git commit？](https://zhuanlan.zhihu.com/p/182553920) by 阿里云开发者，知乎

```shell
<type>(<scope>): <subject>
```

**type** (必须):
- `feat`：新功能（feature）
- `fix/to`：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
  - `fix`：产生diff并自动修复此问题。适合于一次提交直接修复问题
  - `to`：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
- `docs`：文档（documentation）。
- `style`：格式（不影响代码运行的变动）：代码的格式和风格，使其符合项目的编码规范
- `refactor`：重构（即不是新增功能，也不是修改bug的代码变动）：对代码的逻辑、架构或设计进行修改，目的是提高代码的可读性、可维护性和可扩展性，但最终结果（从外部看）和修改前一模一样
- `perf`：优化相关，比如提升性能、体验。
- `test`：增加测试。
- `chore`：构建过程或辅助工具的变动。
- `revert`：回滚到上一个版本。
- `merge`：代码合并。
- `sync`：同步主线或分支的Bug。 

**scope**(可选)：scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

**subject**(必须)：subject是commit目的的简短描述，不超过50个字符。

## 撤销 `reset`
- `git reset xxx.cpp` 撤销了 `xxx.cpp` 的添加
- `git reset` 撤销了所有添加的内容
- `git reset {hash ID}` （软撤回）撤回到该提交中，之后的提交都被删除。但只是撤回了提交，原文件的内容仍然保存
- `git reset --hard {hash ID}` （硬撤回）撤回到该提交中，之后的提交都被删除，原文件也被相应修改


# 基本命令：分支
## 分支 `branch`
`git branch` 查看所有分支，默认的分支为 `main`；加 `*` 的为当前分支

### option
- `-a`: 查看所有分支：`git branch -a`
- `-d`：删除分支，如：`git branch -d beta` 删除 `beta` 分支。注意，当前分支无法被删除，需要先切换到其他分支再执行删除命令
- `-m`: 重命名或移动分支，如：`git branch -m beta1` 重命名**当前分支**为 `beta1` 分支
- `-r`: 查看远程分支：`git branch -r`
- `-v`: 显示每个分支的最后一次提交信息。
- `--set-upstream` 手动建立追踪关系 `git branch --set-upstream-to=origin/next master` 

## 切换 `checkout`
`git checkout {hash ID}` 回溯到之前提交的状态。其中 `{hash ID}` 在 `git log` 中可以查看。

除了 `{hash ID}`，也可以：
- 使用 `git checkout main` 回到 `main` 分支
- 使用 `git checkout tag0` 回到 `tag0` 标签的提交

### option
- `-b`: 创建并切换为该分支，如 `git checkout -b beta` 创建并切换到 `beta` 分支上。若分支名称存在会报错；
  - `git checkout -b beta origin/master` 表示在分支 `origin/master` 的基础上创建新分支 
  - 分支命名规范：不能包含空格；可以加 `/`；可以包含中文和特殊字符
  - 命名：`beta` 代表创新，尝试一些新东西
  - 命名：可以使用开发者/做什么事来命名
- `-B`: 


## 合并 `merge`
`git merge {branch}`: 将分支合并到当前分支上，如：`git merge beta` 将 `beta` 分支的提交合并到当前分支上。

- 当当前分支没有新的提交时，使用 `git merge {branch}` 产生快进式合并(fast forward, ff)，此时看不出分支的结构，合并后是一条直线
- 当当前分支有新的提交时，使用 `git merge {branch}` 会产生一个合并提交，此时可以看到分支的结构。注意：可能会有冲突

处理冲突：
2个分支的修改可能出现冲突，比如共同修改了同一个文件的同一行，使用合并命令后出现冲突。此时在原文件中出现：
`<<<<HEAD` `>>>>beta`
让你选择当前分支的还是被合并分支的修改，还是都接收，一个在上一行，一个在下一行

### option
- `--no-ff`: 不使用快进式合并，创建一个新的节点进行合并，合并后进入 vim 界面编辑合并信息
- `--squash`: 将分支的所有提交合并成一个提交，合并后进入 vim 界面编辑提交信息，合并后不会有分支结构
- `--allow-unrelated-histories`: 允许合并没有共同祖先的分支


## 重构 `rebase`
`git rebase origin/master` 合并分支到当前分支，与 `git merge` 的区别在于合并后不会出现合并前的分支，而是将原来分支在当前分支中重构，相当于在当前分支进行提交。

### option
- `-i`: `git rebase -i {hash ID}`: 进入交互式界面**修改提交信息**，终端编辑
  - `r, reword` 重新编辑该提交，然后进入第二个vim编辑界面进行重新编辑
  - `s, squash` 合并之前的提交，然后进入第二个vim编辑界面编辑提交信息，但是看不出合并过
- `--onto`: `git rebase --onto {hash ID1} {hash ID2}`: 合并特定的提交

## `cherry-pick`
`git cherry-pick <commit-hash>` 合并分支到当前分支，与前者的区别在于只将一个**特定的提交**“复制”并合并在当前分支上

多个commit的合并：
- `git cherry-pick <commit-hash1> <commit-hash2>`: 提交2个commit的合并
- `git cherry-pick <commit-hash1>..<commit-hash2>`: 提交从 `commit-hash1` 到 `commit-hash2` 的合并，且不包含 `commit-hash1`
- `git cherry-pick <commit-hash1>^..<commit-hash2>`: 挑选从 `commit-hash1` 的父提交之后，到 `commit-hash2` 之间的所有提交，包含 `commit-hash1` 和 `commit-hash2`。

若出现冲突，需要先解决冲突后再提交，解决冲突后使用 `git add .` 将修改添加到暂存区，然后使用 `git cherry-pick --continue` 继续合并

### option
- `-e` / `--edit`: 在提交前编辑提交信息
- `--no-commit` 直接合并，不提交
- `-s` / `--signoff` 在提交信息最后添加 `Signed-off-by` 线
- `-x`: 添加一条线表明从哪来
- `--abort`: 中断之前的 `cherry-pick`
- `--continue`: 解决掉版本冲突后继续 `cherry-pick`

# 基本命令：远程仓库
## 克隆 `clone`
`git clone <版本库的网址>` 克隆远程仓库到本地；`git clone <版本库的网址> <本地目录名>`

支持多种协议，除了 `http[s]` ，还支持 `ssh` `git` 本地文件协议

- 克隆github的仓库，比如：`git clone https://github.com/xxx/xx.git`
- `ssh` 协议：`git clone ssh://example.com/path/to/repo.git/` 或者 `git clone [user@]example.com:path/to/repo.git/`
- `git clone git://example.com/path/to/repo.git/`
- `git clone file:///opt/git/project.git`
- - 克隆本地中的其他仓库：`git clone xx` xx是仓库名称

原始的仓库称为 `origin`

在 `git clone` 的时候，所有本地分支默认与**远程主机的同名分支**建立追踪关系(tracking)

### option
- `-o` 指定远程主机名称
- `--depth` 指定克隆深度
- `--branch` 指定克隆的分支

## 管理主机名 `remote`
`git remote` 查看到原始仓库；

### 其他操作
- `git remote get-url origin` 查看原始仓库的路径
- `git remote set-url origin https://github.com/dc-cl/a` 修改/设置原始仓库的路径
- `git remote show origin` 查看原始仓库的详细信息
- `git remote add <主机名>` 添加远程主机
- `git remote rm origin` 删除远程主机
- `git remote remove origin` 移除远程主机
- `git remote rename origin origin0` 重命名

### option
`-v` 查看远程主机的网址，如 `git remote -v`

## 同步到本地 `fetch`
`git fetch <远程主机名>` 将远程主机的版本库更新取回本地，通常查看其他人的进程

`git fetch <远程主机名> <分支名>` 只拉取特定分支的更新，如 `git fetch origin master`

取回的更新用 `远程主机名/分支名` 的形式读取，如： `[remotes/]origin/master` 

## 同步到本地且合并 `pull`
`git pull <远程主机名> <远程分支名>:<本地分支名>` 取回远程主机某个分支的更新，再与本地的指定分支合并

`git pull <远程主机名> <远程分支名>` 取回远程主机某个分支的更新，再与本地的**当前**分支合并

`git pull` 等同于 `git fetch <远程主机名>` + `git merge <远程主机名>/<远程分支名>`

若当前分支与远程分支存在追踪关系，`git pull` 就可以省略远程分支名：`git pull origin`

如果当前分支只有一个追踪分支，连远程主机名都可以省略：`git pull`

### option
- `--rebase` 合并采用rebase模式
- `-p` 当远程主机删除了某个分支，拉取远程分支的时候，删除对应的本地分支

## 推送到远程 `push`
将本地分支的更新，推送到远程主机，格式与 `git pull` 命令相仿（先本地分支，再远程分支）：`git push <远程主机名> <本地分支名>:<远程分支名>`

如果省略**远程分支名**，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。

如果省略**本地分支名**，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。

如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略：`git push origin`

如果当前分支只有一个追踪分支，连远程主机名都可以省略：`git push`

### option
- `-u` 指定一个默认主机（若当前分支与多个主机存在追踪关系），后面可以不加任何参数使用
- `all` 不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机 `git push --all origin`
- `--force` 强制推送，用于远程主机的版本比本地版本更新。
- `tags` 推送标签

## 部分拉取 / 显示 `sparse-checkout`
`git sparse-checkout (init | list | set | add | reapply | disable | check-rules | clean) <options>`

可以直接修改 `.git/info/sparse-checkout` 文件来设置要检出的目录，修改后需要运行 `git sparse-checkout reapply` 来应用新的设置

`.git/info/sparse-checkout` 文件格式与 `.gitignore` 一样（详见[.gitignore](#gitignore-忽略文件的版本追踪) ），默认的内容为：
- `/*` 表示检出所有文件
- `!/*/` 表示不检出任何目录

### init 初始化稀疏检出

#### option: `git sparse-checkout init`
- `--cone`
  - `git sparse-checkout init --cone` 初始化稀疏检出，并启用锥形模式（cone mode）。锥形模式允许你指定要检出的目录，而不是单个文件

### set 设置要检出的目录列表
- `git sparse-checkout set <dir1> <dir2> ...` 设置要检出的目录列表，只有这些目录会被检出到工作区中

### reapply 重新应用当前的稀疏检出设置
- `git sparse-checkout reapply` 重新应用当前的稀疏检出设置，通常在修改了 `.git/info/sparse-checkout` 文件后使用，以确保新的设置生效

### disable 禁用稀疏检出
- `git sparse-checkout disable` 禁用稀疏检出，恢复正常的检出行为，所有文件都会被检出到工作区中

# git submodule
git submodule 是一个子模块，用于管理包含其他 Git 仓库的项目。一个仓库中可以包含其他仓库，比如一个项目需要用到其他项目，那么就可以使用 git submodule 将其他项目作为子模块添加到当前项目中。通过使用子模块，你可以将外部库作为你的项目的一部分来管理，而不必将其直接合并到主仓库中。

`git submodule`: 列出所有的子模块及其状态

## 初始化 `git submodule init`
该命令会初始化配置文件中的所有子模块。它会根据 .gitmodules 文件中的信息设置子模块的 URL 和路径，但不会下载子模块的内容。常见用法：在克隆了一个包含子模块的仓库后，运行此命令来初始化子模块。

## 更新 `git submodule update`
该命令会从子模块的远程仓库中获取最新的代码，并将其更新到本地。它会根据 .gitmodules 文件中的信息找到子模块的路径，并下载子模块的内容。常见用法：在初始化了子模块后，运行此命令来更新子模块的内容。

### option
- `--recursive`：递归地初始化和更新子模块的子模块
- `--remote`: 从子模块的远程仓库拉取最新的更改
- `--force`: 强制更新子模块，即使它们已经存在于本地

例子：`git submodule update --remote --force <dirname>` 强制更新指定目录的子模块，可以是 `sparse-checkout` 后的目录

## 添加 `git submodule add <repo-url> <path>`
该命令会将指定的 Git 仓库作为子模块添加到当前仓库中。

`<repo-url>` 是子模块的仓库地址，`<path>` 是子模块在主仓库中的路径（可选，如果不指定，默认使用子模块仓库的名称作为路径）。

常见用法：将外部库作为子模块添加到项目中。

`git submodule add https://github.com/example/libfoo.git libfoo`

### option
- `-b` / `-branch`: 指定submodule跟踪的分支

## 删除 `git submodule deinit <path>`
将子模块从 .git/config 文件中移除，并删除子模块目录中的文件。

`git rm <path>`: 将子模块的引用从主仓库中删除，并提交更改。

## 检查状态 `git submodule status`
显示子模块的当前状态，包括当前的提交哈希和路径，是否有未提交的更改。


# .gitignore 忽略文件的版本追踪
> [gitignore介绍视频](https://www.bilibili.com/video/BV1EG4y1Z7WW/)

不是所有文件都要保存到版本库中，像日志文件、临时文件和工具（像vscode）生成的文件。只能忽略没有被追踪的文件，先纳入版本管理后写入的无效。破解：
`git rm -r --cached .` 清除本地缓存


- 每项配置占一行
- 每行内容：名称/路径/模式匹配

关于模式匹配：
- 空行不匹配
- `#`: 注释
- `\`: 转义
- `*` 匹配任何字符（0或多次），不可用来匹配 `/`
- `?` 匹配1个字符，不可用来匹配 `/`
- `/` 放开头：只能匹配根目录下的东西，比如 `/ax` 只能匹配根目录下的名称为 `ax` 的目录或文件；没有则会递归匹配
- `/` 放末尾：只匹配该名称的**目录**
- `!` 重新被包含。但是若父目录被排除，用 `!` 也没用
  - 案例：忽略public目录下所有文件，除了favicon.ico文件
    - 错误：
      - public
      - !public/favicon.ico
    - 正确：
      - public/*
      - !public/favicon.ico
- `[]` 匹配一个字符列表，比如 `a[mn]z` 可以匹配 `amz` 和 `anz`
- `**` 匹配多级目录，比如 `a/**/b` 可以匹配 `a/b` `a/x/b` `a/x/y/b`


.gitignore 文件放置的东西，比如：
- 目录名称
- 文件名称

## 帮助命令 `check-ignore`
`git check-ignore xxx.cpp` 检查该文件是否被忽略，若有输出则说明被忽略了

### option
`-v` 给出哪条规则忽略了这个文件
