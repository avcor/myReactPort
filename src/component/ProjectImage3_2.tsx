import { FC, useRef, useState } from "react";
import {
  blue_flower,
  ecg_mock1,
  ecg_mock2,
  ecg_mock3,
  ecg_mock4,
  ecg_mock6,
  handEcg,
  handHome,
  handMemay,
  home_mock0,
  home_mock6,
  white_flower,
  yellow_flower,
} from "../ImageExporter";
import {
  Variants,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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

const ProjectImage3_2: FC = () => {
  const [onHover, setOnHover] = useState(false);
  const scrollRef = useRef(null);
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
  const moveYScroll = useTransform(scrollYProgressSpring, [0, 1], [0, 10]);

  return (
    <div
      ref={scrollRef}
      className=" h-[130vh] justify-center items-center flex"
    >
      <div className=" h-[100vh] justify-center items-center flex relative">
        <div
          className=" z-10  w-[50vw]  flex relative rounded-full justify-center items-center "
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <motion.div
            // src={yellow_flower}
            className=" w-[25vw] absolute  object-fill m-auto inset-0 -z-10 rounded-full aspect-square bg-yellow-300"
            style={{ scale: 1.3, rotate: moveYScroll }}
            viewport={{ margin: "200px" }}
          />
          <motion.img
            style={{ scale: scaleScroll }}
            className=" w-[25vw] object-scale-down aspect-square "
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
            className="flex flex-col justify-center items-center absolute h-full w-full rounded-full bg-gradient-radial from-purple-400/90 via-transparent to-transparent"
          >
            <motion.div>
              <p className=" text-4xl font-semibold">Dozee</p>
              <p className=" text-3xl ">React Native</p>
              <p className=" text-2xl ">(Android & iOS)</p>
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
        className=" h-[15%] md:h-[35%] absolute "
        src={imgStr}
      ></motion.img>
    </>
  );
};

export default ProjectImage3_2;
