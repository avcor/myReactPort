import { FC } from "react";
import "../Intro2.css";

const Introduction2: FC = () => {
  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
      <div className=" h-[50vh] w-[40vw] flex flex-col justify-center items-center ">
        <TextBars />
      </div>
    </div>
  );
};

export default Introduction2;

const TextBars = () => {
  return (
    <div className="card">
      <div className="content border-2 rounded-md">
        <div className="front flex flex-col justify-center items-center">
          <p className="font-Halimun text-5xl text-center ">Abhishek Verma</p>
          <p className="font-Montserrat text-sm mt-5">
            Mobile Application Developer
          </p>
        </div>
        <div className="back  flex flex-col justify-center items-center p-10">
          <p className=" text-5xl">Hello !</p>
          <p className=" text-lg text-center mt-6">
            I am a React Native and Android developer who loves building
            high-quality mobile apps. I focus on creating scalable,
            user-friendly apps with great UI/UX design and efficient code. Let's
            work together to bring your ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};
