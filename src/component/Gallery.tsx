import { FC } from "react";
import {
  ecgGroupImg,
  homeGroupImg,
  mnGroupImg,
  white_close,
} from "../ImageExporter";
import { ecgDesc, homeDesc, mnDesc } from "../TsxConstants";
import { WORKS } from "../Constants";

type props = {
  project: WORKS;
  onClose: () => void;
};

const Gallery: FC<props> = ({ project, onClose }) => {
  let imgList: string[] = [];
  let description: (string | JSX.Element)[] = [];

  if (project === "HOME") {
    imgList = homeGroupImg;
    description = homeDesc;
  } else if (project === "ECG") {
    imgList = ecgGroupImg;
    description = ecgDesc;
  } else {
    imgList = mnGroupImg;
    description = mnDesc;
  }

  return (
    <>
      <div className="h-full w-full overflow-scroll ">
        <div
          className="absolute h-12 w-12 mr-5 right-0"
          style={{
            backgroundImage: `url(${white_close})`,
            backgroundSize: "contain",
          }}
          onClick={() => {
            onClose();
          }}
        />
        {imgList.map((image, index) => (
          <Images
            src={image}
            id={index + 1}
            key={image}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;

const Images: FC<{
  src: string;
  id: number;
  description: (string | JSX.Element)[];
}> = ({ src }) => {
  return (
    <>
      <div className=" h-full items-center flex justify-center">
        <img className={` h-[80vh] object-scale-down`} src={src} />
      </div>
    </>
  );
};
