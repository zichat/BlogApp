import * as React from "react";
import { FAB } from "@rneui/base";

const FabButton = ({title}) => {
  return (
    <FAB
      style={{
        width: "80%",
        right: -100,
        color: "#000000"
      }}
      color="#B2D1FF"
      size="large"
      overlayColor="#454545"
      title={title}
      icon={{ name: "add", color: "#000" }}
    />
  );
}

export default FabButton;