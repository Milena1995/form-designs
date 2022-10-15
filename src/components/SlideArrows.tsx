import { useResponsive, View } from "app-studio";
import { ReactComponent as BackArrow } from "../../src/assets/svg/backArrow.svg";
import { ReactComponent as NextArrow } from "../../src/assets/svg/forwardArrow.svg";
import { Horizontal } from "../layout/layout";
import "../../src/stylesheet/slideArrow.scss";
import { useEffect, useState } from "react";

export const SlideArrow = ({
  listForm,
  ...props
}: {
  listForm: Array<any>;
}) => {
  const { on } = useResponsive();
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log({ value });
    localStorage.setItem("@index", `${value}`);
  }, [value]);

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
