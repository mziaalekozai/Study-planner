import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrioList from "./PrioList";
import { useStore } from "../../data/store";

// Mock useStore
vi.mock("../../data/store", () => ({
  useStore: vi.fn(),
}));

describe("PrioList Component", () => {
  it("should display items from the store", () => {
    const mockTodos = [
      { id: 3, text: "Övning 1", done: false, late: true },
      { id: 4, text: "Repetera lektionen", done: false, late: false },
      { id: 6, text: "Distanslektion 9-16", done: false, late: false },
    ];
    useStore.mockReturnValue({ todos: mockTodos });

    render(<PrioList />);

    const filteredTodos = mockTodos.filter((t) => !t.done);
    filteredTodos.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });
});

// import React from "react";
// import PrioItem from "./PrioItem";
// import { useStore } from "../../data/store.js";

// const PrioList = () => {
//   const todos = useStore((state) => state.todos);
//   const items = todos.filter((t) => !t.done);

//   return (
//     <div className="prio-list">
//       <h2> Vad ska jag göra nu? </h2>
//       <div className="list-container">
//         <input type="search" placeholder="Filtrera uppgifter" />
//         <div className="prio-items">
//           {items.map((item, index) => (
//             <PrioItem key={item.id} item={item} num={index + 1} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrioList;

// // import PrioItem from "./PrioItem"
// // import { useStore } from '../../data/store.js'

// // const PrioList = () => {
// // 	const todos = useStore(state => state.todos)
// // 	const items = todos.filter(t => !t.done)

// // 	return (
// // 		<div className="prio-list">
// // 			<h2> Vad ska jag göra nu? </h2>
// // 			<div className="list-container">
// // 				<input type="search" placeholder="Filtrera uppgifter" />

// // 				<div className="prio-items">
// // 					{items.map((item, index) => (
// // 						<PrioItem key={item.id} item={item} num={index+1} />
// // 					))}
// // 				</div>

// // 			</div>
// // 		</div>
// // 	)
// // }
// // export default PrioList
