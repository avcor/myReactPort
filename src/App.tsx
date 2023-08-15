import { FC, useEffect, useRef, useState } from "react";
import IntroEle from "./component/introEle";
import PersonalInfo from "./component/PersonalInfo";
import back3 from "./assets/background3.jpg";
import back4 from "./assets/background4.jpg";
import back2 from "./assets/background2.jpg";
import back5 from "./assets/background5.jpg";
import handHome from "./assets/handHome.png";
import handEcg from "./assets/handEcg.png";
import handMemay from "./assets/handMemay.png";
import NewP from "./component/NewP";
import { WORKS } from "./Constants";


const SCREENS = {
  MAINPAGE: "MAINPAGE",
  INTRO: "INTRO",
  MODAL: "MODAL",
} as const;
type SCREENS = (typeof SCREENS)[keyof typeof SCREENS];

function App() {
  const [backG, setBackG] = useState("");
  const scroolY = useRef<number>();
  const [active, setActive] = useState<SCREENS>("INTRO");
  const selectedWork = useRef<WORKS>('-');

  useEffect(() => {
    setTimeout(() => {
      setActive("MAINPAGE");
      console.log("useeffect");
    }, 3500);
  }, []);

  const Page: FC = () => {
    return (
      <div
        className={
          "text-white bg-opacity-30 backdrop-blur-xl bg-repeat " +
          `${backG === back5 ? "backdrop-brightness-50" : ""}`
        }
      >
        <div className="h-[100vh] ">
          <PersonalInfo />
        </div>
        {/* <div className="h-[100vh]"> */}
        {/* <div className="h-10 w-[100vw] bg-blue-100 sticky top-0 mb-20">
              <NavBar />
            </div> */}

        <div
          className="flex flex-row h-[100vh] items-center ml-10"
          onMouseLeave={() => {
            setBackG("");
          }}
        >
          <div
            className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden"
            onMouseEnter={() => {
              setBackG(back4);
            }}
            onClick={() => {
              scroolY.current = window.scrollY;
              selectedWork.current = 'HOME'
              setActive("MODAL");
            }}
          >
            <img
              src={handHome}
              className="z-10 absolute inset-0 bg-opacity-30 backdrop-blur-md"
            ></img>
            <img src={back4} className="absolute inset-0 h-[100%] w-[100%] " />
          </div>
          <div className=" h-[70%] w-[50%] text-8xl  flex items-center -ml-16 z-[15]">
            Dozee Home
          </div>
        </div>

        <div
          className="flex flex-row h-[100vh] items-center"
          onMouseLeave={() => {
            setBackG("");
          }}
        >
          <div className=" h-[70%] w-[50%] text-8xl  flex flex-row-reverse items-center text-right -mr-16 z-[20]">
            Tricorg Ecg
          </div>
          <div
            className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden"
            onMouseEnter={() => {
              setBackG(back5);
            }}
            onClick={() => {
              scroolY.current = window.scrollY;
              selectedWork.current = 'ECG'
              setActive("MODAL");
            }}
          >
            <img
              src={handEcg}
              className="z-10 absolute inset-0 bg-opacity-30 backdrop-blur-md"
            ></img>
            <img src={back3} className="absolute inset-0 h-[100%] w-[100%]" />
          </div>
        </div>

        <div
          className="flex flex-row h-[100vh] items-center ml-10"
          onMouseLeave={() => {
            setBackG("");
          }}
        >
          <div
            className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden"
            onMouseEnter={() => {
              setBackG(back2);
            }}
            onClick={() => {
              scroolY.current = window.scrollY;
              selectedWork.current = 'MEMAY'
              setActive("MODAL");
            }}
          >
            <img
              src={handMemay}
              className="h-full z-10 absolute inset-0 bg-opacity-50 backdrop-blur-xl object-scale-down"
            ></img>
            <img src={back2} className="absolute inset-0 h-[100%] w-[100%] " />
          </div>
          <div className=" h-[70%] w-[50%] text-8xl  flex items-center -ml-16 z-[15]">
            Memay News
          </div>
        </div>
      </div>
    );
  };

  let content;
  
  if (active === "INTRO") {
    content = <IntroEle />;
  } else if (active === "MAINPAGE") {
    content = <Page />;
  } else {
    content = (
      <NewP project={selectedWork.current} closeFunc={() => {
        setActive("MAINPAGE");
        window.scrollTo(0, scroolY.current ?? 50);
      }}/>
    );
  }

  return (
    <div className=" bg-black ">
      <div
        style={{
          width: "100vw",
          background: backG === "" ? "black" : `url(${backG})`,
          objectFit:'scale-down'
        }}
      >
      {content}
      </div>
    </div>
  );
}

export default App;
