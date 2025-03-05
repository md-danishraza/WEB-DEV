import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
function Form({ updateColorList }) {
  const [color, setColor] = useState("#ff0000");
  const handleUpdate = (e) => {
    const value = e.target.value;
    setColor(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.length < 7 || color.length > 7) {
      // alert(
      //   "The format is '#rrggbb' where rr, gg, bb are two-digit hexadecimal numbers."
      // );
      toast.error("error message", { autoClose: 1000 });
      return;
    }
    updateColorList(color);

    toast.success("awesome", { autoClose: 1000 });
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <form action="#" onSubmit={handleSubmit}>
        <p>Color Generator</p>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleUpdate}
        />
        <input
          type="text"
          name="colorvalue"
          id="colorvalue"
          value={color}
          onChange={handleUpdate}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
