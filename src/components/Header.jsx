import { useStore } from "../data/store.js";

const Header = () => {
  const restartWeek = useStore((state) => state.restartWeek);

  return (
    <header>
      <h1>Min vecka</h1>
      <button className="restart-week" onClick={restartWeek}>
        Starta om vecka
      </button>
    </header>
  );
};

export default Header;

// import { useStore } from "../data/store.js";

// const Header = () => {
//   const restartWeek = useStore((state) => state.restartWeek);

//   return (
//     <header>
//       <h1> Min vecka </h1>
//       <button className="restart-week" onClick={restartWeek}>
//         Starta om vecka
//       </button>
//     </header>
//   );
// };

// export default Header;
