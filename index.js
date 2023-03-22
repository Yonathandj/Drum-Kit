const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonSound = new Audio(`sounds/${button.classList[1]}.mp3`);
    buttonSound.play();
    setTimeout(() => {
      buttonSound.currentTime = 0;
    }, 20);
  });
});

buttons.forEach((button) => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      const buttonSound = new Audio(`sounds/kick-bass.mp3`);
      buttonSound.play();
      setTimeout(() => {
        buttonSound.currentTime = 0;
      }, 20);
    } else if (e.key.toUpperCase() === button.innerHTML) {
      const buttonSound = new Audio(`sounds/${button.classList[1]}.mp3`);
      buttonSound.play();
      setTimeout(() => {
        buttonSound.currentTime = 0;
      }, 20);
    } else {
      return;
    }
  });
});
