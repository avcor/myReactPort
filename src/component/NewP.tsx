import "../../styles.css";
import { FC, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  homeGroupImg,
  ecgGroupImg,
  mnGroupImg,
  white_close,
} from "../ImageExporter";
import { WORKS } from "../Constants";

type props = {
  project: WORKS;
  closeFunc: () => void;
};

const NewP: FC<props> = ({ project, closeFunc }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  let imgList: string[] = [];

  if (project === "HOME") {
    imgList = homeGroupImg;
  } else if (project === "ECG") {
    imgList = ecgGroupImg;
  } else {
    imgList = mnGroupImg;
  }

  return (
    <div className="bg-opacity-30 backdrop-blur-3xl">
      <div className="h-16 w-[100vw] sticky top-0 flex flex-col justify-center items-end z-10">
        <div
          className="h-12 w-12 mr-5"
          style={{
            backgroundImage: `url(${white_close})`,
            backgroundSize: 'contain'
          }}
          onClick={() => {
            closeFunc();
          }}
        />
      </div>
      <motion.div
        className="progress"
        style={{ scaleX }}
        onClick={() => {
          closeFunc();
        }}
      />
      {imgList.map((image, index) => (
        <Image src={image} id={index + 1} key={image} />
      ))}
      <motion.div
        className="progress"
        style={{ scaleX }}
        onClick={() => {
          closeFunc();
        }}
      />
    </div>
  );
};

function Image({ src, id }: { src: string; id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="h-[100vh] flex justify-center items-center relative scroll-align ">
      <div ref={ref} className="h-[80vh] w-[80vh] relative overflow-hidden">
        <img className="w-full h-full object-scale-down" src={src} />
      </div>
      <motion.h2 style={{ y, color: "white" }}>{`#00${id}`}</motion.h2>
    </div>
  );
}
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default NewP;
