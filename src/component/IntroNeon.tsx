import { FC } from "react";
import {
  leaf_1,
  leaf_2,
  leaf_bottom_right,
  leaf_first_left_1,
  leaf_first_left_2,
  leaf_first_left_Bottom,
  leaf_first_left_top,
  leaf_first_top1,
  leaf_first_top2,
  leaf_first_top3,
  leaf_top_left,
  leaf_top_right,
  neon_tube,
} from "../ImageExporter";
import "../neonText.css";

const NeonIntro: FC = () => {
  return (
    <div className=" h-[100vh] w-[100vw] relative ">
      {/* back */}
      <>
        <img src={leaf_top_right} className=" absolute  w-[25vh] md:w-[40vh]" />
        <img
          src={leaf_top_left}
          className=" absolute w-[15vh] md:w-[25vh] right-0 "
        />
        <img
          src={leaf_2}
          className=" absolute w-[20vh] md:w-[35vh] left-[25vw]"
        ></img>
        <img
          src={leaf_1}
          className=" absolute w-[22vh] md:w-[33vh] right-[1vw] md:right-[20vw] "
        />
        <img
          src={leaf_bottom_right}
          className=" absolute w-[50vw] md:w-[16vw] bottom-0"
        />
      </>
      <img src={neon_tube} className=" absolute h-full w-full p-12" />
      {/* front */}
      <>
        <img
          src={leaf_first_top1}
          className=" absolute h-[15vw] md:h-[12vw] left-[35%]"
        />
        <img
          src={leaf_first_top2}
          className=" absolute h-[15vw] md:h-[12vw] left-[45%]"
        />
        <img
          src={leaf_first_top3}
          className=" absolute h-[20vh] md:h-[30vh] left-[50%]"
        />
        <img
          src={leaf_first_left_Bottom}
          className=" absolute w-[30vw] md:w-[12vw] bottom-[9vh] "
        />
        <img
          src={leaf_first_left_top}
          className=" absolute w-[30vw] md:w-[11vw] bottom-[50vh] translate-y-2/4"
        />
        <img
          src={leaf_first_left_1}
          className=" absolute w-[20vh]  md:w-[26vh] right-0 bottom-[20vh]"
        />
        <img
          src={leaf_first_left_2}
          className=" absolute w-[40vw] md:w-[18vw] bottom-0 right-0"
        />
      </>
      <span className=" absolute top-[50%] right-1/2 translate-x-1/2 -translate-y-1/2 ">
        <div className="neon md:text-7xl text-4xl font-Halimun z-10 flex flex-row">
          Abhish
          <div className="neon md:text-7xl text-4xl font-Halimun z-10 neon-anim">
            e
          </div>
          <div className="neon md:text-7xl text-4xl font-Halimun z-10 ">k</div>
        </div>
        <div className="neon md:text-7xl text-4xl font-Halimun z-10 neon-anim">
          Verma
        </div>
      </span>
    </div>
  );
};

export default NeonIntro;
