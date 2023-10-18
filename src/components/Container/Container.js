import React from "react";
import style from "./style.module.css";

const Container = (props) => {
  return (
    <div style={props.style} className={style.container}>
      {props.children}
    </div>
  );
};

export default Container;
