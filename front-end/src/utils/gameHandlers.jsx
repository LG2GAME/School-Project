export const handleAnswerSelect = (id, setSelectedAnswer) => {
  setSelectedAnswer(id);
};

export const handleNextQuestion = (
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedAnswer,
  questions,
  score,
  setScore,
  setSelectedAnswer,
  maxQuestions,
  navigate
) => {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion.answers.find(
    (answer) => answer.id === selectedAnswer
  );

  if (selectedOption?.isCorrect) {
    setScore((prevScore) => prevScore + 10);
  }

  if (currentQuestionIndex < Math.min(questions.length, maxQuestions) - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
  } else {
    // Przejdź do strony wyników
    navigate("/game/results");
  }
};
