import { FC, useContext } from "react";
import { SCREENS, WORKS } from "../Constants";
import Introduction from "./Introduction";
import VelocityText from "./VelocityText";
import "../../Introduction.css";
import { back2, handMemay } from "../ImageExporter";
import AppContext from "../AppContext";
import ProjectImage from "./ProjectImage";

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

      <ProjectImage />
    </div>
  );
};

export default MainPageWork;
