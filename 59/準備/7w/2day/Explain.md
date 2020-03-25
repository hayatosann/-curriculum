Laravelとは
一言で言うとphpのWeb application framework(WAF)のことです.
フレームワークは使用されやすい機能(コード)が予め用意されているものです.
phpのWAFでは最も人気です

イメージでいうと家を設計する時に足場やら何やら一から作らないといけないのが言語です
フレームワークは枠組みという意味,ある程度形作られていてそこから家を作成するのが,
フレームワークです.

# フレームワークを使用するメリットとしては,
- 開発速度の向上
- 品質の向上
があげられます.

# 品質の向上についてですが、
予め用意された機能によりセキュリティホールを作りにくい とあります
セキュリティーホールとは,
コンピュータのOSやソフトウェアにおいて、プログラムの不具合や設計上のミスが原因となって発生した情報セキュリティ上の欠陥のことをさします.
つまりこういった欠陥を作りにくい機能がlaravelにはあるということになります.

# クエリビルダの使用でSQLインジェクション対策 というのは
クエリビルダ:データベースからレコードを取得する際にSQL文を組み立てて問い合わせを行いますが、それを簡単に組み立てる事の出来る機能のこと
インジェクション対策:
アプリケーションのセキュリティ上の不備を意図的に利用し、アプリケーションが想定しないSQL文を実行させることにより、データベースシステムを不正に操作する攻撃のこと

この機能を使って不正操作からアプリを守れるということになります

# csrfトークンを入れないとformを使用できない
これはどういうことかというと
csrfとは,クロスサイトリクエストフォージェリ（CSRF）といって、Webアプリケーションに存在する脆弱性、もしくはその脆弱性を利用した攻撃方法のことです。掲示板や問い合わせフォームなどを処理するWebアプリケーションが、本来拒否すべき他サイトからのリクエストを受信し処理してしまいます。
例えば,
はじめに掲示板への書き込み画面を表示する際にサーバがクライアントに対して特定の文字列（トークン）を設定します。実際に書き込みのリクエストがあった際にサーバーが「この人に送ったトークンと同じトークンがリクエストに入ってる？」と確認することで攻撃者からの不正なリクエストを防ぐことができます.
このようにcsrfトークンを入れないとformを使用できないようにしています

# フレームワークを使用するデメリットはこのスクリプトの通りで
フレームワーク自体の開発が止まって,セキュリティホールが見つかってもメンテされないといったことや
アプリの仕様変更がなくてもフレームワーク自体のアップデートに追従しないといけないといったことがあげられます.

# ではLravelをどうやって使うか
Laravelを使用するための環境が必要です

Laravelのインストールが必要で,
Composerというソフトウェアを使用してインストールできます.

# Composerとは
PHPの パッケージ管理システム のことです。
パッケージ管理システムとは ライブラリ などのインストールや、
依存関係の解決をするソフトウェアです。

# ライブラリ
ライブラリとは、便利な機能がまとめられたコードです。

# では
ここから下のscriptであるLaravelのインストールからは一緒にやっていきましょう

# その前にto do アプリの完成品を皆さんの手元に置いて動かせるようにしましょう
https://github.com/NexSeed00/laravel
ここのurlから自分にdownload zipしましょう
そしたらNexSeedフォルダの中に移しましょう

# LaravelはComposerというソフトウェアを使用してインストールできます。

# なのでcomposerをインストールします
https://github.com/NexSeed00/laravel/blob/master/basic/overview.md
こちらのurlの
composerのインスールから順番にやっていきましょう
Windowsの方は
公式サイトからファイルをダウンロードしてインストールします。
まずはターミナルを立ち上げましょう

# Composerのインストール
以下のコマンドでインストールできます。
sudo curl -sS https://getcomposer.org/installer | php
# Composerコマンドを使用できるようにファイルを移動する(PATHを通すと言います)
sudo mv composer.phar /usr/local/bin/composer
終わったら
# composer --versionと打ち込んでください
versionが出てくれば成功です.
# 最後に composer install
このコマンドを打ち込みましょう
# 終わったら
cdコマンドを使用して,to do アプリのディレクトリまで移動しましょう

