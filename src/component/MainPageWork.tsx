import { FC, RefObject, useContext, useEffect, useRef, useState } from "react";

import "../../Introduction.css";
import AppContext from "../AppContext";
import NewP from "./NewP";
import ProjectImage1_2 from "./ProjectImage1_2";
import ProjectImage2_2 from "./ProjectImage2_2";
import ProjectImage3_2 from "./ProjectImage3_2";
import StaggeredList from "./StaggeredList";
import NeonIntro from "./IntroNeon";
import { useInView } from "framer-motion";
import NavBar from "./Navbar";
import ContactMe from "./ContactMe";

import ReactDOM, { createPortal } from "react-dom";
import MyModal from "./myModal";
import Gallery from "./Gallery";

const MainPageWork: FC = () => {
  const { backG, onClickWork, setOnClickWork, scrollYRef } =
    useContext(AppContext);

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
      {/* {onClickWork === "-" ? <MainPage /> : null} */}
      <MainPage />
      {onClickWork !== "-" ? (
        <MyModal>
          <Gallery
            project={onClickWork}
            onClose={() => {
              setOnClickWork("-");
            }}
          />
        </MyModal>
      ) : null}
    </div>
  );
};

const MainPage: FC = () => {
  const meRef = useRef<HTMLDivElement>(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const meIsInView = useInView(meRef);
  const workIsInView = useInView(workRef);
  const contactIsInView = useInView(contactRef);

  const [visState, setVisState] = useState("me");

  useEffect(() => {
    if (meIsInView) {
      setVisState("me");
    }
    if (workIsInView) {
      setVisState("work");
    }
    if (contactIsInView) {
      setVisState("contact");
    }
  }, [meIsInView, workIsInView, contactIsInView]);

  return (
    <>
      <NavBar
        visState={visState}
        refs={{
          meRef: meRef,
          workRef: workRef,
          contactRef: contactRef,
        }}
      />

      <div ref={meRef}>
        <NeonIntro />

        <StaggeredList />
      </div>

      <div ref={workRef}>
        <ProjectImage1_2 />

        <ProjectImage2_2 />

        <ProjectImage3_2 />
      </div>

      <div ref={contactRef}>
        <ContactMe />
      </div>
    </>
  );
};

{
  /* <VelocityText /> */
}

export default MainPageWork;
