今日はチーム開発でのGit操作を復習していくのですが。
まずは復習しましょう

Git 復習
Gitとは
- version管理システム
  - 誰がどこをいつなんで編集したか

Githubとは
- Gitで管理しているファイルをホスティングしてくれるWebサービス

Sourcetree
- Gitの操作をGUIでできるようにしたアプリ
  - GUI 
    - マウスぽちぽち
  - CLI
    - 黒い画面

add
 - commitするファイルを選択すること
commit
 - 保存する
push
 - ローカルでcommitされた内容を保存する 
pull
 - リモートの内容をローカルにコピーする
clone
 - リモートの内容をローカルにコピーする
  - ローカルリポジトリがないとき
branch
 - 枝
 - 作業部屋  
merge
 - 他のbranchのcommit内容を合体させること
checkout
 - 作業部屋を移動すること

チームでの利用

- PR
 - mergeしてくださいっていう依頼
 - コードの品質を担保するため
- コンフリクト
 - 別のbranchで同じファイルの同じ行に別の編集を行うと発生

作業手順
準備
1.ローカルリポジトリの作成
2.リモートリポジトリの作成
3.１と2を連携させる

開発
1.コーディング
2.add
3.commit
  first commit
4.push

準備から開発までやろう
Nexseed/SampleGit2/index.html

池さんは写真でやっていた

一旦自分でブランチ切ってmasterに反映させるまでをやる
Demoで一緒にやろう
注意点はコミットしてから移動する

実際にpull requestを出して、コメントをかけるところまでやる
mergeする

チームでやっていく
リモートリポジトリを作る

準備
1.ローカルリポジトリの作成
2.リモートリポジトリの作成
3.１と2を連携させる
4.index.htmlを作る
5.add
6.commit
7.push

もう一人はリモートリポジトリをクローン

リモートの名前は
sampleGit3
Nexseed/sampleGit3へ

開発作業
1.ブランチを切って
2.add->commit->push->PR->merge

ファイル名は 自分の名前.html


setting
manage access

二人それぞれブランチを切ってPUll requestを出してもらって
最初一人がmasterにmergeしてコンフリクトを見してあげる
その解消法は
コンフリクトを起こした方つまりあとからmergeしようとする方
sourcetreeに戻ってmasterに写って一旦pullしてくる
今回コンフリクトをしたブランチにうつって右クリックするとブランチにmasterをmergeできるからsourcetree上でmergeする

vscode上でコンフリクト解消する