# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 传到git
git init
git add -A
git commit -m 'deploy'

git config user.name 'Alexlin96'
git config user.email '935858107@qq.com'

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f https://github.com/Alexlin96/test.git master:gh-pages

cd -