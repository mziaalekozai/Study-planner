import { useStore } from "../data/store.js";

const Header = () => {
  const restartWeek = useStore((state) => state.restartWeek);
  const startNextWeek = useStore((state) => {
    const todos = state.todos.map((todo) => ({ ...todo, done: false }));
    return () => state.setTodos(todos);
  });

  return (
    <header>
      <h1>Min vecka</h1>
      <button className="restart-week" onClick={restartWeek}>
        Starta om vecka
      </button>
      <button className="start-next-week" onClick={startNextWeek}>
        Starta nästa vecka
      </button>
    </header>
  );
};

export default Header;
