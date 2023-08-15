import Lottie from "lottie-react";
import { FC } from "react";
import MobileAnim from "../assets/mobile.json";
import { astranaut, hubble_background } from "../ImageExporter";

const PersonalInfo:FC = () =>{
    return(
        <div className= {"grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 h-[100vh] w-[100vw] text-white" + ``} >
            <div className="row-span-1 flex flex-col z-30">
              <div className="flex-1">
              <div className=" font-Halimun text-6xl mt-[10%] w-fit px-12">Abhishek</div>
              <div className="font-Halimun text-6xl mt-10 md:ml-[40%] ml-16">Verma</div>
              </div>

              <div className="flex-1">
              <p className="flex flex-col my-[10%] mx-10">
                <span className=" font-Montserrat font-semibold text-2xl ">
                  App Developer
                </span>
                <span className=" font-Montserrat mt-5">
                  Hello! I am a React Native and Android developer who loves
                  building high-quality mobile apps. I focus on creating
                  scalable, user-friendly apps with great UI/UX design and
                  efficient code. Let's work together to bring your ideas to
                  life!
                </span>
              </p>
              </div>              
            </div>
            
            {/* <div className="row-span-1 bg-green-100 "> */}
            <Lottie
                className="self-center w-[75%] justify-self-center"
                animationData={MobileAnim}
              ></Lottie>
            {/* <img className="self-center w-[100%] h-[100%] justify-self-center object-scale-down"
            src={astranaut}>
            </img> */}
            {/* </div> */}
        </div>
    )
}

export default PersonalInfo;