import { memo, FC } from "react";
import { buttonInterface } from "../../../ts/interfaces";

const index: FC<buttonInterface> = memo(
  ({ children, type, onClick = () => {} }): JSX.Element => {
    return (
      <>
        <button type={type} onClick={onClick}>
          {children}
        </button>
      </>
    );
  }
);

export default index;
