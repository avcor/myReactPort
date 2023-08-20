import { FC, useRef, useState } from "react";
import { testMov } from "../ImageExporter";
import { useMotionValueEvent, useScroll } from "framer-motion";
import "../../Introduction.css";

const Introduction: FC = () => {
  const refr = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLMediaElement>();
  const [collapse, setCollapse] = useState(true);
  const [vis, setVis] = useState(true);

  const { scrollYProgress } = useScroll({
    target: refr,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("me " + latest.toString());
    if (videoRef && videoRef.current) {
      if (latest > 0) {
        //scroll has started
        setCollapse(false);
      }
      if (latest === 0 || latest === 1) {
        setCollapse(true);
      }
      if (latest > 0.9) {
        setVis(false);
      }
      if (latest === 0) {
        setVis(true);
      }
      if (latest > 0.5) {
        videoRef.current!.currentTime = 6 * (1 - latest);
      } else {
        videoRef.current!.currentTime = 6 * latest;
      }
    }
  });

  return (
    <div className=" " ref={refr}>
      <div className=" min-h-screen w-[100vw] bg-black flex flex-col justify-center items-center snap-div">
        <div
          className="  items-center flex flex-col"
          // style={{ visibility: vis ? "visible" : "hidden" }}
        >
          <p className="font-Halimun text-5xl">Abhishek Verma</p>
          <p className="font-Montserrat text-sm mt-5">
            Mobile Application Developer
          </p>
        </div>
      </div>

      <div className=" min-h-screen bg-black flex flex-col justify-center items-center snap-div">
        <div
          className="  items-center flex flex-col"
          // style={{ visibility: vis ? "hidden" : "visible" }}
        >
          <p className=" text-5xl">Hello !</p>
          <p className="w-[50vw] text-lg text-center mt-6">
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

export default Introduction;
