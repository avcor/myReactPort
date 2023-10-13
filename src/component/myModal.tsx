import { FC, useEffect } from "react";
import ReactDOM from "react-dom";

const MyModal: FC<{ children?: any }> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 h-[100vh] w-[100vw] z-30 bg-black/70 backdrop-blur-sm ">
        {/* <div className=" h-1/2 w-1/2 bg-green-500 m-24"></div> */}
        {children}
      </div>
    </>,
    document.querySelector(".myModal")!
  );
};

export default MyModal;
