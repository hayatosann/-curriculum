// jQueryの書き方
// Q1
// $('セレクタ').関数()

// ボタンがクリックされたら
$('#q1-btn').on('click', function() {
  // ボタンを大きくする
  // $(this).addClass('large-btn');
  $(this).toggleClass('large-btn');
  $(this).text('クリックされました');
  $(this).css('backgroundColor', 'red')
})

$('#q2-btn').on('mouseover', function(){
  $(this).css('opacity', '0.5');
})
// 導入のしかた

$('#q5-btn').on('click', function () {
  // 例①
  let li = $('<li>');
  li.text('ぶどう');
  li.addClass('grape');
  $('.apple').before(li);

  // 例②
  // $('.apple').before('<li class="grape">ぶどう</li>');
});