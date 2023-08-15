import "../../styles.css";
import { FC, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  homeGroupImg,
  ecgGroupImg,
  mnGroupImg,
  white_close,
} from "../ImageExporter";
import { WORKS } from "../Constants";

type props = {
  project: WORKS;
  closeFunc: () => void;
};

const NewP: FC<props> = ({ project, closeFunc }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
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
    description = mnDesc
  }

  return (
    <div className="bg-opacity-30 backdrop-blur-3xl">
      <div className="h-16 w-[100vw] sticky top-0 flex flex-col justify-center items-end z-10">
        <div
          className="h-12 w-12 mr-5"
          style={{
            backgroundImage: `url(${white_close})`,
            backgroundSize: 'contain'
          }}
          onClick={() => {
            closeFunc();
          }}
        />
      </div>
      {imgList.map((image, index) => (
        <Image src={image} id={index + 1} key={image} description={description} />
      ))}
      <motion.div
        className="progress"
        style={{ scaleX }}
        onClick={() => {
          closeFunc();
        }}
      />
    </div>
  );
};

function Image({ src, id, description }: { src: string; id: number, description: (string | JSX.Element)[]}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="h-[100vh] flex justify-center items-center relative scroll-align  ">
      <div ref={ref} className="h-[80vh] max-w-[40vw]  relative overflow-hidden ">
        <img className="w-full h-full object-scale-down" src={src} />
      </div>
      <motion.h2 className=" text-4xl absolute w-[20vw] ml-[40vw]" style={{ y, color: "white" }}>
        {id>9 ?`#0${id}` :`#00${id}`}
        <p className=" text-lg">
        {description[id-1]}
        </p>
      </motion.h2>
    </div>
  );
}
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const homeDesc = [
  'By clicking at the top of the homepage, we can select "caretakers"',
  <p>You can view your caretakee data, that is stored locally in <i><b>Watermelon DB</b></i>. Information is efficiently shared across all views through the utilization of a <i><b>Context Provider</b></i>.</p>,
  'Seamlessly add or remove individuals from either category as needed',
  'Facilitate data sharing between users by initiating requests, which the other user can subsequently accept or reject',
  
  'Manipulating medical data resulting in a smoother graph representation',
  <p>Created a minimalistic bar graph using <i><b>Chartjs</b></i> to showcase the daily maximum, minimum, and average values with clarity and subtlety.</p>,
  'Ensure the x-axis labels adapt gracefully to varying screen sizes.',
  'Incorporated padding to the data, enhancing visibility and ensuring optimal data presentation within the graph.',
  <p>Efficiently retain and access <i><b>REST Api</b></i> data locally, ensuring its availability even when offline.</p>,
  <p>Developed both <i><b>Unit and Integration tests </b></i> to assess functionality and compatibility.</p>,
  'Confirmed cross-device compatibility across various Android and iOS smartphones.',
  <p>Displaying API responses by utilizing a <i><b>Modal Interface</b></i> </p>
]

const ecgDesc = [
  'Homepage that presents the choice of selecting  new ECG or past records.',
  <p>Ease of scanning <i><b>QR</b></i> code and searching patient.</p>,
  'Achieved a 40% reduction in data entry time by filling essential data',
  'Employing the Tricorg module to efficiently capture and manage egg-related data.',
  'Capturing ECG data, preserving it offline, and gracefully uploading it to the cloud.',
  <p> <i><b>MVVM architecture</b></i>, the app promotes code modularity and ease of maintenance.</p>,
  'Efficiently retrieves data from the repository, optimizing user experience by conserving bandwidth.'
]

const mnDesc = [
  <p>Retrieve a collection of memes from the <i><b>Firebase database.</b></i></p>,
  <p>A dynamic marketplace where users can explore and purchase a variety of items.</p>,
  'Designing a daily quiz experience, allowing users to attempt the quiz once per day and earn rewards for correct answer',
  'Fetch memes that are related or relevant.'
]
export default NewP;

