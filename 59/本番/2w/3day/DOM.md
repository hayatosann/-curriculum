DOM
  - Document Object Model
  - JSからHTMLの要素を操作する仕組み
  - HTMLの要素を操作する
    - 要素を追加
    - 要素を削除
    - 要素のstyle, text, class etcを変更
    - 要素にイベントを登録する
      - イベント
        - クリック, スクロール, マウスオーバー
        
  - DOMを使ってアニメーションをつくる
  1. 要素を取得する
  2. 1で取得した要素にイベントを登録する
  3. イベントの内容を決める

DOM学習の進め方
- NexSeed フォルダをVS CODEで開きましょう
- その中のJavascriptフォルダを開き、DOMフォルダを開いてください
  - NexSeed/javascript/DOM
- index.htmlを開きましょう
  - 231,232行目をみてください
  - <script src="app.js"></script>
  - <!-- <script src="answer.js"></script> --> 
  - 上記の記述ですが、自分で問題を解く際には,app.jsを読み込ませましょう。
  - 答えをみたい場合はanswer.jsを読み込ませてください。
- index.htmlをブラウザで開きましょう
  - 問題が一覧で確認できれば、成功です
  - 問題をといていきましょう
  # どういった挙動になれば正解なのか、最初はわからないと思います.
  # answer.jsを読み込ませて挙動を確認し、answer.jsをコメントアウトして、
  # app.jsを読み込ませから(コメントアウトを解除)問題に取り掛かりましょう

- 参考ファイル
  - 要素の取得      (01_get_element.md)
  - 要素の編集      (02_edit_element.md)
  - イベントの登録   (03_add_event.md)
  - 要素の作成・追加 (04_add_element.md)
  - 要素の削除      (05_remove_element.md)
