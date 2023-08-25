import React, { FC, useRef, useState } from "react";
import { WORKS } from "./Constants";

interface AppContextType {
  backG: string;
  setBackG: (backG: string) => void;
  onClickWork: WORKS;
  setOnClickWork: (w: WORKS) => void;
  scrollYRef: React.MutableRefObject<number | null>;
}

const AppContext = React.createContext<AppContextType>({
  backG: "",
  setBackG: () => {},
  onClickWork: "-",
  setOnClickWork: () => {},
  scrollYRef: React.createRef(),
});

const AppContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [backG, setBackG] = useState<string>("");
  const [onClickWork, setOnClickWork] = useState<WORKS>("-");
  const scrollYRef = useRef<number>(0);

  return (
    <AppContext.Provider
      value={{ backG, setBackG, onClickWork, setOnClickWork, scrollYRef }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContextProvider };
export default AppContext;
