Linuxのパス
  - Linuxでは/（スラッシュ）が最上位となります。この/をルートディレクトリと呼びます。
- 絶対パス
  - ルートディレクトリからパスを順番に下ってパスを表す方法を絶対パスと呼びます
- 相対パス
  - カレントディレクトリからの相対的なパスを相対パスと呼びます 

記号
- .
 - 現在のディレクトリ
- ..
 - 上の階層のディレクトリ
- ~
 - ホームディレクトリ(チルダという)
   - ログインしたユーザー専用のディレクトリを表す記号

実践
- 用意
  Nexseed/hoge 
          |-fuga/sample.html
          |-foo/sample2.html
  この構成のフォルダを作成しよう

- 説明
カレントディレクトリがfugaだったとする.

sample.html
絶対パスだと/NexSeed/hoge/fugaとなります。
相対パスだと./sample.htmlとなる

fugaからみてhogeは？
一つ上の階層
..となる

ではfugaからみて、sample2.htmlは相対パスでどのように記載できますでしょうか。

../foo/sample2.htmlとなります.

# これをふまえた上でコマンド操作を行なっていきましょう！！

Mac → cmd + space でターミナルと打ち込み,起動させましょう
windows → Cortanaの検索窓にgit bashと入力して検索し、起動する

