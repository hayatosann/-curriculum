<?php

/**
 * 1. Teacherクラスの作成
 * 2. $nameプロパティの作成
 * 3. requestメソッドの作成
 *     - '生徒に依頼'という文字列を返す
 * 4. Teacherクラスをindex.phpでインスタンス化
 * 5. $nameメソッドに任意の値を代入
 * 6. $requestメソッドの実行
 * 
 *  できた人
 *    アクセス修飾子をprivateにするとどうなるか
 *    Humanクラスの作成
 *        1. nameプロパティの作成
 *        2. waklkメソッドの作成
 */

require_once('Human.php');

// 継承 クラス名(子クラス, サブクラス) extends 親クラス(スーパークラス)
// is - a関係になるように 子クラス is a 親クラスの関係が成り立つように
// OK: Cat is a Animal, NG: Cat is a Human
 class Teacher extends Human
 {
    // コンストラクタ
    // インスタンス化した時に実行されるメソッドのこと
    public function __construct($name)
    {
        // $thisはこのクラスのインスタンス自体
        $this->name = $name;
    }

    public function request()
    {
        return '生徒に依頼';
    }


 }