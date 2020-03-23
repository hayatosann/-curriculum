<?php

require_once('Student.php');
require_once('Teacher.php');

// インスタンス化
// Studentクラスをインスタンス化して、変数$studentに代入
$student = new Student();
var_dump($student); // Object(Student)

// プロパティにアクセス
// ->(アロー演算子)は「の」と思ってください
$student->name = 'Atsushi';
var_dump($student->name);

// メソッドにアクセス
var_dump($student->study(6));

// インスタンス化した時に__constructが実行される
$teacher = new Teacher('Kayamori');
// $teacher->name = 'Sasano';
var_dump($teacher->name);

// Teacherクラスのrequestメソッドを実行
var_dump($teacher->request(6));

// Teacherクラスのwalkメソッドを実行
// Teacherクラスにwalkがないのにエラーが出ないのは、
// walkメソッドを持ってるHumanクラスを継承してるから
$teacher->walk();