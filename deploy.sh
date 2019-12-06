#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git remote add origin https://github.com/root-lucas/root-lucas.github.io.git
git add -A

git commit -m 'deploy2'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:root-lucas/root-lucas.github.io.git master

cd ../../..