import React, { useState } from "react";
import { useStore } from "../../data/store.js";

const Item = ({ item, handleChange, handleRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);
  const editTodo = useStore((state) => state.editTodo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTodo(item.id, newText);
    setIsEditing(false);
  };

  let itemClass = "";
  if (item.done) itemClass += " done";
  if (item.late) itemClass += " due";

  return (
    <div className="item" data-cy="item">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          data-cy="edit-input"
        />
      ) : (
        <label className={itemClass} data-cy="item-text">
          {item.text}
        </label>
      )}
      {isEditing ? (
        <button onClick={handleSaveClick} data-cy="save-btn">
          Spara
        </button>
      ) : (
        <span title="Ändra" onClick={handleEditClick} data-cy="edit-btn">
          ✍️
        </span>
      )}
      <span title="Ta bort" onClick={handleRemove} data-cy="remove-btn">
        🗑️
      </span>
    </div>
  );
};

export default Item;

// import { useState } from "react";

// const Item = ({ item, handleChange, handleRemove, handleEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newText, setNewText] = useState(item.text);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     handleEdit(item.id, newText);
//     setIsEditing(false);
//   };

//   let itemClass = "";
//   if (item.done) itemClass += " done";
//   if (item.late) itemClass += " due";

//   return (
//     <div className="item" data-cy="item">
//       <input type="checkbox" checked={item.done} onChange={handleChange} />
//       {isEditing ? (
//         <input
//           type="text"
//           value={newText}
//           onChange={(e) => setNewText(e.target.value)}
//           data-cy="edit-input"
//         />
//       ) : (
//         <label className={itemClass} data-cy="item-text">
//           {item.text}
//         </label>
//       )}
//       {isEditing ? (
//         <button onClick={handleSaveClick} data-cy="save-btn">
//           Spara
//         </button>
//       ) : (
//         <span title="Ändra" onClick={handleEditClick} data-cy="edit-btn">
//           ✍️
//         </span>
//       )}
//       <span title="Ta bort" onClick={handleRemove} data-cy="remove-btn">
//         🗑️
//       </span>
//     </div>
//   );
// };

// export default Item;

// // import React from "react";

// // const Item = ({ item, handleChange, handleRemove }) => {
// //   let itemClass = "";
// //   if (item.done) itemClass += " done";
// //   if (item.late) itemClass += " due";

// //   return (
// //     <div className="item" data-cy="item">
// //       <input type="checkbox" checked={item.done} onChange={handleChange} />
// //       <label className={itemClass} onClick={handleChange} data-cy="item-text">
// //         {item.text}
// //       </label>
// //       <span title="Ta bort" onClick={handleRemove} data-cy="remove-btn">
// //         🗑️
// //       </span>
// //     </div>
// //   );
// // };

// // export default Item;

// // // import React from "react";

// // // const Item = ({ item, handleChange, handleRemove }) => {
// // //   let itemClass = "";
// // //   if (item.done) itemClass += "done";
// // //   if (item.late) itemClass += "due";

// // //   return (
// // //     <div className="item" data-cy="item">
// // //       <input type="checkbox" checked={item.done} onChange={handleChange} />
// // //       <label className={itemClass} onClick={handleChange} data-cy="item-text">
// // //         {item.text}
// // //       </label>
// // //       <span title="Ta bort" onClick={handleRemove} data-cy="remove-btn">
// // //         🗑️
// // //       </span>
// // //     </div>
// // //   );
// // // };

// // // export default Item;

// // // // import React from "react";

// // // // const Item = ({ item, handleChange }) => {
// // // //   let itemClass = "";
// // // //   if (item.done) itemClass += " done";
// // // //   if (item.late) itemClass += " due";

// // // //   return (
// // // //     <div className="item">
// // // //       <input type="checkbox" checked={item.done} onChange={handleChange} />
// // // //       <label className={itemClass} onClick={handleChange}>
// // // //         {item.text}
// // // //       </label>
// // // //       <span title="Snooza">💤</span>
// // // //       <span title="Ändra">✍️</span>
// // // //       <span title="Ta bort">🗑️</span>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Item;

// // // // // import React from "react";

// // // // // const Item = ({ item, handleChange }) => {
// // // // //   let itemClass = "";
// // // // //   if (item.done) itemClass += " done";
// // // // //   if (item.late) itemClass += " due";

// // // // //   return (
// // // // //     <div className="item">
// // // // //       <input type="checkbox" checked={item.done} onChange={handleChange} />
// // // // //       <label className={itemClass} onClick={handleChange}>
// // // // //         {item.text}
// // // // //       </label>
// // // // //       <span title="Snooza">💤</span>
// // // // //       <span title="Ändra">✍️</span>
// // // // //       <span title="Ta bort">🗑️</span>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Item;

// // // // // // import React from "react";

// // // // // // const Item = ({ item, handleChange }) => {
// // // // // //   let itemClass = "";
// // // // // //   if (item.done) itemClass += " done";
// // // // // //   if (item.late) itemClass += " due";

// // // // // //   return (
// // // // // //     <div className="item">
// // // // // //       <input type="checkbox" checked={item.done} onChange={handleChange} />
// // // // // //       <label className={itemClass} onClick={handleChange}>
// // // // // //         {item.text}
// // // // // //       </label>
// // // // // //       <span title="Snooza">💤</span>
// // // // // //       <span title="Ändra">✍️</span>
// // // // // //       <span title="Ta bort">🗑️</span>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Item;
