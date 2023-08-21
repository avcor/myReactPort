import { FC } from "react";
import { handEcg } from "../ImageExporter";
import { purple_abstract_video } from "../VideoExporter";

const ProjectImage2: FC = () => {
  return (
    <>
      <div className="flex flex-row-reverse h-[60vh] md:h-[100vh] items-center mr-10">
        <div
          className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden flex -ml-[7%] "
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
            src={handEcg}
            className="z-10 self-center absolute m-0 bg-opacity-30 "
          ></img>
          <video
            src={purple_abstract_video}
            autoPlay={true}
            controls={true}
            className="absolute m-0 h-[100%] w-[100%] blur-md"
          />
        </div>
        <div className="h-[70%] w-[50%] text-right flex z-[15] flex-col justify-center">
          <div className="text-4xl md:text-8xl ">Dozee Home</div>
          <p className=" text-2xl md:text-5xl mt-4">React Native</p>
          <p className=" text-xl md:text-4xl mt-1">(Android & iOS)</p>
        </div>
      </div>
    </>
  );
};

export default ProjectImage2;
