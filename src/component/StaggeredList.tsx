import { FC, useRef } from "react";
import { techGroupImg, techGroupImg2, techGroupImg3 } from "../ImageExporter";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const StaggeredList: FC = () => {
  const grpRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: grpRef,
    offset: ["0 0.9", "1.55 1"],
  });
  const move1 = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const move2 = useTransform(scrollYProgress, [0, 1], [-90, 100]);

  return (
    <motion.div className=" min-h-screen md:min-h-[120vh] w-screen grid sm:grid-cols-2 grid-cols-1 overflow-hidden items-center ">
      <motion.div className=" min-h-screen md:min-h-[120vh] w-full flex flex-col px-[10%] md:pt-[20%]  justify-center ">
        <p className=" text-4xl">Hello !</p>
        <p className=" text-xl">
          “ I am a React Native and Android developer who loves building
          high-quality mobile apps. I focus on creating scalable, user-friendly
          apps with great UI/UX design and efficient code. Let's work together
          to bring your ideas to life! ”
        </p>
      </motion.div>

      <div ref={grpRef} className=" items-center flex justify-center relative">
        <ImgList move1={move1} move2={move2} />
      </div>
    </motion.div>
  );
};

const ImgList: FC<{
  move1: MotionValue<number>;
  move2: MotionValue<number>;
}> = ({ move1, move2 }) => {
  return (
    <div className="w-full flex flex-row justify-evenly items-center relative bg-slate-00 p-10 overflow-hidden">
      <div className="h-[20vh] w-full absolute z-10 top-0 bg-gradient-to-t from-transparent  to-black " />
      <div className="h-[15vh] w-full absolute z-10 bottom-0 bg-gradient-to-b from-transparent to-black " />
      <motion.div className=" " style={{ y: move1 }}>
        {techGroupImg.map((val, index) => {
          return (
            <img
              key={val + index}
              src={val}
              className=" w-[15vh] aspect-square rounded-full object-cover  my-[20%]"
            />
          );
        })}
      </motion.div>

      <motion.div className=" " style={{ y: move2 }}>
        {techGroupImg2.map((val, index) => {
          return (
            <img
              key={val + index}
              src={val}
              className=" w-[15vh] aspect-square rounded-full object-cover my-[20%]"
            />
          );
        })}
      </motion.div>

      <motion.div className="" style={{ y: move1 }}>
        {techGroupImg3.map((val, index) => {
          return (
            <img
              key={val + index}
              src={val}
              className=" w-[15vh] aspect-square rounded-full object-cover  my-[20%]"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default StaggeredList;
