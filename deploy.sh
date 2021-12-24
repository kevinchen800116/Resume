#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 建立輸出檔案
npm run build

# 移動至到打包後的dist目錄 
cd dist

# 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git init 
git add -A
git commit -m 'deploy'

# 將 dist資料夾中的內容推送至遠端 hexWeek6Demo的 gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
git push -f https://github.com/kevinchen800116/Resume.git master:gh-pages
cd -

# 執行指令，在終端機輸入 deploy.sh


# 10. 專案內如有更動，即可使用 git add .
# git commit -m "修改內容"
# git push
# 三個指令先更新 Github 上 master 的部分
# 11. 接著在 Git 工具執行 sh deploy.sh 更新 gh-pages 的部分，即完成所有動作
# //https://ithelp.ithome.com.tw/articles/10237170?sc=pt 參考網誌