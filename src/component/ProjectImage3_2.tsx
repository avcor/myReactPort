import { FC, useContext, useRef, useState } from "react";
import { handMemay, mn2, mn3, neon_circle_green } from "../ImageExporter";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import AppContext from "../AppContext";

const variantUp: Variants = {
  tilt: {
    rotate: [0, -30],
    x: ["0vw", "-25vw"],
    y: ["0vh", "-10vh"],
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
    x: ["0vw", "20vw"],
    y: [0, 100],
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

const ProjectImage3_2: FC = () => {
  const { setBackG, setOnClickWork, scrollYRef } = useContext(AppContext);
  const [onHover, setOnHover] = useState(false);
  const scrollRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
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

  console.log("duration 3 " + videoRef.current?.duration);

  return (
    <div
      ref={scrollRef}
      className="md:h-[130vh] h-[80vh]  justify-center items-center flex"
    >
      <div className=" h-[100vh] justify-center items-center flex relative">
        <MotionImg variants={variantUp} imgStr={mn3} onHover={onHover} />
        <MotionImg variants={variantDown} imgStr={mn2} onHover={onHover} />

        <div
          className=" w-[25vw] aspect-square flex relative rounded-full justify-center items-center "
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => {
            scrollYRef.current = window.scrollY;
            setOnClickWork("MEMAY");
          }}
        >
          <img
            className="md:w-[22vw] w-[50vw] absolute m-auto  rounded-full "
            style={{ scale: "190%" }}
            src={neon_circle_green}
          />
          <motion.img
            style={{ scale: scaleScroll, y: "5%" }}
            className="md:w-[22vw] w-[40vw] object-scale-down aspect-square"
            src={handMemay}
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
            className="  w-[35vw] aspect-square rounded-full flex flex-col justify-center items-center absolute bg-gradient-radial from-purple-400/90 via-transparent to-transparent"
          >
            <motion.div>
              <p className=" text-4xl font-semibold">Memay News</p>
              <p className=" text-3xl ">Android</p>
              <p className=" text-2xl "></p>
            </motion.div>
          </motion.div>
        </div>
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

export default ProjectImage3_2;
