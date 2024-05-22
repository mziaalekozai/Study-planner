import React from "react";
import Day from "./day/Day";
import { todos } from "../data/data"; // Kontrollera att denna sökväg är korrekt

const WeekDays = () => {
  const daysOfWeek = [
    { name: "Måndag", shortName: "må" },
    { name: "Tisdag", shortName: "ti" },
    { name: "Onsdag", shortName: "on" },
    { name: "Torsdag", shortName: "to" },
    { name: "Fredag", shortName: "fr" },
    { name: "Lördag", shortName: "lö" },
    { name: "Söndag", shortName: "sö" },
  ];

  return (
    <div>
      {daysOfWeek.map((day) => {
        const dayItems = todos.filter((todo) => todo.day === day.shortName);
        return <Day key={day.name} dayName={day.name} items={dayItems} />;
      })}
    </div>
  );
};

export default WeekDays;

// import React from "react";
// import Day from "./day/Day";
// import { todos } from "../data";

// const WeekDays = () => {
//   const daysOfWeek = [
//     { name: "Måndag", shortName: "må" },
//     { name: "Tisdag", shortName: "ti" },
//     { name: "Onsdag", shortName: "on" },
//     { name: "Torsdag", shortName: "to" },
//     { name: "Fredag", shortName: "fr" },
//     { name: "Lördag", shortName: "lö" },
//     { name: "Söndag", shortName: "sö" },
//   ];

//   return (
//     <div>
//       {daysOfWeek.map((day) => {
//         const dayItems = todos.filter((todo) => todo.day === day.shortName);
//         return <Day key={day.name} dayName={day.name} items={dayItems} />;
//       })}
//     </div>
//   );
// };

// export default WeekDays;

// // import React from "react";
// // import Day from "./day/Day";

// // const WeekDays = () => {
// //   const daysOfWeek = [
// //     { name: "Måndag", items: [] },
// //     { name: "Tisdag", items: [] },
// //     { name: "Onsdag", items: [] },
// //     { name: "Torsdag", items: [] },
// //     { name: "Fredag", items: [] },
// //     { name: "Lördag", items: [] },
// //     { name: "Söndag", items: [] },
// //   ];

// //   return (
// //     <div>
// //       {daysOfWeek.map((day) => (
// //         <Day key={day.name} dayName={day.name} items={day.items} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default WeekDays;
