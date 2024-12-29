import "./GameQuestion.scss";

export default function GameQuestion({ id, isSelected, onSelect, text }) {
  return (
    <div className="game-question" onClick={() => onSelect(id)}>
      <div className="game-question__checkbox">
        <input
          type="radio"
          id={`radio-${id}`}
          name="quiz-answer"
          checked={isSelected}
          onChange={() => onSelect(id)}
        />
        <label htmlFor={`radio-${id}`}></label>
      </div>
      <p className="m-0">{text}</p>
    </div>
  );
}
