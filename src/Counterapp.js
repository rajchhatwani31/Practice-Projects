import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
    console.log(counter);
  return (
    <div className="main-body">
        <div className="box" >
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
       <p className="gnrl">{counter}</p>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        </div>
    </div>
  );
}
