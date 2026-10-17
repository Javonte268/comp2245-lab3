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
  
  const board = document.getElementById("board");
  const movesDisplay = document.getElementById("moves");
  const statusDisplay = document.getElementById("status");
  
  let deck = [];
  let turnedCards = [];
  let moves = 0;
  
  function buildBoard() {
    deck = shuffle([...fruits, ...fruits]);
  
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
  
  board.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
  
    if (!card || card.classList.contains("flipped") || card.classList.contains("matched")) {
      return;
    }
  
    const index = card.dataset.index;
    const fruit = deck[index];
  
    card.textContent = fruit.symbol;
    card.classList.add("flipped");
    const cardNumber = Number(index) + 1;
    card.setAttribute("aria-label", `Card ${cardNumber}, ${fruit.name}`);
  
    turnedCards.push(card);
  
    if (turnedCards.length === 2) {
      moves++;
      movesDisplay.textContent = `Moves: ${moves}`;
  
      const [firstCard, secondCard] = turnedCards;
      const firstFruit = deck[firstCard.dataset.index];
      const secondFruit = deck[secondCard.dataset.index];
  
      if (firstFruit.name === secondFruit.name) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        firstCard.disabled = true;
        secondCard.disabled = true;
        statusDisplay.textContent = "That's a pair!";
        turnedCards = [];
      }
    }
  });