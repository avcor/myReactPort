import { FC, useContext, useEffect, useRef, useState } from "react";
import {
  back4,
  handHome,
  home_mock0,
  home_mock6,
  neon_circle_green,
  neon_circle_purple,
} from "../ImageExporter";
import {
  Variants,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { red_abstract_video } from "../VideoExporter";
import AppContext from "../AppContext";

const variantUp: Variants = {
  tilt: {
    rotate: [0, -30],
    x: ["0vw", "-25vw"],
    y: ["0vh", "-10vh"],
    scale: [1, 1.2],
  },
  no: {
    rotate: [-30, 0],
    scale: [1.2, 1],
  },
};

const variantDown: Variants = {
  tilt: {
    rotate: [0, 30],
    x: ["0vw", "20vw"],
    y: [0, 100],
    scale: [1, 1.2],
  },
  no: {
    rotate: [30, 0],
    scale: [1.2, 1],
  },
};

const ProjectImage1_2: FC = () => {
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
    stiffness: 100,
  });
  const scaleScroll = useTransform(
    scrollYProgressSpring,
    [0, 0.5, 1],
    [0.9, 1.2, 1.2]
  );
  // const isInView: boolean = useInView(scrollRef);

  // useEffect(() => {
  //   if (isInView) {
  //     setBackG(back4);
  //   }
  // }, [isInView]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef && videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (videoRef.current.duration - 2.5) * latest;
    }
  });

  return (
    <div
      ref={scrollRef}
      className="md:h-[150vh] h-[100vh] justify-center items-center flex "
    >
      <div className=" h-[100vh] justify-center items-center flex relative ">
        <div
          className=" z-10  w-[25vw] aspect-square flex relative rounded-full justify-center items-center "
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => {
            scrollYRef.current = window.scrollY;
            setOnClickWork("HOME");
          }}
        >
          <img
            className="md:w-[40vw] w-[50vw] absolute m-auto -z-10 rounded-full "
            style={{ scale: "230%" }}
            src={neon_circle_purple}
          />
          <motion.img
            style={{ scale: scaleScroll, y: "-10%" }}
            className="md:w-[30vw] w-[40vw] object-scale-down aspect-square"
            src={handHome}
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
            style={{
              visibility: onHover ? "visible" : "collapse",
            }}
            className="z-10  w-[35vw] aspect-square rounded-full flex flex-col justify-center items-center absolute bg-gradient-radial from-purple-400/90 via-transparent to-transparent"
          >
            <motion.div>
              <p className=" md:text-4xl font-semibold">Dozee</p>
              <p className=" md:text-3xl ">React Native</p>
              <p className=" md:text-2xl ">(Android & iOS)</p>
            </motion.div>
          </motion.div>
        </div>

        <MotionImg variants={variantUp} imgStr={home_mock6} onHover={onHover} />
        <MotionImg
          variants={variantDown}
          imgStr={home_mock0}
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

export default ProjectImage1_2;
