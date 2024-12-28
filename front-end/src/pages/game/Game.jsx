import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Game.scss";

import Button from "@components/button/Button";

function Game() {
  const [nickname, setNickname] = useState(""); // Stan przechowujący wprowadzoną nazwę

  const handleInputChange = (e) => {
    setNickname(e.target.value); // Aktualizacja stanu na podstawie wpisanej wartości
  };

  return (
    <section className="game" id="quiz">
      <section className="game__panel">
        <div>
          <h1 className="header">
            Gotowy na <span className="game__panel-header--v">Quiz</span>?
          </h1>
          <p>
            Sprawdź swoją wiedzę o ochronie danych! <br />
            Zagraj w quiz i naucz się, jak chronić swoje dane online.
          </p>
        </div>
        <div className="game__panel-input">
          <input
            type="text"
            placeholder="Wprowadź swoją nazwę"
            id="nickname"
            value={nickname}
            onChange={handleInputChange}
          />
        </div>
        {nickname.trim() ? (
          <Button content="Start" link="game" />
        ) : (
          <span className="button fs-5 button--disabled">Start</span>
        )}
      </section>
    </section>
  );
}

export default Game;
