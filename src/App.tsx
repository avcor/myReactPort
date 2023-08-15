import { FC, useEffect, useRef, useState } from "react";
import IntroEle from "./component/introEle";
import NewP from "./component/NewP";
import { SCREENS, WORKS } from "./Constants";
import MainPageWork from "./component/MainPageWork";
import { hubble_background } from "./ImageExporter";

function App() {
  const [backG, setBackG] = useState(hubble_background);
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
    content = <IntroEle />;
  } else if (active === "MAINPAGE") {
    content = (
      <MainPageWork
        backG={backG}
        setBackG={setBackG}
        scroolY={scroolY}
        selectedWork={selectedWork}
        setActive={setActive}
      />
    );
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

  return (
    <div className=" bg-black ">
      <div
        style={{
          width: "100vw",
          background: backG === "" ? `url(${backG})` : `url(${backG})`,
          objectFit: "scale-down",
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default App;
