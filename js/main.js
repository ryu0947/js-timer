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

  function updateTimer(t){
    const d = new Date(t);
    const m = d.getMinutes();
    const s = d.getSeconds();
    countTimer.textContent = `${m}:${s}`;
  }

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
