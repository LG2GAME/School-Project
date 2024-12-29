import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNickname } from "@context/UserContext";

import "./Quiz.scss";

function Quiz() {
  const [inputValue, setInputValue] = useState("");
  const { setNickname } = useNickname(inputValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStart = () => {
    setNickname(inputValue);
  };

  return (
    <section className="quiz" id="quiz">
      <section className="quiz__panel">
        <div>
          <h1 className="header">
            Gotowy na <span className="quiz__panel-header--v">Quiz</span>?
          </h1>
          <p>
            Sprawdź swoją wiedzę o ochronie danych! <br />
            Zagraj w quiz i naucz się, jak chronić swoje dane online.
          </p>
        </div>
        <div className="quiz__panel-input">
          <input
            type="text"
            placeholder="Wprowadź swoją nazwę"
            id="nickname"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        {inputValue.trim() ? (
          <Link to="/game" className="button fs-5" onClick={handleStart}>
            Start
          </Link>
        ) : (
          <span className="button fs-5 button--disabled">Start</span>
        )}
      </section>
    </section>
  );
}

export default Quiz;
