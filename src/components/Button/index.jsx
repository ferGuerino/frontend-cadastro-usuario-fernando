import React from "react";
import { DivBtn } from "./styles";

function Buttton({ children }) {
  return (
    <DivBtn>
      <button type="submit">{children}</button>
    </DivBtn>
  );
}

export default Buttton;
