"use strict";

{
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const comment = document.getElementById("comment");
  const countTimer = document.getElementById("js-count-timer");

  let startTime;
  let timeLimit = 5;
  let timeoutId;

  // タイマーを画面に書き出す処理
  function updateTimer(t){
    const d = new Date(t);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    countTimer.textContent = `${m}:${s}`;
  }

  // タイマーのカウントダウンの処理
  function countUp() {
    const runningTime = timeLimit * 1000 - (Date.now() - startTime);
    updateTimer(runningTime);
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  // Startボタンを押した時の処理
  start.addEventListener("click", () => {
    startTime = Date.now();
    comment.textContent = "Working...";
    countUp();
  });
}
