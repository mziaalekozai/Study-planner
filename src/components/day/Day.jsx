import React from "react";
import Item from "./Item";
import { useStore } from "../../data/store.js";

const Day = ({ dayName, items = [], onChange }) => {
  const removeTodo = useStore((state) => state.removeTodo);
  const editTodo = useStore((state) => state.editTodo);

  const handleChange = (id) => {
    console.log(`Item with id ${id} was changed`);
    if (onChange) {
      onChange(id);
    }
  };

  const handleRemove = (id) => {
    console.log(`Removing item with id ${id}`);
    removeTodo(id);
  };

  const handleEdit = (id, newText) => {
    console.log(`Editing item with id ${id} to "${newText}"`);
    editTodo(id, newText);
  };

  return (
    <div className="day">
      <h2 data-cy="show-dayname">{dayName}</h2>
      {items.map((item) => (
        <Item
          data-cy="show-item"
          key={item.id}
          item={item}
          handleChange={() => handleChange(item.id)}
          handleRemove={() => handleRemove(item.id)}
          handleEdit={handleEdit}
        />
      ))}
      <div className="controls">
        <button data-cy="add-btn"> Ny uppgift </button>
      </div>
    </div>
  );
};

export default Day;

// import React from "react";
// import Item from "./Item";
// import { useStore } from "../../data/store.js";

// const Day = ({ dayName, items = [], onChange }) => {
//   const removeTodo = useStore((state) => state.removeTodo);

//   const handleChange = (id) => {
//     console.log(`Item with id ${id} was changed`);
//     if (onChange) {
//       onChange(id);
//     }
//   };

//   const handleRemove = (id) => {
//     console.log(`Removing item with id ${id}`);
//     removeTodo(id);
//   };

//   return (
//     <div className="day">
//       <h2 data-cy="show-dayname">{dayName}</h2>
//       {items.map((item) => (
//         <Item
//           data-cy="show-item"
//           key={item.id}
//           item={item}
//           handleChange={() => handleChange(item.id)}
//           handleRemove={() => handleRemove(item.id)}
//         />
//       ))}
//       <div className="controls">
//         <button data-cy="add-btn"> Ny uppgift </button>
//       </div>
//     </div>
//   );
// };

// export default Day;

// // import React from "react";
// // import Item from "./Item";

// // const Day = ({ dayName, items = [], onChange }) => {
// //   const handleChange = (id) => {
// //     console.log(`Item with id ${id} was changed`);
// //     if (onChange) {
// //       onChange(id);
// //     }
// //   };

// //   return (
// //     <div className="day">
// //       <h2 data-cy="show-dayname">{dayName}</h2>
// //       {items.map((item) => (
// //         <Item
// //           data-cy="show-item"
// //           key={item.id}
// //           item={item}
// //           handleChange={() => handleChange(item.id)}
// //         />
// //       ))}
// //       <div className="controls">
// //         <button data-cy="add-btn"> Ny uppgift </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Day;

// // // import React from "react";
// // // import Item from "./Item";

// // // const Day = ({ dayName, items = [], onChange }) => {
// // //   const handleChange = (id) => {
// // //     console.log(`Item with id ${id} was changed`);
// // //     if (onChange) {
// // //       onChange(id);
// // //     }
// // //   };

// // //   return (
// // //     <div className="day">
// // //       <h2>{dayName}</h2>
// // //       {items.map((item) => (
// // //         <Item
// // //           key={item.id}
// // //           item={item}
// // //           handleChange={() => handleChange(item.id)}
// // //         />
// // //       ))}
// // //       <div className="controls">
// // //         <button> Ny uppgift </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Day;

// // // // import React from "react";
// // // // import Item from "./Item";

// // // // const Day = ({ dayName, items = [], onChange }) => {
// // // //   const handleChange = (id) => {
// // // //     console.log(`Item with id ${id} was changed`);
// // // //     if (onChange) {
// // // //       onChange(id);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="day">
// // // //       <h2>{dayName}</h2>
// // // //       {items.map((item) => (
// // // //         <Item
// // // //           key={item.id}
// // // //           item={item}
// // // //           handleChange={() => handleChange(item.id)}
// // // //         />
// // // //       ))}
// // // //       <div className="controls">
// // // //         <button> Ny uppgift </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Day;
