import { createContext, useContext, useState, useEffect } from "react";

const NicknameContext = createContext();

export const NicknameProvider = ({ children }) => {
  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem("nickname") || "";
  });

  useEffect(() => {
    localStorage.setItem("nickname", nickname);
  }, [nickname]);

  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  );
};

export const useNickname = () => useContext(NicknameContext);
