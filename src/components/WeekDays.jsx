import React from "react";
import Day from "./day/Day";

const WeekDays = () => {
  const daysOfWeek = [
    { name: "Måndag", items: [] },
    { name: "Tisdag", items: [] },
    { name: "Onsdag", items: [] },
    { name: "Torsdag", items: [] },
    { name: "Fredag", items: [] },
    { name: "Lördag", items: [] },
    { name: "Söndag", items: [] },
  ];

  return (
    <div>
      {daysOfWeek.map((day) => (
        <Day key={day.name} dayName={day.name} items={day.items} />
      ))}
    </div>
  );
};

export default WeekDays;
