import React from "react";

const Employee = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((person, index) => {
        const { id, name, age, image, email } = person;
        return (
          <div key={index} className="card">
            <div className="card-image">
              <img src={image} alt={id} />
            </div>
            <div className="card-info">
              <h2>{name}</h2>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
