function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    button.style.backgroundColor = "green";
    alert("Richtig! 🎉");
  } else {
    button.style.backgroundColor = "red";
    alert("Leider falsch 😢");
  }

  // Alle Buttons deaktivieren
  const allButtons = button.parentElement.querySelectorAll("button");
  allButtons.forEach(btn => btn.disabled = true);
}
