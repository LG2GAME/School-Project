import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { useState, useEffect } from "react";
import { handleAnswerSelect, handleNextQuestion } from "@utils/gameHandlers";
import { loadGameState, saveGameState, isLastQuestion } from "@utils/gameUtils";
import shuffleArray from "@utils/shuffleArray";

import "./Game.scss";

import GameQuestion from "@components/gameQuestion/GameQuestion";
import quizData from "@data/game/QuizData.json";

function Game() {
  const maxQuestions = 2;
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedData = loadGameState();

    if (!storedData.questions) {
      setQuestions(shuffleArray(quizData));
    } else {
      setQuestions(storedData.questions);
      setCurrentQuestionIndex(storedData.currentQuestionIndex || 0);
      setSelectedAnswer(storedData.selectedAnswer || null);
      setScore(storedData.score || 0);
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      saveGameState({
        currentQuestionIndex,
        questions,
        selectedAnswer,
        score,
      });
    }
  }, [currentQuestionIndex, questions, selectedAnswer, score]);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQ = isLastQuestion(
    currentQuestionIndex,
    questions.length,
    maxQuestions
  );

  return (
    <section className="content">
      <section className="game">
        <game className="game__header">
          <p className="game__header-title m-0">
            Pytanie <span>{currentQuestionIndex + 1}</span>/{" "}
            {Math.min(questions.length, maxQuestions)}
          </p>
          <div className="game__header-hl"></div>
          <p>{currentQuestion.question}</p>
        </game>
        <game className="game__questions">
          {currentQuestion.answers.map((answer) => (
            <GameQuestion
              key={answer.id}
              id={answer.id}
              content={answer.text}
              isSelected={selectedAnswer === answer.id}
              onSelect={(id) => handleAnswerSelect(id, setSelectedAnswer)}
            />
          ))}
        </game>
        <button
          className={`button fs-5 + ${
            !selectedAnswer ? "button--disabled" : ""
          }`}
          onClick={() =>
            selectedAnswer
              ? handleNextQuestion(
                  currentQuestionIndex,
                  setCurrentQuestionIndex,
                  selectedAnswer,
                  questions,
                  score,
                  setScore,
                  setSelectedAnswer,
                  maxQuestions,
                  navigate
                )
              : null
          }
          disabled={!selectedAnswer}
        >
          {isLastQ ? "Zakończ" : "Dalej"} <GrFormNextLink />
        </button>
      </section>
    </section>
  );
}

export default Game;
