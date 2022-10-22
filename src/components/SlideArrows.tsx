import { View } from "app-studio";
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
  const slideIndex = useSelector((state: any) => state.slide.value);
  const dispatch = useDispatch();

  return (
    <Horizontal className={style.slideArrow_top} {...props}>
      {slideIndex > 0 && (
        <BackArrow
          width={24}
          height={24}
          onClick={() => dispatch(decrement())}
        />
      )}
      <View fontSize={18} margin={"auto"}>
        {slideIndex + 1}/{listForm.length}
      </View>
      {slideIndex < listForm.length - 1 && (
        <View>
          <NextArrow
            width={24}
            height={24}
            onClick={() => dispatch(increment())}
          />
        </View>
      )}
    </Horizontal>
  );
};
