import treeLayer1 from "../assets/trees/treeLayer1.png";
import treeLayer2 from "../assets/trees/treeLayer2.png";
import treeLayer3 from "../assets/trees/treeLayer3.png";
import { twMerge } from "tailwind-merge";

const layers = [treeLayer1, treeLayer2, treeLayer3];
export const Tree = ({
  numberLayer,
  className,
}: {
  numberLayer: 0 | 1 | 2;
  className: string;
}) => {
  return (
    <img
      src={layers[numberLayer].src}
      className={twMerge("absolute h-full object-contain min-h-min", className)}
      alt=""
    />
  );
};
