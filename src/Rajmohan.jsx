import React, { Component } from "react";
import "./styles.css";
import classNames from "classnames"; // or classnames
import Aajish from "./Aajish";

const Rajmohan = (props) => {
  const rajk = {
    fontSize: "20px",
    color: "red"
  };
  return (
    <React.Fragment>
      <div
        className={classNames("message rajk olk", {
          active: props.fname === "active",
          deactive: props.fname === "deactive"
        })}
      >
        Example Text {props.fname} Example Text {props.lname}
        <div style={rajk}>hi</div>
        <div className="active">hi</div>
        <Aajish {...props} />
      </div>

      {props.lname === "sel" && <div>test name</div>}
    </React.Fragment>
  );
};

export default Rajmohan;
