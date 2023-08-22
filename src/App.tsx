import { useEffect, useRef, useState } from "react";
import Intro from "./component/Intro";
import NewP from "./component/NewP";
import { SCREENS, WORKS } from "./Constants";
import MainPageWork from "./component/MainPageWork";
import { AppContextProvider } from "./AppContext";

function App() {
  const scroolY = useRef<number>();
  const [active, setActive] = useState<SCREENS>("INTRO");
  const selectedWork = useRef<WORKS>("-");

  useEffect(() => {
    setTimeout(() => {
      setActive("MAINPAGE");
      console.log("useeffect");
    }, 3500);
  }, []);

  let content;

  if (active === "INTRO") {
    content = <Intro />;
  } else if (active === "MAINPAGE") {
    content = <MainPageWork />;
  } else {
    content = (
      <NewP
        project={selectedWork.current}
        closeFunc={() => {
          setActive("MAINPAGE");
          window.scrollTo(0, scroolY.current ?? 50);
        }}
      />
    );
  }
  return <AppContextProvider>{content}</AppContextProvider>;
}

export default App;
