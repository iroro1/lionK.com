// Selectors
let breakDec = document.querySelector("#break-decrement");
let breakInc = document.querySelector("#break-increment");
let sesDecrease = document.querySelector("#session-decrement");
let sesIncrease = document.querySelector("#session-increment");
let reset = document.querySelector("#reset");
let timeLeft = document.querySelector("#time-left");
let breakLength = document.querySelector("#break-length");
let sesLength = document.querySelector("#session-length");
let startStop = document.querySelector("#start_stop");
let timerLabel = document.querySelector("#timer-label");

// Functions
const resetHandle = () => {
  timeLeft.textContent = "25:00";
};
breakDecHandle = () => {
  if (Number(breakLength.textContent) === 1) {
    return null;
  } else {
    return (breakLength.textContent = Number(breakLength.textContent) - 1);
  }
};
const breakIncHandle = () => {
  if (Number(breakLength.textContent) === 5) {
    return null;
  } else {
    return (breakLength.textContent = Number(breakLength.textContent) + 1);
  }
};
const sesDecreaseHandle = () => {
  if (Number(sesLength.textContent) === 1) {
    return null;
  } else {
    return (sesLength.textContent = Number(sesLength.textContent) - 1);
  }
};
const sesIncreaseHandle = () => {
  if (Number(sesLength.textContent) === 60) {
    return null;
  } else {
    return (sesLength.textContent = Number(sesLength.textContent) + 1);
  }
};

const startStopHandle = () => {
  let c = sesLength.toggleAttribute("start");
  let valMin = Number(sesLength.textContent.split(":")[0]) - 1;
  let valbkl = Number(breakLength.textContent);
  valbkl = 0;
  let setMin = 0,
    setSec = 60;

  // setInterval(clock(setMin, setSec, false), 1000);
  if (c === true) {
    setInterval(() => {
      if (c === true) {
        setSec--;
        if (setSec > 0 && setSec < 10) {
          setSec = "0" + String(setSec);
        } else if (setSec === 0) {
          setSec = 59;
          setMin = Number(setMin);

          setMin--;
          if (setMin < 10 && setMin >= 0) {
            setMin = "0" + setMin;
          }
          if (setMin < 0) {
            // clearInterval(v);
            if ((timerLabel.textContent = "BREAK")) {
              timerLabel.textContent = "SESSION";
              setMin = setMin;
              setSec = 59;
            }
            if ((timerLabel.textContent = "SESSION")) {
              timerLabel.textContent = "BREAK";
              setMin = valbkl;
              setSec = 59;
            }
          }
        }
        timeLeft.textContent = `${setMin} : ${setSec}`;
      }
    }, 1000);
  }
  if (c === false) {
    console.log(breakLength.textContent);
    clearInterval();
    //   clock(setMin, true);
    //   clearInterval(v);
    //   console.log("clear");
  }
};

// Event Listeners
reset.addEventListener("click", resetHandle);
breakDec.addEventListener("click", breakDecHandle);
breakInc.addEventListener("click", breakIncHandle);
sesDecrease.addEventListener("click", sesDecreaseHandle);
sesIncrease.addEventListener("click", sesIncreaseHandle);
startStop.addEventListener("click", startStopHandle);
