/**
 * Spanish Fluency Quest - Complete Lesson Database
 * 30 full lessons covering A1-B1 Spanish
 */

const LESSONS = [
    // ========== MONTH 1: FOUNDATIONS (Lessons 1-10) ==========
    {
        id: 1,
        month: 1,
        title: "Greetings & Introductions",
        description: "Learn to say hello and introduce yourself",
        xp: 25,
        sections: [
            {
                title: "Basic Greetings",
                type: "vocab",
                content: [
                    { spanish: "Hola", english: "Hello", pronunciation: "OH-lah" },
                    { spanish: "Buenos días", english: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
                    { spanish: "Buenas tardes", english: "Good afternoon", pronunciation: "BWEH-nahs TAR-dehs" },
                    { spanish: "Buenas noches", english: "Good evening/night", pronunciation: "BWEH-nahs NOH-chehs" },
                    { spanish: "Adiós", english: "Goodbye", pronunciation: "ah-dee-OHS" },
                    { spanish: "Hasta luego", english: "See you later", pronunciation: "AHS-tah LWEH-goh" },
                    { spanish: "Hasta mañana", english: "See you tomorrow", pronunciation: "AHS-tah mah-NYAH-nah" },
                    { spanish: "Hasta pronto", english: "See you soon", pronunciation: "AHS-tah PROHN-toh" }
                ]
            },
            {
                title: "Introducing Yourself",
                type: "grammar",
                explanation: "To introduce yourself in Spanish, use 'Me llamo...' (My name is...) or 'Soy...' (I am...). 'Mucho gusto' means 'Nice to meet you' and is essential for introductions.",
                examples: [
                    { spanish: "Me llamo María.", english: "My name is María." },
                    { spanish: "Soy Carlos.", english: "I am Carlos." },
                    { spanish: "Mucho gusto.", english: "Nice to meet you." },
                    { spanish: "Encantado/Encantada.", english: "Pleased to meet you. (m/f)" },
                    { spanish: "¿Cómo te llamas?", english: "What's your name? (informal)" },
                    { spanish: "¿Cómo se llama usted?", english: "What's your name? (formal)" }
                ]
            },
            {
                title: "How Are You?",
                type: "vocab",
                content: [
                    { spanish: "¿Cómo estás?", english: "How are you? (informal)", pronunciation: "KOH-moh ehs-TAHS" },
                    { spanish: "¿Cómo está usted?", english: "How are you? (formal)", pronunciation: "KOH-moh ehs-TAH oos-TEHD" },
                    { spanish: "¿Qué tal?", english: "What's up? / How's it going?", pronunciation: "keh tahl" },
                    { spanish: "Muy bien", english: "Very well", pronunciation: "mwee byehn" },
                    { spanish: "Bien, gracias", english: "Good, thank you", pronunciation: "byehn GRAH-syahs" },
                    { spanish: "Más o menos", english: "So-so", pronunciation: "mahs oh MEH-nohs" },
                    { spanish: "Regular", english: "Okay / Not bad", pronunciation: "reh-goo-LAHR" },
                    { spanish: "¿Y tú?", english: "And you? (informal)", pronunciation: "ee too" }
                ]
            },
            {
                title: "Practice Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¡Hola! Buenos días.", english: "Hello! Good morning." },
                    { speaker: "Pedro", spanish: "Buenos días. ¿Cómo estás?", english: "Good morning. How are you?" },
                    { speaker: "Ana", spanish: "Muy bien, gracias. ¿Y tú?", english: "Very well, thank you. And you?" },
                    { speaker: "Pedro", spanish: "Bien, bien. Me llamo Pedro.", english: "Good, good. My name is Pedro." },
                    { speaker: "Ana", spanish: "Mucho gusto, Pedro. Soy Ana.", english: "Nice to meet you, Pedro. I'm Ana." },
                    { speaker: "Pedro", spanish: "Encantado, Ana. ¡Hasta luego!", english: "Pleased to meet you, Ana. See you later!" },
                    { speaker: "Ana", spanish: "¡Adiós! ¡Hasta pronto!", english: "Goodbye! See you soon!" }
                ]
            }
        ]
    },
    {
        id: 2,
        month: 1,
        title: "Numbers 1-30",
        description: "Count in Spanish and use numbers in context",
        xp: 25,
        sections: [
            {
                title: "Numbers 1-10",
                type: "vocab",
                content: [
                    { spanish: "cero", english: "0 (zero)", pronunciation: "SEH-roh" },
                    { spanish: "uno", english: "1 (one)", pronunciation: "OO-noh" },
                    { spanish: "dos", english: "2 (two)", pronunciation: "dohs" },
                    { spanish: "tres", english: "3 (three)", pronunciation: "trehs" },
                    { spanish: "cuatro", english: "4 (four)", pronunciation: "KWAH-troh" },
                    { spanish: "cinco", english: "5 (five)", pronunciation: "SEEN-koh" },
                    { spanish: "seis", english: "6 (six)", pronunciation: "says" },
                    { spanish: "siete", english: "7 (seven)", pronunciation: "SYEH-teh" },
                    { spanish: "ocho", english: "8 (eight)", pronunciation: "OH-choh" },
                    { spanish: "nueve", english: "9 (nine)", pronunciation: "NWEH-veh" },
                    { spanish: "diez", english: "10 (ten)", pronunciation: "dyehs" }
                ]
            },
            {
                title: "Numbers 11-20",
                type: "vocab",
                content: [
                    { spanish: "once", english: "11 (eleven)", pronunciation: "OHN-seh" },
                    { spanish: "doce", english: "12 (twelve)", pronunciation: "DOH-seh" },
                    { spanish: "trece", english: "13 (thirteen)", pronunciation: "TREH-seh" },
                    { spanish: "catorce", english: "14 (fourteen)", pronunciation: "kah-TOR-seh" },
                    { spanish: "quince", english: "15 (fifteen)", pronunciation: "KEEN-seh" },
                    { spanish: "dieciséis", english: "16 (sixteen)", pronunciation: "dyeh-see-SAYS" },
                    { spanish: "diecisiete", english: "17 (seventeen)", pronunciation: "dyeh-see-SYEH-teh" },
                    { spanish: "dieciocho", english: "18 (eighteen)", pronunciation: "dyeh-see-OH-choh" },
                    { spanish: "diecinueve", english: "19 (nineteen)", pronunciation: "dyeh-see-NWEH-veh" },
                    { spanish: "veinte", english: "20 (twenty)", pronunciation: "BAYN-teh" }
                ]
            },
            {
                title: "Numbers 21-30",
                type: "vocab",
                content: [
                    { spanish: "veintiuno", english: "21", pronunciation: "bayn-tee-OO-noh" },
                    { spanish: "veintidós", english: "22", pronunciation: "bayn-tee-DOHS" },
                    { spanish: "veintitrés", english: "23", pronunciation: "bayn-tee-TREHS" },
                    { spanish: "veinticuatro", english: "24", pronunciation: "bayn-tee-KWAH-troh" },
                    { spanish: "veinticinco", english: "25", pronunciation: "bayn-tee-SEEN-koh" },
                    { spanish: "veintiséis", english: "26", pronunciation: "bayn-tee-SAYS" },
                    { spanish: "veintisiete", english: "27", pronunciation: "bayn-tee-SYEH-teh" },
                    { spanish: "veintiocho", english: "28", pronunciation: "bayn-tee-OH-choh" },
                    { spanish: "veintinueve", english: "29", pronunciation: "bayn-tee-NWEH-veh" },
                    { spanish: "treinta", english: "30", pronunciation: "TRAYN-tah" }
                ]
            },
            {
                title: "Using Numbers",
                type: "grammar",
                explanation: "Numbers are used before nouns in Spanish. 'Uno' becomes 'un' before masculine nouns and 'una' before feminine nouns.",
                examples: [
                    { spanish: "Tengo un hermano.", english: "I have one brother." },
                    { spanish: "Hay una mesa.", english: "There is one table." },
                    { spanish: "Dos cervezas, por favor.", english: "Two beers, please." },
                    { spanish: "Son cinco dólares.", english: "It's five dollars." },
                    { spanish: "Tengo veinticinco años.", english: "I am 25 years old." },
                    { spanish: "Mi número es el quince.", english: "My number is fifteen." }
                ]
            }
        ]
    },
    {
        id: 3,
        month: 1,
        title: "Essential Phrases",
        description: "Must-know phrases for everyday situations",
        xp: 25,
        sections: [
            {
                title: "Polite Expressions",
                type: "vocab",
                content: [
                    { spanish: "Por favor", english: "Please", pronunciation: "por fah-VOR" },
                    { spanish: "Gracias", english: "Thank you", pronunciation: "GRAH-syahs" },
                    { spanish: "Muchas gracias", english: "Thank you very much", pronunciation: "MOO-chahs GRAH-syahs" },
                    { spanish: "De nada", english: "You're welcome", pronunciation: "deh NAH-dah" },
                    { spanish: "Perdón", english: "Excuse me / Sorry", pronunciation: "pehr-DOHN" },
                    { spanish: "Lo siento", english: "I'm sorry", pronunciation: "loh SYEHN-toh" },
                    { spanish: "Disculpe", english: "Excuse me (formal)", pronunciation: "dees-KOOL-peh" },
                    { spanish: "Con permiso", english: "Excuse me (passing by)", pronunciation: "kohn pehr-MEE-soh" }
                ]
            },
            {
                title: "Basic Questions",
                type: "vocab",
                content: [
                    { spanish: "¿Qué?", english: "What?", pronunciation: "keh" },
                    { spanish: "¿Quién?", english: "Who?", pronunciation: "kyehn" },
                    { spanish: "¿Dónde?", english: "Where?", pronunciation: "DOHN-deh" },
                    { spanish: "¿Cuándo?", english: "When?", pronunciation: "KWAHN-doh" },
                    { spanish: "¿Por qué?", english: "Why?", pronunciation: "por KEH" },
                    { spanish: "¿Cómo?", english: "How?", pronunciation: "KOH-moh" },
                    { spanish: "¿Cuánto?", english: "How much?", pronunciation: "KWAHN-toh" },
                    { spanish: "¿Cuántos?", english: "How many?", pronunciation: "KWAHN-tohs" }
                ]
            },
            {
                title: "Useful Phrases",
                type: "vocab",
                content: [
                    { spanish: "No entiendo", english: "I don't understand", pronunciation: "noh ehn-TYEHN-doh" },
                    { spanish: "¿Puede repetir?", english: "Can you repeat?", pronunciation: "PWEH-deh reh-peh-TEER" },
                    { spanish: "Más despacio, por favor", english: "Slower, please", pronunciation: "mahs dehs-PAH-syoh" },
                    { spanish: "¿Habla inglés?", english: "Do you speak English?", pronunciation: "AH-blah een-GLEHS" },
                    { spanish: "Hablo un poco de español", english: "I speak a little Spanish", pronunciation: "AH-bloh oon POH-koh" },
                    { spanish: "¿Cómo se dice...?", english: "How do you say...?", pronunciation: "KOH-moh seh DEE-seh" },
                    { spanish: "¿Qué significa...?", english: "What does ... mean?", pronunciation: "keh seeg-NEE-fee-kah" }
                ]
            },
            {
                title: "In Action",
                type: "dialogue",
                lines: [
                    { speaker: "Turista", spanish: "Disculpe, ¿dónde está el baño?", english: "Excuse me, where is the bathroom?" },
                    { speaker: "Local", spanish: "Está al fondo a la derecha.", english: "It's at the back on the right." },
                    { speaker: "Turista", spanish: "Perdón, no entiendo. ¿Puede repetir?", english: "Sorry, I don't understand. Can you repeat?" },
                    { speaker: "Local", spanish: "Al fondo, a la derecha.", english: "At the back, on the right." },
                    { speaker: "Turista", spanish: "¡Ah! Muchas gracias.", english: "Ah! Thank you very much." },
                    { speaker: "Local", spanish: "De nada.", english: "You're welcome." }
                ]
            }
        ]
    },
    {
        id: 4,
        month: 1,
        title: "The Verb SER (To Be)",
        description: "Learn the most important Spanish verb for identity",
        xp: 30,
        sections: [
            {
                title: "SER Conjugation",
                type: "grammar",
                explanation: "SER means 'to be' and is used for permanent characteristics: identity, origin, profession, personality traits, and time. Memorize these forms!",
                examples: [
                    { spanish: "Yo soy", english: "I am" },
                    { spanish: "Tú eres", english: "You are (informal)" },
                    { spanish: "Él/Ella/Usted es", english: "He/She is, You are (formal)" },
                    { spanish: "Nosotros somos", english: "We are" },
                    { spanish: "Vosotros sois", english: "You all are (Spain)" },
                    { spanish: "Ellos/Ellas/Ustedes son", english: "They are, You all are" }
                ]
            },
            {
                title: "Uses of SER",
                type: "grammar",
                explanation: "Use SER for: Identity (names), Origin (where from), Profession (jobs), Characteristics (permanent traits), Time, and Dates.",
                examples: [
                    { spanish: "Soy María. (Identity)", english: "I am María." },
                    { spanish: "Somos de Argentina. (Origin)", english: "We are from Argentina." },
                    { spanish: "Ella es doctora. (Profession)", english: "She is a doctor." },
                    { spanish: "El café es negro. (Characteristic)", english: "Coffee is black." },
                    { spanish: "Son las tres. (Time)", english: "It's three o'clock." },
                    { spanish: "Hoy es lunes. (Date)", english: "Today is Monday." }
                ]
            },
            {
                title: "Professions with SER",
                type: "vocab",
                content: [
                    { spanish: "Soy estudiante", english: "I am a student" },
                    { spanish: "Es profesor/profesora", english: "He/She is a teacher" },
                    { spanish: "Son médicos", english: "They are doctors" },
                    { spanish: "Eres ingeniero", english: "You are an engineer" },
                    { spanish: "Somos abogados", english: "We are lawyers" },
                    { spanish: "Es artista", english: "He/She is an artist" }
                ]
            },
            {
                title: "Practice Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Luis", spanish: "¿De dónde eres?", english: "Where are you from?" },
                    { speaker: "Sara", spanish: "Soy de España, de Madrid. ¿Y tú?", english: "I'm from Spain, from Madrid. And you?" },
                    { speaker: "Luis", spanish: "Soy mexicano, de Guadalajara.", english: "I'm Mexican, from Guadalajara." },
                    { speaker: "Sara", spanish: "¡Qué interesante! ¿Qué eres? ¿Estudiante?", english: "How interesting! What are you? A student?" },
                    { speaker: "Luis", spanish: "No, soy profesor de inglés.", english: "No, I'm an English teacher." },
                    { speaker: "Sara", spanish: "¡Ah! Yo soy programadora.", english: "Ah! I'm a programmer." }
                ]
            }
        ]
    },
    {
        id: 5,
        month: 1,
        title: "The Verb ESTAR (To Be)",
        description: "Learn the second 'to be' verb for states and locations",
        xp: 30,
        sections: [
            {
                title: "ESTAR Conjugation",
                type: "grammar",
                explanation: "ESTAR also means 'to be' but is used for temporary states, emotions, locations, and conditions. Learn to distinguish it from SER!",
                examples: [
                    { spanish: "Yo estoy", english: "I am" },
                    { spanish: "Tú estás", english: "You are (informal)" },
                    { spanish: "Él/Ella/Usted está", english: "He/She is, You are (formal)" },
                    { spanish: "Nosotros estamos", english: "We are" },
                    { spanish: "Vosotros estáis", english: "You all are (Spain)" },
                    { spanish: "Ellos/Ellas/Ustedes están", english: "They are, You all are" }
                ]
            },
            {
                title: "Uses of ESTAR",
                type: "grammar",
                explanation: "Use ESTAR for: Location (where something is), Emotions (how you feel), Conditions (temporary states), Progressive tenses (-ing forms).",
                examples: [
                    { spanish: "Estoy en casa. (Location)", english: "I am at home." },
                    { spanish: "Estamos felices. (Emotion)", english: "We are happy." },
                    { spanish: "El café está frío. (Condition)", english: "The coffee is cold." },
                    { spanish: "Está lloviendo. (Progressive)", english: "It is raining." },
                    { spanish: "¿Dónde está el baño?", english: "Where is the bathroom?" },
                    { spanish: "Estoy cansado/cansada.", english: "I am tired." }
                ]
            },
            {
                title: "SER vs ESTAR",
                type: "grammar",
                explanation: "The classic comparison: SER = permanent/essence, ESTAR = temporary/state. Some adjectives change meaning!",
                examples: [
                    { spanish: "Él es aburrido. (SER)", english: "He is boring. (personality)" },
                    { spanish: "Él está aburrido. (ESTAR)", english: "He is bored. (feeling)" },
                    { spanish: "La manzana es verde. (SER)", english: "The apple is green. (type)" },
                    { spanish: "La manzana está verde. (ESTAR)", english: "The apple is unripe. (condition)" },
                    { spanish: "Ella es guapa. (SER)", english: "She is pretty. (always)" },
                    { spanish: "Ella está guapa hoy. (ESTAR)", english: "She looks pretty today. (now)" }
                ]
            },
            {
                title: "Emotions with ESTAR",
                type: "vocab",
                content: [
                    { spanish: "Estoy feliz", english: "I am happy" },
                    { spanish: "Estoy triste", english: "I am sad" },
                    { spanish: "Estoy enojado/a", english: "I am angry" },
                    { spanish: "Estoy nervioso/a", english: "I am nervous" },
                    { spanish: "Estoy cansado/a", english: "I am tired" },
                    { spanish: "Estoy enfermo/a", english: "I am sick" },
                    { spanish: "Estoy preocupado/a", english: "I am worried" },
                    { spanish: "Estoy emocionado/a", english: "I am excited" }
                ]
            }
        ]
    },
    {
        id: 6,
        month: 1,
        title: "Family Members",
        description: "Talk about your family in Spanish",
        xp: 25,
        sections: [
            {
                title: "Immediate Family",
                type: "vocab",
                content: [
                    { spanish: "la madre / mamá", english: "mother / mom", pronunciation: "MAH-dreh / mah-MAH" },
                    { spanish: "el padre / papá", english: "father / dad", pronunciation: "PAH-dreh / pah-PAH" },
                    { spanish: "los padres", english: "parents", pronunciation: "PAH-drehs" },
                    { spanish: "el hermano", english: "brother", pronunciation: "ehr-MAH-noh" },
                    { spanish: "la hermana", english: "sister", pronunciation: "ehr-MAH-nah" },
                    { spanish: "el hijo", english: "son", pronunciation: "EE-hoh" },
                    { spanish: "la hija", english: "daughter", pronunciation: "EE-hah" },
                    { spanish: "los hijos", english: "children/sons", pronunciation: "EE-hohs" }
                ]
            },
            {
                title: "Extended Family",
                type: "vocab",
                content: [
                    { spanish: "el abuelo", english: "grandfather", pronunciation: "ah-BWEH-loh" },
                    { spanish: "la abuela", english: "grandmother", pronunciation: "ah-BWEH-lah" },
                    { spanish: "los abuelos", english: "grandparents", pronunciation: "ah-BWEH-lohs" },
                    { spanish: "el tío", english: "uncle", pronunciation: "TEE-oh" },
                    { spanish: "la tía", english: "aunt", pronunciation: "TEE-ah" },
                    { spanish: "el primo", english: "cousin (male)", pronunciation: "PREE-moh" },
                    { spanish: "la prima", english: "cousin (female)", pronunciation: "PREE-mah" },
                    { spanish: "el sobrino", english: "nephew", pronunciation: "soh-BREE-noh" },
                    { spanish: "la sobrina", english: "niece", pronunciation: "soh-BREE-nah" },
                    { spanish: "el nieto", english: "grandson", pronunciation: "NYEH-toh" },
                    { spanish: "la nieta", english: "granddaughter", pronunciation: "NYEH-tah" }
                ]
            },
            {
                title: "Other Family Terms",
                type: "vocab",
                content: [
                    { spanish: "el esposo / marido", english: "husband", pronunciation: "ehs-POH-soh / mah-REE-doh" },
                    { spanish: "la esposa / mujer", english: "wife", pronunciation: "ehs-POH-sah / moo-HEHR" },
                    { spanish: "el suegro", english: "father-in-law", pronunciation: "SWEH-groh" },
                    { spanish: "la suegra", english: "mother-in-law", pronunciation: "SWEH-grah" },
                    { spanish: "el cuñado", english: "brother-in-law", pronunciation: "koo-NYAH-doh" },
                    { spanish: "la cuñada", english: "sister-in-law", pronunciation: "koo-NYAH-dah" },
                    { spanish: "el novio", english: "boyfriend", pronunciation: "NOH-vyoh" },
                    { spanish: "la novia", english: "girlfriend", pronunciation: "NOH-vyah" }
                ]
            },
            {
                title: "Talking About Family",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Tienes hermanos?", english: "Do you have siblings?" },
                    { speaker: "Juan", spanish: "Sí, tengo dos hermanas y un hermano.", english: "Yes, I have two sisters and one brother." },
                    { speaker: "María", spanish: "¡Una familia grande! ¿Cómo se llaman?", english: "A big family! What are their names?" },
                    { speaker: "Juan", spanish: "Mis hermanas se llaman Ana y Carmen. Mi hermano es Luis.", english: "My sisters are named Ana and Carmen. My brother is Luis." },
                    { speaker: "María", spanish: "¿Y tus padres?", english: "And your parents?" },
                    { speaker: "Juan", spanish: "Mi madre se llama Rosa y mi padre se llama Pedro.", english: "My mother's name is Rosa and my father's name is Pedro." }
                ]
            }
        ]
    },
    {
        id: 7,
        month: 1,
        title: "Colors & Descriptions",
        description: "Describe things using colors and adjectives",
        xp: 25,
        sections: [
            {
                title: "Basic Colors",
                type: "vocab",
                content: [
                    { spanish: "rojo", english: "red", pronunciation: "ROH-hoh" },
                    { spanish: "azul", english: "blue", pronunciation: "ah-SOOL" },
                    { spanish: "verde", english: "green", pronunciation: "BEHR-deh" },
                    { spanish: "amarillo", english: "yellow", pronunciation: "ah-mah-REE-yoh" },
                    { spanish: "naranja", english: "orange", pronunciation: "nah-RAHN-hah" },
                    { spanish: "morado / púrpura", english: "purple", pronunciation: "moh-RAH-doh" },
                    { spanish: "rosa / rosado", english: "pink", pronunciation: "ROH-sah" },
                    { spanish: "blanco", english: "white", pronunciation: "BLAHN-koh" },
                    { spanish: "negro", english: "black", pronunciation: "NEH-groh" },
                    { spanish: "gris", english: "gray", pronunciation: "grees" },
                    { spanish: "marrón / café", english: "brown", pronunciation: "mah-RROHN" }
                ]
            },
            {
                title: "Color Agreement",
                type: "grammar",
                explanation: "Most colors agree in gender and number with the noun. Colors ending in -o change to -a for feminine. Colors ending in -e or consonants don't change for gender, only for plural.",
                examples: [
                    { spanish: "El carro rojo (m)", english: "The red car" },
                    { spanish: "La casa roja (f)", english: "The red house" },
                    { spanish: "Los carros rojos (m pl)", english: "The red cars" },
                    { spanish: "Las casas rojas (f pl)", english: "The red houses" },
                    { spanish: "El libro verde (no change)", english: "The green book" },
                    { spanish: "La mesa verde (no change)", english: "The green table" },
                    { spanish: "Los ojos azules", english: "The blue eyes" }
                ]
            },
            {
                title: "Descriptive Adjectives",
                type: "vocab",
                content: [
                    { spanish: "grande", english: "big/large" },
                    { spanish: "pequeño/a", english: "small" },
                    { spanish: "alto/a", english: "tall" },
                    { spanish: "bajo/a", english: "short" },
                    { spanish: "largo/a", english: "long" },
                    { spanish: "corto/a", english: "short (length)" },
                    { spanish: "nuevo/a", english: "new" },
                    { spanish: "viejo/a", english: "old" },
                    { spanish: "bonito/a", english: "pretty" },
                    { spanish: "feo/a", english: "ugly" },
                    { spanish: "bueno/a", english: "good" },
                    { spanish: "malo/a", english: "bad" }
                ]
            },
            {
                title: "Describing Things",
                type: "dialogue",
                lines: [
                    { speaker: "Cliente", spanish: "Busco una camisa.", english: "I'm looking for a shirt." },
                    { speaker: "Vendedor", spanish: "¿De qué color?", english: "What color?" },
                    { speaker: "Cliente", spanish: "Azul. Y grande.", english: "Blue. And large." },
                    { speaker: "Vendedor", spanish: "Tenemos esta camisa azul. Es muy bonita.", english: "We have this blue shirt. It's very pretty." },
                    { speaker: "Cliente", spanish: "Es perfecta. ¿Cuánto cuesta?", english: "It's perfect. How much does it cost?" },
                    { speaker: "Vendedor", spanish: "Veinte dólares.", english: "Twenty dollars." }
                ]
            }
        ]
    },
    {
        id: 8,
        month: 1,
        title: "Days & Time",
        description: "Talk about days of the week and tell time",
        xp: 25,
        sections: [
            {
                title: "Days of the Week",
                type: "vocab",
                content: [
                    { spanish: "lunes", english: "Monday", pronunciation: "LOO-nehs" },
                    { spanish: "martes", english: "Tuesday", pronunciation: "MAR-tehs" },
                    { spanish: "miércoles", english: "Wednesday", pronunciation: "MYEHR-koh-lehs" },
                    { spanish: "jueves", english: "Thursday", pronunciation: "HWEH-vehs" },
                    { spanish: "viernes", english: "Friday", pronunciation: "VYEHR-nehs" },
                    { spanish: "sábado", english: "Saturday", pronunciation: "SAH-bah-doh" },
                    { spanish: "domingo", english: "Sunday", pronunciation: "doh-MEEN-goh" }
                ]
            },
            {
                title: "Using Days",
                type: "grammar",
                explanation: "Days are NOT capitalized in Spanish. Use 'el' before a day for 'on that day'. Use 'los' for recurring events. The week starts on Monday in Spanish-speaking countries.",
                examples: [
                    { spanish: "Hoy es lunes.", english: "Today is Monday." },
                    { spanish: "El viernes voy al cine.", english: "On Friday I'm going to the movies." },
                    { spanish: "Los sábados trabajo.", english: "On Saturdays I work." },
                    { spanish: "¿Qué día es hoy?", english: "What day is today?" },
                    { spanish: "Mañana es miércoles.", english: "Tomorrow is Wednesday." },
                    { spanish: "Ayer fue domingo.", english: "Yesterday was Sunday." }
                ]
            },
            {
                title: "Telling Time",
                type: "grammar",
                explanation: "Use 'Es la una' for 1:00 and 'Son las + number' for other hours. Add 'y' for minutes after, 'menos' for minutes before.",
                examples: [
                    { spanish: "¿Qué hora es?", english: "What time is it?" },
                    { spanish: "Es la una.", english: "It's 1:00." },
                    { spanish: "Son las dos.", english: "It's 2:00." },
                    { spanish: "Son las tres y media.", english: "It's 3:30." },
                    { spanish: "Son las cinco y cuarto.", english: "It's 5:15." },
                    { spanish: "Son las ocho menos diez.", english: "It's 7:50 (ten to eight)." },
                    { spanish: "Es mediodía.", english: "It's noon." },
                    { spanish: "Es medianoche.", english: "It's midnight." }
                ]
            },
            {
                title: "Time Expressions",
                type: "vocab",
                content: [
                    { spanish: "de la mañana", english: "in the morning (AM)" },
                    { spanish: "de la tarde", english: "in the afternoon (PM)" },
                    { spanish: "de la noche", english: "at night (PM)" },
                    { spanish: "por la mañana", english: "during the morning" },
                    { spanish: "por la tarde", english: "during the afternoon" },
                    { spanish: "por la noche", english: "during the night" },
                    { spanish: "temprano", english: "early" },
                    { spanish: "tarde", english: "late" }
                ]
            }
        ]
    },
    {
        id: 9,
        month: 1,
        title: "Food & Drinks",
        description: "Essential food vocabulary for eating out",
        xp: 25,
        sections: [
            {
                title: "Common Foods",
                type: "vocab",
                content: [
                    { spanish: "el pan", english: "bread", pronunciation: "pahn" },
                    { spanish: "el arroz", english: "rice", pronunciation: "ah-RROHS" },
                    { spanish: "la carne", english: "meat", pronunciation: "KAR-neh" },
                    { spanish: "el pollo", english: "chicken", pronunciation: "POH-yoh" },
                    { spanish: "el pescado", english: "fish", pronunciation: "pehs-KAH-doh" },
                    { spanish: "los huevos", english: "eggs", pronunciation: "WEH-vohs" },
                    { spanish: "el queso", english: "cheese", pronunciation: "KEH-soh" },
                    { spanish: "la ensalada", english: "salad", pronunciation: "ehn-sah-LAH-dah" },
                    { spanish: "la sopa", english: "soup", pronunciation: "SOH-pah" },
                    { spanish: "las verduras", english: "vegetables", pronunciation: "vehr-DOO-rahs" }
                ]
            },
            {
                title: "Fruits",
                type: "vocab",
                content: [
                    { spanish: "la manzana", english: "apple", pronunciation: "mahn-SAH-nah" },
                    { spanish: "el plátano / la banana", english: "banana", pronunciation: "PLAH-tah-noh" },
                    { spanish: "la naranja", english: "orange", pronunciation: "nah-RAHN-hah" },
                    { spanish: "la fresa", english: "strawberry", pronunciation: "FREH-sah" },
                    { spanish: "la uva", english: "grape", pronunciation: "OO-vah" },
                    { spanish: "el limón", english: "lemon/lime", pronunciation: "lee-MOHN" },
                    { spanish: "la piña", english: "pineapple", pronunciation: "PEE-nyah" },
                    { spanish: "el mango", english: "mango", pronunciation: "MAHN-goh" }
                ]
            },
            {
                title: "Drinks",
                type: "vocab",
                content: [
                    { spanish: "el agua", english: "water", pronunciation: "AH-gwah" },
                    { spanish: "el café", english: "coffee", pronunciation: "kah-FEH" },
                    { spanish: "el té", english: "tea", pronunciation: "teh" },
                    { spanish: "la leche", english: "milk", pronunciation: "LEH-cheh" },
                    { spanish: "el jugo / zumo", english: "juice", pronunciation: "HOO-goh" },
                    { spanish: "el refresco", english: "soft drink/soda", pronunciation: "reh-FREHS-koh" },
                    { spanish: "la cerveza", english: "beer", pronunciation: "sehr-VEH-sah" },
                    { spanish: "el vino", english: "wine", pronunciation: "VEE-noh" }
                ]
            },
            {
                title: "At a Restaurant",
                type: "dialogue",
                lines: [
                    { speaker: "Mesero", spanish: "Buenas tardes. ¿Qué desean ordenar?", english: "Good afternoon. What would you like to order?" },
                    { speaker: "Cliente", spanish: "Para mí, el pollo con arroz.", english: "For me, the chicken with rice." },
                    { speaker: "Mesero", spanish: "¿Y para tomar?", english: "And to drink?" },
                    { speaker: "Cliente", spanish: "Un agua con limón, por favor.", english: "A water with lemon, please." },
                    { speaker: "Mesero", spanish: "¿Algo más?", english: "Anything else?" },
                    { speaker: "Cliente", spanish: "No, gracias. ¿Cuánto es?", english: "No, thanks. How much is it?" },
                    { speaker: "Mesero", spanish: "Son quince dólares.", english: "It's fifteen dollars." },
                    { speaker: "Cliente", spanish: "Aquí tiene. Gracias.", english: "Here you go. Thanks." }
                ]
            }
        ]
    },
    {
        id: 10,
        month: 1,
        title: "The Verb TENER (To Have)",
        description: "Master this essential verb and its special uses",
        xp: 30,
        sections: [
            {
                title: "TENER Conjugation",
                type: "grammar",
                explanation: "TENER (to have) is irregular but essential. Notice the 'ie' change in some forms and the irregular 'yo' form.",
                examples: [
                    { spanish: "Yo tengo", english: "I have" },
                    { spanish: "Tú tienes", english: "You have (informal)" },
                    { spanish: "Él/Ella/Usted tiene", english: "He/She has, You have (formal)" },
                    { spanish: "Nosotros tenemos", english: "We have" },
                    { spanish: "Vosotros tenéis", english: "You all have (Spain)" },
                    { spanish: "Ellos/Ellas/Ustedes tienen", english: "They have, You all have" }
                ]
            },
            {
                title: "TENER for Possession",
                type: "vocab",
                content: [
                    { spanish: "Tengo un carro.", english: "I have a car." },
                    { spanish: "Ella tiene dos gatos.", english: "She has two cats." },
                    { spanish: "¿Tienes hermanos?", english: "Do you have siblings?" },
                    { spanish: "Tenemos una casa grande.", english: "We have a big house." },
                    { spanish: "No tengo dinero.", english: "I don't have money." },
                    { spanish: "¿Tiene usted reservación?", english: "Do you have a reservation?" }
                ]
            },
            {
                title: "TENER Expressions",
                type: "grammar",
                explanation: "Spanish uses TENER where English uses 'to be' for many common expressions. These are essential to memorize!",
                examples: [
                    { spanish: "Tengo hambre.", english: "I'm hungry. (I have hunger)" },
                    { spanish: "Tengo sed.", english: "I'm thirsty. (I have thirst)" },
                    { spanish: "Tengo frío.", english: "I'm cold. (I have cold)" },
                    { spanish: "Tengo calor.", english: "I'm hot. (I have heat)" },
                    { spanish: "Tengo sueño.", english: "I'm sleepy. (I have sleep)" },
                    { spanish: "Tengo miedo.", english: "I'm scared. (I have fear)" },
                    { spanish: "Tengo prisa.", english: "I'm in a hurry. (I have hurry)" },
                    { spanish: "Tengo razón.", english: "I'm right. (I have reason)" },
                    { spanish: "Tengo suerte.", english: "I'm lucky. (I have luck)" },
                    { spanish: "Tengo 25 años.", english: "I'm 25 years old. (I have 25 years)" }
                ]
            },
            {
                title: "TENER QUE (Have To)",
                type: "grammar",
                explanation: "TENER QUE + infinitive means 'to have to' do something. It expresses obligation or necessity.",
                examples: [
                    { spanish: "Tengo que trabajar.", english: "I have to work." },
                    { spanish: "Tienes que estudiar.", english: "You have to study." },
                    { spanish: "Tenemos que ir.", english: "We have to go." },
                    { spanish: "Tiene que comer.", english: "He/She has to eat." },
                    { spanish: "¿Tienes que salir?", english: "Do you have to leave?" },
                    { spanish: "No tengo que hacerlo.", english: "I don't have to do it." }
                ]
            }
        ]
    },
    // ========== MONTH 2: BUILDING (Lessons 11-20) ==========
    {
        id: 11,
        month: 2,
        title: "Regular -AR Verbs",
        description: "Learn to conjugate the most common verb type",
        xp: 30,
        sections: [
            {
                title: "-AR Verb Endings",
                type: "grammar",
                explanation: "Most Spanish verbs end in -AR. Remove the -AR and add these endings: -o, -as, -a, -amos, -áis, -an",
                examples: [
                    { spanish: "HABLAR (to speak)", english: "Example verb" },
                    { spanish: "Yo hablo", english: "I speak" },
                    { spanish: "Tú hablas", english: "You speak" },
                    { spanish: "Él/Ella habla", english: "He/She speaks" },
                    { spanish: "Nosotros hablamos", english: "We speak" },
                    { spanish: "Ellos hablan", english: "They speak" }
                ]
            },
            {
                title: "Common -AR Verbs",
                type: "vocab",
                content: [
                    { spanish: "hablar", english: "to speak" },
                    { spanish: "trabajar", english: "to work" },
                    { spanish: "estudiar", english: "to study" },
                    { spanish: "comprar", english: "to buy" },
                    { spanish: "cocinar", english: "to cook" },
                    { spanish: "caminar", english: "to walk" },
                    { spanish: "bailar", english: "to dance" },
                    { spanish: "cantar", english: "to sing" },
                    { spanish: "escuchar", english: "to listen" },
                    { spanish: "mirar", english: "to look/watch" },
                    { spanish: "llamar", english: "to call" },
                    { spanish: "llegar", english: "to arrive" }
                ]
            },
            {
                title: "More -AR Verbs",
                type: "vocab",
                content: [
                    { spanish: "tomar", english: "to take/drink" },
                    { spanish: "desayunar", english: "to have breakfast" },
                    { spanish: "cenar", english: "to have dinner" },
                    { spanish: "viajar", english: "to travel" },
                    { spanish: "descansar", english: "to rest" },
                    { spanish: "nadar", english: "to swim" },
                    { spanish: "preguntar", english: "to ask" },
                    { spanish: "contestar", english: "to answer" },
                    { spanish: "ayudar", english: "to help" },
                    { spanish: "necesitar", english: "to need" }
                ]
            },
            {
                title: "Using -AR Verbs",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Trabajas mañana?", english: "Do you work tomorrow?" },
                    { speaker: "Luis", spanish: "No, mañana no trabajo. Descanso.", english: "No, I don't work tomorrow. I rest." },
                    { speaker: "Ana", spanish: "¿Qué haces los fines de semana?", english: "What do you do on weekends?" },
                    { speaker: "Luis", spanish: "Estudio español y cocino mucho.", english: "I study Spanish and cook a lot." },
                    { speaker: "Ana", spanish: "¡Qué bien! Yo bailo y canto.", english: "How nice! I dance and sing." },
                    { speaker: "Luis", spanish: "¿Tomamos un café?", english: "Shall we have a coffee?" }
                ]
            }
        ]
    },
    {
        id: 12,
        month: 2,
        title: "Regular -ER and -IR Verbs",
        description: "Complete your knowledge of regular verb conjugations",
        xp: 30,
        sections: [
            {
                title: "-ER Verb Endings",
                type: "grammar",
                explanation: "Remove the -ER and add: -o, -es, -e, -emos, -éis, -en. Very similar to -AR verbs!",
                examples: [
                    { spanish: "COMER (to eat)", english: "Example verb" },
                    { spanish: "Yo como", english: "I eat" },
                    { spanish: "Tú comes", english: "You eat" },
                    { spanish: "Él/Ella come", english: "He/She eats" },
                    { spanish: "Nosotros comemos", english: "We eat" },
                    { spanish: "Ellos comen", english: "They eat" }
                ]
            },
            {
                title: "Common -ER Verbs",
                type: "vocab",
                content: [
                    { spanish: "comer", english: "to eat" },
                    { spanish: "beber", english: "to drink" },
                    { spanish: "leer", english: "to read" },
                    { spanish: "aprender", english: "to learn" },
                    { spanish: "comprender", english: "to understand" },
                    { spanish: "correr", english: "to run" },
                    { spanish: "vender", english: "to sell" },
                    { spanish: "creer", english: "to believe" },
                    { spanish: "responder", english: "to respond" },
                    { spanish: "deber", english: "must/to owe" }
                ]
            },
            {
                title: "-IR Verb Endings",
                type: "grammar",
                explanation: "Remove the -IR and add: -o, -es, -e, -imos, -ís, -en. Only 'nosotros' and 'vosotros' differ from -ER verbs!",
                examples: [
                    { spanish: "VIVIR (to live)", english: "Example verb" },
                    { spanish: "Yo vivo", english: "I live" },
                    { spanish: "Tú vives", english: "You live" },
                    { spanish: "Él/Ella vive", english: "He/She lives" },
                    { spanish: "Nosotros vivimos", english: "We live" },
                    { spanish: "Ellos viven", english: "They live" }
                ]
            },
            {
                title: "Common -IR Verbs",
                type: "vocab",
                content: [
                    { spanish: "vivir", english: "to live" },
                    { spanish: "escribir", english: "to write" },
                    { spanish: "abrir", english: "to open" },
                    { spanish: "recibir", english: "to receive" },
                    { spanish: "decidir", english: "to decide" },
                    { spanish: "subir", english: "to go up/upload" },
                    { spanish: "describir", english: "to describe" },
                    { spanish: "compartir", english: "to share" },
                    { spanish: "asistir", english: "to attend" },
                    { spanish: "existir", english: "to exist" }
                ]
            }
        ]
    },
    {
        id: 13,
        month: 2,
        title: "The Verb IR (To Go)",
        description: "Learn this essential irregular verb",
        xp: 30,
        sections: [
            {
                title: "IR Conjugation",
                type: "grammar",
                explanation: "IR (to go) is completely irregular. Memorize these forms - you'll use them constantly!",
                examples: [
                    { spanish: "Yo voy", english: "I go" },
                    { spanish: "Tú vas", english: "You go" },
                    { spanish: "Él/Ella/Usted va", english: "He/She goes, You go (formal)" },
                    { spanish: "Nosotros vamos", english: "We go" },
                    { spanish: "Vosotros vais", english: "You all go (Spain)" },
                    { spanish: "Ellos/Ellas/Ustedes van", english: "They go, You all go" }
                ]
            },
            {
                title: "IR + A + Place",
                type: "grammar",
                explanation: "Use 'ir a' followed by a place to say where you're going. Note: 'a + el' contracts to 'al'.",
                examples: [
                    { spanish: "Voy a la escuela.", english: "I go to school." },
                    { spanish: "Va al supermercado.", english: "He goes to the supermarket." },
                    { spanish: "Vamos a la playa.", english: "We're going to the beach." },
                    { spanish: "Van al cine.", english: "They're going to the movies." },
                    { spanish: "¿Vas a casa?", english: "Are you going home?" },
                    { spanish: "No voy al trabajo hoy.", english: "I'm not going to work today." }
                ]
            },
            {
                title: "IR + A + Infinitive (Future)",
                type: "grammar",
                explanation: "IR + a + infinitive expresses future actions (going to do something). This is very commonly used!",
                examples: [
                    { spanish: "Voy a comer.", english: "I'm going to eat." },
                    { spanish: "Vas a estudiar.", english: "You're going to study." },
                    { spanish: "Vamos a bailar.", english: "We're going to dance." },
                    { spanish: "Van a viajar.", english: "They're going to travel." },
                    { spanish: "¿Qué vas a hacer?", english: "What are you going to do?" },
                    { spanish: "Voy a aprender español.", english: "I'm going to learn Spanish." }
                ]
            },
            {
                title: "Places",
                type: "vocab",
                content: [
                    { spanish: "la escuela", english: "school" },
                    { spanish: "el trabajo", english: "work" },
                    { spanish: "el supermercado", english: "supermarket" },
                    { spanish: "el restaurante", english: "restaurant" },
                    { spanish: "el banco", english: "bank" },
                    { spanish: "el hospital", english: "hospital" },
                    { spanish: "la iglesia", english: "church" },
                    { spanish: "el parque", english: "park" },
                    { spanish: "la playa", english: "beach" },
                    { spanish: "el cine", english: "movie theater" },
                    { spanish: "el gimnasio", english: "gym" },
                    { spanish: "la tienda", english: "store" }
                ]
            }
        ]
    },
    {
        id: 14,
        month: 2,
        title: "Question Words & Sentences",
        description: "Ask questions like a native",
        xp: 25,
        sections: [
            {
                title: "Question Words",
                type: "vocab",
                content: [
                    { spanish: "¿Qué?", english: "What?" },
                    { spanish: "¿Quién? / ¿Quiénes?", english: "Who? (singular/plural)" },
                    { spanish: "¿Dónde?", english: "Where?" },
                    { spanish: "¿Adónde?", english: "To where?" },
                    { spanish: "¿De dónde?", english: "From where?" },
                    { spanish: "¿Cuándo?", english: "When?" },
                    { spanish: "¿Por qué?", english: "Why?" },
                    { spanish: "¿Cómo?", english: "How?" },
                    { spanish: "¿Cuánto/a?", english: "How much?" },
                    { spanish: "¿Cuántos/as?", english: "How many?" },
                    { spanish: "¿Cuál? / ¿Cuáles?", english: "Which? (singular/plural)" }
                ]
            },
            {
                title: "Forming Questions",
                type: "grammar",
                explanation: "In Spanish, you can form questions by: 1) Adding question marks to a statement, 2) Inverting subject and verb, or 3) Using a question word at the start.",
                examples: [
                    { spanish: "¿Hablas español?", english: "Do you speak Spanish?" },
                    { spanish: "¿Español hablas tú?", english: "Spanish do you speak?" },
                    { spanish: "¿Qué estudias?", english: "What do you study?" },
                    { spanish: "¿Dónde vives?", english: "Where do you live?" },
                    { spanish: "¿Cuándo llegas?", english: "When do you arrive?" },
                    { spanish: "¿Por qué estudias español?", english: "Why do you study Spanish?" }
                ]
            },
            {
                title: "Common Questions",
                type: "vocab",
                content: [
                    { spanish: "¿Cómo te llamas?", english: "What's your name?" },
                    { spanish: "¿De dónde eres?", english: "Where are you from?" },
                    { spanish: "¿Cuántos años tienes?", english: "How old are you?" },
                    { spanish: "¿Qué hora es?", english: "What time is it?" },
                    { spanish: "¿Dónde está el baño?", english: "Where is the bathroom?" },
                    { spanish: "¿Cuánto cuesta?", english: "How much does it cost?" },
                    { spanish: "¿Qué significa...?", english: "What does ... mean?" },
                    { spanish: "¿Puede ayudarme?", english: "Can you help me?" }
                ]
            },
            {
                title: "Q&A Practice",
                type: "dialogue",
                lines: [
                    { speaker: "A", spanish: "¿De dónde eres?", english: "Where are you from?" },
                    { speaker: "B", spanish: "Soy de Colombia. ¿Y tú?", english: "I'm from Colombia. And you?" },
                    { speaker: "A", spanish: "Soy de Estados Unidos. ¿Qué haces aquí?", english: "I'm from the United States. What are you doing here?" },
                    { speaker: "B", spanish: "Estudio en la universidad. ¿Y tú qué haces?", english: "I study at the university. And what do you do?" },
                    { speaker: "A", spanish: "Trabajo en un hotel. ¿Cuánto tiempo llevas aquí?", english: "I work at a hotel. How long have you been here?" },
                    { speaker: "B", spanish: "Dos años. ¿Por qué estudias español?", english: "Two years. Why are you studying Spanish?" },
                    { speaker: "A", spanish: "Porque me encanta la cultura latina.", english: "Because I love Latin culture." }
                ]
            }
        ]
    },
    {
        id: 15,
        month: 2,
        title: "Months & Seasons",
        description: "Talk about the calendar year",
        xp: 20,
        sections: [
            {
                title: "Months of the Year",
                type: "vocab",
                content: [
                    { spanish: "enero", english: "January", pronunciation: "eh-NEH-roh" },
                    { spanish: "febrero", english: "February", pronunciation: "feh-BREH-roh" },
                    { spanish: "marzo", english: "March", pronunciation: "MAR-soh" },
                    { spanish: "abril", english: "April", pronunciation: "ah-BREEL" },
                    { spanish: "mayo", english: "May", pronunciation: "MAH-yoh" },
                    { spanish: "junio", english: "June", pronunciation: "HOO-nyoh" },
                    { spanish: "julio", english: "July", pronunciation: "HOO-lyoh" },
                    { spanish: "agosto", english: "August", pronunciation: "ah-GOHS-toh" },
                    { spanish: "septiembre", english: "September", pronunciation: "sehp-TYEHM-breh" },
                    { spanish: "octubre", english: "October", pronunciation: "ohk-TOO-breh" },
                    { spanish: "noviembre", english: "November", pronunciation: "noh-VYEHM-breh" },
                    { spanish: "diciembre", english: "December", pronunciation: "dee-SYEHM-breh" }
                ]
            },
            {
                title: "Seasons",
                type: "vocab",
                content: [
                    { spanish: "la primavera", english: "spring", pronunciation: "pree-mah-VEH-rah" },
                    { spanish: "el verano", english: "summer", pronunciation: "veh-RAH-noh" },
                    { spanish: "el otoño", english: "fall/autumn", pronunciation: "oh-TOH-nyoh" },
                    { spanish: "el invierno", english: "winter", pronunciation: "een-VYEHR-noh" }
                ]
            },
            {
                title: "Dates",
                type: "grammar",
                explanation: "Months and seasons are NOT capitalized in Spanish. Use 'en' for 'in' with months. Dates use cardinal numbers except for the first (primero).",
                examples: [
                    { spanish: "Mi cumpleaños es en mayo.", english: "My birthday is in May." },
                    { spanish: "Es el primero de enero.", english: "It's January 1st." },
                    { spanish: "Hoy es el quince de agosto.", english: "Today is August 15th." },
                    { spanish: "La primavera empieza en marzo.", english: "Spring begins in March." },
                    { spanish: "En verano hace calor.", english: "In summer it's hot." },
                    { spanish: "¿Cuál es la fecha de hoy?", english: "What's today's date?" }
                ]
            },
            {
                title: "Weather by Season",
                type: "vocab",
                content: [
                    { spanish: "Hace calor.", english: "It's hot." },
                    { spanish: "Hace frío.", english: "It's cold." },
                    { spanish: "Hace sol.", english: "It's sunny." },
                    { spanish: "Hace viento.", english: "It's windy." },
                    { spanish: "Llueve. / Está lloviendo.", english: "It's raining." },
                    { spanish: "Nieva. / Está nevando.", english: "It's snowing." },
                    { spanish: "Está nublado.", english: "It's cloudy." },
                    { spanish: "Hace buen tiempo.", english: "The weather is nice." },
                    { spanish: "Hace mal tiempo.", english: "The weather is bad." }
                ]
            }
        ]
    },
    {
        id: 16,
        month: 2,
        title: "House & Home",
        description: "Vocabulary for describing your home",
        xp: 25,
        sections: [
            {
                title: "Rooms of the House",
                type: "vocab",
                content: [
                    { spanish: "la casa", english: "house/home" },
                    { spanish: "el apartamento", english: "apartment" },
                    { spanish: "la cocina", english: "kitchen" },
                    { spanish: "el comedor", english: "dining room" },
                    { spanish: "la sala / el salón", english: "living room" },
                    { spanish: "el dormitorio / la habitación", english: "bedroom" },
                    { spanish: "el baño", english: "bathroom" },
                    { spanish: "el garaje", english: "garage" },
                    { spanish: "el jardín", english: "garden" },
                    { spanish: "el patio", english: "patio/yard" },
                    { spanish: "el sótano", english: "basement" },
                    { spanish: "el ático", english: "attic" }
                ]
            },
            {
                title: "Furniture",
                type: "vocab",
                content: [
                    { spanish: "la cama", english: "bed" },
                    { spanish: "la mesa", english: "table" },
                    { spanish: "la silla", english: "chair" },
                    { spanish: "el sofá", english: "sofa/couch" },
                    { spanish: "el escritorio", english: "desk" },
                    { spanish: "el armario", english: "closet/wardrobe" },
                    { spanish: "la estantería", english: "bookshelf" },
                    { spanish: "la lámpara", english: "lamp" },
                    { spanish: "la alfombra", english: "rug/carpet" },
                    { spanish: "el espejo", english: "mirror" }
                ]
            },
            {
                title: "Household Items",
                type: "vocab",
                content: [
                    { spanish: "la televisión / el televisor", english: "television" },
                    { spanish: "el refrigerador / la nevera", english: "refrigerator" },
                    { spanish: "la estufa / la cocina", english: "stove" },
                    { spanish: "el microondas", english: "microwave" },
                    { spanish: "la lavadora", english: "washing machine" },
                    { spanish: "el lavaplatos", english: "dishwasher" },
                    { spanish: "la computadora", english: "computer" },
                    { spanish: "el teléfono", english: "telephone" }
                ]
            },
            {
                title: "Describing a Home",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cómo es tu casa?", english: "What's your house like?" },
                    { speaker: "Pedro", spanish: "Es grande. Tiene tres dormitorios.", english: "It's big. It has three bedrooms." },
                    { speaker: "Ana", spanish: "¿Tiene jardín?", english: "Does it have a garden?" },
                    { speaker: "Pedro", spanish: "Sí, tenemos un jardín pequeño.", english: "Yes, we have a small garden." },
                    { speaker: "Ana", spanish: "Mi apartamento es pequeño pero cómodo.", english: "My apartment is small but comfortable." },
                    { speaker: "Pedro", spanish: "¿Cuántos baños tiene?", english: "How many bathrooms does it have?" },
                    { spanish: "Ana", spanish: "Solo uno, pero es suficiente.", english: "Only one, but it's enough." }
                ]
            }
        ]
    },
    {
        id: 17,
        month: 2,
        title: "Daily Routine",
        description: "Describe your typical day in Spanish",
        xp: 25,
        sections: [
            {
                title: "Morning Activities",
                type: "vocab",
                content: [
                    { spanish: "despertarse", english: "to wake up" },
                    { spanish: "levantarse", english: "to get up" },
                    { spanish: "ducharse", english: "to shower" },
                    { spanish: "bañarse", english: "to bathe" },
                    { spanish: "lavarse (la cara, los dientes)", english: "to wash (face, teeth)" },
                    { spanish: "peinarse", english: "to comb one's hair" },
                    { spanish: "vestirse", english: "to get dressed" },
                    { spanish: "maquillarse", english: "to put on makeup" },
                    { spanish: "afeitarse", english: "to shave" },
                    { spanish: "desayunar", english: "to have breakfast" }
                ]
            },
            {
                title: "Reflexive Verbs",
                type: "grammar",
                explanation: "Many daily routine verbs are reflexive (the action is done to oneself). The reflexive pronouns are: me, te, se, nos, os, se.",
                examples: [
                    { spanish: "Me despierto a las siete.", english: "I wake up at seven." },
                    { spanish: "Te duchas por la mañana.", english: "You shower in the morning." },
                    { spanish: "Se viste rápido.", english: "He/She gets dressed quickly." },
                    { spanish: "Nos levantamos temprano.", english: "We get up early." },
                    { spanish: "Se acuestan tarde.", english: "They go to bed late." }
                ]
            },
            {
                title: "Evening Activities",
                type: "vocab",
                content: [
                    { spanish: "almorzar", english: "to have lunch" },
                    { spanish: "cenar", english: "to have dinner" },
                    { spanish: "relajarse", english: "to relax" },
                    { spanish: "ver la televisión", english: "to watch TV" },
                    { spanish: "leer", english: "to read" },
                    { spanish: "prepararse para dormir", english: "to get ready for bed" },
                    { spanish: "quitarse la ropa", english: "to take off clothes" },
                    { spanish: "acostarse", english: "to go to bed" },
                    { spanish: "dormirse", english: "to fall asleep" }
                ]
            },
            {
                title: "A Typical Day",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿A qué hora te levantas?", english: "What time do you get up?" },
                    { speaker: "Carlos", spanish: "Me levanto a las seis y media.", english: "I get up at six thirty." },
                    { speaker: "María", spanish: "¡Muy temprano! ¿Y qué haces primero?", english: "Very early! And what do you do first?" },
                    { speaker: "Carlos", spanish: "Primero me ducho, luego desayuno.", english: "First I shower, then I have breakfast." },
                    { speaker: "María", spanish: "Yo me despierto a las siete pero no me levanto hasta las siete y media.", english: "I wake up at seven but I don't get up until seven thirty." },
                    { speaker: "Carlos", spanish: "¿A qué hora te acuestas?", english: "What time do you go to bed?" },
                    { speaker: "María", spanish: "Me acuesto a las once, después de ver la tele.", english: "I go to bed at eleven, after watching TV." }
                ]
            }
        ]
    },
    {
        id: 18,
        month: 2,
        title: "Shopping",
        description: "Navigate stores and make purchases",
        xp: 25,
        sections: [
            {
                title: "Shopping Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "la tienda", english: "store" },
                    { spanish: "el centro comercial", english: "shopping mall" },
                    { spanish: "el mercado", english: "market" },
                    { spanish: "la caja", english: "cash register" },
                    { spanish: "el/la dependiente", english: "sales clerk" },
                    { spanish: "el precio", english: "price" },
                    { spanish: "el descuento", english: "discount" },
                    { spanish: "la oferta", english: "sale/offer" },
                    { spanish: "el recibo", english: "receipt" },
                    { spanish: "la tarjeta de crédito", english: "credit card" },
                    { spanish: "el efectivo", english: "cash" }
                ]
            },
            {
                title: "Clothing",
                type: "vocab",
                content: [
                    { spanish: "la camisa", english: "shirt" },
                    { spanish: "la camiseta", english: "t-shirt" },
                    { spanish: "los pantalones", english: "pants" },
                    { spanish: "los jeans", english: "jeans" },
                    { spanish: "la falda", english: "skirt" },
                    { spanish: "el vestido", english: "dress" },
                    { spanish: "el abrigo", english: "coat" },
                    { spanish: "la chaqueta", english: "jacket" },
                    { spanish: "los zapatos", english: "shoes" },
                    { spanish: "las botas", english: "boots" },
                    { spanish: "el sombrero", english: "hat" },
                    { spanish: "los calcetines", english: "socks" }
                ]
            },
            {
                title: "Shopping Phrases",
                type: "vocab",
                content: [
                    { spanish: "¿Cuánto cuesta?", english: "How much does it cost?" },
                    { spanish: "¿Tiene esto en otra talla?", english: "Do you have this in another size?" },
                    { spanish: "¿Puedo probármelo?", english: "Can I try it on?" },
                    { spanish: "Me lo llevo.", english: "I'll take it." },
                    { spanish: "Es muy caro.", english: "It's very expensive." },
                    { spanish: "¿Tiene algo más barato?", english: "Do you have something cheaper?" },
                    { spanish: "¿Aceptan tarjeta?", english: "Do you accept cards?" },
                    { spanish: "Solo estoy mirando.", english: "I'm just looking." }
                ]
            },
            {
                title: "At the Store",
                type: "dialogue",
                lines: [
                    { speaker: "Dependiente", spanish: "Buenas tardes. ¿En qué puedo ayudarle?", english: "Good afternoon. How can I help you?" },
                    { speaker: "Cliente", spanish: "Busco una camisa azul.", english: "I'm looking for a blue shirt." },
                    { speaker: "Dependiente", spanish: "¿Qué talla usa?", english: "What size do you wear?" },
                    { speaker: "Cliente", spanish: "Mediana. ¿Cuánto cuesta esta?", english: "Medium. How much is this one?" },
                    { speaker: "Dependiente", spanish: "Treinta dólares. Está en oferta.", english: "Thirty dollars. It's on sale." },
                    { speaker: "Cliente", spanish: "Perfecto. ¿Puedo probármela?", english: "Perfect. Can I try it on?" },
                    { speaker: "Dependiente", spanish: "Sí, los probadores están al fondo.", english: "Yes, the fitting rooms are at the back." },
                    { speaker: "Cliente", spanish: "Me queda bien. Me la llevo.", english: "It fits well. I'll take it." }
                ]
            }
        ]
    },
    {
        id: 19,
        month: 2,
        title: "The Verb GUSTAR (To Like)",
        description: "Express likes and dislikes in Spanish",
        xp: 30,
        sections: [
            {
                title: "How GUSTAR Works",
                type: "grammar",
                explanation: "GUSTAR works differently! It literally means 'to please'. The thing you like is the subject. Use GUSTA for singular things, GUSTAN for plural.",
                examples: [
                    { spanish: "Me gusta el café.", english: "I like coffee. (Coffee pleases me)" },
                    { spanish: "Me gustan los tacos.", english: "I like tacos. (Tacos please me)" },
                    { spanish: "Te gusta bailar.", english: "You like to dance." },
                    { spanish: "Le gusta el fútbol.", english: "He/She likes soccer." },
                    { spanish: "Nos gustan las películas.", english: "We like movies." },
                    { spanish: "Les gusta viajar.", english: "They like to travel." }
                ]
            },
            {
                title: "Indirect Object Pronouns",
                type: "grammar",
                explanation: "These pronouns show WHO likes something: me (I), te (you), le (he/she/you formal), nos (we), os (you all-Spain), les (they/you all).",
                examples: [
                    { spanish: "A mí me gusta...", english: "I like... (emphatic)" },
                    { spanish: "A ti te gusta...", english: "You like... (emphatic)" },
                    { spanish: "A él le gusta...", english: "He likes..." },
                    { spanish: "A ella le gusta...", english: "She likes..." },
                    { spanish: "A nosotros nos gusta...", english: "We like..." },
                    { spanish: "A ellos les gusta...", english: "They like..." }
                ]
            },
            {
                title: "Similar Verbs",
                type: "vocab",
                content: [
                    { spanish: "encantar", english: "to love (things)", example: "Me encanta la música." },
                    { spanish: "interesar", english: "to interest", example: "Me interesa la historia." },
                    { spanish: "importar", english: "to matter", example: "No me importa." },
                    { spanish: "molestar", english: "to bother", example: "Me molesta el ruido." },
                    { spanish: "faltar", english: "to lack/need", example: "Me falta tiempo." },
                    { spanish: "quedar", english: "to remain/fit", example: "Me queda uno." },
                    { spanish: "doler", english: "to hurt", example: "Me duele la cabeza." },
                    { spanish: "parecer", english: "to seem", example: "Me parece bien." }
                ]
            },
            {
                title: "Talking About Likes",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Qué te gusta hacer los fines de semana?", english: "What do you like to do on weekends?" },
                    { speaker: "Luis", spanish: "Me encanta ir al cine. ¿Y a ti?", english: "I love going to the movies. And you?" },
                    { speaker: "Ana", spanish: "A mí me gusta leer y cocinar.", english: "I like reading and cooking." },
                    { speaker: "Luis", spanish: "¿Te gusta la comida mexicana?", english: "Do you like Mexican food?" },
                    { speaker: "Ana", spanish: "¡Me encanta! Especialmente los tacos.", english: "I love it! Especially tacos." },
                    { speaker: "Luis", spanish: "A mí también me gustan mucho.", english: "I really like them too." },
                    { speaker: "Ana", spanish: "¿No te gusta el picante?", english: "Don't you like spicy food?" },
                    { speaker: "Luis", spanish: "No mucho. Me molesta el estómago.", english: "Not much. It bothers my stomach." }
                ]
            }
        ]
    },
    {
        id: 20,
        month: 2,
        title: "Numbers 30-1000",
        description: "Count higher in Spanish",
        xp: 20,
        sections: [
            {
                title: "Tens (30-90)",
                type: "vocab",
                content: [
                    { spanish: "treinta", english: "30" },
                    { spanish: "cuarenta", english: "40" },
                    { spanish: "cincuenta", english: "50" },
                    { spanish: "sesenta", english: "60" },
                    { spanish: "setenta", english: "70" },
                    { spanish: "ochenta", english: "80" },
                    { spanish: "noventa", english: "90" }
                ]
            },
            {
                title: "Combining Numbers",
                type: "grammar",
                explanation: "From 31-99, use 'y' (and) between tens and units. Numbers 21-29 are written as one word, but 31+ are separate words.",
                examples: [
                    { spanish: "treinta y uno (31)", english: "thirty-one" },
                    { spanish: "cuarenta y cinco (45)", english: "forty-five" },
                    { spanish: "cincuenta y ocho (58)", english: "fifty-eight" },
                    { spanish: "sesenta y tres (63)", english: "sixty-three" },
                    { spanish: "setenta y siete (77)", english: "seventy-seven" },
                    { spanish: "ochenta y nueve (89)", english: "eighty-nine" },
                    { spanish: "noventa y nueve (99)", english: "ninety-nine" }
                ]
            },
            {
                title: "Hundreds",
                type: "vocab",
                content: [
                    { spanish: "cien", english: "100 (exactly)" },
                    { spanish: "ciento (uno, dos...)", english: "100+ (101, 102...)" },
                    { spanish: "doscientos/as", english: "200" },
                    { spanish: "trescientos/as", english: "300" },
                    { spanish: "cuatrocientos/as", english: "400" },
                    { spanish: "quinientos/as", english: "500" },
                    { spanish: "seiscientos/as", english: "600" },
                    { spanish: "setecientos/as", english: "700" },
                    { spanish: "ochocientos/as", english: "800" },
                    { spanish: "novecientos/as", english: "900" },
                    { spanish: "mil", english: "1000" }
                ]
            },
            {
                title: "Using Large Numbers",
                type: "grammar",
                explanation: "Hundreds agree in gender with the noun (doscientos dólares, doscientas personas). 'Cien' is used alone, 'ciento' before other numbers.",
                examples: [
                    { spanish: "Cien dólares", english: "100 dollars" },
                    { spanish: "Ciento veinte personas", english: "120 people" },
                    { spanish: "Doscientos cincuenta", english: "250" },
                    { spanish: "Quinientas mujeres", english: "500 women" },
                    { spanish: "Mil novecientos noventa", english: "1990" },
                    { spanish: "Dos mil veinticinco", english: "2025" }
                ]
            }
        ]
    },
    // ========== MONTH 3: FLUENCY (Lessons 21-30) ==========
    {
        id: 21,
        month: 3,
        title: "Past Tense: Preterite (-AR)",
        description: "Talk about completed past actions",
        xp: 35,
        sections: [
            {
                title: "Preterite -AR Endings",
                type: "grammar",
                explanation: "The preterite is used for completed actions in the past. For -AR verbs, add: -é, -aste, -ó, -amos, -asteis, -aron",
                examples: [
                    { spanish: "HABLAR → hablé, hablaste, habló, hablamos, hablasteis, hablaron", english: "I spoke, you spoke, he/she spoke, we spoke, you all spoke, they spoke" },
                    { spanish: "Ayer hablé con mi madre.", english: "Yesterday I spoke with my mother." },
                    { spanish: "Ella trabajó mucho.", english: "She worked a lot." },
                    { spanish: "Compramos una casa.", english: "We bought a house." },
                    { spanish: "¿Estudiaste para el examen?", english: "Did you study for the exam?" }
                ]
            },
            {
                title: "Time Markers for Preterite",
                type: "vocab",
                content: [
                    { spanish: "ayer", english: "yesterday" },
                    { spanish: "anoche", english: "last night" },
                    { spanish: "la semana pasada", english: "last week" },
                    { spanish: "el mes pasado", english: "last month" },
                    { spanish: "el año pasado", english: "last year" },
                    { spanish: "hace dos días", english: "two days ago" },
                    { spanish: "una vez", english: "once" },
                    { spanish: "de repente", english: "suddenly" }
                ]
            },
            {
                title: "Common -AR Preterite Forms",
                type: "vocab",
                content: [
                    { spanish: "caminé", english: "I walked" },
                    { spanish: "compré", english: "I bought" },
                    { spanish: "llegué", english: "I arrived" },
                    { spanish: "llamé", english: "I called" },
                    { spanish: "desayuné", english: "I had breakfast" },
                    { spanish: "terminé", english: "I finished" },
                    { spanish: "viajé", english: "I traveled" },
                    { spanish: "pagué", english: "I paid" }
                ]
            },
            {
                title: "Talking About Yesterday",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Qué hiciste ayer?", english: "What did you do yesterday?" },
                    { speaker: "Pedro", spanish: "Trabajé hasta las seis y después cené con amigos.", english: "I worked until six and then had dinner with friends." },
                    { speaker: "Ana", spanish: "¿Dónde cenaron?", english: "Where did you have dinner?" },
                    { speaker: "Pedro", spanish: "Cenamos en un restaurante italiano. ¿Y tú?", english: "We had dinner at an Italian restaurant. And you?" },
                    { speaker: "Ana", spanish: "Yo estudié todo el día. Tengo un examen mañana.", english: "I studied all day. I have an exam tomorrow." },
                    { speaker: "Pedro", spanish: "¡Buena suerte! ¿Descansaste algo?", english: "Good luck! Did you rest at all?" },
                    { speaker: "Ana", spanish: "Sí, miré una película por la noche.", english: "Yes, I watched a movie at night." }
                ]
            }
        ]
    },
    {
        id: 22,
        month: 3,
        title: "Past Tense: Preterite (-ER/-IR)",
        description: "Complete your preterite knowledge",
        xp: 35,
        sections: [
            {
                title: "Preterite -ER/-IR Endings",
                type: "grammar",
                explanation: "-ER and -IR verbs share the same preterite endings: -í, -iste, -ió, -imos, -isteis, -ieron",
                examples: [
                    { spanish: "COMER → comí, comiste, comió, comimos, comisteis, comieron", english: "I ate, you ate, he/she ate, we ate, you all ate, they ate" },
                    { spanish: "VIVIR → viví, viviste, vivió, vivimos, vivisteis, vivieron", english: "I lived, you lived, etc." },
                    { spanish: "Comí pizza anoche.", english: "I ate pizza last night." },
                    { spanish: "Escribió una carta.", english: "He/She wrote a letter." },
                    { spanish: "Salieron temprano.", english: "They left early." }
                ]
            },
            {
                title: "Irregular Preterites",
                type: "grammar",
                explanation: "Some common verbs are irregular in the preterite. The most important are SER/IR (same forms!), HACER, TENER, ESTAR.",
                examples: [
                    { spanish: "SER/IR: fui, fuiste, fue, fuimos, fueron", english: "I was/went, you were/went, etc." },
                    { spanish: "HACER: hice, hiciste, hizo, hicimos, hicieron", english: "I did/made, you did/made, etc." },
                    { spanish: "TENER: tuve, tuviste, tuvo, tuvimos, tuvieron", english: "I had, you had, etc." },
                    { spanish: "ESTAR: estuve, estuviste, estuvo, estuvimos, estuvieron", english: "I was, you were, etc." },
                    { spanish: "Fui al cine ayer.", english: "I went to the movies yesterday." },
                    { spanish: "¿Qué hiciste?", english: "What did you do?" }
                ]
            },
            {
                title: "More Irregular Preterites",
                type: "vocab",
                content: [
                    { spanish: "decir → dije, dijiste, dijo...", english: "to say → I said..." },
                    { spanish: "poder → pude, pudiste, pudo...", english: "to be able → I could..." },
                    { spanish: "poner → puse, pusiste, puso...", english: "to put → I put..." },
                    { spanish: "querer → quise, quisiste, quiso...", english: "to want → I wanted..." },
                    { spanish: "saber → supe, supiste, supo...", english: "to know → I found out..." },
                    { spanish: "venir → vine, viniste, vino...", english: "to come → I came..." },
                    { spanish: "traer → traje, trajiste, trajo...", english: "to bring → I brought..." },
                    { spanish: "dar → di, diste, dio, dimos, dieron", english: "to give → I gave..." },
                    { spanish: "ver → vi, viste, vio, vimos, vieron", english: "to see → I saw..." }
                ]
            },
            {
                title: "Using Irregular Preterites",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Dónde estuviste el fin de semana?", english: "Where were you this weekend?" },
                    { speaker: "Carlos", spanish: "Fui a la playa con mi familia.", english: "I went to the beach with my family." },
                    { speaker: "María", spanish: "¡Qué bien! ¿Qué hicieron?", english: "How nice! What did you do?" },
                    { speaker: "Carlos", spanish: "Nadamos, comimos mariscos y vimos el atardecer.", english: "We swam, ate seafood, and watched the sunset." },
                    { speaker: "María", spanish: "¿Tuvieron buen tiempo?", english: "Did you have good weather?" },
                    { spanish: "Carlos", spanish: "Sí, hizo mucho sol. ¿Y tú qué hiciste?", english: "Yes, it was very sunny. And what did you do?" },
                    { speaker: "María", spanish: "No pude salir. Estuve enferma.", english: "I couldn't go out. I was sick." }
                ]
            }
        ]
    },
    {
        id: 23,
        month: 3,
        title: "Imperfect Tense",
        description: "Describe ongoing past actions and states",
        xp: 35,
        sections: [
            {
                title: "Imperfect vs Preterite",
                type: "grammar",
                explanation: "The imperfect describes ongoing/habitual past actions, background information, or states. The preterite is for completed actions. Think: imperfect = 'was doing/used to do', preterite = 'did'.",
                examples: [
                    { spanish: "Cuando era niño, jugaba fútbol. (imperfect)", english: "When I was a child, I used to play soccer." },
                    { spanish: "Ayer jugué fútbol. (preterite)", english: "Yesterday I played soccer." },
                    { spanish: "Llovía cuando salí. (imperfect + preterite)", english: "It was raining when I left." }
                ]
            },
            {
                title: "Imperfect -AR Endings",
                type: "grammar",
                explanation: "For -AR verbs, add: -aba, -abas, -aba, -ábamos, -abais, -aban. No stem changes!",
                examples: [
                    { spanish: "HABLAR: hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban", english: "I was speaking / used to speak, etc." },
                    { spanish: "Siempre hablaba español con mi abuela.", english: "I always spoke Spanish with my grandmother." },
                    { spanish: "De niño, caminaba a la escuela.", english: "As a child, I used to walk to school." }
                ]
            },
            {
                title: "Imperfect -ER/-IR Endings",
                type: "grammar",
                explanation: "For -ER and -IR verbs, add: -ía, -ías, -ía, -íamos, -íais, -ían",
                examples: [
                    { spanish: "COMER: comía, comías, comía, comíamos, comíais, comían", english: "I was eating / used to eat, etc." },
                    { spanish: "VIVIR: vivía, vivías, vivía, vivíamos, vivíais, vivían", english: "I was living / used to live, etc." },
                    { spanish: "Vivíamos en Madrid.", english: "We used to live in Madrid." },
                    { spanish: "Siempre comía mucho.", english: "He/She always used to eat a lot." }
                ]
            },
            {
                title: "Irregular Imperfects",
                type: "grammar",
                explanation: "Only 3 verbs are irregular in the imperfect: SER, IR, VER",
                examples: [
                    { spanish: "SER: era, eras, era, éramos, erais, eran", english: "I was (permanent), etc." },
                    { spanish: "IR: iba, ibas, iba, íbamos, ibais, iban", english: "I was going / used to go, etc." },
                    { spanish: "VER: veía, veías, veía, veíamos, veíais, veían", english: "I was watching / used to see, etc." },
                    { spanish: "Cuando era joven, iba al parque todos los días.", english: "When I was young, I used to go to the park every day." },
                    { spanish: "Veía mucha televisión.", english: "I used to watch a lot of TV." }
                ]
            }
        ]
    },
    {
        id: 24,
        month: 3,
        title: "Transportation & Travel",
        description: "Vocabulary for getting around",
        xp: 25,
        sections: [
            {
                title: "Modes of Transportation",
                type: "vocab",
                content: [
                    { spanish: "el carro / el coche", english: "car" },
                    { spanish: "el autobús / el camión", english: "bus" },
                    { spanish: "el tren", english: "train" },
                    { spanish: "el metro", english: "subway" },
                    { spanish: "el avión", english: "airplane" },
                    { spanish: "el taxi", english: "taxi" },
                    { spanish: "la bicicleta", english: "bicycle" },
                    { spanish: "la moto(cicleta)", english: "motorcycle" },
                    { spanish: "el barco", english: "boat/ship" },
                    { spanish: "a pie", english: "on foot" }
                ]
            },
            {
                title: "Travel Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "el aeropuerto", english: "airport" },
                    { spanish: "la estación de tren", english: "train station" },
                    { spanish: "la parada de autobús", english: "bus stop" },
                    { spanish: "el boleto / el billete", english: "ticket" },
                    { spanish: "el pasaporte", english: "passport" },
                    { spanish: "la maleta", english: "suitcase" },
                    { spanish: "el equipaje", english: "luggage" },
                    { spanish: "el vuelo", english: "flight" },
                    { spanish: "la reservación", english: "reservation" },
                    { spanish: "el horario", english: "schedule" }
                ]
            },
            {
                title: "Travel Phrases",
                type: "vocab",
                content: [
                    { spanish: "¿Cómo llego a...?", english: "How do I get to...?" },
                    { spanish: "¿Dónde está la estación?", english: "Where is the station?" },
                    { spanish: "Un boleto de ida.", english: "A one-way ticket." },
                    { spanish: "Un boleto de ida y vuelta.", english: "A round-trip ticket." },
                    { spanish: "¿A qué hora sale el tren?", english: "What time does the train leave?" },
                    { spanish: "¿A qué hora llega?", english: "What time does it arrive?" },
                    { spanish: "¿Cuánto cuesta el boleto?", english: "How much is the ticket?" },
                    { spanish: "Quisiera reservar un vuelo.", english: "I would like to book a flight." }
                ]
            },
            {
                title: "At the Station",
                type: "dialogue",
                lines: [
                    { speaker: "Viajero", spanish: "Buenos días. Un boleto a Barcelona, por favor.", english: "Good morning. A ticket to Barcelona, please." },
                    { speaker: "Empleado", spanish: "¿De ida o de ida y vuelta?", english: "One-way or round-trip?" },
                    { speaker: "Viajero", spanish: "De ida y vuelta. ¿Cuánto cuesta?", english: "Round-trip. How much is it?" },
                    { speaker: "Empleado", spanish: "Son sesenta euros. ¿En efectivo o tarjeta?", english: "It's sixty euros. Cash or card?" },
                    { speaker: "Viajero", spanish: "Tarjeta. ¿A qué hora sale el próximo tren?", english: "Card. What time does the next train leave?" },
                    { speaker: "Empleado", spanish: "Sale a las diez y cuarto. Llega a las dos.", english: "It leaves at 10:15. It arrives at 2:00." },
                    { speaker: "Viajero", spanish: "Perfecto. ¿De qué andén?", english: "Perfect. From which platform?" },
                    { speaker: "Empleado", spanish: "Andén número tres.", english: "Platform number three." }
                ]
            }
        ]
    },
    {
        id: 25,
        month: 3,
        title: "Health & Body",
        description: "Describe symptoms and body parts",
        xp: 25,
        sections: [
            {
                title: "Body Parts",
                type: "vocab",
                content: [
                    { spanish: "la cabeza", english: "head" },
                    { spanish: "el ojo / los ojos", english: "eye / eyes" },
                    { spanish: "la nariz", english: "nose" },
                    { spanish: "la boca", english: "mouth" },
                    { spanish: "la oreja / el oído", english: "ear (outer/inner)" },
                    { spanish: "el cuello", english: "neck" },
                    { spanish: "el brazo", english: "arm" },
                    { spanish: "la mano", english: "hand" },
                    { spanish: "el dedo", english: "finger/toe" },
                    { spanish: "la pierna", english: "leg" },
                    { spanish: "el pie", english: "foot" },
                    { spanish: "la espalda", english: "back" },
                    { spanish: "el estómago", english: "stomach" },
                    { spanish: "el corazón", english: "heart" }
                ]
            },
            {
                title: "Health Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "el médico / la médica", english: "doctor" },
                    { spanish: "el/la enfermero/a", english: "nurse" },
                    { spanish: "el hospital", english: "hospital" },
                    { spanish: "la clínica", english: "clinic" },
                    { spanish: "la farmacia", english: "pharmacy" },
                    { spanish: "la medicina", english: "medicine" },
                    { spanish: "la receta", english: "prescription" },
                    { spanish: "la cita", english: "appointment" }
                ]
            },
            {
                title: "Expressing Pain with DOLER",
                type: "grammar",
                explanation: "DOLER (to hurt) works like GUSTAR. Use 'me duele' (singular) or 'me duelen' (plural).",
                examples: [
                    { spanish: "Me duele la cabeza.", english: "My head hurts. / I have a headache." },
                    { spanish: "Me duelen los pies.", english: "My feet hurt." },
                    { spanish: "Le duele el estómago.", english: "His/Her stomach hurts." },
                    { spanish: "¿Te duele algo?", english: "Does something hurt?" },
                    { spanish: "No me duele nada.", english: "Nothing hurts." }
                ]
            },
            {
                title: "At the Doctor",
                type: "dialogue",
                lines: [
                    { speaker: "Médico", spanish: "Buenos días. ¿Qué le pasa?", english: "Good morning. What's wrong?" },
                    { speaker: "Paciente", spanish: "Me siento mal. Me duele la cabeza y tengo fiebre.", english: "I feel bad. My head hurts and I have a fever." },
                    { speaker: "Médico", spanish: "¿Desde cuándo tiene estos síntomas?", english: "Since when have you had these symptoms?" },
                    { speaker: "Paciente", spanish: "Desde ayer por la noche.", english: "Since last night." },
                    { speaker: "Médico", spanish: "¿Le duele la garganta?", english: "Does your throat hurt?" },
                    { speaker: "Paciente", spanish: "Sí, un poco. Y también me duele el cuerpo.", english: "Yes, a little. And my body also hurts." },
                    { speaker: "Médico", spanish: "Parece que tiene gripe. Le voy a dar una receta.", english: "It seems you have the flu. I'm going to give you a prescription." },
                    { speaker: "Paciente", spanish: "Gracias, doctor. ¿Cuántas veces al día tomo la medicina?", english: "Thank you, doctor. How many times a day do I take the medicine?" }
                ]
            }
        ]
    },
    {
        id: 26,
        month: 3,
        title: "Giving Directions",
        description: "Navigate cities and give directions",
        xp: 25,
        sections: [
            {
                title: "Direction Words",
                type: "vocab",
                content: [
                    { spanish: "a la derecha", english: "to the right" },
                    { spanish: "a la izquierda", english: "to the left" },
                    { spanish: "todo recto / derecho", english: "straight ahead" },
                    { spanish: "en la esquina", english: "on the corner" },
                    { spanish: "al lado de", english: "next to" },
                    { spanish: "enfrente de", english: "in front of" },
                    { spanish: "detrás de", english: "behind" },
                    { spanish: "cerca de", english: "near" },
                    { spanish: "lejos de", english: "far from" },
                    { spanish: "entre", english: "between" }
                ]
            },
            {
                title: "City Places",
                type: "vocab",
                content: [
                    { spanish: "la calle", english: "street" },
                    { spanish: "la avenida", english: "avenue" },
                    { spanish: "la plaza", english: "plaza/square" },
                    { spanish: "la cuadra / la manzana", english: "block" },
                    { spanish: "el semáforo", english: "traffic light" },
                    { spanish: "el cruce", english: "intersection" },
                    { spanish: "el puente", english: "bridge" },
                    { spanish: "la parada", english: "stop" }
                ]
            },
            {
                title: "Commands for Directions",
                type: "grammar",
                explanation: "Use informal commands (tú) or formal commands (usted) to give directions. Common verbs: ir, seguir, doblar, cruzar.",
                examples: [
                    { spanish: "Sigue todo recto.", english: "Go straight ahead. (tú)" },
                    { spanish: "Siga todo recto.", english: "Go straight ahead. (usted)" },
                    { spanish: "Dobla a la derecha.", english: "Turn right. (tú)" },
                    { spanish: "Doble a la izquierda.", english: "Turn left. (usted)" },
                    { spanish: "Cruza la calle.", english: "Cross the street. (tú)" },
                    { spanish: "Cruce el puente.", english: "Cross the bridge. (usted)" }
                ]
            },
            {
                title: "Asking for Directions",
                type: "dialogue",
                lines: [
                    { speaker: "Turista", spanish: "Disculpe, ¿cómo llego al museo?", english: "Excuse me, how do I get to the museum?" },
                    { speaker: "Local", spanish: "Siga todo recto dos cuadras.", english: "Go straight ahead two blocks." },
                    { speaker: "Turista", spanish: "¿Y después?", english: "And then?" },
                    { speaker: "Local", spanish: "Doble a la izquierda en el semáforo.", english: "Turn left at the traffic light." },
                    { speaker: "Turista", spanish: "¿Está lejos?", english: "Is it far?" },
                    { speaker: "Local", spanish: "No, está a cinco minutos a pie.", english: "No, it's five minutes on foot." },
                    { speaker: "Turista", spanish: "El museo está enfrente de la plaza, ¿verdad?", english: "The museum is in front of the plaza, right?" },
                    { speaker: "Local", spanish: "Exacto. No tiene pérdida.", english: "Exactly. You can't miss it." }
                ]
            }
        ]
    },
    {
        id: 27,
        month: 3,
        title: "Future Tense",
        description: "Talk about what will happen",
        xp: 35,
        sections: [
            {
                title: "Simple Future Endings",
                type: "grammar",
                explanation: "The simple future uses the INFINITIVE + endings: -é, -ás, -á, -emos, -éis, -án. Same endings for all verbs!",
                examples: [
                    { spanish: "HABLAR: hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán", english: "I will speak, you will speak, etc." },
                    { spanish: "COMER: comeré, comerás, comerá, comeremos, comeréis, comerán", english: "I will eat, etc." },
                    { spanish: "VIVIR: viviré, vivirás, vivirá, viviremos, viviréis, vivirán", english: "I will live, etc." },
                    { spanish: "Mañana hablaré con él.", english: "Tomorrow I will speak with him." },
                    { spanish: "¿Vendrás a la fiesta?", english: "Will you come to the party?" }
                ]
            },
            {
                title: "Irregular Future Stems",
                type: "grammar",
                explanation: "Some verbs have irregular stems, but use the same endings: -é, -ás, -á, etc.",
                examples: [
                    { spanish: "tener → tendr- (tendré)", english: "I will have" },
                    { spanish: "venir → vendr- (vendré)", english: "I will come" },
                    { spanish: "poder → podr- (podré)", english: "I will be able" },
                    { spanish: "saber → sabr- (sabré)", english: "I will know" },
                    { spanish: "hacer → har- (haré)", english: "I will do/make" },
                    { spanish: "decir → dir- (diré)", english: "I will say" },
                    { spanish: "salir → saldr- (saldré)", english: "I will leave" },
                    { spanish: "poner → pondr- (pondré)", english: "I will put" },
                    { spanish: "querer → querr- (querré)", english: "I will want" }
                ]
            },
            {
                title: "Future Time Expressions",
                type: "vocab",
                content: [
                    { spanish: "mañana", english: "tomorrow" },
                    { spanish: "pasado mañana", english: "the day after tomorrow" },
                    { spanish: "la semana que viene", english: "next week" },
                    { spanish: "el mes que viene", english: "next month" },
                    { spanish: "el año que viene", english: "next year" },
                    { spanish: "pronto", english: "soon" },
                    { spanish: "algún día", english: "someday" },
                    { spanish: "en el futuro", english: "in the future" }
                ]
            },
            {
                title: "Making Plans",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Qué harás este fin de semana?", english: "What will you do this weekend?" },
                    { speaker: "Luis", spanish: "El sábado iré a la playa. ¿Vendrás conmigo?", english: "On Saturday I'll go to the beach. Will you come with me?" },
                    { speaker: "Ana", spanish: "¡Sí! ¿A qué hora saldremos?", english: "Yes! What time will we leave?" },
                    { speaker: "Luis", spanish: "Saldremos a las ocho de la mañana.", english: "We'll leave at eight in the morning." },
                    { speaker: "Ana", spanish: "Perfecto. ¿Quién más vendrá?", english: "Perfect. Who else will come?" },
                    { speaker: "Luis", spanish: "Pedro y María también irán. Será muy divertido.", english: "Pedro and María will go too. It will be very fun." },
                    { speaker: "Ana", spanish: "¡Genial! ¿Qué llevaremos?", english: "Great! What will we bring?" },
                    { speaker: "Luis", spanish: "Yo llevaré la comida. ¿Podrás traer las bebidas?", english: "I'll bring the food. Can you bring the drinks?" }
                ]
            }
        ]
    },
    {
        id: 28,
        month: 3,
        title: "Conditional Tense",
        description: "Express what would happen",
        xp: 35,
        sections: [
            {
                title: "Conditional Endings",
                type: "grammar",
                explanation: "The conditional uses the INFINITIVE + endings: -ía, -ías, -ía, -íamos, -íais, -ían. Same for all verbs! (Same irregulars as future)",
                examples: [
                    { spanish: "HABLAR: hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían", english: "I would speak, you would speak, etc." },
                    { spanish: "Hablaría con él, pero no tengo tiempo.", english: "I would speak with him, but I don't have time." },
                    { spanish: "¿Qué harías tú?", english: "What would you do?" },
                    { spanish: "Me gustaría viajar a España.", english: "I would like to travel to Spain." }
                ]
            },
            {
                title: "Irregular Conditional Stems",
                type: "grammar",
                explanation: "Same irregular stems as the future tense:",
                examples: [
                    { spanish: "tener → tendría", english: "I would have" },
                    { spanish: "venir → vendría", english: "I would come" },
                    { spanish: "poder → podría", english: "I would be able / could" },
                    { spanish: "saber → sabría", english: "I would know" },
                    { spanish: "hacer → haría", english: "I would do/make" },
                    { spanish: "decir → diría", english: "I would say" },
                    { spanish: "salir → saldría", english: "I would leave" },
                    { spanish: "poner → pondría", english: "I would put" }
                ]
            },
            {
                title: "Uses of the Conditional",
                type: "grammar",
                explanation: "The conditional is used for: hypotheticals, polite requests, giving advice, and wondering about the past.",
                examples: [
                    { spanish: "¿Podría ayudarme? (polite)", english: "Could you help me?" },
                    { spanish: "Deberías estudiar más. (advice)", english: "You should study more." },
                    { spanish: "Yo que tú, no iría. (advice)", english: "If I were you, I wouldn't go." },
                    { spanish: "Con más dinero, viajaría. (hypothetical)", english: "With more money, I would travel." },
                    { spanish: "Serían las tres. (wondering)", english: "It was probably three o'clock." }
                ]
            },
            {
                title: "What Would You Do?",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "Si ganaras la lotería, ¿qué harías?", english: "If you won the lottery, what would you do?" },
                    { speaker: "Pedro", spanish: "Compraría una casa en la playa.", english: "I would buy a house on the beach." },
                    { speaker: "Ana", spanish: "¿Y después?", english: "And then?" },
                    { speaker: "Pedro", spanish: "Viajaría por todo el mundo.", english: "I would travel around the world." },
                    { speaker: "Ana", spanish: "Yo también viajaría, pero primero ayudaría a mi familia.", english: "I would also travel, but first I would help my family." },
                    { speaker: "Pedro", spanish: "Eso sería muy generoso.", english: "That would be very generous." },
                    { speaker: "Ana", spanish: "¿Seguirías trabajando?", english: "Would you keep working?" },
                    { speaker: "Pedro", spanish: "No sé. Tal vez haría trabajo voluntario.", english: "I don't know. Maybe I would do volunteer work." }
                ]
            }
        ]
    },
    {
        id: 29,
        month: 3,
        title: "Introduction to Subjunctive",
        description: "Learn the basics of this essential mood",
        xp: 40,
        sections: [
            {
                title: "What is the Subjunctive?",
                type: "grammar",
                explanation: "The subjunctive is a mood (not a tense) used for: wishes, emotions, doubt, recommendations, and hypotheticals. It's triggered by certain expressions.",
                examples: [
                    { spanish: "Quiero que vengas. (wish)", english: "I want you to come." },
                    { spanish: "Me alegra que estés aquí. (emotion)", english: "I'm glad you're here." },
                    { spanish: "Dudo que llueva. (doubt)", english: "I doubt it will rain." },
                    { spanish: "Es importante que estudies. (recommendation)", english: "It's important that you study." }
                ]
            },
            {
                title: "Present Subjunctive -AR",
                type: "grammar",
                explanation: "For -AR verbs, use the opposite vowel: -e, -es, -e, -emos, -éis, -en",
                examples: [
                    { spanish: "HABLAR: hable, hables, hable, hablemos, habléis, hablen", english: "that I speak, that you speak, etc." },
                    { spanish: "Quiero que hables más despacio.", english: "I want you to speak more slowly." },
                    { spanish: "Es necesario que trabajes.", english: "It's necessary that you work." }
                ]
            },
            {
                title: "Present Subjunctive -ER/-IR",
                type: "grammar",
                explanation: "For -ER/-IR verbs, use the opposite vowel: -a, -as, -a, -amos, -áis, -an",
                examples: [
                    { spanish: "COMER: coma, comas, coma, comamos, comáis, coman", english: "that I eat, that you eat, etc." },
                    { spanish: "VIVIR: viva, vivas, viva, vivamos, viváis, vivan", english: "that I live, that you live, etc." },
                    { spanish: "Espero que comas bien.", english: "I hope you eat well." },
                    { spanish: "Quiero que vivas feliz.", english: "I want you to live happily." }
                ]
            },
            {
                title: "Common Subjunctive Triggers",
                type: "vocab",
                content: [
                    { spanish: "Quiero que...", english: "I want that..." },
                    { spanish: "Espero que...", english: "I hope that..." },
                    { spanish: "Es importante que...", english: "It's important that..." },
                    { spanish: "Es necesario que...", english: "It's necessary that..." },
                    { spanish: "Dudo que...", english: "I doubt that..." },
                    { spanish: "No creo que...", english: "I don't believe that..." },
                    { spanish: "Me alegra que...", english: "I'm glad that..." },
                    { spanish: "Ojalá (que)...", english: "Hopefully / I hope..." },
                    { spanish: "Cuando...", english: "When... (future)" },
                    { spanish: "Para que...", english: "So that..." }
                ]
            }
        ]
    },
    {
        id: 30,
        month: 3,
        title: "Putting It All Together",
        description: "Review and combine everything you've learned",
        xp: 50,
        sections: [
            {
                title: "Comprehensive Review",
                type: "grammar",
                explanation: "You've learned an incredible amount! Let's review the key concepts: Present tense (regular and irregular), Preterite (completed past), Imperfect (ongoing past), Future, Conditional, and Introduction to Subjunctive.",
                examples: [
                    { spanish: "Hablo español. (present)", english: "I speak Spanish." },
                    { spanish: "Ayer hablé con ella. (preterite)", english: "Yesterday I spoke with her." },
                    { spanish: "Cuando era niño, hablaba español. (imperfect)", english: "When I was a child, I spoke Spanish." },
                    { spanish: "Mañana hablaré más. (future)", english: "Tomorrow I will speak more." },
                    { spanish: "Hablaría si pudiera. (conditional)", english: "I would speak if I could." },
                    { spanish: "Espero que hables bien. (subjunctive)", english: "I hope you speak well." }
                ]
            },
            {
                title: "Key Irregular Verbs",
                type: "vocab",
                content: [
                    { spanish: "ser - soy, fui, era, seré, sería", english: "to be (permanent)" },
                    { spanish: "estar - estoy, estuve, estaba, estaré, estaría", english: "to be (temporary)" },
                    { spanish: "tener - tengo, tuve, tenía, tendré, tendría", english: "to have" },
                    { spanish: "ir - voy, fui, iba, iré, iría", english: "to go" },
                    { spanish: "hacer - hago, hice, hacía, haré, haría", english: "to do/make" },
                    { spanish: "poder - puedo, pude, podía, podré, podría", english: "can/to be able" },
                    { spanish: "querer - quiero, quise, quería, querré, querría", english: "to want" },
                    { spanish: "decir - digo, dije, decía, diré, diría", english: "to say" },
                    { spanish: "venir - vengo, vine, venía, vendré, vendría", english: "to come" },
                    { spanish: "saber - sé, supe, sabía, sabré, sabría", english: "to know" }
                ]
            },
            {
                title: "Conversation Skills",
                type: "vocab",
                content: [
                    { spanish: "En mi opinión...", english: "In my opinion..." },
                    { spanish: "Creo que...", english: "I think that..." },
                    { spanish: "Me parece que...", english: "It seems to me that..." },
                    { spanish: "Estoy de acuerdo.", english: "I agree." },
                    { spanish: "No estoy de acuerdo.", english: "I disagree." },
                    { spanish: "Por un lado... por otro lado...", english: "On one hand... on the other hand..." },
                    { spanish: "Sin embargo...", english: "However..." },
                    { spanish: "Por lo tanto...", english: "Therefore..." },
                    { spanish: "En conclusión...", english: "In conclusion..." }
                ]
            },
            {
                title: "Final Conversation",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Qué planes tienes para el futuro?", english: "What plans do you have for the future?" },
                    { speaker: "Pedro", spanish: "Me gustaría viajar a Sudamérica el año que viene.", english: "I would like to travel to South America next year." },
                    { speaker: "Ana", spanish: "¡Qué bien! Yo fui a Argentina hace dos años. Fue increíble.", english: "How nice! I went to Argentina two years ago. It was incredible." },
                    { speaker: "Pedro", spanish: "¿Sí? ¿Qué hiciste allí?", english: "Really? What did you do there?" },
                    { speaker: "Ana", spanish: "Visité Buenos Aires y viajé a la Patagonia.", english: "I visited Buenos Aires and traveled to Patagonia." },
                    { speaker: "Pedro", spanish: "Espero que pueda hacer lo mismo. ¿Me das recomendaciones?", english: "I hope I can do the same. Can you give me recommendations?" },
                    { speaker: "Ana", spanish: "¡Claro! Te recomiendo que visites las cataratas del Iguazú.", english: "Of course! I recommend you visit Iguazu Falls." },
                    { speaker: "Pedro", spanish: "Perfecto. Cuando vuelva, te contaré todo.", english: "Perfect. When I return, I'll tell you everything." },
                    { speaker: "Ana", spanish: "¡Que tengas un buen viaje!", english: "Have a good trip!" },
                    { speaker: "Pedro", spanish: "¡Gracias! Has sido una gran profesora.", english: "Thanks! You've been a great teacher." }
                ]
            }
        ]
    }
];
