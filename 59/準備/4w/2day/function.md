- 目次
  - 関数とは
  - 使用目的
  - 引数、戻り値

- 関数とは

function(関数)とは、様々な処理を1つにまとめて、名前をつけることができるもの。
単調な処理を1つにまとめて、どこからでも使えるように効率化するという目的でよく使われる。

- 関数
  - ある処理をして結果を返す
    - ①関数を定義する
    - ②関数を呼び出す(callする)

- 関数を使用する理由
  - 可読性(読みやすさ)
  - 再利用性
  - 保守性(修正しやすさ)
  ※定義するだけでは実行されない


- 定義の仕方

    function 関数名() 
    {
        処理の内容
    }

    関数を呼び出し元
    関数名();
    
    EX)
    function HelloWorld()
    {
        echo "HelloWorld";
    }

    HelloWorld();

  - 引数

        EX)
        function introduce($name, $age) 
        {
            echo $name.'さんの年齢は'.$age.'です！';
            echo "<br>";
        }
        
        //引数に値を渡す
        introduce('笹野', 28);
        introduce('ササノ', 30);

  - 戻り値(返り値)
    - 呼び出し元に返される結果
    - return を使う
    - 後続の処理に関数の実行結果を使用したいとき

    - return文
    
        function multiplication( num1, num2 ) 
        {
            return num1 * num2;
        }
        console.log( multiplication( 9, 9 ) );

  
