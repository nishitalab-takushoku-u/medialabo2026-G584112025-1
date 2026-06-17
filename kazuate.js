 
// 課題4-1: 数当てゲーム
 
// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
 
// 入力回数（予想回数）
let kaisu = 0;
let isCorrected = false;
 
// そのほか，必要に応じて変数を宣言してもよい
 
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu + 1;
  let text = kaisu;
  let print = document.querySelector('span#kaisu');
  print.textContent = text;
 
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
 
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
 
  yoso = document.querySelector('input#number');
  let think = Number(yoso.value);
  
  let printYoso = document.querySelector('span#yoso');
  if (printYoso) {
    printYoso.textContent = think;
  }
  // ここまで: テキストボックスに指定された数値を yoso に代入する
 
  // ここから: 正解判定する
  let result = document.querySelector('p#result');
  if (kaisu >= 4 || isCorrected) {
    result.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  }
  
  else if (think === kotae) {
    result.textContent = "正解です．おめでとう!";
    isCorrected = true; 
  }
  
  else {
    if (kaisu === 3) {
      result.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    } else if (think < kotae) {
      result.textContent = "まちがい．答えはもっと大きいですよ";
    } else if (think > kotae) {
      result.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
}
// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#print');
b.addEventListener('click', hantei) ;
 
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録