import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logoWhite from "../../src/assets/logo_white.png";
import logo from "../../src/assets/logo.png";

const IntroEle: FC = () => {
  const animateLogo = useAnimation();

  useEffect(()=>{
    setTimeout(() => {
      animateLogo.start({
        opacity: [0, 0, 0, 0, 1],
        transition: {
          duration: 2,
        },
      });
    }, 0);
  
    setTimeout(() => {
      animateLogo.start({
        opacity: [1, 0],
        transition: {
          duration: 1.5,
        },
      });
    }, 2000);
  },[])

  return (
    <div
      style={{
        backgroundColor: "#1e2125",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          position: "absolute",
          placeItems: "center",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img style={{ height: 20, width: 40 }} src={logo} />
      </div>

      <motion.div
        style={{
          backgroundColor: "black",
          overflow: "hidden",
          height: 10,
          width: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{
          x: ["50vw", "50vw", "50vw", "0vw"],
          height: ["0vh", "0vh", "100vh", "100vh"],
          width: ["0.2vw", "0.2vw", "0.2vw", "100vw"],
        }}
        transition={{ duration: 2 }}
      >
        <motion.div
          style={{
            position: "absolute",
            height: 20,
            width: 40,
          }}
          animate={animateLogo}
          transition={{ duration: 2 }}
          exit={{
            height:0
          }}
        >
          <img src={logoWhite} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroEle;
