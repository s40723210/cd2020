var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week1-5 \n Week6-9 \n Week10-14 \n Week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1-5', 'text': '建立個人cd2020倉儲 \n 1.下載 2019Fall可攜套件.7z ，完成後開啟start。 2.先登入自己的github帳號， 創建一個新的倉儲cd2020。 3.進入要存放該資料的資料夾tmp。 4.git clone\xa0 https://github.com/s40723210/cad2020 。 5. git submodule add https://github.com/mdecourse/cmsimde.git。 6.再進入cmsimde，輸入python -m pip install flask_cors。 7.完成後，python wsgi.py 開始編輯倉儲。 8.login密碼為admin，gitconfig要有帳號密碼。 9.處理完，git status > git add . > git commit -m "標題" > git push。 10.開啟github倉儲設定，點選要推送的branch即可。 \n 我的教學影片: https://youtu.be/jBFzju1F43s \n \n Updated Python 3.8.2 \n 1.從Python 官方網站 ，下載3.8.2版本的 安裝檔 。 \n 2.完成後開啟，點選 Customize installation(定制安裝)。 \n 3.將第二個選項的pip取消勾選，其他都可以勾選起來。 \n 4.使用預設勾選，將路徑改為y槽的py382資料夾(自己創建)。 \n 5.用編輯器來開啟 start_mdecourse.bat檔案。 \n 6. 將 檔中的py373全部都改成py382後，重新啟動。 \n 7.直接在y槽中執行，python\xa0 get-pip.py 來安裝pip軟件。 \n 8.完成之後，來安裝軟件包，輸入 pip install  Flask \xa0依此類推。 \n 9.要 安裝有 Flask 、 Markdown 、 lxml 、 bs4 、 flask_cors 、 pelican 、 leo 。 \n \xa0 \n', 'tags': '', 'url': 'Week1-5.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};