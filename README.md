# ポモドーロタイマー

25分の学習と5分の休憩を繰り返すポモドーロタイマーを作りました。

# デモ

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/70193248/114305857-e2b38880-9b14-11eb-9ff4-fd0773e5418f.gif)

# 概要

JavaScriptで25分の学習と5分の休憩を繰り返すポモドーロタイマーを作りました。
「Start」ボタンを押すとタイマーのカウンドダウンがスタートします。
25分が経過すると学校のチャイムが鳴ってタイマーのカウントがストップします。
カウントストップと同時に休憩か終了を選択するポップアップが表示されて、
休憩を選択すると5分間の休憩時間に入ってタイマーのカウントが始まります。
終了を選択すると最初の画面に戻ります。
5分の休憩が終わったらカウントダウンがストップしてチャイムと同時に作業再開のポップアップが表示されます。

タイマーのカウントを止めたい場合は「Stop」ボタンを押すと止まります。
タイマーをリセットしたい場合は「Rset」ボタンを押すと止まります。

もちろん途中でタイマーを止めてリセットする事も出来ます。

# こだわったところ

こだわったのは処理の関数化です。
処理の使い回しと可読性の向上のためにできる部分は全て関数化しました。
タイマーのカウントダウン終了時の音にもこだわりました。
聞いた時に懐かしさを感じていただければ嬉しいです。