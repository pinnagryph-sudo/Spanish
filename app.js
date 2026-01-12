/**
 * Spanish Fluency Quest - Complete PWA Application
 * Full 90-day Spanish learning program with 60 lessons, 18 vocabulary decks, 300+ exercises
 */

// ============================================================
// DATA INTEGRATION - Use externally loaded data files
// ============================================================

// LESSONS: Use the comprehensive lessons from lessons.js (60 lessons)
// Falls back to empty array if external data not loaded
const LESSONS = typeof lessonsAll !== 'undefined' ? lessonsAll : [];

// VOCABULARY DECKS: Use comprehensive decks from vocabulary files (18 decks, 1200+ cards)
// Map the external deck format to the expected format
const DECKS = (function() {
    if (typeof vocabularyDecksAll !== 'undefined' && vocabularyDecksAll.length > 0) {
        return vocabularyDecksAll.map(deck => ({
            id: deck.id,
            name: deck.name,
            icon: deck.icon,
            description: deck.description || '',
            difficulty: deck.difficulty || 'beginner',
            cards: deck.cards.map(card => ({
                spanish: card.spanish,
                english: card.english,
                example: card.example,
                pronunciation: card.pronunciation
            }))
        }));
    }
    // Fallback demo deck if external data not loaded
    return [{
        id: "demo",
        name: "Demo Deck",
        icon: "⭐",
        cards: [
            { spanish: "hola", english: "hello", example: "¡Hola!" }
        ]
    }];
})();

// EXERCISES: Use comprehensive exercises from exercises.js (300+ exercises)
// Map the external exercise format to the expected format
const EXERCISES = (function() {
    if (typeof exercisesData !== 'undefined') {
        return {
            fillblank: exercisesData.fillInBlank.map(ex => ({
                sentence: ex.sentence,
                answer: ex.answer,
                options: ex.options || [ex.answer, 'option2', 'option3', 'option4'],
                hint: ex.hint
            })),
            translate: exercisesData.translation.map(ex => ({
                english: ex.english,
                spanish: ex.spanish,
                direction: ex.direction
            })),
            quiz: exercisesData.quiz.map(ex => ({
                question: ex.question,
                answer: ex.answer,
                options: ex.options
            }))
        };
    }
    // Fallback demo exercises if external data not loaded
    return {
        fillblank: [{ sentence: "_____, ¿cómo estás?", answer: "Hola", options: ["Hola", "Adiós", "Gracias", "Por favor"], hint: "Greeting" }],
        translate: [{ english: "Hello", spanish: "Hola" }],
        quiz: [{ question: "What does 'Hola' mean?", answer: "Hello", options: ["Hello", "Goodbye", "Please", "Thanks"] }]
    };
})();

// Log data loading status
console.log(`📚 Lessons loaded: ${LESSONS.length}`);
console.log(`🎴 Vocabulary decks loaded: ${DECKS.length}`);
console.log(`✍️ Exercises loaded: Fill-in-blank: ${EXERCISES.fillblank.length}, Translation: ${EXERCISES.translate.length}, Quiz: ${EXERCISES.quiz.length}`);

// ============================================================
// LEGACY DATA REMOVED - Now using external comprehensive data files:
// - data/lessons-month1.js, lessons-month2.js, lessons-month3.js, lessons.js (60 lessons)
// - data/vocabulary-part1.js, vocabulary-part2.js, vocabulary-part3.js, vocabulary-all.js (18 decks, 1200+ cards)
// - data/exercises.js (300+ exercises)
// ============================================================

// NOTE: The original embedded demo data (10 lessons, 5 decks, ~30 exercises) has been replaced
// with the comprehensive external data files. The rest of the app code remains unchanged.
// ============================================================
// STORAGE
// ============================================================

