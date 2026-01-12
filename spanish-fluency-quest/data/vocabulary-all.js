// Spanish Fluency Quest - Complete Vocabulary Integration
// Combines all 18 vocabulary decks (1200+ flashcards)

// Import all vocabulary parts
// Note: In browser context, these will be loaded via script tags

const vocabularyDecksAll = [
  // Part 1: Decks 1-6 (from vocabulary-part1.js)
  // Essential Phrases, Numbers, Food, Family, Colors, Body Parts
  ...(typeof vocabularyDecks1to6 !== 'undefined' ? vocabularyDecks1to6 : []),
  
  // Part 2: Decks 7-12 (from vocabulary-part2.js)
  // Clothing, House, Transportation, Verbs, Adjectives, Time
  ...(typeof vocabularyDecks7to12 !== 'undefined' ? vocabularyDecks7to12 : []),
  
  // Part 3: Decks 13-18 (from vocabulary-part3.js)
  // Weather, Technology, Professions, Nature, Expressions, Health
  ...(typeof vocabularyDecks13to18 !== 'undefined' ? vocabularyDecks13to18 : [])
];

// Calculate total statistics
const vocabularyStats = {
  totalDecks: vocabularyDecksAll.length,
  totalCards: vocabularyDecksAll.reduce((sum, deck) => sum + (deck.cards ? deck.cards.length : 0), 0),
  decksByDifficulty: {
    beginner: vocabularyDecksAll.filter(d => d.difficulty === 'beginner').length,
    intermediate: vocabularyDecksAll.filter(d => d.difficulty === 'intermediate').length,
    advanced: vocabularyDecksAll.filter(d => d.difficulty === 'advanced').length
  },
  deckList: vocabularyDecksAll.map(d => ({
    id: d.id,
    name: d.name,
    icon: d.icon,
    cardCount: d.cards ? d.cards.length : 0,
    difficulty: d.difficulty
  }))
};

// Helper function to get deck by ID
function getVocabularyDeck(deckId) {
  return vocabularyDecksAll.find(deck => deck.id === deckId);
}

// Helper function to get all cards from a deck
function getDeckCards(deckId) {
  const deck = getVocabularyDeck(deckId);
  return deck ? deck.cards : [];
}

// Helper function to get random cards from a deck
function getRandomCards(deckId, count = 10) {
  const cards = getDeckCards(deckId);
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Helper function to search cards across all decks
function searchVocabulary(query) {
  const lowerQuery = query.toLowerCase();
  const results = [];
  
  vocabularyDecksAll.forEach(deck => {
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

// Helper function to get cards by difficulty
function getCardsByDifficulty(difficulty) {
  return vocabularyDecksAll
    .filter(deck => deck.difficulty === difficulty)
    .flatMap(deck => deck.cards.map(card => ({
      ...card,
      deckId: deck.id,
      deckName: deck.name
    })));
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    vocabularyDecksAll,
    vocabularyStats,
    getVocabularyDeck,
    getDeckCards,
    getRandomCards,
    searchVocabulary,
    getCardsByDifficulty
  };
}

// Log stats on load (for debugging)
console.log('Spanish Fluency Quest - Vocabulary Loaded');
console.log(`Total Decks: ${vocabularyStats.totalDecks}`);
console.log(`Total Cards: ${vocabularyStats.totalCards}`);
