let mario = document.getElementById("mario");
let imgMario = document.querySelector("img");
imgMario.src = "./assets/mario-stand.gif";

const stopMarioFunction = function () {
  imgMario.src = "./assets/mario-stand.gif";
};
const moveMarioFunction = function () {
  imgMario.src = "./assets/mario-walk.gif";
};

let currentMarginLeft = 0;
let marioMovementInterval;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    if (!marioMovementInterval) {
      moveMarioFunction();
      // Intervall gestartet, wenn eine der Pfeiltasten gedrückt wird, Intervall führt die Bewegung von Mario aus
      marioMovementInterval = setInterval(function () {
        if (event.key === "ArrowLeft") {
          imgMario.style.transform = "scale(-1, 1) translateX(-10px)";
          currentMarginLeft = parseInt(imgMario.style.marginLeft) || 0;
          imgMario.style.marginLeft = currentMarginLeft - 10 + "px";
        } else if (event.key === "ArrowRight") {
          imgMario.style.transform = "scale(1, 1) translateX(10px)";
          currentMarginLeft = parseInt(imgMario.style.marginLeft) || 0;
          imgMario.style.marginLeft = currentMarginLeft + 10 + "px";
        }
      }, 100); // Bewegung alle 100ms
    }
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    clearInterval(marioMovementInterval);
    marioMovementInterval = null;
    stopMarioFunction();
  }
});

const jumpMarioFunction = function () {
  // marginTop-Eigenschaft von Mario ändern, um ihn nach oben zu bewegen
  imgMario.style.marginTop = "-100px";
  setTimeout(function () {
    imgMario.style.marginTop = "0px"; // Mario zurücksetzen, nachdem der Sprung abgeschlossen ist
  }, 200); // Dauer des Sprungs in Millisekunden
};

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    jumpMarioFunction();
  }
});
