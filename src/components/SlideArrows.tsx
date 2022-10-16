import { useResponsive, View } from "app-studio";
import { ReactComponent as BackArrow } from "../../src/assets/svg/backArrow.svg";
import { ReactComponent as NextArrow } from "../../src/assets/svg/forwardArrow.svg";
import { Horizontal } from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../models/SlideModel";

import style from "../../src/stylesheet/slideArrow.module.scss";

export const SlideArrow = ({
  listForm,
  ...props
}: {
  listForm: Array<any>;
}) => {
  const { on } = useResponsive();
  const value = useSelector((state: any) => state.slide.value);
  const dispatch = useDispatch();

  return (
    <Horizontal
      className={style.slideArrow_top}
      justifyContent={value === 0 ? "flex-end" : "space-between"}
      {...props}
    >
      {value > 0 && (
        <BackArrow
          width={24}
          height={24}
          onClick={() => dispatch(decrement())}
        />
      )}
      {value > 0 && value < listForm.length - 1 && !on("mobile") && (
        <View fontSize={18}>
          {value + 1}/{listForm.length}
        </View>
      )}
      {value < listForm.length - 1 && (
        <NextArrow
          width={24}
          height={24}
          onClick={() => dispatch(increment())}
        />
      )}
    </Horizontal>
  );
};
