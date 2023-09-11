import { FC, useContext, useEffect } from "react";
import Introduction from "./Introduction";
import VelocityText from "./VelocityText";
import "../../Introduction.css";
import AppContext from "../AppContext";
import ProjectImage1 from "./ProjectImage1";
import ProjectImage2 from "./ProjectImage2";
import { useInView } from "react-intersection-observer";
import NewP from "./NewP";
import ProjectImage1_2 from "./ProjectImage1_2";
import ProjectImage2_2 from "./ProjectImage2_2";

type props = {};

const MainPageWork: FC<props> = ({}) => {
  const { backG, onClickWork, setOnClickWork, scrollYRef } =
    useContext(AppContext);

  useEffect(() => {
    if (onClickWork === "-") {
      window.scrollTo(0, scrollYRef.current ?? 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [onClickWork]);

  return (
    <div
      className=" text-white font-Montserrat"
      style={{
        background: backG === "" ? "black" : "",
        scrollBehavior: "smooth",
      }}
    >
      <div className={` h-screen w-screen fixed -z-10 bg-black`}></div>
      <img className={` h-screen w-screen fixed -z-10`} src={backG}></img>
      {onClickWork === "-" ? (
        <MainPage />
      ) : (
        <NewP
          project={onClickWork}
          onClose={() => {
            setOnClickWork("-");
          }}
        />
      )}
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
      </div>

      <VelocityText />

      <ProjectImage1_2 />

      <ProjectImage2_2 />

      <ProjectImage1 work={"HOME"} />

      <ProjectImage2 />

      <ProjectImage1 work={"MEMAY"} />
    </div>
  );
};

export default MainPageWork;
