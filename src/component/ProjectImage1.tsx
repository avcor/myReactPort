import { FC, useContext, useEffect, useRef } from "react";
import { back2, back4, handHome, handMemay } from "../ImageExporter";
import { blue_abstract_video, orange_abstract_video } from "../VideoExporter";
import { WORKS, thresholdView } from "../Constants";
import AppContext from "../AppContext";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

type props = {
  work: WORKS;
};

const ProjectImage1: FC<props> = ({ work }) => {
  const { setBackG, setOnClickWork } = useContext(AppContext);
  const refr = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: refr,
    offset: ["start end", "end end"],
  });

  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
    duration: 5,
  });

  useMotionValueEvent(scale, "change", (latest) => {
    if (videoRef && videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = videoRef.current.duration * latest;
    }
  });

  const { ref, inView } = useInView({
    threshold: thresholdView,
  });

  useEffect(() => {
    if (inView) {
      setBackG(work === "HOME" ? back4 : back2);
    }
  }, [inView]);

  return (
    <div ref={refr}>
      <div
        ref={ref}
        className="flex flex-row h-[60vh] md:h-[100vh] items-center ml-10 "
      >
        <div
          className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden flex "
          onClick={() => {
            // scroolY.current = window.scrollY;
            setOnClickWork(work);
            // setActive("MODAL");
          }}
        >
          <motion.img
            src={work === "HOME" ? handHome : handMemay}
            className="z-10 self-center absolute m-0 bg-opacity-30"
          ></motion.img>
          <video
            ref={videoRef}
            muted
            src={work === "HOME" ? blue_abstract_video : orange_abstract_video}
            className="absolute m-0 h-[100%] w-[100%] blur-lg object-fill"
          />
        </div>
        <div className="h-[70%] w-[50%]   flex  -ml-[10%] z-[15] flex-col justify-center ">
          <div className="text-4xl md:text-8xl ">Dozee Home</div>
          <p className=" text-2xl md:text-5xl mt-4">React Native</p>
          <p className=" text-xl md:text-4xl mt-1">(Android & iOS)</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectImage1;
