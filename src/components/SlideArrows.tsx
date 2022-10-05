import { useResponsive, View } from "app-studio";
import { ReactComponent as BackArrow } from "../../src/assets/svg/backArrow.svg";
import { ReactComponent as NextArrow } from "../../src/assets/svg/forwardArrow.svg";
import { Horizontal } from "../layout/layout";
import "../../src/stylesheet/slideArrow.scss";
import { useState } from "react";

export const SlideArrow = ({
  callback,
  listForm,
  ...props
}: {
  callback?: Function;
  listForm: Array<any>;
}) => {
  const { on } = useResponsive();
  const [value, setValue] = useState(0);

  if (callback) callback(value);

  return (
    <Horizontal
      className={"slideArrow-top"}
      justifyContent={value === 0 ? "flex-end" : "space-between"}
      {...props}
    >
      {value > 0 && (
        <BackArrow width={24} height={24} onClick={() => setValue(value - 1)} />
      )}
      {value > 0 && value < listForm.length - 1 && !on("mobile") && (
        <View fontSize={18}>
          {value + 1}/{listForm.length}
        </View>
      )}
      {value < listForm.length - 1 && (
        <NextArrow width={24} height={24} onClick={() => setValue(value + 1)} />
      )}
    </Horizontal>
  );
};
