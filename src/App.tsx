import { useEffect, useState } from "react";
import Intro from "./component/Intro";
import { SCREENS } from "./Constants";
import MainPageWork from "./component/MainPageWork";
import { AppContextProvider } from "./AppContext";

function App() {
  const [active, setActive] = useState<SCREENS>("INTRO");

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
  }
  return <AppContextProvider>{content}</AppContextProvider>;
}

export default App;
