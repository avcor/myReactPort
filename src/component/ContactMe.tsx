import { FC } from "react";
import {
  email_icon,
  leaf_1,
  leaf_bottom_right,
  leaf_first_left_1,
  leaf_first_left_2,
  leaf_first_left_Bottom,
  leaf_first_left_top,
  leaf_first_top1,
  leaf_first_top2,
  linkedin_icon,
} from "../ImageExporter";
import "../neonText.css";
import { motion, useAnimation } from "framer-motion";

const ContactMe: FC = () => {
  return (
    <div className=" h-[100vh] w-[100vw] relative overflow-hidden">
      <Second_Layer />

      <div className="absolute h-full w-full flex">
        <div className=" flex-1  flex justify-center items-center">
          <div className="absolute w-[50vw] md:w-[40vw] h-[30vh] rounded-xl bottom-[20vh] bg-transparent left-[3vw] neon-effect border-white border-[4px] flex justify-center items-center p-[2rem]">
            <p className=" neon-anim font-VujahdayScript md:text-[5vw] text-[10vw]">
              Let's Connect
            </p>
          </div>
        </div>

        <div className=" flex-1 relative justify-end pt-[14vh] mr-[10vw] flex">
          <ContactList />
        </div>
      </div>

      <First_layer />
    </div>
  );
};

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 0.23;

const variants = {
  start: {
    rotate: [-10, 25, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration(),
    },
  },
  reset: {
    rotate: 0,
    x: 0,
  },
};

const ContactList = () => {
  const control_linkedin = useAnimation();
  const control_email = useAnimation();

  return (
    <div className="relative h-[50vh] md:w-[20vh] w-[20vh]  rounded-xl ">
      <div className="absolute -inset-1 bg-gradient-to-t from-[#FF4C4C] to-[#FE00E5] blur-md"></div>
      <div className="flex flex-col absolute h-full w-full bg-black rounded-xl border-2 border-slate-300 justify-evenly items-center">
        <motion.img
          className="z-10 w-[50%] aspect-square cursor-pointer "
          src={linkedin_icon}
          onMouseEnter={() => {
            control_linkedin.start("start");
          }}
          onMouseLeave={() => {
            control_linkedin.stop();
            control_linkedin.set("reset");
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/abhishek-verma-0421b8120/",
              "_blank"
            )
          }
          variants={variants}
          animate={control_linkedin}
        />
        <motion.img
          className="z-10 w-[50%] aspect-square cursor-pointer "
          src={email_icon}
          onMouseEnter={() => {
            control_email.start("start");
          }}
          onMouseLeave={() => {
            control_email.stop();
            control_email.set("reset");
          }}
          onClick={() => {
            window.open("mailto:vermas691999@gmail.com");
          }}
          variants={variants}
          animate={control_email}
        />
      </div>
    </div>
  );
};

const Second_Layer = () => {
  return (
    <>
      <img
        className="md:w-[20vw] w-[25vw] rotate-180  absolute bottom-0 left-[2vw]"
        src={leaf_1}
      />

      <img
        className=" md:w-[15vw] w-[25vw] rotate-[-90deg] -bottom-[1vw] absolute object-cover left-[60vw]"
        src={leaf_first_left_top}
      />
      <img
        className=" md:h-[16vw] h-[25vh] bottom-0 absolute right-0 "
        src={leaf_first_left_2}
      />

      <img
        className=" md:w-[18vw] w-[25vh] absolute md:-left-[6vh] -left-[4vh] rotate-90 top-[10vh]"
        src={leaf_bottom_right}
      />
    </>
  );
};

const First_layer = () => {
  return (
    <div className=" z-20">
      <img
        className=" md:w-[17vw] w-[25vh] absolute left-0 top-[35vh] "
        src={leaf_first_left_Bottom}
      />
      <img
        className=" md:h-[20vw] h-[40vw] TOP-0 absolute right-0 top-[20%] "
        src={leaf_first_left_1}
      />
      <img
        className=" md:w-[8vw] w-[15vh] rotate-[120deg] -bottom-[3%] absolute object-fill left-[40vw]"
        src={leaf_first_top1}
      />
      <img
        className=" md:w-[10vw] w-[15vh] rotate-[0deg] -bottom-[0%] absolute object-fill left-[47vw]"
        src={leaf_first_top2}
      />
    </div>
  );
};

export default ContactMe;
