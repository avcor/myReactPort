import { FC, RefObject, useEffect, useState } from "react";
import { frost_rect } from "../ImageExporter";

type prop = {
  visState: string;
  refs: {
    meRef: RefObject<HTMLDivElement>;
    workRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
};

const NavBar: FC<prop> = ({ visState, refs }) => {
  return (
    <div className="z-30 fixed w-[60vw] h-[7vh] backdrop-blur-md bg-[#747474]/30 rounded-2xl overflow-hidden border-2 border-white/50 top-[2vh] left-1/2 -translate-x-1/2 justify-around items-center flex">
      <img
        style={{
          zIndex: -1,
          height: "100%",
          width: "100%",
          opacity: 0.3,
          objectFit: "cover",
          position: "absolute",
        }}
        src={frost_rect}
      ></img>
      <div
        style={{
          color: visState === "me" ? "yellow" : "white",
          cursor: "pointer",
        }}
        onClick={() => {
          refs.meRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        About Me{" "}
      </div>
      <div
        style={{
          color: visState === "work" ? "yellow" : "white",
          cursor: "pointer",
        }}
        onClick={() => {
          refs.workRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        My Work
      </div>
      <div
        style={{
          color: visState === "contact" ? "yellow" : "white",
          cursor: "pointer",
        }}
        onClick={() => {
          refs.contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default NavBar;
