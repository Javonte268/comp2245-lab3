const fruits = [
    { name: "apple", symbol: "🍎" },
    { name: "banana", symbol: "🍌" },
    { name: "cherry", symbol: "🍒" },
    { name: "coconut", symbol: "🥥" },
    { name: "grapes", symbol: "🍇" },
    { name: "mango", symbol: "🥭" },
    { name: "pineapple", symbol: "🍍" },
    { name: "watermelon", symbol: "🍉" }
  ];
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function buildBoard() {
    const board = document.getElementById("board");
    const deck = shuffle([...fruits, ...fruits]);
  
    deck.forEach((fruit, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.classList.add("card");
      card.setAttribute("aria-label", `Card ${index + 1}, face down`);
      card.dataset.index = index;
      board.appendChild(card);
    });
  }
  
  buildBoard();