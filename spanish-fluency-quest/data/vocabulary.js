// Spanish Fluency Quest - Vocabulary Integration
// Combines all 18 vocabulary decks from parts 1-3

// Import vocabulary parts
const { vocabularyDecks1to6 } = require('./vocabulary-part1.js');
const { vocabularyDecks7to12 } = require('./vocabulary-part2.js');
const { vocabularyDecks13to18 } = require('./vocabulary-part3.js');

// Combine all vocabulary decks
const allVocabularyDecks = [
  ...vocabularyDecks1to6,
  ...vocabularyDecks7to12,
  ...vocabularyDecks13to18
];

// Calculate total statistics
const vocabularyStats = {
  totalDecks: allVocabularyDecks.length,
  totalCards: allVocabularyDecks.reduce((sum, deck) => sum + deck.cards.length, 0),
  decksByDifficulty: {
    beginner: allVocabularyDecks.filter(d => d.difficulty === 'beginner').length,
    intermediate: allVocabularyDecks.filter(d => d.difficulty === 'intermediate').length,
    advanced: allVocabularyDecks.filter(d => d.difficulty === 'advanced').length
  },
  decks: allVocabularyDecks.map(d => ({
    id: d.id,
    name: d.name,
    cardCount: d.cards.length,
    difficulty: d.difficulty
  }))
};

// Deck index for quick lookups
const deckIndex = {};
allVocabularyDecks.forEach(deck => {
  deckIndex[deck.id] = deck;
});

// Card search function
function searchCards(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  allVocabularyDecks.forEach(deck => {
    deck.cards.forEach(card => {
      if (card.spanish.toLowerCase().includes(lowerQuery) ||
          card.english.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...card,
          deckId: deck.id,
          deckName: deck.name
        });
      }
    });
  });
  
  return results;
}

// Get deck by ID
function getDeck(deckId) {
  return deckIndex[deckId] || null;
}

// Get cards by difficulty
function getCardsByDifficulty(difficulty) {
  return allVocabularyDecks
    .filter(deck => deck.difficulty === difficulty)
    .flatMap(deck => deck.cards.map(card => ({
      ...card,
      deckId: deck.id,
      deckName: deck.name
    })));
}

// Get random cards for practice
function getRandomCards(count = 10, deckIds = null) {
  let availableCards = [];
  
  if (deckIds && deckIds.length > 0) {
    deckIds.forEach(id => {
      const deck = deckIndex[id];
      if (deck) {
        availableCards.push(...deck.cards.map(card => ({
          ...card,
          deckId: deck.id,
          deckName: deck.name
        })));
      }
    });
  } else {
    allVocabularyDecks.forEach(deck => {
      availableCards.push(...deck.cards.map(card => ({
        ...card,
        deckId: deck.id,
        deckName: deck.name
      })));
    });
  }
  
  // Shuffle and return requested count
  const shuffled = availableCards.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Export everything
module.exports = {
  allVocabularyDecks,
  vocabularyStats,
  deckIndex,
  searchCards,
  getDeck,
  getCardsByDifficulty,
  getRandomCards
};

// For browser environments
if (typeof window !== 'undefined') {
  window.VocabularyData = {
    allVocabularyDecks,
    vocabularyStats,
    deckIndex,
    searchCards,
    getDeck,
    getCardsByDifficulty,
    getRandomCards
  };
}
