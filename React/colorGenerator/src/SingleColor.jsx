import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  async function copyToClipboard(text) {
    // console.log(text);
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
      toast.success("copied to clipboard", { autoClose: 1000 });
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  }

  // console.log(color);
  return (
    <div
      className="item"
      style={{ background: "#" + color.hex }}
      onClick={() => copyToClipboard(`#${color.hex}`)}
    >
      <p className={index > 10 ? "dark" : ""}>{color.weight}%</p>
      <input
        type="text"
        value={"#" + color.hex}
        maxLength={8}
        className={index > 10 ? "dark" : ""}
      />
    </div>
  );
}

export default SingleColor;
