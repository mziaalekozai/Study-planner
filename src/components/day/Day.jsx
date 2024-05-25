import React, { useState } from "react";
import Item from "./Item";
import { useStore } from "../../data/store.js";

const Day = ({ dayName, dayShortName, items = [] }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  const toggleTodo = useStore((state) => state.toggleTodo);
  const removeTodo = useStore((state) => state.removeTodo);
  const editTodo = useStore((state) => state.editTodo);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleSaveClick = () => {
    addTodo({
      id: new Date().getTime(),
      text: newTask,
      done: false,
      late: false,
      day: dayShortName,
    });
    setIsAdding(false);
    setNewTask("");
  };

  return (
    <div className="day">
      <h2 data-cy="show-dayname">{dayName}</h2>
      {items.map((item) => (
        <Item
          data-cy="show-item"
          key={item.id}
          item={item}
          handleChange={() => toggleTodo(item.id)}
          handleRemove={() => removeTodo(item.id)}
          handleEdit={(newText) => editTodo(item.id, newText)}
        />
      ))}
      <div className="controls">
        <button data-cy="add-btn" onClick={handleAddClick}>
          Ny uppgift
        </button>
        {isAdding && (
          <div>
            <input
              data-cy="add-task-input"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button data-cy="save-task-btn" onClick={handleSaveClick}>
              Spara
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;

// import React, { useState } from "react";
// import Item from "./Item";
// import { useStore } from "../../data/store.js";

// const Day = ({ dayName, dayShortName, items = [] }) => {
//   const [isAdding, setIsAdding] = useState(false);
//   const [newTask, setNewTask] = useState("");
//   const addTodo = useStore((state) => state.addTodo);

//   const toggleTodo = useStore((state) => state.toggleTodo);
//   const removeTodo = useStore((state) => state.removeTodo);
//   const editTodo = useStore((state) => state.editTodo);

//   const handleAddClick = () => {
//     setIsAdding(true);
//   };

//   const handleSaveClick = () => {
//     addTodo({
//       id: new Date().getTime(),
//       text: newTask,
//       done: false,
//       late: false,
//       day: dayShortName,
//     });
//     setIsAdding(false);
//     setNewTask("");
//   };

//   return (
//     <div className="day">
//       <h2 data-cy="show-dayname">{dayName}</h2>
//       {items.map((item) => (
//         <Item
//           data-cy="show-item"
//           key={item.id}
//           item={item}
//           handleChange={() => toggleTodo(item.id)}
//           handleRemove={() => removeTodo(item.id)}
//           handleEdit={(newText) => editTodo(item.id, newText)}
//         />
//       ))}
//       <div className="controls">
//         <button data-cy="add-btn" onClick={handleAddClick}>
//           {" "}
//           Ny uppgift{" "}
//         </button>
//         {isAdding && (
//           <div>
//             <input
//               data-cy="add-task-input"
//               type="text"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//             />
//             <button data-cy="save-task-btn" onClick={handleSaveClick}>
//               Spara
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Day;

// // import React, { useState } from "react";
// // import Item from "./Item";
// // import { useStore } from "../../data/store.js";

// // const Day = ({ dayName, items = [] }) => {
// //   const [newTask, setNewTask] = useState("");
// //   const [showInput, setShowInput] = useState(false);
// //   const addTodo = useStore((state) => state.addTodo);
// //   const toggleTodo = useStore((state) => state.toggleTodo);
// //   const removeTodo = useStore((state) => state.removeTodo);
// //   const editTodo = useStore((state) => state.editTodo);

// //   const handleChange = (id) => {
// //     console.log(`Item with id ${id} was changed`);
// //     toggleTodo(id);
// //   };

// //   const handleRemove = (id) => {
// //     console.log(`Removing item with id ${id}`);
// //     removeTodo(id);
// //   };

// //   const handleEdit = (id, newText) => {
// //     console.log(`Editing item with id ${id} to "${newText}"`);
// //     editTodo(id, newText);
// //   };

// //   const handleAddTask = () => {
// //     const newId = Math.max(...items.map((item) => item.id)) + 1;
// //     addTodo({
// //       id: newId,
// //       day: dayName.toLowerCase(),
// //       text: newTask,
// //       done: false,
// //       late: false,
// //     });
// //     setNewTask("");
// //     setShowInput(false);
// //   };

// //   return (
// //     <div className="day">
// //       <h2 data-cy="show-dayname">{dayName}</h2>
// //       {!showInput &&
// //         items.map((item) => (
// //           <Item
// //             data-cy="show-item"
// //             key={item.id}
// //             item={item}
// //             handleChange={() => handleChange(item.id)}
// //             handleRemove={() => handleRemove(item.id)}
// //             handleEdit={(newText) => handleEdit(item.id, newText)}
// //           />
// //         ))}
// //       <div className="controls">
// //         {!showInput && (
// //           <button data-cy="add-btn" onClick={() => setShowInput(true)}>
// //             Ny uppgift
// //           </button>
// //         )}
// //         {showInput && (
// //           <div>
// //             <input
// //               data-cy="add-task-input"
// //               type="text"
// //               value={newTask}
// //               onChange={(e) => setNewTask(e.target.value)}
// //             />
// //             <button data-cy="save-task-btn" onClick={handleAddTask}>
// //               Lägg till
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Day;

// // // import React from "react";
// // // import Item from "./Item";
// // // import { useStore } from "../../data/store.js";

// // // const Day = ({ dayName, items = [] }) => {
// // //   const toggleTodo = useStore((state) => state.toggleTodo);
// // //   const removeTodo = useStore((state) => state.removeTodo);
// // //   const editTodo = useStore((state) => state.editTodo);

// // //   const handleChange = (id) => {
// // //     console.log(`Item with id ${id} was changed`);
// // //     toggleTodo(id);
// // //   };

// // //   const handleRemove = (id) => {
// // //     console.log(`Removing item with id ${id}`);
// // //     removeTodo(id);
// // //   };

// // //   const handleEdit = (id, newText) => {
// // //     console.log(`Editing item with id ${id} to "${newText}"`);
// // //     editTodo(id, newText);
// // //   };

// // //   return (
// // //     <div className="day">
// // //       <h2 data-cy="show-dayname">{dayName}</h2>
// // //       {items.map((item) => (
// // //         <Item
// // //           data-cy="show-item"
// // //           key={item.id}
// // //           item={item}
// // //           handleChange={() => handleChange(item.id)}
// // //           handleRemove={() => handleRemove(item.id)}
// // //           handleEdit={(newText) => handleEdit(item.id, newText)}
// // //         />
// // //       ))}
// // //       <div className="controls">
// // //         <button data-cy="add-btn"> Ny uppgift </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Day;

// // // // import Item from "./Item";
// // // // import { useStore } from "../../data/store.js";
// // // // // gör om använd zustand hämta från store
// // // // const Day = ({ dayName, items = [], onChange }) => {
// // // //   const removeTodo = useStore((state) => state.removeTodo);
// // // //   const editTodo = useStore((state) => state.editTodo);

// // // //   const handleChange = (id) => {
// // // //     console.log(`Item with id ${id} was changed`);
// // // //     if (onChange) {
// // // //       onChange(id);
// // // //     }
// // // //   };

// // // //   const handleRemove = (id) => {
// // // //     console.log(`Removing item with id ${id}`);
// // // //     removeTodo(id);
// // // //   };

// // // //   const handleEdit = (id, newText) => {
// // // //     console.log(`Editing item with id ${id} to "${newText}"`);
// // // //     editTodo(id, newText);
// // // //   };

// // // //   return (
// // // //     <div className="day">
// // // //       <h2 data-cy="show-dayname">{dayName}</h2>
// // // //       {items.map((item) => (
// // // //         <Item
// // // //           data-cy="show-item"
// // // //           key={item.id}
// // // //           item={item}
// // // //           handleChange={() => handleChange(item.id)}
// // // //           handleRemove={() => handleRemove(item.id)}
// // // //           handleEdit={handleEdit}
// // // //         />
// // // //       ))}
// // // //       <div className="controls">
// // // //         <button data-cy="add-btn"> Ny uppgift </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Day;
