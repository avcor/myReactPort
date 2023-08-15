import { FC } from "react";
import { SCREENS, WORKS } from "../Constants";
import { back2, back3, back4, back5, handEcg, handHome, handMemay } from "../ImageExporter";
import PersonalInfo from "./PersonalInfo";

type props = {
    backG: string,
    setBackG: React.Dispatch<React.SetStateAction<string>>,
    scroolY: React.MutableRefObject<number | undefined>,
    selectedWork: React.MutableRefObject<WORKS>,
    setActive: React.Dispatch<React.SetStateAction<SCREENS>>
}

const MainPageWork: FC<props> = ({backG, setBackG, scroolY, selectedWork, setActive}) => {
    return (
      <div
        className={
          "text-white bg-opacity-30 backdrop-blur-xl bg-repeat " +
          `${backG === back5 ? "backdrop-brightness-50" : ""}`
        }
      >
        <div className="h-[100vh]" onMouseEnter={()=>setBackG('black')}>
          <PersonalInfo />
        </div>
        <div
          className="flex flex-row h-[100vh] items-center ml-10"
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
          className="flex flex-row h-[100vh] items-center ml-10"    >
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

  export default MainPageWork

  