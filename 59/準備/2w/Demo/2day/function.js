//組み込み関数
// 例
let mojiretu2 = "Goodmorning";
console.log(mojiretu2.length);

document.write(Date().toString());
console.log(Date().toString());


// 自作関数
function displayStr(time, lang) {
  if (time === '朝' && lang=='ja') {
    console.log('おはよう');
  } else {
    console.log('こんにちは');
  }
}

displayStr('朝', 'en');
// displayStr('昼', 'en');


// これを関数を使わないと

let time = "朝";
let lang = "ja";

//  time = "夕方";
//  lang = "en";

if (time === '朝' && lang=='ja') {
  console.log('おはよう');
} else {
  console.log('こんにちは');
}



function getFullName(firstName, lastName) {
  // 呼び出し元に値を返す
  return firstName + ' ' + lastName;
}

function getFullName2(firstName, lastName) {
  // 画面に表示する
  console.log(firstName + ' ' + lastName);
}

function displayName(name) {
  // 表示する
}

let fullName = getFullName('Atsushi', 'Ikeda');
displayName(fullName);
console.log(fullName);

// getFullName2('Hayato', 'Sasano');