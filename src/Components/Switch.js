import React from "react";

export default function Switch(props) {
  return (
    <div>
      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width:${props.Width};
            height:${props.Height};
            margin:${props.margin}
          }

          /* Hide default HTML checkbox */
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          /* The slider */
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${props.backgroundColor};
            -webkit-transition: .4s;
            transition: .4s;
          }

          .slider:before {
            position: absolute;
            content: "";
            height:${props.toggleSize};
            width: ${props.toggleSize};
            margin: 2px;
            background-color: ${props.toggleColor};
            -webkit-transition: .4s;
            transition: .4s;
          }

          input:checked + .slider {
            background-color: ${props.colorOnTrue};
          }

          input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(${props.movement});
            -ms-transform: translateX(${props.movement});
            transform: translateX(${props.movement});
          }

          /* Rounded sliders */
          .slider.round {
            border-radius: ${props.containerRadius};
          }

          .slider.round:before {
            border-radius: ${props.toggleRadius};
          }
        `}
      </style>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
Switch.defaultProps = {
  Width: "35px",
  Height: "14px",
  toggleSize: "10px",
  toggleColor: "white",
  colorOnTrue: "black",
  backgroundColor: "grey",
  toggleRadius: "10px",
  containerRadius: "30px",
  movement: "20px",
  margin: "10px",
};
