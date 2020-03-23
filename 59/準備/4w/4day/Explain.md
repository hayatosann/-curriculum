https://github.com/NexSeed00/curriculum/blob/master/doc/orientation/02_tips.md

新しいものを作る際の手順を説明します。
理由としては、これから自分で学習していく中で
udemyやドットインストールを使用することもできるけど
自分で考えたアプリを一から作ることができる力が求められます。

アプリの作成手順は
-
-
-

Webについての復習をまたここでやる

クライアント(ブラウザ)<->Webサーバ(PHP)<->DBサーバー

一覧表示画面から実装していきます
実際にここからdemoに入る


まずはやりたいことを書き出す
では今回は一覧を表示すると言う機能を作ることを考える
index.phpが一覧表示画面です。

<?php
//tasksテーブルのデータを全て表示する



//1.tasksテーブルからデータを取得する
   1.DBに接続
   2.SQLを実行する(データを取得する)
   3.取得したデータを変数に代入する
   この3ステップ！！

  //DBに接続
  //require_once == 他のファイルを読み込む
  require_once('./dbconnect.php');

  //SQLを実行する
   //1.準備して
   $dbh->prepare('SELECT * FROM tasks');
    //矢印はアロー演算子なんだけど、これに関しては来週やります
      日本語で言う【〜の】と思っとけば良いです

   //2.実行する
   $stmt->execute();

   //3.取得したデータを変数に代入する
   $tasks=$stmt->fetchAll();
   var_dump($tasks);

//2.取得したデータを画面に表示する

index.phpを開いて
65~83行目を繰り返して表示するから
foreach文を使用する
<? tasks['title']?>これを【ここに詳細】のところに記載していく


function.php
//hの説明→これはセキュリティ対策

//エスケープ処理をしてくれる
//クロスサイトスクリプティング

<a href="masa.com"></a>
これをformの中に入れて送信すると、hをしていればそのurlが文字としてviewに表示されるが、hを指定していなければ、
titileとか言う文字にリンクが埋め込まれてしまう


#次に編集機能

1.編集画面の表示
Editボタンをクリックしたら
編集画面に移動して
編集画面には編集前の文字が表示される

2.更新
updateボタンをクリックしたら
更新されて一覧画面に戻る

edit.phpに移動
1.編集対象のデータを取得
   1.DBに接続する
   2.SQLを実行する(データを取得する)
   3.取得したデータを画面に表示する

   require_once('./dbconnect.php');


         aタグだとGET送信になる
         a href ="edit.php?id=<? h(tasks['id']?>"
         $id=$_GET['id'];

   //準備する
   $stmt = $dbh->('SELECT * FROM tasks WHERE id = ?');

   //実行する
   $stmt->execute([$id]);

   //取得したデータを変数に代入
   $tasks = $stmt->fetchAll();

2.編集対象のデータ画面に表示する
formのvalueの中に<?>

更新
updateボタンをクリックしたら編集対象のデータを
更新して一覧画面に戻る

//データの更新
DB接続
SQLの実行
UPDATE テーブル名 SET

