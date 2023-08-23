import "../../styles.css";
import { FC, useRef, useState } from "react";
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
import { ecgDesc, homeDesc, mnDesc } from "../TsxConstants";

type props = {
  project: WORKS;
  onClose: () => void;
};

const NewP: FC<props> = ({ project, onClose }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  let imgList: string[] = [];
  let description: (string | JSX.Element)[] = [];

  if (project === "HOME") {
    imgList = homeGroupImg;
    description = homeDesc;
  } else if (project === "ECG") {
    imgList = ecgGroupImg;
    description = ecgDesc;
  } else {
    imgList = mnGroupImg;
    description = mnDesc;
  }

  return (
    <div className="bg-opacity-30 backdrop-blur-3xl">
      <div className="h-16 w-[100vw] sticky top-0 flex flex-col justify-center items-end z-10">
        <div
          className="h-12 w-12 mr-5"
          style={{
            backgroundImage: `url(${white_close})`,
            backgroundSize: "contain",
          }}
          onClick={() => {
            onClose();
          }}
        />
      </div>
      {imgList.map((image, index) => (
        <Image
          src={image}
          id={index + 1}
          key={image}
          description={description}
        />
      ))}
      <motion.div
        className="progress"
        style={{ scaleX }}
        onClick={() => {
          // closeFunc();
        }}
      />
    </div>
  );
};

function Image({
  src,
  id,
  description,
}: {
  src: string;
  id: number;
  description: (string | JSX.Element)[];
}) {
  const [onHold, setOnHold] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="h-[100vh] flex justify-center items-center relative scroll-align  ">
      <div ref={ref} className="h-[80vh] flex flex-row ">
        <img
          onMouseDown={() => {
            setOnHold(true);
          }}
          onMouseUp={() => {
            setOnHold(false);
          }}
          onMouseMove={() => {
            setOnHold(false);
          }}
          className={
            `w-full h-full md:max-w-[40vw] object-scale-down ` +
            (onHold ? "z-10" : "")
          }
          src={src}
        />
        <motion.div
          className="h-fit absolute left-[60%] self-center min-w-[20vw] max-w-[30vw] backdrop-blur-sm bg-black/40 rounded-xl border-[3px] border-black/10"
          style={{ y, color: "white" }}
        >
          <div className=" m-3">
            <p className="text-3xl md:text-4xl">
              {id > 9 ? `#0${id}` : `#00${id}`}
            </p>
            <p className=" text-sm md:text-lg">{description[id - 1]}</p>
            <p className=" text-xs mt-3">
              (Click & hold to view image if overlapping)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default NewP;