# 次に
phpmyadminにログインしてください
DBを作成します
laravel_todoという名前で,utf8mb4 unicode_ciを選択し、データベースを作成してください

メモ
npmをみんなインストールしていない
https://nodejs.org/ja/

# 次に
vs code上を開いて、todoアプリを開きましょう
開いたら.envフォルダがあると思うのでそれを開きましょう
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name(laravel_todo)
DB_USERNAME=root
DB_PASSWORD=
DB_SOCKET=/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock

# 終わったら
cp .env.example .env をしましょう

# 次に
npm install

# 次に
php artisan key:generate
DBの準備 DBの作成(phpMyAdmin)
php artisan migrate

composer dump-autoload

php artisan db:seed

# 次に
コンパイル ※ publicフォルダの中に CSS と JS のフォルダができます。
npm run dev

# 次にビルトインサーバの起動
php artisan serve
ブラウザでページが表示できるか確認
http://localhost:8000/

テストアカウント
pikopoko@nexseed.net
secret

# 挙動の説明に入る
## ログインしてみましょう
## crud処理を確認してみましょう
## createをして写真を保存してみましょう
写真がうまく写らない場合は
#### php artisan storage:linkをしましょう
## deleteしてみましょう
## editしてみましょう
これを皆さんには2週間で作成してもらいます

# ではdiaryアプリを一緒に作っていきましょう

# まずは準備です
新規アプリの作成手順を一緒に確認していきましょう

1.Laravelのインストール
NexSeedフォルダで
composer create-project laravel/laravel --prefer-dist ./diary
としてlaravelアプリをインストールしましょう

2.次にDB設定
# phpmyadmin
DBの名前:Diary
utf8mb4 unicode_ciで作成しましょう

# .env
DB_DATABASE=Diary
DB_USERNAME=root
DB_PASSWORD=
# MacでDBにXAMPPのMySQLを追加してる場合のみ追加
DB_SOCKET=/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock

3.ここまでできれば
Gitで管理しましょう

## おそらく今日はここで終わってしまう

-------------------------------------------------------------------
# ここから下は私の独断で用意してしまったのであとで切り取り
php artisan serve
コマンドを入力しましょう
localhost 8000と表示されるので,このurlをコピーしてブラウザで確認しましょう
Topページが見えれば成功です.

# (もし,Failed opening required '/Users/sasanohayato/Desktop/NexSeed/laravel-master/todo/vendor/autoload.php'場合)
composer installをしていない可能性がある

# もし500エラーが発生した場合
$ cp .env.example .env
$ php artisan key:generate
$ php artisan config:clear
を順番にする
-----------------------------------------------------------------------
【 メモ 】
diaryのアプリ
crud機能
削除機能までのこと
再来週からは通常授業
htdocの中に保存しなくて良い
phpadiminはhtdocと無関係
phpを使うApacheとかngexが必要
mnager os-x Apache mysql
localhostというドメインでrootが
apcachで使いたい場合はhtdocを使う

Lravelはxammpで使用したapacheを使わなくても実行できるから
ビルドインサーバーで処理をしている
ビルドインサーバー

mysqlはxammpのをしようしている
mysqlの
apacheも起動しないとphpmyadminは動かない

to doの本物
composer install
git clone

一覧機能(水)
新規
編集削除
mkdirでbinで作る
composer は composerをインストールをしている訳ではない
composer install コマンドはcomposerをインストールしている訳ではなくてライブラリをインストールしている
composer パッケージ管理システム 自分が作るアプリでライブラリを使いたいから,


宿題
to doアプリのcrud機能までできれば良い

まとめ
sudo curl -sS https://getcomposer.org/installer | php
このコマンドが
Composer(自体)のインストール

新しくアプリを作るor cloneしてくるとき
そのアプリに必要なライブラリ(ログイン機能等)をインストールする必要がある
その時に使うコマンドが
composer install コマンド

これを実行すると
composerコマンドが使用できるようになる
