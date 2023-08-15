import { FC } from "react";
import NewP from "./NewP";
import { WORKS } from "../Constants";

type props = {
  close: () => void;
};


const Modal: FC<props> = ({ close }) => {
  return (
    <NewP/>
  );
};

export default Modal;
