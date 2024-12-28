import { useNickname } from "@context/UserContext";

function Quiz() {
  const { nickname } = useNickname();

  return (
    <div>
      <h1>Witaj, {nickname}!</h1>
      <p>Rozpocznij quiz i sprawdź swoją wiedzę o ochronie danych!</p>
      {/* Dodaj dalsze elementy quizu */}
    </div>
  );
}

export default Quiz;
