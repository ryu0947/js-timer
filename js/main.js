"use strict";

{
  const start = document.getElementById("js-start");
  const stop = document.getElementById("js-stop");
  const reset = document.getElementById("js-reset");
  const comment = document.getElementById("js-comment");
  const countTimer = document.getElementById("js-count-timer");
  const restPopup = document.getElementById("js-rest-popup");
  const rest = document.getElementById("js-rest-btn");
  const finish = document.getElementById("js-finish-btn");
  const restartPopup = document.getElementById("js-restart-popup");
  const restart = document.getElementById("js-restart-btn");
  const totalTime = document.getElementById("js-total-time");
  const audio = document.getElementById("js-audio");

  let startTime;
  let timeLimit = 25;
  let timeoutId;
  let elapsedTime = 0;
  let num = 0;

  // タイマーを画面に書き出す処理
  function updateTimer(t) {
    const d = new Date(t);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    countTimer.textContent = `${m}:${s}`;
  }

  // タイマーのカウントダウンの処理
  function countDown() {
    const runningTime =
      timeLimit * 60 * 1000 - elapsedTime - (Date.now() - startTime);

    if (runningTime < 0) {
      clearTimeout(timeoutId);
      initButtonState();
      elapsedTime = 0;
      audio.play();
      switch (timeLimit) {
        case 5:
          restartPopup.classList.add("show");
          break;
        case 25:
          calcTime();
          restPopup.classList.add("show");
          break;
      }
      return;
    }
    updateTimer(runningTime);

    timeoutId = setTimeout(() => {
      countDown();
    }, 1000);
  }

  // 合計時間の算出
  function calcTime() {
    ++num;
    const calcTime = timeLimit * num;
    totalTime.textContent = `Total: ${calcTime}分`;
  }

  // ボタンを押したら音を止める処理
  function stoppedSound() {
    audio.pause();
    audio.currentTime = 0;
  }

  // 最初のボタンの状態
  function initButtonState() {
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

  initButtonState();

  // Startボタンを押した時の処理
  start.addEventListener("click", () => {
    setButtonStateRunning();
    startTime = Date.now();
    comment.textContent = "Working...";
    countDown();
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
    initButtonState();
    elapsedTime = 0;
    num = 0;
    timeLimit = 25;
    countTimer.textContent = `${timeLimit}:00`;
    comment.textContent = "Click Start";
  });

  // 休憩するボタンを押した時の処理
  rest.addEventListener("click", () => {
    timeLimit = 5;
    stoppedSound();
    restPopup.classList.remove("show");
    start.click();
    comment.textContent = "Rest Time";
  });

  // 終了するボタンを押した時の処理
  finish.addEventListener("click", () => {
    num = 0;
    stoppedSound();
    restPopup.classList.remove("show");
    countTimer.textContent = `${timeLimit}:00`;
    comment.textContent = "Click Start";
  });

  // 再開するボタンを押した時の処理
  restart.addEventListener("click", () => {
    timeLimit = 25;
    stoppedSound();
    restartPopup.classList.remove("show");
    start.click();
    countTimer.textContent = `${timeLimit}:00`;
    comment.textContent = "Working...";
  });
}
