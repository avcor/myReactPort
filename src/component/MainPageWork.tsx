import { FC, useContext } from "react";
import { SCREENS, WORKS } from "../Constants";
import Introduction from "./Introduction";
import VelocityText from "./VelocityText";
import "../../Introduction.css";
import AppContext from "../AppContext";
import ProjectImage1 from "./ProjectImage1";
import ProjectImage2 from "./ProjectImage2";

type props = {
  backG: string;
  setBackG: React.Dispatch<React.SetStateAction<string>>;
  scroolY: React.MutableRefObject<number | undefined>;
  selectedWork: React.MutableRefObject<WORKS>;
  setActive: React.Dispatch<React.SetStateAction<SCREENS>>;
};

const MainPageWork: FC<props> = ({}) => {
  const { backG } = useContext(AppContext);
  console.log("_______________________ " + backG);
  return (
    <div className={"text-white"}>
      <Introduction />

      <VelocityText />

      <ProjectImage1 work={"HOME"} />

      <ProjectImage2 />

      <ProjectImage1 work={"MEMAY"} />
    </div>
  );
};

export default MainPageWork;
