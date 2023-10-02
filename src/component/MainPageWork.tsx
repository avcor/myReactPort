import { FC, useContext, useEffect } from "react";
import Introduction from "./Introduction";
import VelocityText from "./VelocityText";
import "../../Introduction.css";
import AppContext from "../AppContext";
import { useInView } from "react-intersection-observer";
import NewP from "./NewP";
import ProjectImage1_2 from "./ProjectImage1_2";
import ProjectImage2_2 from "./ProjectImage2_2";
import ProjectImage3_2 from "./ProjectImage3_2";
import Introduction2 from "./Introdunction2";
import { techGroupImg } from "../ImageExporter";
import StaggeredList from "./StaggeredList";
import NeonIntro from "./IntroNeon";
import NavBar from "./Navbar";

const MainPageWork: FC = () => {
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
    <>
      <div className=" sticky z-30">
        <NavBar />
      </div>
      <div className=" ">
        <NeonIntro />

        {/* <VelocityText /> */}

        <ProjectImage1_2 />

        <ProjectImage2_2 />

        <ProjectImage3_2 />
      </div>
    </>
  );
};

export default MainPageWork;
