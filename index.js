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
