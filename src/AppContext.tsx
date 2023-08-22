import React, { FC, useRef, useState } from "react";
import { WORKS } from "./Constants";

interface AppContextType {
  backG: string;
  setBackG: (backG: string) => void;
  onClickWork: WORKS;
  setOnClickWork: (w: WORKS) => void;
}

const AppContext = React.createContext<AppContextType>({
  backG: "",
  setBackG: () => {},
  onClickWork: "-",
  setOnClickWork: () => {},
});

const AppContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [backG, setBackG] = useState<string>("");
  const [onClickWork, setOnClickWork] = useState<WORKS>("-");

  return (
    <AppContext.Provider
      value={{ backG, setBackG, onClickWork, setOnClickWork }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContextProvider };
export default AppContext;
