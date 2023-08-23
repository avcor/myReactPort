import { FC, useContext, useEffect, useRef } from "react";
import { back5, handEcg } from "../ImageExporter";
import { purple_abstract_video } from "../VideoExporter";
import AppContext from "../AppContext";
import { useInView } from "react-intersection-observer";
import { thresholdView } from "../Constants";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";

const ProjectImage2: FC = () => {
  const { setBackG, setOnClickWork, scrollYRef } = useContext(AppContext);
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
      setBackG(back5);
    }
  }, [inView]);

  return (
    <div ref={refr} className=" h-[100vh]">
      <div
        ref={ref}
        className="flex flex-row-reverse h-[60vh] md:h-[100vh] items-center mr-10"
      >
        <div
          className=" h-[70%] w-[50%] relative rounded-3xl overflow-hidden flex -ml-[7%] "
          onClick={() => {
            scrollYRef.current = window.scrollY;
            setOnClickWork("ECG");
            // setActive("MODAL");
          }}
        >
          <img
            src={handEcg}
            className="z-10 self-center absolute m-0 bg-opacity-30 "
          ></img>
          <video
            ref={videoRef}
            muted
            src={purple_abstract_video}
            className="absolute m-0 h-[100%] w-[100%] blur-lg object-fill"
          />
        </div>
        <div className="h-[70%] w-[50%] text-right flex z-[15] flex-col justify-center">
          <div className="text-4xl md:text-8xl ">Dozee Home</div>
          <p className=" text-2xl md:text-5xl mt-4">React Native</p>
          <p className=" text-xl md:text-4xl mt-1">(Android & iOS)</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage2;
