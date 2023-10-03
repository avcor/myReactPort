import { FC, useContext, useRef, useState } from "react";
import {
  ecg_mock3,
  ecg_mock4,
  handEcg,
  neon_circle_wwhite,
} from "../ImageExporter";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { orange_abstract_video } from "../VideoExporter";
import AppContext from "../AppContext";

const variantUp: Variants = {
  tilt: {
    rotate: [0, -30],
    x: ["0vw", "-25vw"],
    // y: ["0vh", "-25vh"],
    scale: [1, 1.2],
    opacity: [0, 1],
    transition: {
      opacity: {
        duration: 0.1,
      },
    },
  },
  no: {
    rotate: [-30, 0],
    scale: [1.2, 1],
    opacity: 0,
  },
};

const variantDown: Variants = {
  tilt: {
    rotate: [0, 30],
    x: ["0vw", "25vw"],
    y: ["0vh", "3vh"],
    scale: [1, 1.2],
    opacity: [0, 1],
    transition: {
      opacity: {
        duration: 0.1,
      },
    },
  },
  no: {
    rotate: [30, 0],
    scale: [1.2, 1],
    opacity: 0,
  },
};

const ProjectImage2_2: FC = () => {
  const [onHover, setOnHover] = useState(false);
  const scrollRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setBackG, setOnClickWork, scrollYRef } = useContext(AppContext);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 0.9", "1.55 1"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 50,
  });
  const scaleScroll = useTransform(
    scrollYProgressSpring,
    [0, 0.5, 1],
    [0.9, 1, 1]
  );
  useTransform(scrollYProgressSpring, [0, 1], [0, 10]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef && videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (videoRef.current.duration - 0.2) * latest;
    }
  });

  console.log("duration 2 " + videoRef.current?.duration);

  return (
    <div
      ref={scrollRef}
      className=" lg:h-[150vh] h-[100vh] justify-center items-center flex"
    >
      <div className=" h-[100vh] justify-center items-center flex relative">
        <div
          className=" z-10  w-[25vw] aspect-square flex relative rounded-full justify-center items-center "
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => {
            scrollYRef.current = window.scrollY;
            setOnClickWork("ECG");
          }}
        >
          <img
            className="md:w-[20vw] w-[50vw] absolute m-auto -z-10 rounded-full "
            style={{ scale: "200%" }}
            src={neon_circle_wwhite}
          />
          <motion.img
            style={{ scale: scaleScroll, y: "-10%" }}
            className="md:w-[20vw] w-[40vw] object-scale-down aspect-square"
            src={handEcg}
          />
          <motion.div
            animate={
              onHover
                ? {
                    opacity: [0, 0, 1],
                  }
                : {
                    opacity: [1, 0, 0],
                  }
            }
            style={{ visibility: onHover ? "visible" : "collapse" }}
            className="z-10  w-[35vw] aspect-square rounded-full flex flex-col justify-center items-center absolute bg-gradient-radial from-purple-400/90 via-transparent to-transparent"
          >
            <motion.div>
              <p className=" md:text-4xl font-semibold">Tricorg Ecg</p>
              <p className=" md:text-3xl ">Android</p>
              <p className=" md:text-2xl ">(with Tricorg Module)</p>
            </motion.div>
          </motion.div>
        </div>

        <MotionImg variants={variantUp} imgStr={ecg_mock3} onHover={onHover} />
        <MotionImg
          variants={variantDown}
          imgStr={ecg_mock4}
          onHover={onHover}
        />
      </div>
    </div>
  );
};

const MotionImg: FC<{
  variants: Variants;
  imgStr: string;
  onHover: boolean;
}> = ({ variants, imgStr, onHover }) => {
  return (
    <>
      <motion.img
        style={{ rotate: 10 }}
        transition={{
          ease: "linear",
          duration: 0.3,
        }}
        variants={variants}
        animate={onHover ? "tilt" : "no"}
        className=" h-[25%] lg:h-[55%] absolute"
        src={imgStr}
      ></motion.img>
    </>
  );
};

export default ProjectImage2_2;
