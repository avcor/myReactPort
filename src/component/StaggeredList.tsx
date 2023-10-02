import { FC, useRef } from "react";
import { techGroupImg, techGroupImg2, techGroupImg3 } from "../ImageExporter";
import { motion, useScroll, useTransform } from "framer-motion";
import "../Intro2.css";
const StaggeredList: FC = () => {
  const grpRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: grpRef,
    offset: ["0 0.9", "1.55 1"],
  });
  const move1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const move2 = useTransform(scrollYProgress, [0, 1], [10, 100]);

  return (
    <motion.div className=" h-screen max-w-[100vw]  grid sm:grid-cols-2 grid-cols-1 overflow-hidden">
      <motion.div className=" bg-black z-10">dsfkj</motion.div>
      <motion.div
        className=" flex flex-row  justify-evenly  -mt-10  bg-slate-50 overflow-hidden "
        ref={grpRef}
        style={{
          x: -0,
          rotate: -30,
        }}
      >
        <motion.div className="h-[100vh] -z-10" style={{ y: move1 }}>
          {techGroupImg.map((val) => {
            return (
              <motion.img
                src={val}
                style={{ padding: move1 }}
                className=" h-[20vh] aspect-square rounded-full object-cover mb-[5vh]"
              />
            );
          })}
        </motion.div>
        <motion.div className=" h-[100vh] -z-10  " style={{ y: move2 }}>
          {techGroupImg2.map((val) => {
            return (
              <motion.img
                src={val}
                style={{ padding: move1 }}
                className=" h-[20vh] aspect-square rounded-full object-cover mb-[5vh]"
              />
            );
          })}
        </motion.div>
        <motion.div className=" h-[100vh] -z-10" style={{ y: move1 }}>
          {techGroupImg3.map((val) => {
            return (
              <motion.img
                src={val}
                style={{ padding: move1 }}
                className=" h-[20vh] aspect-square rounded-full object-cover mb-[5vh]"
              />
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StaggeredList;
