import React, { useRef, useState, useEffect } from "react";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";
import logo from "../assets/logo.png";
import ornament from "../assets/ornament.png";
function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  useEffect(() => {
    checkWin();
  }, [data]);

  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();
  const box7 = useRef();
  const box8 = useRef();
  const box9 = useRef();

  const boxRefs = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    // if box is already filled
    if (data[num] !== "") return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}' />`;
      // adding to array
      setData((prevData) => {
        const newData = [...prevData];
        newData[num] = "x";
        return newData;
      });
      // decreasing the count
      setCount(count + 1);
    } else {
      // if count is odd
      e.target.innerHTML = `<img src='${circle}' />`;
      // adding to array
      setData((prevData) => {
        const newData = [...prevData];
        newData[num] = "o";
        return newData;
      });
      // decreasing the count
      setCount(count + 1);
    }
  };
  const reset = () => {
    setCount(0);
    setLock(false);
    setWinner(null); // Reset the winner state
    for (let i = 0; i < data.length; i++) {
      data[i] = ""; // Properly reset the data array
    }

    // clearing the boxes image
    boxRefs.map((box) => {
      box.current.innerHTML = "";
    });
  };

  const won = (player) => {
    console.log("winner ", player);
    setLock(true);
    setWinner(player);
  };

  const checkWin = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        // executing with winner
        won(data[a]);
        break;
      }
    }
  };

  return (
    <div className="container">
      <img src={ornament} className={lock ? "ornament active" : "ornament"} />
      <img src={logo} alt="" id="logo" />
      {count === 9 && !lock && <h1>Match Tie !!!</h1>}
      {lock && (
        <h1 className="title">
          <img src={winner == "x" ? cross : circle} alt="" /> is Winner
        </h1>
      )}
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)} ref={box1}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)} ref={box2}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)} ref={box3}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)} ref={box4}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)} ref={box5}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)} ref={box6}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)} ref={box7}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)} ref={box8}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)} ref={box9}>
            {" "}
          </div>
        </div>
      </div>

      <button className="button-54" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
