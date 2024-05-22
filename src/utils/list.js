const splitTodosIntoDays = (todos) => {
  const daysOfWeek = [
    { name: "Måndag", shortName: "må", items: [] },
    { name: "Tisdag", shortName: "ti", items: [] },
    { name: "Onsdag", shortName: "on", items: [] },
    { name: "Torsdag", shortName: "to", items: [] },
    { name: "Fredag", shortName: "fr", items: [] },
    { name: "Lördag", shortName: "lö", items: [] },
    { name: "Söndag", shortName: "sö", items: [] },
  ];

  todos.forEach((todo) => {
    const day = daysOfWeek.find((day) => day.shortName === todo.day);
    if (day) {
      day.items.push(todo);
    }
  });

  return daysOfWeek;
};

export { splitTodosIntoDays };

// // TODO: write unit tests for this function, and finish it
// function splitTodosIntoDays(todos) {
// 	const mo = todos.filter(t => t.day === 'mo')
// 	const ti = todos.filter(t => t.day === 'ti')
// 	const on = todos.filter(t => t.day === 'on')

// 	return [mo, ti, on]
// }

// // Tips! Du kan få användning för funktioner som:
// // + kopierar en lista och byter plats på två element (snooze)
// // + lägger till ett element på en viss plats i en lista
// // https://www.w3schools.com/jsref/jsref_splice.asp
// // https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

// export { splitTodosIntoDays }
