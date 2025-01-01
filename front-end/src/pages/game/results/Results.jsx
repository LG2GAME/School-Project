import { handleResetGame } from "@utils/gameUtils";

function Results() {
  return (
    <a href="../../" onClick={handleResetGame}>
      resetuj gre
    </a>
  );
}

export default Results;