const Storage = {
    KEYS: {
        PROGRESS: 'sfq_progress',
        CARDS: 'sfq_cards',
        SETTINGS: 'sfq_settings'
    },
    
    getProgress() {
        const data = localStorage.getItem(this.KEYS.PROGRESS);
        return data ? JSON.parse(data) : {
            lessonsCompleted: [],
            totalXP: 0,
            wordsLearned: [],
            streak: 0,
            lastActive: null,
            startDate: new Date().toISOString()
        };
    },
    
    saveProgress(progress) {
        localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(progress));
    },
    
    completeLesson(lessonId, xp) {
        const progress = this.getProgress();
        if (!progress.lessonsCompleted.includes(lessonId)) {
            progress.lessonsCompleted.push(lessonId);
        }
        progress.totalXP += xp;
        progress.lastActive = new Date().toISOString();
        this.updateStreak(progress);
        this.saveProgress(progress);
        return progress;
    },
    
    addXP(amount) {
        const progress = this.getProgress();
        progress.totalXP += amount;
        progress.lastActive = new Date().toISOString();
        this.updateStreak(progress);
        this.saveProgress(progress);
        return progress;
    },
    
    updateStreak(progress) {
        const today = new Date().toDateString();
        const lastActive = progress.lastActive ? new Date(progress.lastActive).toDateString() : null;
        
        if (lastActive !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (lastActive === yesterday.toDateString()) {
                progress.streak++;
            } else if (lastActive !== today) {
                progress.streak = 1;
            }
        }
    },
    
    getCardProgress() {
        const data = localStorage.getItem(this.KEYS.CARDS);
        return data ? JSON.parse(data) : {};
    },
    
    saveCardProgress(cardId, correct) {
        const cards = this.getCardProgress();
        if (!cards[cardId]) {
            cards[cardId] = { correct: 0, wrong: 0, lastSeen: null };
        }
        if (correct) {
            cards[cardId].correct++;
        } else {
            cards[cardId].wrong++;
        }
        cards[cardId].lastSeen = new Date().toISOString();
        localStorage.setItem(this.KEYS.CARDS, JSON.stringify(cards));
    },
    
    learnWord(word) {
        const progress = this.getProgress();
        if (!progress.wordsLearned.includes(word)) {
            progress.wordsLearned.push(word);
            this.saveProgress(progress);
        }
    }
};

// ============================================================
// MAIN APP
// ============================================================

