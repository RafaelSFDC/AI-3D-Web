import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

function CustomButton({ type, title, customStyles, handeClick }) {
  const snape = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snape.color,
        color: "#FFF",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handeClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
