import React from "react";
import Item from "./Item";

const Day = ({ dayName, items = [], onChange }) => {
  const handleChange = (id) => {
    console.log(`Item with id ${id} was changed`);
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div className="day">
      <h2>{dayName}</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleChange={() => handleChange(item.id)}
        />
      ))}
      <div className="controls">
        <button> Ny uppgift </button>
      </div>
    </div>
  );
};

export default Day;
