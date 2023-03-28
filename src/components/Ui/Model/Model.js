import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import BackDrop from "../BackDrop/BackDrop";
import "./Model.css";

const Model = ({ children, show,closeBackdropHandler }) => {
  return (
    <Wrapper>
      <BackDrop show={show} closeBackdropHandler={closeBackdropHandler}/>
      <div
        className="model"
        style={{
          transform: show
            ? "translateY(0)"
            : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Wrapper>
  );
};

export default Model;
