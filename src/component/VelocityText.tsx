import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { FC, useRef } from "react";
import "../../Parrallax.css";
import { wrap } from "@motionone/utils";

const VelocityText: FC = () => {
  return (
    <div className="pt-[10vh] pb-[30vh] ">
      <ParallaxText baseVelocity={-5}>{"Project Gallery"}</ParallaxText>
    </div>
  );
};

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const ParallaxText: FC<ParallaxProps> = ({
  children,
  baseVelocity = 100,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller font-Bit" style={{ x }}>
        <span>&nbsp;&nbsp;{children}&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;{children}&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;{children}&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;{children}&nbsp;&nbsp;</span>
      </motion.div>
    </div>
  );
};

export default VelocityText;
