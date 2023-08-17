import { motion } from "framer-motion";
import { FC, useRef } from "react";

const ParallaxGallery: FC<{ id: string }> = ({ id }) => {
    let path = 'home/home_mock';
    let list:number[] = [];
    
    if(id === 'home'){
        path = 'home/home_mock';
        list = [0,1,2,3,4,5,6,7,8,]
    }else if (id === 'ecg'){
        path = 'ecg/ecg_mock';
        list = [0,1,2,3,4,5,6]
    }else{
        path = 'memay/mn';
        list = [0,1,2,3]
    }

    const ref = useRef<HTMLDivElement | null>(null);
  
    return (
      <div ref={ref} className="h-[100%] w-[100%] overflow-y-scroll ">
        {list.map((image) => (
          <section
            className=" relative h-[100%] flex justify-center items-center "
            style={{

            }}
          >
              <img style={{objectFit: 'scale-down' , height:'100%'}} src={`../../src/assets/${path+image}.png`} />
            <motion.h2 className=" absolute bg-white  text-green-400">
              {`#00${image}`}
            </motion.h2>
          </section>
        ))}
      </div>
    );
  };

  export default ParallaxGallery