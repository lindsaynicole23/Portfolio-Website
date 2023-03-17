"use strict";

const secondsHand = document.querySelector(".sec");
const minutesHand = document.querySelector(".min");
const hoursHand = document.querySelector(".hour");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() * 60;
  const hours = now.getHours() * 3600;

  secondsHand.style.animationDelay = `-${seconds}s`;
  minutesHand.style.animationDelay = `-${minutes}s`;
  hoursHand.style.animationDelay = `-${hours}s`;
}

getTime();
