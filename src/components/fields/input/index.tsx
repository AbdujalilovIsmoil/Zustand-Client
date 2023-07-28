import { memo, FC } from "react";
import { inputInterface } from "../../../ts/interfaces";

const index: FC<inputInterface> = memo(({ type }): JSX.Element => {
  return (
    <>
      <input type={type} />
    </>
  );
});

export default index;
