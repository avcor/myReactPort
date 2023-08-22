import React, { FC, MutableRefObject, useRef, useState } from "react";
import { SCREENS, WORKS } from "./Constants";
import { back3, back4 } from "./ImageExporter";

interface AppContextType {
  backG: string;
  setBackG: (backG: string) => void;
  scroolY: number;
  selectedWork: WORKS;
}

const AppContext = React.createContext<AppContextType>({
  backG: "",
  setBackG: (backG: string) => {},
  scroolY: 0,
  selectedWork: "-",
});

const AppContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [backG, setBackG] = useState<string>("");
  const scroolY = 0;
  const selectedWork = "-";
  return (
    <AppContext.Provider value={{ backG, setBackG, scroolY, selectedWork }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContextProvider };
export default AppContext;
