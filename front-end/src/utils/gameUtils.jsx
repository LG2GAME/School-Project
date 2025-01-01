export const loadGameState = () => {
  const storedData = JSON.parse(localStorage.getItem("gameState"));
  return storedData || {};
};

export const saveGameState = (state) => {
  localStorage.setItem("gameState", JSON.stringify(state));
};

export const isLastQuestion = (
  currentQuestionIndex,
  questionsLength,
  maxQuestions
) => {
  return currentQuestionIndex === Math.min(questionsLength, maxQuestions) - 1;
};

export const handleResetGame = () => {
  localStorage.removeItem("gameState");
  window.location.reload();
};
