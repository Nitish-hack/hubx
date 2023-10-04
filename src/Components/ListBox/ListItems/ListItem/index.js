import React from "react";
import { Wrapper } from "./style";
function Index(props) {
  return (
    <Wrapper>
      <p style={{ textAlign: "left" }}>{props.item}</p>
      <p>{props.hist}</p>
    </Wrapper>
  );
}

export default Index;
