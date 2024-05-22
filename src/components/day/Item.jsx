import React from "react";

const Item = ({ item, handleChange }) => {
  let itemClass = "";
  if (item.done) itemClass += " done";
  if (item.late) itemClass += " due";

  return (
    <div className="item">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      <label className={itemClass} onClick={handleChange}>
        {item.text}
      </label>
      <span title="Snooza">💤</span>
      <span title="Ändra">✍️</span>
      <span title="Ta bort">🗑️</span>
    </div>
  );
};

export default Item;

// import React from "react";

// const Item = ({ item, handleChange }) => {
//   let itemClass = "";
//   if (item.done) itemClass += " done";
//   if (item.late) itemClass += " due";

//   return (
//     <div className="item">
//       <input type="checkbox" checked={item.done} onChange={handleChange} />
//       <label className={itemClass} onClick={handleChange}>
//         {item.text}
//       </label>
//       <span title="Snooza">💤</span>
//       <span title="Ändra">✍️</span>
//       <span title="Ta bort">🗑️</span>
//     </div>
//   );
// };

// export default Item;

// // import React from "react";

// // const Item = ({ item, handleChange }) => {
// //   let itemClass = "";
// //   if (item.done) itemClass += " done";
// //   if (item.late) itemClass += " due";

// //   return (
// //     <div className="item">
// //       <input type="checkbox" checked={item.done} onChange={handleChange} />
// //       <label className={itemClass} onClick={handleChange}>
// //         {item.text}
// //       </label>
// //       <span title="Snooza">💤</span>
// //       <span title="Ändra">✍️</span>
// //       <span title="Ta bort">🗑️</span>
// //     </div>
// //   );
// // };

// // export default Item;
