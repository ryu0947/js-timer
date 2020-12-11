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
  let elapsedTime = 0;

  // タイマーを画面に書き出す処理
  function updateTimer(t) {
    const d = new Date(t);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    countTimer.textContent = `${m}:${s}`;
  }

  // タイマーのカウントダウンの処理
  function countUp() {
    const runningTime = timeLimit * 1000 - elapsedTime - (Date.now() - startTime);
    
    if(runningTime < 0){
        clearTimeout(timeoutId);
        return;
    }

    updateTimer(runningTime);

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  // 最初のボタンの状態 
  function setButtonStateInitial() {
      start.disabled = false;
      stop.disabled = true;
      reset.disabled = true;
      start.style.opacity = 1;
      stop.style.opacity = 0.4;
      reset.style.opacity = 0.4;
  }

  // カウント中のボタンの状態
  function setButtonStateRunning() {
      start.disabled = true;
      stop.disabled = false;
      reset.disabled = true;
      start.style.opacity = 0.4;
      stop.style.opacity = 1;
      reset.style.opacity = 0.4;
  }

  // カウントダウンが止まっている時のボタンの状態
  function setButtonStateStopped() {
      start.disabled = false;
      stop.disabled = true;
      reset.disabled = false;
      start.style.opacity = 1;
      stop.style.opacity = 0.4;
      reset.style.opacity = 1;
  }

  setButtonStateInitial();

  // Startボタンを押した時の処理
  start.addEventListener("click", () => {
    setButtonStateRunning();
    startTime = Date.now();
    comment.textContent = "Working...";
    countUp();
  });

  // Stopボタンを押した時の処理
  stop.addEventListener("click", () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    comment.textContent = "Stop";
  });

  // Resetボタンを押した時の処理
  reset.addEventListener("click", () => {
    setButtonStateInitial();
    elapsedTime = 0;
    countTimer.textContent = "00:05";
    comment.textContent = "Click Start";
  });
}
