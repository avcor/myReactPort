import { FC, useContext, useEffect, useRef } from "react";
import { SCREENS, WORKS, thresholdView } from "../Constants";
import Introduction from "./Introduction";
import VelocityText from "./VelocityText";
import "../../Introduction.css";
import AppContext from "../AppContext";
import ProjectImage1 from "./ProjectImage1";
import ProjectImage2 from "./ProjectImage2";
import { back2, back3, back4 } from "../ImageExporter";
import { useInView } from "react-intersection-observer";
import { useScroll } from "framer-motion";

type props = {};

const MainPageWork: FC<props> = ({}) => {
  const { backG, setBackG } = useContext(AppContext);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setBackG("");
    }
  }, [inView]);

  return (
    <div
      className=" text-white font-Montserrat"
      style={{ background: backG === "" ? "black" : "" }}
    >
      <img className={` h-screen w-screen fixed -z-10`} src={backG}></img>
      <div className=" backdrop-blur-xl">
        <div ref={ref} className="w-[100vw]">
          <Introduction />

          <VelocityText />
        </div>

        <ProjectImage1 work={"HOME"} />

        <ProjectImage2 />

        <ProjectImage1 work={"MEMAY"} />
      </div>
    </div>
  );
};

export default MainPageWork;
