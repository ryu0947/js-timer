"use strict";

{
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const comment = document.getElementById("commnt");

  let startTime;

  // Startボタンを押した時の処理
  start.addEventListener("click", () => {
    startTime = Date.now();
    comment.textContent = "Working...";
    countUp();
  });
}
