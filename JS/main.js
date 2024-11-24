const quotes = [
  { 
    text: "Be yourself; everyone else is already taken.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
    author: "Albert Einstein" 
  },
  { 
    text: "In three words I can sum up everything I've learned about life: it goes on.", 
    author: "Robert Frost" 
  },
  { 
    text: "If you tell the truth, you don't have to remember anything.", 
    author: "Mark Twain" 
  },
  { 
    text: "A friend is someone who knows all about you and still loves you.", 
    author: "Elbert Hubbard" 
  },
  { 
    text: "To live is the rarest thing in the world. Most people exist, that is all.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "Always forgive your enemies; nothing annoys them so much.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "Without music, life would be a mistake.", 
    author: "Friedrich Nietzsche" 
  },
  { 
    text: "We accept the love we think we deserve.", 
    author: "Stephen Chbosky" 
  },
  { 
    text: "It is never too late to be what you might have been.", 
    author: "George Eliot" 
  }
];

let lastGeneratedIndex = -1;


function generateQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === lastGeneratedIndex);
  
  lastGeneratedIndex = newIndex;


  const selectedQuote = quotes[newIndex];
  document.getElementById("quote-text").textContent = `"${selectedQuote.text}"`;
  document.getElementById("quote-author").textContent = `- ${selectedQuote.author}`;
}
