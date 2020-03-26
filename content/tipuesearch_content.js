var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week1-5 \n Week6-9 \n Week10-14 \n Week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1-5', 'text': '建立個人cd2020倉儲 \n 1.下載 2019Fall可攜套件.7z ，完成後開啟start。 2.先登入自己的github帳號， 創建一個新的倉儲cd2020。 3.進入要存放該資料的資料夾tmp。 4.git clone\xa0 https://github.com/s40723210/cd2020 。 5. git submodule add https://github.com/mdecourse/cmsimde.git。 6.再進入cmsimde，將up_dir的所有項目複 製到cd2020 。 7.完成後，python wsgi.py 開始編輯倉儲。 8.login密碼為admin，gitconfig要有帳號密碼。 9.處理完，git status > git add . > git commit -m "標題" > git push。 10.開啟github倉儲設定，點選要推送的branch即可。 \n 我的教學影片: https://youtu.be/jBFzju1F43s \n \n Updated Python 3.8.2 \n 1.從Python 官方網站 ，下載3.8.2版本的 安裝檔 。 \n 2.完成後開啟，點選 Customize installation(定制安裝)。 \n 3.將第二個選項的pip取消勾選，其他都可以勾選起來。 \n 4.使用預設勾選，將路徑改為y槽的py382資料夾(自己創建)。 \n 5.用編輯器來開啟 start_mdecourse.bat檔案。 \n 6. 將 檔中的py373全部都改成py382後，重新啟動。 \n 7.直接在y槽中執行，python\xa0 get-pip.py 來安裝pip軟件。 \n 8.完成之後，來安裝軟件包，輸入python pip install  Flask \xa0依此類推。 \n 9.安裝的有 Flask 、 Markdown 、 lxml 、 bs4 、 flask_cors 、 pelican 、 leo 。 \n 我的教學影片: https://youtu.be/Im6e8ZD1-Xo \n \n \n 分配工作和問題討論 \n 40623115 亂數分組程式 40623251 可攜系統 40723204 可攜系統 42723210 四輪車 40723212 四輪車 40723225 四輪車 40723232 亂數分組程式 40723234 可攜系統 40723238 四輪車 40723245 亂數分組程式 40723250 亂數分組程式 \n 負責各主題的人，主要以課堂上的進度，來更新個人的倉儲，每次更新進度時要做一下紀錄。所有的主題必須要在 2020年3月26日之前完成，提交3-5頁的兩欄pdf報告，並在youtube上保存3-5分鐘的影片，將pdf文件放在個人倉儲 downloads / assignment1.pdf。最後整合的作業以assignment1放在自己的網站連結加/ assignment1內。有問題可以在我的\xa0 gitter \xa0以及 老師的  gitter \xa0上面發問，會的人也可以幫忙回答。 直播影片: https://www.youtube.com/watch?v=r0AABAp474U \n \n \n New pull request \n 1.先登入github，點進去想要fork的倉儲。 2.點選右上角的Fork，再選擇自己的github。 3.git clone --recurse-submodules\xa0(倉儲網址)。 4.更新git push完成，點選New pull request，等組長同意。 5.組員要進行更新時，要記得先git pull (分組網址) 檢查版本。 6.有衝突的話，組長要處理和整合分支並且解決衝突。 我的教學影片: https://youtu.be/1bZ16BgmF8c \n \n \n \n', 'tags': '', 'url': 'Week1-5.html'}, {'title': 'assignment1', 'text': 'Due March 25, 2020 for class 2a and March 26, 2020 for class 2b. \n \n \n Describe how to do an efficient random grouping for this course or do the roll calling randomly? \n \n \n Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain CMSiMDE website, Pelican blog and Reveal.js presentation on Github? \n \n \n What do you need to know from \xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0 to implement a four-wheeled robot? \n \n \n \n 報告連結: assignment1.pdf \n', 'tags': '', 'url': 'assignment1.html'}, {'title': 'Random grouping', 'text': '請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ \n 測試程式(點選程式連結再貼上即可): \n \n 抽查的python程式 \n 如果要使用python來進行亂數分組抽查的話，可以導入random來從列表中隨機抽出所需要的n個不同元素，如下面的程式執行之後，就可以亂數抽出4位。 \n import random \n\ngroup = [4, 10, 12, 25, 32, 34, 38, 45, 50] \n\nteam = random.sample(group, 4) \nprint (team) \n 再來是要讀取網頁資料的話，就要導入requests，使用get請求即可直接下載，例如member = requests.get("網址")，再用print(member.text)就可以印出來了如下。 \n import requests\n\nweb = "https://mdecourse.github.io/cd2020/downloads/2b_group_list.txt"\n\nmember = requests.get(web)\n\nprint(member.text) \n 如果使用讀取出的資料，還是無法使用的，因為member.text的性質是str字串，所以我就要將它變回原本的list列表，才可以進行亂數分組，改這個非常的簡單如下。 \n x = eval(member.text) \n 最後我整理出來的程式，雖然沒有老師這麼精美，但是也是可以進行亂數分組的抽查的，如果要改抽查人數，改y = random.sample(i,2)的數字即可。 \n 最終程式碼 \n 程式碼連結: 抽查程式.py \n import requests\nimport random\n  \nweb = "https://mdecourse.github.io/cd2020/downloads/2b_group_list.txt"\nmember = requests.get(web)\n#print(memder.text)\nx=0\nfor i in eval(member.text):\n    y = random.sample(i,2)\n    x+=1\n    print("group"+ str(x))\n    print(y) \n 亂數分組的的python程式 \n 一開始先從網頁上抓人員，這次跟上面的不太一樣，抓出來的本來就是str字串，所以必須把每個學號轉變為 list列表，直接將f.text加上 .split() 來轉換，完成之後就可以使用，random.shuffle()來將整個順序打亂，再來設定一共要分幾組，再使用while迴圈來判斷每一組要有幾個人，使用if判斷是來中斷迴圈，len()是指一共有幾個數量的意思，要加組別的話就要再多寫一列，接著使用for 迴圈來從，剛剛算好的每組人數，例如:13、12、12、12，再使用一個for迴圈，來一個一個配置組人員，這時候直接使用迭代iter()的next()，來抓人員這樣子就不會重複了，最後再加上一些說明、分格、標題，就可以開始進行亂數分組了。 \n 最終程式碼 \n 程式碼連結: 亂數分組.py \n import requests\nimport random\n\nweb = "http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0780"\nf = requests.get(web)\n#print(type(f.text))\nx = f.text.split()\n#print(len(x))\n#print(x)\nrandom.shuffle(x)\n\ngroup1,group2,group3,group4 = 0,0,0,0\nwhile 1==1:\n    group1 += 1\n    if (group1+group2+group3+group4) == len(x):\n        break\n    group2 += 1\n    if (group1+group2+group3+group4) == len(x):\n        break\n    group3 += 1\n    if (group1+group2+group3+group4) == len(x):\n        break\n    group4 += 1\n    if (group1+group2+group3+group4) == len(x):\n        break\n#print(group1,group2,group3,group4)\n\nprint("全班人數有"+str(len(x))+"人")\nprint("="*20)\ngrp_num = group1,group2,group3,group4\na = iter(x)\nteam = 0\nfor i in grp_num:\n    team += 1\n    print("group"+str(team)+" 共 "+str(i)+" 人")\n    for g in range(i):\n        print(next(a))\n    print("-" * 20) \n', 'tags': '', 'url': 'Random grouping.html'}, {'title': 'Portable system', 'text': '2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和Reveal.js演示文稿？ \n 要創造可攜編程系統，首先需要的是start.bat以及stop.bat，放進system資料夾(自行創建)後，然後再創建一個data數據目錄資料夾(一樣放進 system資料夾內 )。 \n \n start.bat 存放在system資料夾下 \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_tcc=%Disk%:\\tcc;\nset path_git=%Disk%:\\portablegit\\bin;\n\nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;%path%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit \n stop.bat\xa0 存放在system資料夾下 \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM SciTE.exe /F\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\nEXIT \n \n \n \n data的資料夾內: \n 編輯器，使用 SciTE :   https://www.scintilla.org/SciTEDownload.html \n 下載 Windows 64-bit:   full 64-bit download ，放進 data 目錄裡的 wscite432資料夾(自己創建)，接著 開啟 SciTE.exe ，點選\xa0 Options下的 Open Global Options File \xa0，使用ctrl + f 來收尋code.page=0，將code.page=65001的#刪掉，這樣才不會出現亂碼。 \n code.page=65001\n#code.page=0 \n \n \n Git控制軟體 :   https://git-scm.com/download/win \n 下載Windows 64-bit:  64-bit Git for Windows Setup ，放進 data 目錄裡面並且重新命名為 portablegit 。 \n \n ssh 連線工具組，使用的 putty :\xa0 https://www.chiark.greenend.org.uk/~sgtatham/putty/ \n 直接下載老師之前給的: putty.7z ，解壓縮放入 data 目錄就可以了。 \n \n MSYS2： https://www.msys2.org/\xa0 \n 下載的是 msys2-x86 _64-20190524.exe  ，安裝在  data  目錄裡的 msys64資料夾(自己創建) 。 \n \n Tiny C Compiler :\xa0 https://github.com/TinyCC/tinycc \n 直接在 data  目錄下進行 git clone  https://github.com/TinyCC/tinycc \xa0 tcc\xa0 \n \n 把現在再用的home_mdecourse，整個複製到data 目錄下。 \n \n Python :\xa0 https://www.python.org/ ，下載3.8.2版本的 安裝檔 。 \n 1.完成後開啟，點選 Customize installation(定制安裝)。 \n 2.將第二個選項的pip取消勾選，其他都可以勾選起來。 \n 3.使用預設勾選，將路徑改為data內的py382資料夾(自己創建)。 \n 4.直接在y槽中執行，python\xa0 get-pip.py 來安裝pip軟件。 \n 5.完成之後，來安裝軟件包，輸入python pip install \xa0 Flask \xa0依此類推。 \n 6.安裝的有 Flask 、 Markdown 、 lxml 、 bs4 、 flask_cors 、 pelican 、 leo 。 \n \n data目錄下的所有資料: \n \n system資料夾內: \n \n 這樣子就完成了最簡單的 可攜編程系統了。 \n', 'tags': '', 'url': 'Portable system.html'}, {'title': 'Four wheel car', 'text': '我們從 CoppeliaSim用戶手冊 中尋找有關於四輪機器人的文章，找到了幾個相關的文章，分別是 BubbleRob tutorial 、 Line following BubbleRob tutorial 、 External  controller tutorial 、 Simulation 、 Simulation dialog ， 一共五個有關四輪車的文章。 \n BubbleRob tutorial :本章教程主要是透過，自己動手實際操作模擬，來了解許多功能以及 BubbleRob  機器人設置，我們上學期時就已經有親自使用 V-rep  來操作過一次了，本章使用了包括 : 基本形狀 ( 機器人本體、輪子、障礙物 ) 、感應器 ( 接近型圓錐傳感器 ) 、接頭或電動機 ( 關節動力馬達 ) 、力傳感器 ( 滑塊 ) 、圖表 ( 運動軌跡 ) 、腳本 ( 模型定義 ) ，使用以上這些功能，就可以實現 BubbleRob  機器人，能移動並且使用感應器，來感應障礙物，再使用腳本來迴避，最後再由圖表來顯示模擬路徑。 \n Line following BubbleRob tutorial :這個教程是接續著上面的文章，可以使 BubbleRob  機器人按照規劃的路徑移動，讓我們可以有效的控制機器人，可以避免外部控制所產生的各種問題，這樣子就可以更快的達成需要的模擬狀況，可以提高不少的效率。 \n External controller tutorial :本章屬於外部控制器的教程，讓我們可以使用遠端操控的方式，來控制四輪機器人，控制的方式有編寫腳本、編寫插件、遠程 API 、 ROS 節點、 BlueZero 節點、編寫外部應用程式，每種都要寫子腳本來進行鏈結。 \n Simulation :此教程為模擬案鍵，當我們建立好腳本時，就可以控制模擬的狀況，為了增加模擬的準確性，就可以使用仿真的速度與螺紋渲染，但是必須要適當的調整，才不會造成系統運行中斷。 \n Simulation dialog :此教程是上篇的進階設定， 時間步 為調整模擬時間，運行越快準確度越差， 每幀模擬遍數 為屏幕刷新速度，刷新越快得到的情報越快，只是電腦很吃效能， 當仿真時間高於時暫停 為允許特定仿真時間暫停， 暫停腳本錯誤 會在發生問題時暫停， 模擬開始時全屏 啟用時對話框和消息不會顯示， 實時仿真-倍增係數 使仿真運行快n倍， 落後時嘗試趕上 系統運行趕不上模擬時，會在低負載時趕上， 復位場景初始狀態 運行模擬結束時，所有設定將回歸初始狀態， 刪除新對象 模擬時，添加的東西將會在結束後移除，以上的各種設定，能讓我們在模擬時，更加的方便，進而提高許多效率。 \n', 'tags': '', 'url': 'Four wheel car.html'}, {'title': 'BubbleRob tutorial', 'text': '由40723210提供 \n 本教程將在設計簡單的移動機器人 BubbleRob 時嘗試介紹很多CoppeliaSim功能。與本教程相關的CoppeliaSim場景文件位於CoppeliaSim的安裝文件夾的 tutorials / BubbleRob 文件夾中。下圖說明了我們將設計的仿真場景： \n \n \n 由於本教程將跨越許多不同的方面，因此請確保也看看 其他教程 ，主要是 有關構建仿真模型 的 教程 。首先，重新啟動CoppeliaSim。模擬器顯示默認 場景 。我們將從 BubbleRob 的主體開始。 \n 我們使用[菜單欄->添加->基本形狀->球體]將直徑為0.2的基本球體添加到場景中。我們將X尺寸項目調整為0.2，然後點擊確定。默認情況下，創建的球體將顯示在 可見性層 \xa01中，並且是 動態且可響應的 （因為我們已啟用“\xa0創建動態且可響應的形狀\xa0”項）。這意味著 BubbleRob的 身體將掉落，並且能夠對與其他可響應形狀的碰撞做出反應（即，由物理引擎模擬）。我們可以看到這是 形狀動力學屬性 ：項目身體是可響應的，身體是動態的已啟用。我們開始模擬（通過工具欄按鈕，或在場景窗口中按<control-space>），然後復制並粘貼創建的球體（使用[菜單欄->編輯->複製所選對象]，然後[菜單欄->編輯->粘貼緩衝區]，或者先按<control-c>，再按<control-v>）：這兩個球將對碰撞做出反應並滾動。我們停止模擬：重複的球體將自動刪除。可以在 模擬對話框中 修改此默認行為。 \n 我們還希望 BubbleRob的 主體可以被其他計算模塊（例如 最小距離計算模塊 ）使用。因此，如果尚未啟用，則在該形狀的 對象公共屬性中 啟用 Collidable ， Measurable ， Renderable 和 Detectable 。如果需要，我們現在還可以在 形狀屬性中 更改球體的視覺外觀。 \n 現在，我們在“\xa0平移”選項卡上打開“\xa0 位置”對話框 ，選擇表示 BubbleRob 身體的球體，然後為“\xa0沿著Z”輸入0.02\xa0。我們確保將相對項設置為World。然後，單擊翻譯選擇。這會將所有選定對象沿絕對Z軸平移2 cm，並有效地將我們的球體抬高了一點。在 場景層次結構中 ，我們雙擊球體的名稱，以便我們可以編輯其名稱。我們輸入 bubbleRob ，然後按Enter。 \n 接下來，我們將添加一個 接近傳感器， 以便 BubbleRob 知道它何時接近障礙物：我們選擇[菜單欄->添加->接近傳感器->圓錐類型]。在方向選項卡上的 方向對話框中 ，我們為Y周圍和Z\xa0周圍輸入90\xa0，然後單擊旋轉選擇。在 位置對話框 的“\xa0位置”選項卡上，為X坐標輸入0.1\xa0。Z坐標為0.12\xa0。現在，接近傳感器已相對於 BubbleRob的 身體正確定位。我們在 場景層次中 雙擊接近傳感器的圖標 打開 其屬性 對話框。我們單擊顯示體積參數以打開 接近傳感器體積對話框 。我們將偏移量調整為0.005，角度調整為30，範圍調整為0.15。然後，在 接近傳感器屬性中 ，單擊顯示檢測參數。這將打開 接近傳感器檢測參數對話框 。如果距離小於則取消選中“不允許檢測”項，然後再次關閉該對話框。在場景層次結構中，我們雙擊接近傳感器的名稱，以便我們可以編輯其名稱。我們輸入 bubbleRob_sensingNose 並按回車鍵。 \n 我們選擇 bubbleRob_sensingNose ，然後 按住 \xa0Control鍵選擇 bubbleRob ，然後單擊[菜單欄->編輯->將最後選擇的對象設為父對象]。這會將傳感器連接到機器人的身體。我們也可以拖 bubbleRob_sensingNose 到 bubbleRob 在場景層次。這就是我們現在擁有的： \n \n [接近傳感器連接到 bubbleRob的 身體] \n 接下來，我們將照顧 BubbleRob的 車輪。我們使用[菜單欄->文件->新場景]創建一個新場景。跨多個場景工作通常非常方便，以便可視化並僅對特定元素進行工作。我們添加一個尺寸為（0.08,0.08,0.02）的純原始圓柱體。至於 BubbleRob 的主體，如果尚未啟用，則在該圓柱的 對象通用屬性中 啟用\xa0 Collidable ， Measurable ， Renderable 和 Detectable 。然後，將圓柱的絕對位置設置為（0.05,0.1,0.04），並將其絕對方向設置為（-90,0,0）。我們將名稱更改為 bubbleRob_leftWheel 。我們複製並粘貼滾輪，然後將復制的絕對Y坐標設置為-0.1。我們將副本重命名為 bubbleRob_rightWheel 。我們選擇兩個輪子，複製它們，然後切換回場景1，然後粘貼輪子。 \n 現在，我們需要為車輪添加 接頭 （或電動機）。我們單擊[菜單欄->添加->關節->旋轉]將旋轉關節添加到場景。在大多數情況下，將新對象添加到場景時，該對象將出現在世界的起源處。我們保持關節處於選中狀態，然後控制選擇 bubbleRob_leftWheel 。在“\xa0 位置”對話框 的“\xa0位置”選項卡上，單擊“\xa0應用到選擇”按鈕：這將關節定位在左輪的中心。然後，在“\xa0 方向”對話框 的“\xa0方向”選項卡上，執行相同的操作：這將關節與左輪定向的方向相同。我們將關節重命名為 bubbleRob_leftMotor 。現在，我們在場景層次中雙擊關節的圖標以打開 關節屬性 對話框。然後，單擊“\xa0顯示動態參數”以打開 關節動力學屬性 對話框。我們啟用電動機，並檢查項目“\xa0目標速度為零時鎖定電動機”。現在，我們對右馬達重複相同的過程，並將其重命名為 bubbleRob_rightMotor 。現在，我們將左輪連接到左馬達，將右輪連接到右馬達，然後將兩個馬達連接到 bubbleRob 。這就是我們所擁有的： \n \n [接近傳感器，電動機和車輪] \n 我們運行模擬，並註意到機器人向後倒下。我們仍然缺少與地板的第三個聯繫點。現在，我們添加一個小的滑塊（或腳輪）。在一個新的場景，我們並添加純原始球體直徑為0.05，讓球 可碰撞 ， 可衡量的 ， 可渲染 和 檢測的 （如果尚未啟用），然後將其重命名為 bubbleRob_slider 。我們在 形狀動力學屬性 中將Material設置為 noFrictionMaterial 。為了將滑塊與機器人的其餘部分牢固地鏈接在一起，我們使用[菜單欄->添加->力傳感器]\xa0添加了 力傳感器對象 。我們將其重命名為 bubbleRob_connection 並將其上移0.05。我們將滑塊連接到力傳感器，然後復制兩個對象，切換回場景1並粘貼它們。然後，我們將力傳感器沿絕對X軸移動-0.07，然後將其安裝到機器人主體上。如果現在運行模擬，我們會注意到滑塊相對於機器人主體略微移動：這是因為兩個對象（即 bubbleRob_slider 和 bubbleRob ）都相互碰撞。為了避免在動力學模擬過程中產生奇怪的影響，我們必須通知CoppeliaSim兩個對像不會相互碰撞，我們可以通過以下方式進行此操作：在 shape dynamics屬性中 ，為 bubbleRob_slider 設置了本地可響應蒙版設置為00001111，對於 bubbleRob ，我們將本地可響應掩碼設置為11110000。如果再次運行仿真，我們會注意到兩個對像不再乾涉。這就是我們現在擁有的： \n \n [接近傳感器，電機，車輪和滑塊] \n 我們再次運行仿真，發現即使在電機鎖定的情況下， BubbleRob也會 輕微移動。我們還嘗試使用不同的物理引擎運行仿真：結果將有所不同。動態仿真的穩定性與所涉及的非靜態形狀的質量和慣性緊密相關。有關此效果的說明，請務必仔細閱讀 本 節和 該 節。現在，我們嘗試糾正這種不良影響。我們選擇兩個輪子和滑塊，然後在“形狀動力學”對話框中單擊3次M = M * 2（用於選擇）。效果是所有選定形狀的質量都將乘以8。我們對3個選定形狀的慣性進行相同的操作，然後再次運行仿真：穩定性得到了改善。在關節動力學對話框中，我們將兩個電機的目標速度都設置為50。我們運行模擬： BubbleRob 現在向前移動並最終掉落在地板上。我們將兩個電機的目標速度項都重置為零。 \n 對象 bubbleRob 是所有以後將形成 BubbleRob\xa0 模型的 對象 的基礎。我們將在稍後定義模型。同時，我們要定義代表 BubbleRob 的對象的集合。為此，我們定義了一個 集合對象 。我們單擊[菜單欄->工具->集合]以打開 集合對話框 。或者，我們也可以通過單擊相應的工具欄按鈕來打開對話框： \n \n \n 在集合對話框中，點擊添加新集合。一個新的集合對像出現在下面的列表中。目前，新添加的集合仍為空（未定義）。在列表中選擇新的收藏項時，在場景層次中選擇 bubbleRob ，然後在收藏對話框中單擊“\xa0添加\xa0”。現在，我們的集合被定義為包含層次結構樹的所有對象（從 bubbleRob 對 像 開始）（集合的組成顯示在“\xa0組成元素和屬性”部分中）。要編輯集合名稱，請雙擊它，然後將其重命名為 bubbleRob_collection 。我們關閉收集對話框。 \n 在此階段，我們希望能夠跟踪BubbleRob與任何其他對象之間的最小距離。為此，我們使用[菜單欄->工具->計算模塊屬性]\xa0打開 距離對話框 。或者，我們也可以使用相應的工具欄按鈕打開計算模塊屬性對話框： \n \n \n 在距離對話框中，單擊添加新的距離對象，然後選擇一個距離對： [collection] bubbleRob_collection-場景中的所有其他可測量對象 。這只是添加了一個距離對象，該距離對象將測量集合 bubbleRob_collection （即該集合中的任何 可測量對象 ）與場景中任何其他可測量對象之間的最小距離。我們通過雙擊其名稱將距離對象重命名為 bubbleRob_distance 。我們關閉距離對話框。現在運行模擬時，我們看不到任何區別，因為距離對象將嘗試測量（並顯示） BubbleRob 之間的最小距離段 以及場景中的其他任何可測量對象。問題在於，在此階段，場景中沒有其他可測量的對象（定義地板的形狀默認情況下已禁用其可測量的屬性）。在本教程的後續階段，我們將為場景添加障礙。 \n 接下來，我們將向 BubbleRob 添加一個 圖形對象 ，以顯示最小距離以上的距離，同時還顯示 BubbleRob 隨時間 的 軌跡。我們單擊[菜單欄->添加->圖]並將其重命名為 bubbleRob_graph 。我們將圖形附加到 bubbleRob ，並將圖形的絕對坐標設置為（0,0,0.005）。現在，通過在場景層次結構中雙擊其圖標來打開 圖形屬性 對話框。我們取消選中“\xa0顯示XYZ平面”，然後單擊“\xa0添加新數據流”以進行記錄，然後選擇“\xa0對象：數據流類型的絕對x位置\xa0”\xa0和 bubbleRob_graph 用於記錄的對象/項目。數據流記錄列表中出現了一個項目。該項目是 bubbleRob_graph的 絕對X坐標的數據流（即，將記錄 bubbleRobGraph的 對象的絕對X位置）。現在，我們還想記錄y和z位置：我們以與上述類似的方式添加這些數據流。現在，我們有3個數據流，分別表示BubbleRob的x，y和z軌跡。我們將添加更多的數據流，使我們能夠跟踪我們的機器人與環境之間的最小距離：我們點擊添加新的數據流記錄，並選擇距離：段長度的數據流類型，並 bubbleRob_distance 用於記錄的對象/項目。在數據流記錄列表中，我們現在將Data重命名為bubbleRob_x_pos，將Data0重命名為bubbleRob_y_pos，將Data1重命名為bubbleRob_z_pos，將Data2重命名為bubbleRob_obstacle_dist。 \n 我們在“\xa0數據流”記錄列表中和“\xa0時間圖屬性”部分中選擇 bubbleRob_x_pos ，取消選中“\xa0可見”。我們對 bubbleRob_y_pos 和 bubbleRob_z_pos 都執行相同的 操作 。這樣，在時間圖中只能看到 bubbleRob_obstacle_dist 數據流。以下是我們應該擁有的： \n \n [圖形屬性] \n 接下來，我們將建立一個顯示 BubbleRob 軌蹟的3D曲線：單擊編輯3D曲線打開 XY圖和3D曲線對話框 ，然後單擊添加新曲線。在對話框彈出打開，我們選擇 bubbleRob_x_pos 為X-值項， bubbleRob_y_pos 為Y值項， bubbleRob_z_pos 的Z值項目。我們將新添加的曲線從 Curve 重命名為bubbleRob_path。最後，我們檢查“\xa0相對於世界”項目並將“\xa0曲線寬度”設置為4： \n \n [3D曲線屬性] \n \n 我們關閉與圖有關的所有對話框。現在我們將一個電機目標速度設置為50，運行模擬，然後將看到 BubbleRob的 軌跡顯示在場景中。然後，我們停止仿真並將電動機目標速度重置為零。 \n 我們添加具有以下尺寸的純原始圓柱體：（0.1，0.1，0.2）。我們希望此圓柱體是靜態的（即不受重力或碰撞的影響），但仍會對非靜態的可響應形狀施加一些碰撞響應。為此，我們在 形狀動力學屬性中 禁用“\xa0主體是動態的”\xa0。我們也希望我們的汽缸是\xa0 可碰撞 ， 可衡量的 ， 可渲染 和 檢測的 。我們在 對象的通用屬性中 執行此操作。現在，在仍選擇圓柱體的情況下，我們單擊對象平移工具欄按鈕： \n \n \n 現在我們可以拖動場景中的任何點：圓柱體將跟隨運動，同時始終受約束以保持相同的Z坐標。我們複製並粘貼圓柱幾次，然後將它們移動到 BubbleRob 周圍的 位置 （從頂部查看場景時執行該操作最方便）。在對象移動期間，按住Shift鍵可以執行較小的移動步驟。按住ctrl鍵可以在與 常規 方向正交的方向上移動。完成後，再次選擇相機平移工具欄按鈕： \n \n \n 我們將左馬達的目標速度設置為50並運行模擬：現在，圖形視圖顯示了到最近障礙物的距離，並且該距離段在場景中也可見。我們停止模擬並將目標速度重置為零。 \n 現在，我們需要完成BubbleRob作為 模型 定義。我們選擇模型庫（即對象 bubbleRob ），然後檢查項目Object是模型庫，並且Object / model可以轉移或接受 對象 共有 屬性 中的DNA：現在有一個點畫框，它包圍了模型層次結構中的所有對象。我們選擇兩個關節，即接近傳感器和圖形，然後啟用項目“不顯示為內部模型選擇”，然後在同一對話框中單擊“\xa0應用於選擇”：模型邊界框現在忽略了兩個關節和接近傳感器。仍在同一對話框中，我們禁用相機可見性圖層2，並為兩個關節和力傳感器啟用攝像機可見性層\xa010：這有效地隱藏了兩個關節和力傳感器，因為默認情況下禁用9-16層。任何時候我們都可以 修改整個場景的可見性層 。要完成模型定義，我們選擇視覺傳感器，兩個輪子，滑塊和圖形，然後啟用“\xa0選擇模型基礎”項：如果現在嘗試在場景中的模型中選擇一個對象，則將選擇整個模型，這是一種將整個模型作為單個對象進行處理和操作的便捷方法。此外，這可以防止模型受到意外修改。仍然可以通過在按住Shift的同時單擊選擇對像或在場景層次結構中正常選擇它們，來在場景中選擇模型中的單個對象。最後，我們將模型樹折疊到場景層次中。這就是我們所擁有的： \n \n [\xa0 BubbleRob 模型定義] \n 接下來，我們將在與 BubbleRob 接近傳感器相同的位置和方向上添加 視覺 傳感器。我們再次打開模型層次結構，然後單擊[菜單欄->添加->視覺傳感器->透視類型]，然後將視覺傳感器連接到接近傳感器，並將視覺傳感器的本地位置和方向設置為（0,0,0）。我們還確保視覺傳感器不可見，不是模型邊界框的一部分，並且如果單擊該模型，則會選擇模型。為了自定義視覺傳感器，我們打開 其屬性 對話框。我們將遠裁剪平面項設置為1，將分辨率x和分辨率y設置為 \xa0項目分別為256和256。我們向場景中添加了一個浮動視圖，然後在新添加的浮動視圖上，右鍵單擊[彈出菜單->視圖->將視圖與選定的視覺傳感器關聯]（我們確保視覺傳感器在該過程中被選中）。 \n 通過單擊[菜單欄->添加->關聯的子腳本->非線程]，將非線程子腳本附加到視覺傳感器。我們雙擊場景層次結構中視覺傳感器旁邊出現的小圖標：這將打開我們剛剛添加的子腳本。我們將以下代碼複製並粘貼到 腳本編輯器中 ，然後將其關閉： \n function sysCall_vision(inData)\n    simVision.sensorImgToWorkImg(inData.handle) -- copy the vision sensor image to the work image\n    simVision.edgeDetectionOnWorkImg(inData.handle,0.2) -- perform edge detection on the work image\n    simVision.workImgToSensorImg(inData.handle) -- copy the work image to the vision sensor image buffer\nend\n\nfunction sysCall_init()\nend \n 為了能夠看到視覺傳感器的圖像，我們開始模擬，然後再次停止。 \n 我們場景所需的最後一件事是一個小的 子腳本 ，它將控制 BubbleRob的 行為。我們選擇 bubbleRob 並單擊[菜單欄->添加->關聯的子腳本->非線程]。我們雙擊場景層次結構中 bubbleRob 名稱旁邊顯示的腳本圖標，然後將以下代碼複製並粘貼到 腳本編輯器中 ，然後將其關閉： \n function speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self) -- this is bubbleRob\'s handle\n    leftMotor=sim.getObjectHandle("bubbleRob_leftMotor") -- Handle of the left motor\n    rightMotor=sim.getObjectHandle("bubbleRob_rightMotor") -- Handle of the right motor\n    noseSensor=sim.getObjectHandle("bubbleRob_sensingNose") -- Handle of the proximity sensor\n    minMaxSpeed={50*math.pi/180,300*math.pi/180} -- Min and max speeds for each motor\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    -- Create the custom UI:\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.create(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor) -- Read the proximity sensor\n    -- If we detected something, we set the backward mode:\n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end \n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,speed)\n        sim.setJointTargetVelocity(rightMotor,speed)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,-speed/2)\n        sim.setJointTargetVelocity(rightMotor,-speed/8)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n \n 我們運行模擬。 BubbleRob 現在在嘗試避開障礙物的同時向前移動（以非常基本的方式）。在模擬仍在運行時，更改 BubbleRob的 速度，然後將其複制/粘貼幾次。在模擬仍在運行時，也嘗試擴展其中的一些。請注意，根據環境的不同，最小距離計算功能可能會嚴重降低仿真速度。您可以通過選中/取消選中“\xa0啟用所有距離計算”項，在“\xa0 距離”對話框中 打開和關閉該功能。 \n 使用腳本控制機器人或模型只是一種方法。CoppeliaSim提供了許多不同的方法（也可以結合使用），請參閱 外部控制器教程 。 \n', 'tags': '', 'url': 'BubbleRob tutorial.html'}, {'title': 'Line following BubbleRob', 'text': '由40723210提供 \n 在本教程中，我們旨在擴展BubbleRob的功能，以使他/她遵循地面上的規則。確保您已完全閱讀並理解第 一個BubbleRob教程 。本教程由Eric Rohmer提供。 \n 在CoppeliaSim的安裝文件夾中的 tutorials / BubbleRob中 加載第一個BubbleRob教程的場景。與本教程相關的場景文件位於 tutorials / LineFollowingBubbleRob中 。下圖說明了我們將設計的仿真場景： \n \n \n 我們首先創建3個 視覺傳感器 中的第一個，並將其附加到 bubbleRob 對象。選擇[菜單欄->添加->視覺傳感器->正交類型]。雙擊 場景層次結構中 新創建的視覺傳感器圖標，編輯其屬性，然後更改參數以反映以下對話框： \n \n \n 視覺傳感器必鬚麵向地面，因此選擇它，然後在“\xa0 方向”對話框 的“\xa0方向”選項卡上，將“\xa0 Alpha \xa0-\xa0 Beta \xa0-\xa0 Gamma” 項設置為[180; 0; 0]\xa0。 \n 我們有幾種可能性可以讀取視覺傳感器。由於我們的視覺傳感器只有一個像素，並且操作簡單，因此我們只需查詢視覺傳感器讀取的圖像的平均強度值即可。對於更複雜的情況，我們可以設置 視覺回調函數 。現在，將視覺傳感器複製並粘貼兩次，並將其名稱調整為 leftSensor ， middleSensor 和 rightSensor 。將 bubbleRob設置為 其父級（ 即將 其附加到 bubbleRob 對象）。現在，您的傳感器在場景層次中應如下所示： \n \n \n 讓我們正確放置傳感器。對於使用 位置對話框 中，在位置選項卡，並設置以下的絕對坐標： \n \n \n 左傳感器：[0.2; 0.042; 0.018] \n 中間傳感器：[0.2; 0; 0.018] \n 右傳感器：[0.2; -0.042; 0.018] \n \n \n 現在讓我們修改環境。我們可以移去BubbleRob前面的幾個圓柱體。接下來，我們將構建機器人將嘗試遵循的 路徑 。現在最好切換到頂視圖：通過 頁面選擇器工具欄按鈕 選擇 頁面 \xa04\xa0。然後單擊[菜單欄->添加->路徑->圓圈類型]。 使用鼠標 啟用 對象移動 。您可以通過兩種方式調整路徑的形狀： \n \n \n 選擇路徑（並且只有路徑）後，按住Ctrl並單擊其 控制點之一 。然後可以將它們拖動到正確的位置。 \n 選擇路徑後，進入 路徑編輯模式 。在那裡，您可以靈活地調整各個路徑控制點。 \n \n \n 對路徑的幾何形狀滿意（您隨時可以在以後的階段對其進行修改）後，選擇它，然後取消選中 路徑屬性 中的“\xa0顯示點的方向”，“\xa0顯示路徑線”和“\xa0顯示路徑上的當前位置”。然後單擊“\xa0顯示路徑整形對話框”。這將打開 路徑整形對話框 。單擊“\xa0啟用路徑整形”，將類型設置為“\xa0水平線段”，然後將“\xa0縮放比例” 到4.0。最後將顏色調整為黑色。我們必須對路徑進行最後一個重要的調整：當前，路徑的z位置與地板的z位置重合。結果是有時我們會看到路徑，有時會看到地板（這種效果在openGl行話中被稱為“\xa0 z-fighting \xa0”）。這不僅影響我們所看到的，而且還會影響視覺傳感器所看到的。為了避免與z戰鬥有關的問題，只需將路徑對象的位置向上移動0.5毫米即可。 \n 最後一步是調整BubbleRob的控制器，使其也將遵循黑色路徑。打開附著於 bubbleRob 的 子腳本 ，並將其替換為以下代碼： \n function speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self)\n    leftMotor=sim.getObjectHandle("leftMotor")\n    rightMotor=sim.getObjectHandle("rightMotor")\n    noseSensor=sim.getObjectHandle("sensingNose")\n    minMaxSpeed={50*math.pi/180,300*math.pi/180}\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    floorSensorHandles={-1,-1,-1}\n    floorSensorHandles[1]=sim.getObjectHandle("leftSensor")\n    floorSensorHandles[2]=sim.getObjectHandle("middleSensor")\n    floorSensorHandles[3]=sim.getObjectHandle("rightSensor")\n    -- Create the custom UI:\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.reate(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor)\n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end\n\n    -- read the line detection sensors:\n    sensorReading={false,false,false}\n    for i=1,3,1 do\n        result,data=sim.readVisionSensor(floorSensorHandles[i])\n        if (result>=0) then\n            sensorReading[i]=(data[11]<0.3) -- data[11] is the average of intensity of the image\n        end\n        print(sensorReading[i])\n    end\n\n    -- compute left and right velocities to follow the detected line:\n    rightV=speed\n    leftV=speed\n    if sensorReading[1] then\n        leftV=0.03*speed\n    end\n    if sensorReading[3] then\n        rightV=0.03*speed\n    end\n    if sensorReading[1] and sensorReading[3] then\n        backUntilTime=sim.getSimulationTime()+2\n    end\n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,leftV)\n        sim.setJointTargetVelocity(rightMotor,rightV)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,-speed/2)\n        sim.setJointTargetVelocity(rightMotor,-speed/8)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n \n 您可以輕鬆地調試以下視覺傳感器的生產線：選擇一個，然後在場景視圖中選擇[右鍵->添加->浮動視圖]，然後在新添加的浮動視圖中選擇[右鍵->視圖- ->將視圖與選定的視覺傳感器關聯]。 \n 最後，刪除在第 一個BubbleRob教程 中添加的輔助項：刪除圖像處理視覺傳感器及其關聯的浮動視圖，該浮動視圖表示障礙物的清除。通過 距離對話框 也刪除距離計算對象。而已！ \n', 'tags': '', 'url': 'Line following BubbleRob.html'}, {'title': 'External controller tutorial', 'text': "由40723210提供 \n 在CoppeliaSim中，有幾種方法可以控制機器人或仿真： \n \n The most convenient way is to write a \xa0 child script \xa0 that will handle the behaviour of a given robot or \xa0 model . It is the most convenient way, because child scripts are directly attached to \xa0 scene objects , they will be duplicated together with their associated scene objects, they do not need any compilation with an external tool, they can run in \xa0 threaded \xa0 or \xa0 non-threaded \xa0 mode, they can be extended via \xa0 custom Lua function \xa0 or via a \xa0 Lua extension library . Another major advantage in using child scripts: there is no communication lag as with the last 3 methods mentioned in this section (i.e. the \xa0 regular API \xa0 is used), and child scripts are part of the application main thread (inherent synchronous operation). There are several drawback to writing scripts however: you don't have the choice of the programming language, you can't have the fastest code, and you can't directly access external function libraries, except the Lua extension libraries. \n \n \n \n 最方便的方法是編寫一個 子腳本 ，以處理給定機器人或 模型 的行為 。 這是最便捷的方式，因為孩子的腳本直接連接到 場景中的對象 ，他們將與它們相關的場景對象進行複製，他們不需要任何編譯與外部的工具，它們可以在運行 線程 還是 非線程 模式，可以通過 自定義Lua函數 或 Lua擴展庫對其進行擴展 。 使用子腳本的另一個主要優點：與本節中提到的後三種方法（即 常規API） 一樣，沒有通信延遲 ，並且子腳本是應用程序主線程的一部分（固有的同步操作）。 但是，編寫腳本有幾個缺點：您無法選擇編程語言，不能擁有最快的代碼，並且除了Lua擴展庫之外，您無法直接訪問外部函數庫。 \n \n \n Another way one can control a robot or a simulation is by writing a \xa0 plugin . The plugin mechanism allows for callback mechanisms, \xa0 custom Lua function registration , and of course access to external function libraries. A plugin is often used in conjunction with child scripts (e.g. the plugin registers custom Lua functions, that, when called from a child script, will call back a specific plugin function). A major advantage in using plugins is also that there is no communication lag as with the last 3 methods mentioned in this section (i.e. the \xa0 regular API \xa0 is used), and that a plugin is part of the application main thread (inherent synchronous operation). The drawbacks with plugins are: they are more complicated to program, and they need to be compiled with an external too. Refer also to the \xa0 plugin tutorial . \n \n \n 可以控制機器人或模擬的另一種方法是編寫 插件 。 插件機制允許回調機制， 自定義Lua函數註冊 ，當然還可以訪問外部函數庫。 插件通常與子腳本結合使用（例如，插件註冊自定義Lua函數，當從子腳本中調用時，該Lua函數將回調特定的插件函數）。 使用插件的一個主要優點是，與本節中提到的後3種方法（即 常規API） 一樣，沒有通信延遲 （使用），並且插件是應用程序主線程的一部分（固有的同步操作）。 插件的缺點是：它們的編程更加複雜，並且也需要使用外部編譯。 另請參閱 插件教程 。 \n \n \n A third and forth way one can control a robot or a simulation is by writing an external client application that relies on the \xa0 remote API . This is a very convenient and easy way, if you need to run the control code from an external application, from a robot or from another computer. This also allows you to control a simulation or a \xa0 model \xa0 (e.g. a virtual robot) with the exact same code as the one that runs the real robot. The remote API comes in two versions: the \xa0 B0-based remote API , and the \xa0 legacy remote API . \n \n \n 控制機器人或模擬的第三種方式是編寫依賴於 遠程API 的外部客戶端應用程序 。 如果您需要從外部應用程序，機器人或另一台計算機運行控制代碼，這是一種非常便捷的方法。 這還允許您 使用與運行真實機器人完全相同的代碼 來控制仿真或 模型 （例如，虛擬機器人）。 遠程API有兩個版本： 基於B0的遠程API 和 舊版遠程API 。 \n \n \n A fifth way to control a robot or a simulation is via a \xa0 ROS \xa0 node. In a similar way as the \xa0 remote API , ROS is a convenient way to have several distributed processes communicate with each other. While the remote API is very lightweight and fast, it allows only communication with CoppeliaSim. ROS on the other hand allows connecting virtually any number of processes with each other, and a large amount of compatible libraries are available. It is however heavier and more complicated than the remote API. Refer to the \xa0 ROS interfaces \xa0 for details. \n \n \n 控制機器人或仿真的第五種方法是通過 ROS 節點。 ROS \xa0 與 遠程API 相似 ，是使多個分佈式進程相互通信的便捷方法。 儘管遠程API非常輕巧且快速，但它僅允許與CoppeliaSim通信。 另一方面，ROS允許幾乎將任意數量的進程相互連接，並且提供了大量兼容的庫。 但是，它比遠程API重並且更複雜。 有關詳細信息， 請參閱 ROS接口 。 \n \n \n A sixth way to control a robot or a simulation is via a \xa0 BlueZero \xa0 (BØ) node. In a similar way as ROS, BlueZero is a convenient way to have several distributed processes communicate with each other, and is a lightweight and cross-platform solution. Refer to the \xa0 BlueZero interface \xa0 for details. \n \n \n 控制機器人或模擬的第六種方法是通過 BlueZero （BØ）節點。 與ROS類似，BlueZero是使多個分佈式進程相互通信的一種便捷方法，並且是一種輕量級的跨平台解決方案。 有關詳細信息， 請參考 BlueZero界面 。 \n \n \n A seventh way to control a robot or a simulation is by writing an external application that communicates via various means (e.g. pipes, sockets, serial port, etc.) with a CoppeliaSim plugin or CoppeliaSim script. Two major advantages are the choice of programming language, which can be just any language, and the flexibility. Here also, the control code can run on a robot, or a different computer. This way of controlling a simulation or a model is however more tedious that the methods with the \xa0 remote API . \n \n \n 控制機器人或模擬的第七種方法是編寫一個外部應用程序，該應用程序通過各種方式（例如管道，套接字，串行端口等）與CoppeliaSim插件或CoppeliaSim腳本進行通信。 選擇編程語言（可以是任何一種語言）和靈活性是兩個主要優點。 同樣，控制代碼也可以在機器人或其他計算機上運行。 但是，與使用 遠程API 的方法相比，這種控制仿真或模型的方法更加乏味 。 \n \n \n 有8個與本教程相關的場景文件： \n \n scenes/controlTypeExamples/controlledViaScript : one robot is controlled via a \xa0 non-threaded child script , the other is controlled via a \xa0 threaded child script . \n scenes/controlTypeExamples/controlledViaPlugin : the robot is controlled via a \xa0 plugin . \n scenes/controlTypeExamples/controlledViaB0RemoteApi : the robot is controlled via the \xa0 B0-based remote API . \n scenes/controlTypeExamples/controlledViaLegacyRemoteApi : the robot is controlled via the \xa0 legacy remote API . \n scenes/controlTypeExamples/controlledViaB0 : the robot is controlled via the \xa0 BlueZero interface . \n scenes/controlTypeExamples/controlledViaRos : the robot is controlled via the \xa0 ROS interface . \n scenes/controlTypeExamples/controlledViaRos2 : the robot is controlled via the \xa0 ROS2 interface . \n scenes/controlTypeExamples/controlledViaTcp : the robot is controlled via \xa0 LuaSocket \xa0 and TCP. \n \n \n \n \n scenes/controlTypeExamples/controlledViaScript : 一個機器人通過控制 非螺紋孩子腳本 ，另一種是通過受控的 螺紋孩子腳本 。 \n scenes/controlTypeExamples/controlledViaPlugin ：機器人是通過 插件 控制的 。 \n scenes/controlTypeExamples/controlledViaB0RemoteApi ：通過 基於B0的遠程API 來控制機器人 。 \n scenes/controlTypeExamples/controlledViaLegacyRemoteApi ：通過 舊版遠程API 控制機器人 。 \n scenes/controlTypeExamples/controlledViaB0 ：通過 BlueZero界面 控制機器人 。 \n scenes/controlTypeExamples/controlledViaRos ：通過 ROS接口 控制機器人 。 \n cenes/controlTypeExamples/controlledViaRos2 ：通過 ROS2接口 控制機器人 。 \n scenes/controlTypeExamples/controlledViaTcp ：機器人是通過 LuaSocket 和TCP \xa0 控制的 。 \n \n \n 在所有8種情況下， 都使用 子腳本 ，主要是為了與外界建立鏈接（例如，啟動正確的客戶端應用程序，並將正確的對象句柄傳遞給它）。 有兩種方法可以控制機器人，仿真程序或仿真程序本身：通過使用 自定義腳本 或 加載項 。 但是，不建議將它們用於控制，而應在不運行模擬時將其用於處理功能。 \n 例如，鏈接到場景 控制 的ViaB0RemoteApi.ttt中的機器人的子腳本 具有以下主要任務： \n \n 使用某些對象句柄作為參數 啟動控制器應用程序（ bubbleRobClient_b0RemoteApi ）。 基於對象B0的遠程API的服務器功能由對象 b0RemoteApiServer 提供 。 \n \n 作為另一個示例，鏈接到場景 控制 的ViaRos.ttt中的機器人的子腳本 具有以下主要任務： \n \n 檢查是否 已加載CoppeliaSim \xa0 的 ROS接口 \n 使用某些主題名稱或對象句柄作為參數 啟動控制器應用程序（ rosBubbleRob ） \n \n 然而，作為另一個示例，鏈接到場景 控制 的ViaTcp.ttt中的機器人的子腳本 具有以下主要任務： \n \n 搜索空閒的套接字連接端口 \n 使用所選的連接端口作為參數 啟動控制器應用程序（ bubbleRobServer ） \n 本地連接到控制器應用程序 \n 在每次仿真過程中，將傳感器值發送到控制器，並從控制器讀取所需的電機值 \n 在每次模擬過程中，將所需的電機值應用於機器人的關節 \n \n 運行模擬，然後復制並粘貼機器人：您將看到重複的機器人將直接運行，因為附加的子腳本負責啟動各自外部應用程序的新實例，或調用適當的插件函數。 \n", 'tags': '', 'url': 'External controller tutorial.html'}, {'title': 'Simulation', 'text': '由40723210提供 \n 可以使用[菜單欄->模擬->開始/暫停/停止模擬]或通過相關的工具欄按鈕來啟動，暫停和停止CoppeliaSim中的模擬： \n \n [模擬開始/暫停/停止工具欄按鈕] \n 在內部，模擬器將使用其他中間狀態，以正確告知 腳本 或程序接下來將發生的情況。 以下狀態圖說明了模擬器的內部狀態： \n \n [模擬狀態圖] \n 腳本和程序應始終根據當前系統調用功能以及可能的 模擬狀態進行反應 ，以便正確運行。 優良作法是將每個控制代碼分成至少4個系統調用函數（例如，用於 非線程子腳本 ）： \n \n \n 初始化函數 ： sysCall_init ：僅在腳本初始化時才調用該函數。 \n 激勵 函數 ： sysCall_actuation ：應在發生激勵時調用該函數。 \n Sensing函數 ： sysCall_sensing ：應在發生傳感時調用此函數。 \n 清理函數 ： sysCall_cleanup ：在取消初始化腳本之前（例如，在模擬結束時或銷毀腳本時）調用該函數。 \n \n \n 有關如何安排典型腳本的示例，請參考 main腳本 ， 子腳本 和 自定義腳本 頁面。 \n 仿真循環 \n 模擬器通過以恆定的時間步長推進模擬時間來進行操作。 下圖說明了主要的仿真循環： \n \n [主仿真循環] \n 通過嘗試使仿真時間與實時保持同步來支持實時仿真： \n \n [實時仿真循環] \n 以下是一個非常簡化的 主客戶端應用程序 （ 為清晰起見，已省略了 消息， 插件 處理和其他詳細信息）： \n void initializationCallback\n{\n    // do some initialization here\n}\n\nvoid loopCallback\n{\n    if ( (simGetSimulationState()&sim_simulation_advancing)!=0 )\n    {\n        if ( (simGetRealTimeSimulation()!=1)||(simIsRealTimeSimulationStepNeeded()==1) )\n        {\n            if ((simHandleMainScript()&sim_script_main_script_not_called)==0)\n                simAdvanceSimulationByOneStep();\n        }\n    }\n}\n\nvoid deinitializationCallback\n{\n    // do some clean-up here\n} \n 取決於仿真的複雜性，計算機的性能和 仿真設置 ，實時仿真可能並不總是可能的。 \n 仿真速度 \n 在非實時仿真中，仿真速度（即感知速度）主要取決於兩個因素：仿真時間步長和一個渲染通道的仿真通道數量（ 有關更多詳細信息， 請參見 仿真對話框 ）。 在實時仿真的情況下，仿真速度主要取決於實時乘法係數，而且在一定程度上取決於仿真時間步長（太小的仿真時間步長可能與實時時間不兼容）。由於計算機的計算能力有限，因此無法進行仿真。 在模擬過程中，可以使用以下工具欄按鈕來調整模擬速度： \n \n [模擬速度調整工具欄按鈕] \n 以某種方式調整模擬速度，以使初始模擬時間步長永遠不會增加（例如，這可能因此而導致機制中斷）。 以下兩個圖說明了仿真速度調整機制： \n \n [ \xa0 非實時 模擬的模擬速度調整機制 ] \n \n \n [用於 實時 仿真的仿真速度調整機制 ] \n 默認情況下，每個模擬週期由以下 順序 操作 組成 ： \n \n \n 執行 主腳本 \n 渲染場景 \n \n 螺紋渲染 \n \n 渲染操作將始終增加仿真週期的持續時間，從而也降低了仿真速度。 可以定義每個場景渲染的主腳本執行次數（請參閱後面的內容），但這在某些情況下還不夠，因為渲染仍然會減慢每個第x個模擬週期的時間（這可能會限制實時性）。 在這種情況下，可以通過 用戶設置 或以下工具欄按鈕 激活線程渲染模式 ： \n \n [線程渲染工具欄按鈕] \n 激活線程渲染模式後，模擬週期將僅包括執行 主腳本 ，因此模擬將以最大速度運行。 渲染將通過不同的線程進行，並且不會減慢模擬任務的速度。 然而，必須考慮缺點。 激活線程渲染後，： \n \n \n 渲染將與模擬循環異步進行，並且可能會出現視覺故障 \n 該 錄像機 將不以恆定速度運轉（某些幀可能會跳過） \n 應用程序的穩定性可能會降低 \n 某些操作（例如擦除對像等）需要等待渲染線程完成工作才能執行，反之亦然。 在那些情況下，循環可能比順序渲染模式花費更多的時間。 \n \n \n \n', 'tags': '', 'url': 'Simulation.html'}, {'title': 'Simulation dialog', 'text': '由40723210提供 \n 可以通過[菜單欄->模擬->模擬設置]或單擊以下工具欄按鈕來訪問模擬對話框： \n \n [模擬工具欄按鈕] \n \n [模擬設置對話框] \n \n 時間步 ： 模擬 時間步。 每次 執行 主腳本 時，仿真時間都會增加仿真時間步長。 使用較大的時間步會導致快速但不准確/不穩定的仿真。 另一方面，較小的時間步長（通常）會導致更精確的仿真，但是會花費更多時間。 強烈建議保留默認時間步長。 \n 每幀模擬遍數（ppf） ：一個渲染遍的模擬遍數。 值為10表示刷新屏幕之前，主腳本已執行10次（10個模擬步驟）。 如果您的圖形卡較慢，則可以選擇僅顯示兩幅中的一幅。 \n 當仿真時間高於時暫停 ：允許指定仿真時間，在該時間暫停仿真（例如，能夠在特定仿真時間分析某些結果）。 \n 暫停腳本錯誤 ：如果啟用，則在發生 腳本 錯誤時 將暫停仿真 。 \n 模擬開始時全屏 ：如果啟用，則模擬以全屏模式開始。 請注意，在全屏模式下，對話框和消息將不會出現或不可見，只有鼠標左鍵處於活動狀態。 因此，僅在正確配置場景並最終確定場景後才建議使用該模式。 可以使用esc鍵保留全屏模式，並 在仿真過程中 通過 布爾參數 \xa0 sim_booparam_fullscreen 進行 切換 \xa0 。 Unler Linux和MacOS可能僅部分支持全屏模式，並且在某些系統上切換回普通模式可能會失敗。 \n 實時仿真，倍增係數 ：如果選擇，則仿真時間將嘗試跟隨實時。 X的乘數將使仿真運行比實時快X倍。 \n 落後時嘗試趕上 ：在實時仿真過程中，仿真時間可能無法實時跟踪（例如，由於某些瞬間繁重的計算）。 在這種情況下，如果選中此復選框，則模擬時間將嘗試趕上損失的時間（例如，當計算負載再次減少時），這會明顯提高速度。 \n 復位場景初始狀態 ：當被選擇時，那麼所有 的對象 將被復位到它們的初始狀態：包括對象的本地位置，局部方向和它的父（只要該對象沒有另外修飾的（例如縮放））， 關節 以及 路徑的 固有位置，浮動 視圖 位置和大小等。這意味著除非進行了重大更改（ 形狀 縮放，對象移除等） ，否則下一次模擬運行將以與上一次相同的方式執行 。 此項目將忽略一些次要設置。 \n 刪除新對象 ：選中該選項後，在仿真運行期間添加的場景對象將在仿真結束時被刪除。 \n \n', 'tags': '', 'url': 'Simulation dialog.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};