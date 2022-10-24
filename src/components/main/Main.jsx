import data from "../data/data";
import { useState } from "react";
import Employee from "./Employee";

const Main = () => {
  // const data = bigData;
  // const [data, setData] = useState(bigData);
  const [person, setPerson] = useState(data.slice(0, 5));
  let [number, setNumber] = useState(0);

  const handlePrev = () => {
    let changedNumber = number - 5;
    changedNumber < 0 && (changedNumber = data.length - 5);
    setNumber(changedNumber);
    setPerson(data.slice(changedNumber, changedNumber + 5));
  };

  // const handlePrev = () => {
  //   number -= 5;
  //   number < 0 && (number = data.length - 5);
  //   setNumber(number);
  //   setPerson(data.slice(number, number + 5));
  // };

  // const handleNext = () => {
  //   let changedNumber = number + 5;
  //   changedNumber > data.length - 1 && (changedNumber = 0);
  //   setNumber(changedNumber);
  //   setPerson(data.slice(changedNumber, changedNumber + 5));
  // };

  const handleNext = () => {
    number += 5;
    number > data.length - 1 && (number = 0);
    setNumber(number);
    setPerson(data.slice(number, number + 5));
  };

  return (
    <div className="container">
      <h1 className="title">Instructor List</h1>
      <p>
        (Employees {number + 1} to {number + 5})
      </p>
      <Employee data={person} />
      <div className="btns">
        <button className="btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
