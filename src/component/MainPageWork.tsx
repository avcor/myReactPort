import { FC, useContext, useEffect } from "react";
import Introduction from "./Introduction";
import VelocityText from "./VelocityText";
import "../../Introduction.css";
import AppContext from "../AppContext";
import ProjectImage1 from "./ProjectImage1";
import ProjectImage2 from "./ProjectImage2";
import { useInView } from "react-intersection-observer";
import NewP from "./NewP";

type props = {};

const MainPageWork: FC<props> = ({}) => {
  const { backG, onClickWork } = useContext(AppContext);

  return (
    <div
      className=" text-white font-Montserrat "
      style={{ background: backG === "" ? "black" : "" }}
    >
      <div className={` h-screen w-screen fixed -z-10 bg-black`}></div>
      <img className={` h-screen w-screen fixed -z-10`} src={backG}></img>
      {onClickWork === "-" ? <MainPage /> : <NewP project={onClickWork} />}
    </div>
  );
};

const MainPage = () => {
  const { setBackG } = useContext(AppContext);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setBackG("");
    }
  }, [inView]);

  return (
    <div className=" backdrop-blur-xl ">
      <div ref={ref} className="w-[100vw]">
        <Introduction />

        <VelocityText />
      </div>

      <ProjectImage1 work={"HOME"} />

      <ProjectImage2 />

      <ProjectImage1 work={"MEMAY"} />
    </div>
  );
};

export default MainPageWork;
