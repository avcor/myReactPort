import { FC } from "react";
import { frost_rect } from "../ImageExporter";
import "../neonText.css";

const NavBar: FC = () => {
  return (
    <div className="z-30 fixed w-[60vw] h-[7vh] backdrop-blur-md bg-[#747474]/30 rounded-2xl overflow-hidden border-2 border-white/50 top-[2vh] left-1/2 -translate-x-1/2 justify-around items-center flex">
      <img
        style={{
          height: "100%",
          width: "100%",
          opacity: 0.3,
          objectFit: "cover",
          position: "absolute",
        }}
        src={frost_rect}
      ></img>
      <text className=" text-white">About Me </text>
      <text className=" text-white">My Work</text>
      <text className=" text-white">Contact</text>
    </div>
  );
};

export default NavBar;
