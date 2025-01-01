import "./GameQuestion.scss";

export default function GameQuestion({ id, isSelected, onSelect, content }) {
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
      <p className="m-0">{content}</p>
    </div>
  );
}