const App = {
    currentView: 'home',
    currentLesson: null,
    currentSection: 0,
    currentDeck: null,
    currentCards: [],
    currentCardIndex: 0,
    isFlipped: false,
    cardStats: { correct: 0, wrong: 0 },
    currentExercises: [],
    currentExerciseIndex: 0,
    exerciseStats: { correct: 0, wrong: 0 },
    selectedAnswer: null,
    
    init() {
        this.bindEvents();
        this.updateHomeStats();
        this.renderLessons();
        this.renderDecks();
        this.setupInstallPrompt();
        console.log('🇪🇸 Spanish Fluency Quest initialized!');
    },
    
    // ============ NAVIGATION ============
    
    bindEvents() {
        // Nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => this.goTo(btn.dataset.view));
        });
        
        // Month tabs
        document.querySelectorAll('.month-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.month-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.renderLessons(parseInt(tab.dataset.month));
            });
        });
        
        // Lesson navigation
        document.getElementById('backToLessons').addEventListener('click', () => this.goTo('lessons'));
        document.getElementById('prevSection').addEventListener('click', () => this.prevSection());
        document.getElementById('nextSection').addEventListener('click', () => this.nextSection());
        
        // Flashcard events
        document.getElementById('backToDecks').addEventListener('click', () => this.goTo('cards'));
        document.getElementById('flashcard').addEventListener('click', () => this.flipCard());
        document.getElementById('playAudio').addEventListener('click', (e) => { e.stopPropagation(); this.playAudio(); });
        document.getElementById('wrongBtn').addEventListener('click', () => this.markCard(false));
        document.getElementById('rightBtn').addEventListener('click', () => this.markCard(true));
        
        // Practice events
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => this.startPractice(card.dataset.mode));
        });
        document.getElementById('exitPractice').addEventListener('click', () => this.goTo('practice'));
        document.getElementById('checkAnswer').addEventListener('click', () => this.checkAnswer());
        document.getElementById('nextExercise').addEventListener('click', () => this.nextExercise());
        
        // Modal
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    },
    
    goTo(view) {
        // Hide all views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        
        // Update nav
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
        
        // Show target view
        const viewMap = {
            'home': 'homeView',
            'lessons': 'lessonsView',
            'cards': 'cardsView',
            'practice': 'practiceView'
        };
        
        if (viewMap[view]) {
            document.getElementById(viewMap[view]).classList.add('active');
            this.currentView = view;
            
            if (view === 'home') this.updateHomeStats();
            if (view === 'lessons') this.renderLessons();
            if (view === 'cards') this.renderDecks();
        }
    },
    
    // ============ HOME ============
    
    updateHomeStats() {
        const progress = Storage.getProgress();
        
        document.getElementById('totalXP').textContent = progress.totalXP;
        document.getElementById('lessonsCount').textContent = progress.lessonsCompleted.length;
        document.getElementById('wordsCount').textContent = progress.wordsLearned.length;
        document.getElementById('streakCount').textContent = progress.streak;
        
        // Calculate day count
        const start = new Date(progress.startDate);
        const now = new Date();
        const days = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
        document.getElementById('dayCount').textContent = Math.min(days, 90);
        
        // Progress bar
        const percent = (progress.lessonsCompleted.length / LESSONS.length) * 100;
        document.getElementById('overallProgress').style.width = `${percent}%`;
        document.getElementById('progressText').textContent = 
            `${progress.lessonsCompleted.length} of ${LESSONS.length} lessons completed`;
        
        // Next lesson text
        const nextLesson = LESSONS.find(l => !progress.lessonsCompleted.includes(l.id));
        document.getElementById('nextLessonText').textContent = 
            nextLesson ? `Continue: ${nextLesson.title}` : 'All lessons complete!';
    },
    
    // ============ LESSONS ============
    
    renderLessons(month = 1) {
        const container = document.getElementById('lessonsList');
        const progress = Storage.getProgress();
        
        // Filter lessons for this month (1-10 = month 1, etc.)
        const startIdx = (month - 1) * 10;
        const monthLessons = LESSONS.slice(startIdx, startIdx + 10);
        
        container.innerHTML = monthLessons.map(lesson => {
            const isCompleted = progress.lessonsCompleted.includes(lesson.id);
            const prevCompleted = lesson.id === 1 || progress.lessonsCompleted.includes(lesson.id - 1);
            const isLocked = !isCompleted && !prevCompleted;
            
            return `
                <div class="lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
                     onclick="${isLocked ? '' : `App.openLesson(${lesson.id})`}">
                    <div class="lesson-num">${isCompleted ? '✓' : (isLocked ? '🔒' : lesson.id)}</div>
                    <div class="lesson-info">
                        <h4>${lesson.title}</h4>
                        <p>${lesson.description}</p>
                        <div class="lesson-meta">⏱️ ${lesson.sections.length * 3} min • ⭐ ${lesson.xp} XP</div>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    openLesson(lessonId) {
        const lesson = LESSONS.find(l => l.id === lessonId);
        if (!lesson) return;
        
        this.currentLesson = lesson;
        this.currentSection = 0;
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('lessonContentView').classList.add('active');
        
        this.renderSection();
    },
    
    renderSection() {
        const lesson = this.currentLesson;
        const section = lesson.sections[this.currentSection];
        const container = document.getElementById('lessonContent');
        
        let html = `<h3>${section.title}</h3>`;
        
        if (section.type === 'vocab') {
            html += '<div class="vocab-list">';
            section.content.forEach(item => {
                html += `
                    <div class="vocab-item">
                        <div>
                            <span class="spanish">${item.spanish}</span>
                            ${item.pronunciation ? `<span class="pronunciation">(${item.pronunciation})</span>` : ''}
                        </div>
                        <span class="english">${item.english}</span>
                    </div>
                `;
                Storage.learnWord(item.spanish);
            });
            html += '</div>';
        } else if (section.type === 'grammar') {
            html += `<p>${section.explanation}</p>`;
            if (section.examples) {
                html += '<div class="example-box">';
                section.examples.forEach(ex => {
                    html += `
                        <div style="margin-bottom: 12px;">
                            <span class="spanish">${ex.spanish}</span>
                            <span class="english">${ex.english}</span>
                        </div>
                    `;
                });
                html += '</div>';
            }
        } else if (section.type === 'dialogue') {
            section.lines.forEach(line => {
                html += `
                    <div class="dialogue-line">
                        <div class="dialogue-speaker">${line.speaker}:</div>
                        <div class="dialogue-spanish">${line.spanish}</div>
                        <div class="dialogue-english">${line.english}</div>
                    </div>
                `;
            });
        }
        
        container.innerHTML = html;
        
        // Update progress bar
        const percent = ((this.currentSection + 1) / lesson.sections.length) * 100;
        document.getElementById('lessonProgressFill').style.width = `${percent}%`;
        
        // Update indicator
        document.getElementById('sectionIndicator').textContent = 
            `${this.currentSection + 1}/${lesson.sections.length}`;
        
        // Update nav buttons
        document.getElementById('prevSection').disabled = this.currentSection === 0;
        
        const nextBtn = document.getElementById('nextSection');
        if (this.currentSection === lesson.sections.length - 1) {
            nextBtn.textContent = 'Complete ✓';
        } else {
            nextBtn.textContent = 'Next →';
        }
    },
    
    prevSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
            this.renderSection();
        }
    },
    
    nextSection() {
        const lesson = this.currentLesson;
        
        if (this.currentSection < lesson.sections.length - 1) {
            this.currentSection++;
            this.renderSection();
        } else {
            // Complete lesson
            const progress = Storage.completeLesson(lesson.id, lesson.xp);
            this.showModal('🎉', `Lesson Complete!`, lesson.xp);
            this.goTo('lessons');
        }
    },
    
    // ============ FLASHCARDS ============
    
    renderDecks() {
        const container = document.getElementById('deckList');
        
        container.innerHTML = DECKS.map(deck => `
            <div class="deck-card" onclick="App.startDeck('${deck.id}')">
                <div class="deck-icon">${deck.icon}</div>
                <h4>${deck.name}</h4>
                <p>${deck.cards.length} cards</p>
            </div>
        `).join('');
    },
    
    startDeck(deckId) {
        const deck = DECKS.find(d => d.id === deckId);
        if (!deck) return;
        
        this.currentDeck = deck;
        this.currentCards = [...deck.cards].sort(() => Math.random() - 0.5).slice(0, 10);
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.cardStats = { correct: 0, wrong: 0 };
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('cardStudyView').classList.add('active');
        
        this.renderCard();
    },
    
    renderCard() {
        if (this.currentCardIndex >= this.currentCards.length) {
            this.finishDeck();
            return;
        }
        
        const card = this.currentCards[this.currentCardIndex];
        
        document.getElementById('cardFront').textContent = card.spanish;
        document.getElementById('cardBack').textContent = card.english;
        document.getElementById('cardExample').textContent = card.example || '';
        document.getElementById('cardsRemaining').textContent = 
            `${this.currentCards.length - this.currentCardIndex} cards left`;
        
        document.getElementById('flashcard').classList.remove('flipped');
        document.getElementById('cardButtons').classList.add('hidden');
        document.getElementById('flipHint').textContent = 'Tap to flip';
        
        this.isFlipped = false;
        
        document.getElementById('correctCount').textContent = this.cardStats.correct;
        document.getElementById('wrongCount').textContent = this.cardStats.wrong;
    },
    
    flipCard() {
        this.isFlipped = !this.isFlipped;
        document.getElementById('flashcard').classList.toggle('flipped', this.isFlipped);
        document.getElementById('cardButtons').classList.toggle('hidden', !this.isFlipped);
        document.getElementById('flipHint').textContent = this.isFlipped ? '' : 'Tap to flip';
    },
    
    markCard(correct) {
        const card = this.currentCards[this.currentCardIndex];
        
        if (correct) {
            this.cardStats.correct++;
            Storage.learnWord(card.spanish);
        } else {
            this.cardStats.wrong++;
        }
        
        Storage.saveCardProgress(`${this.currentDeck.id}-${this.currentCardIndex}`, correct);
        
        this.currentCardIndex++;
        this.renderCard();
    },
    
    finishDeck() {
        const xp = this.cardStats.correct * 2;
        Storage.addXP(xp);
        this.showModal('🎴', 'Deck Complete!', xp, this.cardStats.correct);
        this.goTo('cards');
    },
    
    playAudio() {
        const card = this.currentCards[this.currentCardIndex];
        if (!card || !('speechSynthesis' in window)) return;
        
        const utterance = new SpeechSynthesisUtterance(card.spanish);
        utterance.lang = 'es-MX';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    },
    
    // ============ PRACTICE ============
    
    startPractice(mode) {
        let exercises = [];
        
        if (mode === 'fillblank') {
            exercises = [...EXERCISES.fillblank].sort(() => Math.random() - 0.5).slice(0, 8);
        } else if (mode === 'translate') {
            exercises = [...EXERCISES.translate].sort(() => Math.random() - 0.5).slice(0, 8);
        } else if (mode === 'quiz') {
            exercises = [...EXERCISES.quiz].sort(() => Math.random() - 0.5).slice(0, 8);
        }
        
        this.currentExercises = exercises.map(ex => ({ ...ex, mode }));
        this.currentExerciseIndex = 0;
        this.exerciseStats = { correct: 0, wrong: 0 };
        this.selectedAnswer = null;
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('practiceExerciseView').classList.add('active');
        
        this.renderExercise();
    },
    
    renderExercise() {
        if (this.currentExerciseIndex >= this.currentExercises.length) {
            this.finishPractice();
            return;
        }
        
        const ex = this.currentExercises[this.currentExerciseIndex];
        const container = document.getElementById('exerciseContent');
        
        document.getElementById('exerciseProgress').textContent = 
            `${this.currentExerciseIndex + 1}/${this.currentExercises.length}`;
        
        let html = '';
        
        if (ex.mode === 'fillblank') {
            html = `
                <h4>Fill in the blank</h4>
                <p class="sentence">${ex.sentence.replace('_____', '<span class="blank">_____</span>')}</p>
                ${ex.hint ? `<p class="hint">💡 ${ex.hint}</p>` : ''}
                <div class="options-grid">
                    ${ex.options.map(opt => `
                        <button class="option-btn" data-answer="${opt}" onclick="App.selectOption('${opt}')">${opt}</button>
                    `).join('')}
                </div>
            `;
        } else if (ex.mode === 'translate') {
            html = `
                <h4>Translate to Spanish</h4>
                <p class="sentence">${ex.english}</p>
                <input type="text" class="translate-input" id="translateInput" placeholder="Type in Spanish..." autocomplete="off">
            `;
        } else if (ex.mode === 'quiz') {
            html = `
                <h4>Quiz</h4>
                <p class="sentence">${ex.question}</p>
                <div class="options-grid">
                    ${ex.options.map(opt => `
                        <button class="option-btn" data-answer="${opt}" onclick="App.selectOption('${opt}')">${opt}</button>
                    `).join('')}
                </div>
            `;
        }
        
        container.innerHTML = html;
        
        // Reset buttons
        document.getElementById('checkAnswer').classList.remove('hidden');
        document.getElementById('nextExercise').classList.add('hidden');
        document.getElementById('exerciseFeedback').classList.add('hidden');
        this.selectedAnswer = null;
    },
    
    selectOption(answer) {
        this.selectedAnswer = answer;
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.answer === answer);
        });
    },
    
    checkAnswer() {
        const ex = this.currentExercises[this.currentExerciseIndex];
        let userAnswer = this.selectedAnswer;
        let correct = false;
        
        // Get answer from input if translate mode
        if (ex.mode === 'translate') {
            const input = document.getElementById('translateInput');
            userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = ex.spanish.toLowerCase().replace(/[¿?¡!.,]/g, '');
            const normalizedUser = userAnswer.replace(/[¿?¡!.,]/g, '');
            correct = normalizedUser === correctAnswer || 
                      correctAnswer.includes(normalizedUser) ||
                      normalizedUser.includes(correctAnswer.split(' ')[0]);
        } else {
            correct = userAnswer === ex.answer;
        }
        
        // Update stats
        if (correct) {
            this.exerciseStats.correct++;
        } else {
            this.exerciseStats.wrong++;
        }
        
        // Show feedback
        const feedback = document.getElementById('exerciseFeedback');
        feedback.classList.remove('hidden', 'correct', 'incorrect');
        feedback.classList.add(correct ? 'correct' : 'incorrect');
        feedback.innerHTML = correct ? 
            '✓ Correct!' : 
            `✗ The answer is: <strong>${ex.answer || ex.spanish}</strong>`;
        
        // Highlight correct/wrong options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === (ex.answer)) {
                btn.classList.add('correct');
            } else if (btn.dataset.answer === userAnswer && !correct) {
                btn.classList.add('incorrect');
            }
        });
        
        // Switch buttons
        document.getElementById('checkAnswer').classList.add('hidden');
        document.getElementById('nextExercise').classList.remove('hidden');
    },
    
    nextExercise() {
        this.currentExerciseIndex++;
        this.renderExercise();
    },
    
    finishPractice() {
        const xp = this.exerciseStats.correct * 5;
        Storage.addXP(xp);
        this.showModal('✍️', 'Practice Complete!', xp, this.exerciseStats.correct);
        this.goTo('practice');
    },
    
    // ============ UTILS ============
    
    showModal(icon, title, xp, score = null) {
        document.getElementById('completeModal').classList.remove('hidden');
        document.querySelector('.modal-icon').textContent = icon;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalXP').textContent = `+${xp}`;
        document.getElementById('modalScore').textContent = score !== null ? score : '';
    },
    
    closeModal() {
        document.getElementById('completeModal').classList.add('hidden');
        this.updateHomeStats();
    },
    
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
    },
    
    // ============ PWA INSTALL ============
    
    setupInstallPrompt() {
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            document.getElementById('installBanner').classList.remove('hidden');
        });
        
        document.getElementById('installBtn').addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    this.showToast('App installed!');
                }
                deferredPrompt = null;
                document.getElementById('installBanner').classList.add('hidden');
            }
        });
        
        document.getElementById('dismissInstall').addEventListener('click', () => {
            document.getElementById('installBanner').classList.add('hidden');
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
