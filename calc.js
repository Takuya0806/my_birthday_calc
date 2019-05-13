function getAge() {
    // document.getElementById('')でidのbirthdayを取得し、.valueで入力された値を取得
    // .splitで値を分解し、配列にする（JSの場合、月は0-11で表現されるので、-1する）
    var birthday = document.getElementById('birthday').value.split("-");

    // Dateオブジェクトを使い、birthdayの値を成形
    var d1 = new Date(birthday[0], birthday[1] -1, birthday[2]);
    var d2 = new Date(); // new Date(); とすることで現在の日付を取得

    // getTime()を使い d2, d1の経過ミリ秒を算出し、それを引いて誕生日から現在の日付の差分を計算
    var diff = d2.getTime() - d1.getTime();
    
    // 算出した差分を日付、年齢に変換
    var daysPast = Math.floor(diff / (1000 * 60 * 60 * 24)); // diff / (1000ミリ秒 * 60秒 * 60分 * 24時間) Math.floorで端数切り捨て
    var age = Math.floor(daysPast / 365.25); // 経過日数から年数を割って、大体の年齢を計算（うるう年も入れて大体365.25とする）
    
    // 指定したidを.innerHTMLで書き換え
    document.getElementById('daysPast').innerHTML = daysPast;
    document.getElementById('age').innerHTML = age;
}
