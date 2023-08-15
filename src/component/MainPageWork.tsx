import { FC } from "react";
import { SCREENS, WORKS } from "../Constants";
import { back2, back3, back4, back5, handEcg, handHome, handMemay, hubble_background } from "../ImageExporter";
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
          "text-white bg-opacity-30 backdrop-blur- bg-repeat " 
        }
      >
        <div className="min-h-screen relative -mb-10" onMouseEnter={()=>setBackG(hubble_background)}>
        <img 
          className=" absolute h-full w-[100vw] object-cover -z-0"
          src= {hubble_background}></img> 
          <PersonalInfo />
        </div>

        <div className=" w-[100vw] justify-self-center m-auto bg-opacity-10 rounded-3xl"
        style={{background: `url(${backG})`}}
        >
        
        <div className=" backdrop-blur-xl h-full w-full rounded-3xl">

        <div className="flex flex-row h-[100vh] items-center ml-10">
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
          <div className="h-[70%] w-[50%] text-8xl  flex  -ml-16 z-[15] flex-col justify-center">
          <div className=" ">
            Dozee Home
          </div>
          <p className=" text-5xl mt-4">
            React Native
            <p className=" text-4xl mt-1">
            (Android & iOS)
            </p>
          </p>
          </div>
          
          
        </div>

        <div
          className="flex flex-row h-[100vh] items-center"
        >
          <div className="h-[70%] w-[50%] text-8xl  flex flex-col justify-center text-right -mr-16 z-[20]">
          <div className=" ">
            Tricorg Ecg
          </div>
          <p className=" text-5xl mt-4">
            Android
            <p className=" text-4xl mt-1">
            with Tricorg module
            </p>
          </p>
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
          <div className="h-[70%] w-[50%] text-8xl  flex  -ml-16 z-[15] flex-col justify-center">
          <div className=" ">
            Memay News
          </div>
          <p className=" text-5xl mt-4">
            Android
            <p className=" text-4xl mt-1">
            
            </p>
          </p>
          </div>
        </div>

        </div>

        </div>
        


      </div>
    );

  };

  

  export default MainPageWork

  