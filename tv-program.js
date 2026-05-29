// 課題3-1 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('NHKの番組表（検索結果は2件）');
  for(let r of data.list.g1){
    console.log('開始時刻：'+ r.start_time);
    console.log('終了時刻；'+ r.end_time);
    console.log('タイトル：'+ r.title);
    console.log('サブタイトル：'+ r.subtitle);
    console.log('番組説明：' + r.content);
    console.log('出演者：'+ r.act);
  }

}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d = document.createElement('div');
  d.setAttribute('id','result');
  let b = document.querySelector('body');
  b.insertAdjacentElement('beforeend',d);
  let r = document.querySelector('div#result');

let mainTitle = document.createElement('h1');
mainTitle.textContent = '番組表の検索結果';
r.insertAdjacentElement('afterend', mainTitle);

let countTitle = document.createElement('h3');

let programList;
let channelName = '';
if (data.list.g1) {
  programList = data.list.g1;
  channelName = 'NHK総合１';
} else if (data.list.e1) {
  programList = data.list.e1;
  channelName = 'ＮＨＫＥテレ１';
}
countTitle.textContent = channelName + 'の番組表（検索結果は' + programList.length + '件）';
mainTitle.insertAdjacentElement('afterend', countTitle);

let lastElement = countTitle;

for (let i = 0; i < programList.length; i++) {
  let program = programList[i];
  let index = i + 1; 

  let h2 = document.createElement('h2');
  h2.textContent = '検索結果' + index + '件目';
  lastElement.insertAdjacentElement('afterend', h2);
  lastElement = h2;

  let ul = document.createElement('ul');

  let liStart = document.createElement('li');
  liStart.textContent = '開始時刻：' + program.start_time;
  ul.insertAdjacentElement('beforeend', liStart);

  let liEnd = document.createElement('li');
  liEnd.textContent = '終了時刻：' + program.end_time;
  ul.insertAdjacentElement('beforeend', liEnd);

  let liTitle = document.createElement('li');
  liTitle.textContent = 'タイトル：' + program.title;
  ul.insertAdjacentElement('beforeend', liTitle);

  let liSub = document.createElement('li');
  liSub.textContent = 'サブタイトル：' + program.subtitle;
  ul.insertAdjacentElement('beforeend', liSub);

  let liContent = document.createElement('li');
  liContent.textContent = '番組説明：' + program.content;
  ul.insertAdjacentElement('beforeend', liContent);

  let liAct = document.createElement('li');
  liAct.textContent = '出演者：' ;
  ul.insertAdjacentElement('beforeend', liAct);

  lastElement.insertAdjacentElement('afterend', ul);
  lastElement = ul; 
}
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let j = document.querySelector('input[name="service"]');
  let service= j.value;

  let i = document.querySelector('input[name="genre"]');
  let genre= i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + service + '-' + genre + '-j.json';
  console.log(url)

    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);      
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

