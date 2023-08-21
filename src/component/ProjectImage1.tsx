import { FC } from "react";
import { back4, handHome, handMemay } from "../ImageExporter";
import { blue_abstract_video, orange_abstract_video } from "../VideoExporter";
import { WORKS } from "../Constants";

type props = {
  work: WORKS;
};

const ProjectImage1: FC<props> = ({ work }) => {
  return (
    <>
      <div className="flex flex-row h-[60vh] md:h-[100vh] items-center ml-10">
        <div
          className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden flex "
          onMouseEnter={() => {
            // setBackG(back4);
          }}
          onClick={() => {
            // scroolY.current = window.scrollY;
            // selectedWork.current = "HOME";
            // setActive("MODAL");
          }}
        >
          <img
            src={work === "HOME" ? handHome : handMemay}
            className="z-10 self-center absolute m-0 bg-opacity-30 "
          ></img>
          <video
            src={work === "HOME" ? blue_abstract_video : orange_abstract_video}
            autoPlay={true}
            controls={true}
            className="absolute m-0 h-[100%] w-[100%] blur-xl"
          />
        </div>
        <div className="h-[70%] w-[50%]   flex  -ml-[10%] z-[15] flex-col justify-center ">
          <div className="text-4xl md:text-8xl ">Dozee Home</div>
          <p className=" text-2xl md:text-5xl mt-4">React Native</p>
          <p className=" text-xl md:text-4xl mt-1">(Android & iOS)</p>
        </div>
      </div>
    </>
  );
};
export default ProjectImage1;
