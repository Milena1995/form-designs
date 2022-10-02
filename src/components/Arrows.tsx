import { useResponsive, View } from "app-studio";
import { ReactComponent as BackArrow } from "../../src/assets/svg/backArrow.svg";
import { ReactComponent as NextArrow } from "../../src/assets/svg/forwardArrow.svg";
import { Horizontal } from "../layout/layout";
import "../../src/stylesheet/home.scss";

export const SlideArrow = ({ ...props }) => {
  const { on } = useResponsive();
  return (
    <Horizontal
      className={`slideArrow ${on("mobile") ? "center-arrow" : "top-arrow"}`}
      {...props}
    >
      <BackArrow width={24} height={24} />
      {!on("mobile") && <View fontSize={18}>1/20</View>}
      <NextArrow width={24} height={24} />
    </Horizontal>
  );
};
