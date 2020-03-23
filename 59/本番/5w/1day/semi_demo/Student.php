<?php

// クラスの作成
// class クラス名 {}

require_once('Human.php');

class Student extends Human
{
    // メソッド(振る舞い)
    public function study($hour)
    {
        return $hour . '時間勉強しました';
    }
}