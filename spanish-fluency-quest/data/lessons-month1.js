/**
 * Spanish Fluency Quest - Month 1 Lessons (1-20)
 * Foundation: Greetings, Basics, Core Verbs, Essential Vocabulary
 */

const LESSONS_MONTH1 = [
    // LESSON 1: Greetings & Introductions
    {
        id: 1,
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
                explanation: "To introduce yourself in Spanish, use 'Me llamo...' (My name is...) or 'Soy...' (I am...). When meeting someone, say 'Mucho gusto' (Nice to meet you).",
                examples: [
                    { spanish: "Me llamo María.", english: "My name is María." },
                    { spanish: "Soy Carlos.", english: "I am Carlos." },
                    { spanish: "Mucho gusto.", english: "Nice to meet you." },
                    { spanish: "Encantado/Encantada.", english: "Pleased to meet you." },
                    { spanish: "El gusto es mío.", english: "The pleasure is mine." }
                ]
            },
            {
                title: "Practice Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¡Hola! Buenos días.", english: "Hello! Good morning." },
                    { speaker: "Pedro", spanish: "Buenos días. ¿Cómo te llamas?", english: "Good morning. What's your name?" },
                    { speaker: "Ana", spanish: "Me llamo Ana. ¿Y tú?", english: "My name is Ana. And you?" },
                    { speaker: "Pedro", spanish: "Soy Pedro. Mucho gusto.", english: "I'm Pedro. Nice to meet you." },
                    { speaker: "Ana", spanish: "Encantada. ¿De dónde eres?", english: "Pleased to meet you. Where are you from?" },
                    { speaker: "Pedro", spanish: "Soy de México. Hasta luego.", english: "I'm from Mexico. See you later." }
                ]
            }
        ]
    },

    // LESSON 2: Numbers 1-20
    {
        id: 2,
        title: "Numbers 1-20",
        description: "Count in Spanish from 1 to 20",
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
                title: "Using Numbers",
                type: "grammar",
                explanation: "Numbers are used similarly to English. 'Uno' becomes 'un' before masculine nouns and 'una' before feminine nouns.",
                examples: [
                    { spanish: "Tengo un hermano.", english: "I have one brother." },
                    { spanish: "Tengo una hermana.", english: "I have one sister." },
                    { spanish: "Hay cinco libros.", english: "There are five books." },
                    { spanish: "Quiero tres tacos.", english: "I want three tacos." },
                    { spanish: "Son las dos.", english: "It's two o'clock." }
                ]
            }
        ]
    },

    // LESSON 3: Essential Phrases
    {
        id: 3,
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
                    { spanish: "¿Cómo estás?", english: "How are you? (informal)", pronunciation: "KOH-moh ehs-TAHS" },
                    { spanish: "¿Cómo está usted?", english: "How are you? (formal)", pronunciation: "KOH-moh ehs-TAH oos-TEHD" },
                    { spanish: "¿Qué tal?", english: "What's up?", pronunciation: "keh tahl" },
                    { spanish: "¿Dónde está...?", english: "Where is...?", pronunciation: "DOHN-deh ehs-TAH" },
                    { spanish: "¿Cuánto cuesta?", english: "How much does it cost?", pronunciation: "KWAHN-toh KWEHS-tah" },
                    { spanish: "¿Hablas inglés?", english: "Do you speak English?", pronunciation: "AH-blahs een-GLEHS" },
                    { spanish: "¿Qué hora es?", english: "What time is it?", pronunciation: "keh OH-rah ehs" },
                    { spanish: "¿Cómo se dice...?", english: "How do you say...?", pronunciation: "KOH-moh seh DEE-seh" }
                ]
            },
            {
                title: "Common Responses",
                type: "grammar",
                explanation: "When someone asks '¿Cómo estás?', you can respond with these phrases. Adding '¿y tú?' returns the question.",
                examples: [
                    { spanish: "Muy bien, gracias.", english: "Very well, thanks." },
                    { spanish: "Bien, ¿y tú?", english: "Good, and you?" },
                    { spanish: "Más o menos.", english: "So-so." },
                    { spanish: "No muy bien.", english: "Not very well." },
                    { spanish: "Excelente.", english: "Excellent." },
                    { spanish: "Regular.", english: "Okay / So-so." }
                ]
            }
        ]
    },

    // LESSON 4: The Verb SER (To Be - Permanent)
    {
        id: 4,
        title: "The Verb SER (To Be)",
        description: "Learn one of the most important Spanish verbs",
        xp: 30,
        sections: [
            {
                title: "SER Conjugation",
                type: "grammar",
                explanation: "SER means 'to be' and is used for permanent characteristics, identity, professions, nationality, time, and origin.",
                examples: [
                    { spanish: "Yo soy", english: "I am" },
                    { spanish: "Tú eres", english: "You are (informal)" },
                    { spanish: "Él/Ella/Usted es", english: "He/She is / You are (formal)" },
                    { spanish: "Nosotros somos", english: "We are" },
                    { spanish: "Vosotros sois", english: "You all are (Spain)" },
                    { spanish: "Ellos/Ellas/Ustedes son", english: "They are / You all are" }
                ]
            },
            {
                title: "When to Use SER",
                type: "vocab",
                content: [
                    { spanish: "Soy estudiante.", english: "I am a student. (profession)" },
                    { spanish: "Ella es doctora.", english: "She is a doctor. (profession)" },
                    { spanish: "Somos americanos.", english: "We are American. (nationality)" },
                    { spanish: "¿Eres de México?", english: "Are you from Mexico? (origin)" },
                    { spanish: "Es importante.", english: "It's important. (characteristic)" },
                    { spanish: "La casa es grande.", english: "The house is big. (description)" },
                    { spanish: "Son las tres.", english: "It's three o'clock. (time)" },
                    { spanish: "Hoy es lunes.", english: "Today is Monday. (date)" }
                ]
            },
            {
                title: "Practice Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Luis", spanish: "¿De dónde eres?", english: "Where are you from?" },
                    { speaker: "Sara", spanish: "Soy de España, de Madrid. ¿Y tú?", english: "I'm from Spain, from Madrid. And you?" },
                    { speaker: "Luis", spanish: "Soy mexicano, de Guadalajara.", english: "I'm Mexican, from Guadalajara." },
                    { speaker: "Sara", spanish: "¿Eres estudiante?", english: "Are you a student?" },
                    { speaker: "Luis", spanish: "No, soy profesor. ¿Y tú?", english: "No, I'm a teacher. And you?" },
                    { speaker: "Sara", spanish: "Soy artista. Es un trabajo interesante.", english: "I'm an artist. It's an interesting job." }
                ]
            }
        ]
    },

    // LESSON 5: The Verb ESTAR (To Be - Temporary)
    {
        id: 5,
        title: "The Verb ESTAR (To Be)",
        description: "Learn the other 'to be' verb for states and locations",
        xp: 30,
        sections: [
            {
                title: "ESTAR Conjugation",
                type: "grammar",
                explanation: "ESTAR also means 'to be' but is used for temporary states, emotions, locations, and conditions.",
                examples: [
                    { spanish: "Yo estoy", english: "I am" },
                    { spanish: "Tú estás", english: "You are (informal)" },
                    { spanish: "Él/Ella/Usted está", english: "He/She is / You are (formal)" },
                    { spanish: "Nosotros estamos", english: "We are" },
                    { spanish: "Vosotros estáis", english: "You all are (Spain)" },
                    { spanish: "Ellos/Ellas/Ustedes están", english: "They are / You all are" }
                ]
            },
            {
                title: "SER vs ESTAR",
                type: "grammar",
                explanation: "SER = permanent traits (nationality, profession, personality). ESTAR = temporary states (emotions, location, health). The same adjective can change meaning!",
                examples: [
                    { spanish: "Soy alto. (SER)", english: "I am tall. (permanent trait)" },
                    { spanish: "Estoy cansado. (ESTAR)", english: "I am tired. (temporary state)" },
                    { spanish: "Él es aburrido.", english: "He is boring. (personality)" },
                    { spanish: "Él está aburrido.", english: "He is bored. (feeling)" },
                    { spanish: "La manzana es verde.", english: "The apple is green. (type)" },
                    { spanish: "La manzana está verde.", english: "The apple is unripe. (condition)" }
                ]
            },
            {
                title: "Location with ESTAR",
                type: "vocab",
                content: [
                    { spanish: "Estoy en casa.", english: "I'm at home." },
                    { spanish: "¿Dónde está el baño?", english: "Where is the bathroom?" },
                    { spanish: "Estamos en el restaurante.", english: "We're at the restaurant." },
                    { spanish: "Madrid está en España.", english: "Madrid is in Spain." },
                    { spanish: "El libro está en la mesa.", english: "The book is on the table." },
                    { spanish: "¿Dónde estás?", english: "Where are you?" },
                    { spanish: "Están en la oficina.", english: "They're at the office." },
                    { spanish: "El gato está debajo de la silla.", english: "The cat is under the chair." }
                ]
            }
        ]
    },

    // LESSON 6: Family Members
    {
        id: 6,
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
                    { spanish: "los hermanos", english: "siblings", pronunciation: "ehr-MAH-nohs" },
                    { spanish: "el hijo", english: "son", pronunciation: "EE-hoh" },
                    { spanish: "la hija", english: "daughter", pronunciation: "EE-hah" },
                    { spanish: "los hijos", english: "children", pronunciation: "EE-hohs" }
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
                title: "Talking About Family",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Tienes hermanos?", english: "Do you have siblings?" },
                    { speaker: "Juan", spanish: "Sí, tengo dos hermanas y un hermano.", english: "Yes, I have two sisters and a brother." },
                    { speaker: "María", spanish: "¡Qué familia grande! ¿Cómo se llaman?", english: "What a big family! What are their names?" },
                    { speaker: "Juan", spanish: "Mis hermanas se llaman Ana y Carmen.", english: "My sisters are named Ana and Carmen." },
                    { speaker: "María", spanish: "¿Y tus padres?", english: "And your parents?" },
                    { speaker: "Juan", spanish: "Mi madre se llama Rosa y mi padre se llama Miguel.", english: "My mother is named Rosa and my father is named Miguel." }
                ]
            }
        ]
    },

    // LESSON 7: Colors
    {
        id: 7,
        title: "Colors",
        description: "Learn colors in Spanish",
        xp: 20,
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
                    { spanish: "blanco", english: "white", pronunciation: "BLAHN-koh" },
                    { spanish: "negro", english: "black", pronunciation: "NEH-groh" }
                ]
            },
            {
                title: "More Colors",
                type: "vocab",
                content: [
                    { spanish: "rosa / rosado", english: "pink", pronunciation: "ROH-sah" },
                    { spanish: "gris", english: "gray", pronunciation: "grees" },
                    { spanish: "marrón / café", english: "brown", pronunciation: "mah-RROHN" },
                    { spanish: "dorado", english: "gold/golden", pronunciation: "doh-RAH-doh" },
                    { spanish: "plateado", english: "silver", pronunciation: "plah-teh-AH-doh" },
                    { spanish: "celeste", english: "light blue", pronunciation: "seh-LEHS-teh" },
                    { spanish: "beige", english: "beige", pronunciation: "baysh" },
                    { spanish: "turquesa", english: "turquoise", pronunciation: "toor-KEH-sah" }
                ]
            },
            {
                title: "Using Colors",
                type: "grammar",
                explanation: "Colors come AFTER the noun in Spanish and must agree in gender and number. Colors ending in -o change to -a for feminine. Colors ending in -e or consonants don't change for gender.",
                examples: [
                    { spanish: "La casa blanca", english: "The white house" },
                    { spanish: "El carro rojo", english: "The red car" },
                    { spanish: "Las flores amarillas", english: "The yellow flowers" },
                    { spanish: "Los ojos azules", english: "The blue eyes" },
                    { spanish: "La camisa verde", english: "The green shirt" },
                    { spanish: "Los zapatos negros", english: "The black shoes" }
                ]
            }
        ]
    },

    // LESSON 8: Days of the Week
    {
        id: 8,
        title: "Days & Months",
        description: "Learn days of the week and months",
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
                    { spanish: "domingo", english: "Sunday", pronunciation: "doh-MEEN-goh" },
                    { spanish: "el fin de semana", english: "the weekend", pronunciation: "el feen deh seh-MAH-nah" }
                ]
            },
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
                title: "Talking About Dates",
                type: "grammar",
                explanation: "Days and months are NOT capitalized in Spanish. Use 'el' before days when talking about regular occurrences. Dates use cardinal numbers except for the first (primero).",
                examples: [
                    { spanish: "Hoy es lunes.", english: "Today is Monday." },
                    { spanish: "El viernes voy al cine.", english: "On Friday I'm going to the movies." },
                    { spanish: "Los lunes trabajo.", english: "On Mondays I work." },
                    { spanish: "Mi cumpleaños es en mayo.", english: "My birthday is in May." },
                    { spanish: "Es el primero de enero.", english: "It's January 1st." },
                    { spanish: "Es el 15 de agosto.", english: "It's August 15th." }
                ]
            }
        ]
    },

    // LESSON 9: Food & Drinks
    {
        id: 9,
        title: "Food & Drinks",
        description: "Essential food vocabulary",
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
                    { spanish: "las frutas", english: "fruits", pronunciation: "FROO-tahs" },
                    { spanish: "las verduras", english: "vegetables", pronunciation: "vehr-DOO-rahs" },
                    { spanish: "el queso", english: "cheese", pronunciation: "KEH-soh" },
                    { spanish: "la sopa", english: "soup", pronunciation: "SOH-pah" }
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
                    { spanish: "el refresco", english: "soft drink", pronunciation: "reh-FREHS-koh" },
                    { spanish: "la cerveza", english: "beer", pronunciation: "sehr-VEH-sah" },
                    { spanish: "el vino", english: "wine", pronunciation: "VEE-noh" }
                ]
            },
            {
                title: "At a Restaurant",
                type: "dialogue",
                lines: [
                    { speaker: "Mesero", spanish: "Buenas tardes. ¿Qué desea ordenar?", english: "Good afternoon. What would you like to order?" },
                    { speaker: "Cliente", spanish: "Quiero el pollo con arroz, por favor.", english: "I want the chicken with rice, please." },
                    { speaker: "Mesero", spanish: "Muy bien. ¿Y para tomar?", english: "Very well. And to drink?" },
                    { speaker: "Cliente", spanish: "Un agua mineral, por favor.", english: "A mineral water, please." },
                    { speaker: "Mesero", spanish: "¿Algo más?", english: "Anything else?" },
                    { speaker: "Cliente", spanish: "No, gracias. La cuenta, por favor.", english: "No, thanks. The check, please." }
                ]
            }
        ]
    },

    // LESSON 10: Common Verbs
    {
        id: 10,
        title: "Common Verbs",
        description: "Learn essential action verbs",
        xp: 30,
        sections: [
            {
                title: "Important Verbs (Infinitives)",
                type: "vocab",
                content: [
                    { spanish: "hablar", english: "to speak", pronunciation: "ah-BLAHR" },
                    { spanish: "comer", english: "to eat", pronunciation: "koh-MEHR" },
                    { spanish: "vivir", english: "to live", pronunciation: "vee-VEER" },
                    { spanish: "tener", english: "to have", pronunciation: "teh-NEHR" },
                    { spanish: "ir", english: "to go", pronunciation: "eer" },
                    { spanish: "hacer", english: "to do/make", pronunciation: "ah-SEHR" },
                    { spanish: "querer", english: "to want", pronunciation: "keh-REHR" },
                    { spanish: "poder", english: "to be able to/can", pronunciation: "poh-DEHR" },
                    { spanish: "saber", english: "to know (facts)", pronunciation: "sah-BEHR" },
                    { spanish: "conocer", english: "to know (people/places)", pronunciation: "koh-noh-SEHR" }
                ]
            },
            {
                title: "TENER Expressions",
                type: "grammar",
                explanation: "Spanish uses 'tener' (to have) for many expressions where English uses 'to be'. These are called 'tener expressions'.",
                examples: [
                    { spanish: "Tengo hambre.", english: "I'm hungry. (I have hunger)" },
                    { spanish: "Tengo sed.", english: "I'm thirsty. (I have thirst)" },
                    { spanish: "Tengo frío.", english: "I'm cold. (I have cold)" },
                    { spanish: "Tengo calor.", english: "I'm hot. (I have heat)" },
                    { spanish: "Tengo sueño.", english: "I'm sleepy. (I have sleep)" },
                    { spanish: "Tengo miedo.", english: "I'm scared. (I have fear)" },
                    { spanish: "Tengo prisa.", english: "I'm in a hurry. (I have hurry)" },
                    { spanish: "Tengo 25 años.", english: "I'm 25 years old. (I have 25 years)" }
                ]
            },
            {
                title: "Using These Verbs",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Quieres ir al cine?", english: "Do you want to go to the movies?" },
                    { speaker: "Carlos", spanish: "Sí, pero no puedo hoy.", english: "Yes, but I can't today." },
                    { speaker: "Ana", spanish: "¿Por qué no?", english: "Why not?" },
                    { speaker: "Carlos", spanish: "Tengo que trabajar.", english: "I have to work." },
                    { speaker: "Ana", spanish: "¿Y mañana?", english: "And tomorrow?" },
                    { speaker: "Carlos", spanish: "¡Perfecto! Mañana puedo. ¿A qué hora?", english: "Perfect! Tomorrow I can. What time?" }
                ]
            }
        ]
    },

    // LESSON 11: Numbers 21-100
    {
        id: 11,
        title: "Numbers 21-100",
        description: "Expand your number vocabulary",
        xp: 25,
        sections: [
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
                title: "Tens (30-100)",
                type: "vocab",
                content: [
                    { spanish: "treinta", english: "30", pronunciation: "TRAYN-tah" },
                    { spanish: "cuarenta", english: "40", pronunciation: "kwah-REHN-tah" },
                    { spanish: "cincuenta", english: "50", pronunciation: "seen-KWEHN-tah" },
                    { spanish: "sesenta", english: "60", pronunciation: "seh-SEHN-tah" },
                    { spanish: "setenta", english: "70", pronunciation: "seh-TEHN-tah" },
                    { spanish: "ochenta", english: "80", pronunciation: "oh-CHEHN-tah" },
                    { spanish: "noventa", english: "90", pronunciation: "noh-VEHN-tah" },
                    { spanish: "cien", english: "100", pronunciation: "syehn" }
                ]
            },
            {
                title: "Combining Numbers",
                type: "grammar",
                explanation: "For numbers 31-99, use the tens number + 'y' + ones number. Numbers 21-29 are written as one word (veinti-). 'Cien' becomes 'ciento' before other numbers.",
                examples: [
                    { spanish: "treinta y uno", english: "31" },
                    { spanish: "cuarenta y cinco", english: "45" },
                    { spanish: "sesenta y siete", english: "67" },
                    { spanish: "ochenta y nueve", english: "89" },
                    { spanish: "noventa y nueve", english: "99" },
                    { spanish: "Tengo cuarenta y dos años.", english: "I am 42 years old." }
                ]
            }
        ]
    },

    // LESSON 12: Articles and Gender
    {
        id: 12,
        title: "Articles & Gender",
        description: "Learn definite and indefinite articles",
        xp: 30,
        sections: [
            {
                title: "Definite Articles (The)",
                type: "grammar",
                explanation: "Spanish has four forms of 'the' depending on gender and number. Masculine singular = el, Feminine singular = la, Masculine plural = los, Feminine plural = las.",
                examples: [
                    { spanish: "el libro", english: "the book (masc. sing.)" },
                    { spanish: "la mesa", english: "the table (fem. sing.)" },
                    { spanish: "los libros", english: "the books (masc. plur.)" },
                    { spanish: "las mesas", english: "the tables (fem. plur.)" },
                    { spanish: "el agua", english: "the water (fem. but uses 'el')" },
                    { spanish: "las aguas", english: "the waters (fem. plur.)" }
                ]
            },
            {
                title: "Indefinite Articles (A/An/Some)",
                type: "grammar",
                explanation: "Spanish has four forms of 'a/an' and 'some'. Masculine singular = un, Feminine singular = una, Masculine plural = unos, Feminine plural = unas.",
                examples: [
                    { spanish: "un libro", english: "a book" },
                    { spanish: "una mesa", english: "a table" },
                    { spanish: "unos libros", english: "some books" },
                    { spanish: "unas mesas", english: "some tables" },
                    { spanish: "un amigo", english: "a friend (male)" },
                    { spanish: "una amiga", english: "a friend (female)" }
                ]
            },
            {
                title: "Gender Rules",
                type: "vocab",
                content: [
                    { spanish: "-o endings are usually masculine", english: "el libro, el vaso, el plato" },
                    { spanish: "-a endings are usually feminine", english: "la casa, la mesa, la silla" },
                    { spanish: "-ción/-sión are feminine", english: "la nación, la televisión" },
                    { spanish: "-dad/-tad are feminine", english: "la ciudad, la libertad" },
                    { spanish: "-ma words (Greek origin) are masculine", english: "el problema, el sistema, el tema" },
                    { spanish: "Some exceptions exist", english: "el día (day), la mano (hand), el mapa (map)" }
                ]
            }
        ]
    },

    // LESSON 13: Adjectives
    {
        id: 13,
        title: "Describing Things",
        description: "Learn common adjectives",
        xp: 25,
        sections: [
            {
                title: "Common Adjectives",
                type: "vocab",
                content: [
                    { spanish: "grande", english: "big/large", pronunciation: "GRAHN-deh" },
                    { spanish: "pequeño", english: "small", pronunciation: "peh-KEH-nyoh" },
                    { spanish: "nuevo", english: "new", pronunciation: "NWEH-voh" },
                    { spanish: "viejo", english: "old", pronunciation: "VYEH-hoh" },
                    { spanish: "bueno", english: "good", pronunciation: "BWEH-noh" },
                    { spanish: "malo", english: "bad", pronunciation: "MAH-loh" },
                    { spanish: "bonito", english: "pretty", pronunciation: "boh-NEE-toh" },
                    { spanish: "feo", english: "ugly", pronunciation: "FEH-oh" },
                    { spanish: "alto", english: "tall", pronunciation: "AHL-toh" },
                    { spanish: "bajo", english: "short", pronunciation: "BAH-hoh" }
                ]
            },
            {
                title: "More Adjectives",
                type: "vocab",
                content: [
                    { spanish: "largo", english: "long", pronunciation: "LAHR-goh" },
                    { spanish: "corto", english: "short (length)", pronunciation: "KOR-toh" },
                    { spanish: "caro", english: "expensive", pronunciation: "KAH-roh" },
                    { spanish: "barato", english: "cheap", pronunciation: "bah-RAH-toh" },
                    { spanish: "fácil", english: "easy", pronunciation: "FAH-seel" },
                    { spanish: "difícil", english: "difficult", pronunciation: "dee-FEE-seel" },
                    { spanish: "rápido", english: "fast", pronunciation: "RAH-pee-doh" },
                    { spanish: "lento", english: "slow", pronunciation: "LEHN-toh" },
                    { spanish: "caliente", english: "hot", pronunciation: "kah-LYEHN-teh" },
                    { spanish: "frío", english: "cold", pronunciation: "FREE-oh" }
                ]
            },
            {
                title: "Adjective Agreement",
                type: "grammar",
                explanation: "Adjectives must agree in gender and number with the noun. Most adjectives come AFTER the noun. Some short/common ones come before.",
                examples: [
                    { spanish: "El carro rojo", english: "The red car" },
                    { spanish: "La casa grande", english: "The big house" },
                    { spanish: "Los zapatos nuevos", english: "The new shoes" },
                    { spanish: "Las flores bonitas", english: "The pretty flowers" },
                    { spanish: "Un buen libro", english: "A good book (before noun)" },
                    { spanish: "Una gran ciudad", english: "A great city (before noun)" }
                ]
            }
        ]
    },

    // LESSON 14: Possessives
    {
        id: 14,
        title: "Possessive Words",
        description: "Express ownership in Spanish",
        xp: 25,
        sections: [
            {
                title: "Possessive Adjectives (Before Nouns)",
                type: "grammar",
                explanation: "These come before the noun and agree in number (and sometimes gender) with what's possessed, not the owner.",
                examples: [
                    { spanish: "mi libro / mis libros", english: "my book / my books" },
                    { spanish: "tu casa / tus casas", english: "your house / your houses" },
                    { spanish: "su carro / sus carros", english: "his/her/your(formal) car / cars" },
                    { spanish: "nuestro perro / nuestra gata", english: "our dog / our cat (f)" },
                    { spanish: "nuestros amigos / nuestras amigas", english: "our friends (m/f)" },
                    { spanish: "vuestro libro / vuestra casa", english: "your (Spain plural) book / house" }
                ]
            },
            {
                title: "Using Possessives",
                type: "vocab",
                content: [
                    { spanish: "mi familia", english: "my family" },
                    { spanish: "tu nombre", english: "your name" },
                    { spanish: "su teléfono", english: "his/her/your phone" },
                    { spanish: "nuestro profesor", english: "our teacher (m)" },
                    { spanish: "nuestra profesora", english: "our teacher (f)" },
                    { spanish: "mis padres", english: "my parents" },
                    { spanish: "tus hermanos", english: "your siblings" },
                    { spanish: "sus hijos", english: "his/her/their children" }
                ]
            },
            {
                title: "Practice Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cómo se llama tu perro?", english: "What's your dog's name?" },
                    { speaker: "Luis", spanish: "Mi perro se llama Max.", english: "My dog is named Max." },
                    { speaker: "Ana", spanish: "¿Y tus gatos?", english: "And your cats?" },
                    { speaker: "Luis", spanish: "Mis gatos se llaman Luna y Sol.", english: "My cats are named Luna and Sol." },
                    { speaker: "Ana", spanish: "¡Qué bonitos! Nuestra familia tiene un pájaro.", english: "How cute! Our family has a bird." },
                    { speaker: "Luis", spanish: "¿Cómo se llama su pájaro?", english: "What's your bird's name?" }
                ]
            }
        ]
    },

    // LESSON 15: Question Words
    {
        id: 15,
        title: "Question Words",
        description: "Learn to ask questions in Spanish",
        xp: 25,
        sections: [
            {
                title: "Basic Question Words",
                type: "vocab",
                content: [
                    { spanish: "¿Qué?", english: "What?", pronunciation: "keh" },
                    { spanish: "¿Quién? / ¿Quiénes?", english: "Who? (sing/plur)", pronunciation: "kyehn" },
                    { spanish: "¿Dónde?", english: "Where?", pronunciation: "DOHN-deh" },
                    { spanish: "¿Cuándo?", english: "When?", pronunciation: "KWAHN-doh" },
                    { spanish: "¿Por qué?", english: "Why?", pronunciation: "por keh" },
                    { spanish: "¿Cómo?", english: "How?", pronunciation: "KOH-moh" },
                    { spanish: "¿Cuánto/a?", english: "How much?", pronunciation: "KWAHN-toh" },
                    { spanish: "¿Cuántos/as?", english: "How many?", pronunciation: "KWAHN-tohs" },
                    { spanish: "¿Cuál? / ¿Cuáles?", english: "Which? (sing/plur)", pronunciation: "kwahl" }
                ]
            },
            {
                title: "Question Examples",
                type: "grammar",
                explanation: "Spanish questions use inverted question marks (¿?) at the beginning and end. The word order often stays the same as statements, with rising intonation.",
                examples: [
                    { spanish: "¿Qué es esto?", english: "What is this?" },
                    { spanish: "¿Quién es ella?", english: "Who is she?" },
                    { spanish: "¿Dónde vives?", english: "Where do you live?" },
                    { spanish: "¿Cuándo es tu cumpleaños?", english: "When is your birthday?" },
                    { spanish: "¿Por qué estudias español?", english: "Why do you study Spanish?" },
                    { spanish: "¿Cómo se dice 'hello'?", english: "How do you say 'hello'?" },
                    { spanish: "¿Cuánto cuesta?", english: "How much does it cost?" },
                    { spanish: "¿Cuántos años tienes?", english: "How old are you?" }
                ]
            },
            {
                title: "Question Practice",
                type: "dialogue",
                lines: [
                    { speaker: "Turista", spanish: "Perdón, ¿dónde está el museo?", english: "Excuse me, where is the museum?" },
                    { speaker: "Local", spanish: "Está a dos calles de aquí.", english: "It's two streets from here." },
                    { speaker: "Turista", spanish: "¿Cuánto cuesta la entrada?", english: "How much is the entrance fee?" },
                    { speaker: "Local", spanish: "Creo que son 10 euros.", english: "I think it's 10 euros." },
                    { speaker: "Turista", spanish: "¿A qué hora abre?", english: "What time does it open?" },
                    { speaker: "Local", spanish: "Abre a las nueve de la mañana.", english: "It opens at nine in the morning." }
                ]
            }
        ]
    },

    // LESSON 16: -AR Verb Conjugation
    {
        id: 16,
        title: "-AR Verbs Present Tense",
        description: "Master the most common verb type",
        xp: 35,
        sections: [
            {
                title: "-AR Verb Endings",
                type: "grammar",
                explanation: "Most Spanish verbs end in -AR. To conjugate, remove -AR and add: -o (yo), -as (tú), -a (él/ella/Ud.), -amos (nosotros), -áis (vosotros), -an (ellos/ellas/Uds.)",
                examples: [
                    { spanish: "HABLAR (to speak)", english: "Example verb" },
                    { spanish: "yo hablo", english: "I speak" },
                    { spanish: "tú hablas", english: "you speak" },
                    { spanish: "él/ella habla", english: "he/she speaks" },
                    { spanish: "nosotros hablamos", english: "we speak" },
                    { spanish: "ellos/ellas hablan", english: "they speak" }
                ]
            },
            {
                title: "Common -AR Verbs",
                type: "vocab",
                content: [
                    { spanish: "hablar", english: "to speak", pronunciation: "ah-BLAHR" },
                    { spanish: "estudiar", english: "to study", pronunciation: "ehs-too-DYAHR" },
                    { spanish: "trabajar", english: "to work", pronunciation: "trah-bah-HAHR" },
                    { spanish: "caminar", english: "to walk", pronunciation: "kah-mee-NAHR" },
                    { spanish: "comprar", english: "to buy", pronunciation: "kohm-PRAHR" },
                    { spanish: "cocinar", english: "to cook", pronunciation: "koh-see-NAHR" },
                    { spanish: "escuchar", english: "to listen", pronunciation: "ehs-koo-CHAHR" },
                    { spanish: "mirar", english: "to look/watch", pronunciation: "mee-RAHR" },
                    { spanish: "llamar", english: "to call", pronunciation: "yah-MAHR" },
                    { spanish: "llegar", english: "to arrive", pronunciation: "yeh-GAHR" }
                ]
            },
            {
                title: "Practice Sentences",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Qué estudias?", english: "What do you study?" },
                    { speaker: "Pedro", spanish: "Estudio español y matemáticas.", english: "I study Spanish and math." },
                    { speaker: "María", spanish: "¿Dónde trabajas?", english: "Where do you work?" },
                    { speaker: "Pedro", spanish: "Trabajo en un restaurante.", english: "I work at a restaurant." },
                    { speaker: "María", spanish: "¿Cocinas allí?", english: "Do you cook there?" },
                    { speaker: "Pedro", spanish: "No, no cocino. Trabajo como mesero.", english: "No, I don't cook. I work as a waiter." }
                ]
            }
        ]
    },

    // LESSON 17: -ER and -IR Verbs
    {
        id: 17,
        title: "-ER and -IR Verbs",
        description: "Learn the other two verb types",
        xp: 35,
        sections: [
            {
                title: "-ER Verb Endings",
                type: "grammar",
                explanation: "For -ER verbs, remove -ER and add: -o (yo), -es (tú), -e (él/ella/Ud.), -emos (nosotros), -éis (vosotros), -en (ellos/ellas/Uds.)",
                examples: [
                    { spanish: "COMER (to eat)", english: "Example verb" },
                    { spanish: "yo como", english: "I eat" },
                    { spanish: "tú comes", english: "you eat" },
                    { spanish: "él/ella come", english: "he/she eats" },
                    { spanish: "nosotros comemos", english: "we eat" },
                    { spanish: "ellos/ellas comen", english: "they eat" }
                ]
            },
            {
                title: "-IR Verb Endings",
                type: "grammar",
                explanation: "For -IR verbs, remove -IR and add: -o (yo), -es (tú), -e (él/ella/Ud.), -imos (nosotros), -ís (vosotros), -en (ellos/ellas/Uds.)",
                examples: [
                    { spanish: "VIVIR (to live)", english: "Example verb" },
                    { spanish: "yo vivo", english: "I live" },
                    { spanish: "tú vives", english: "you live" },
                    { spanish: "él/ella vive", english: "he/she lives" },
                    { spanish: "nosotros vivimos", english: "we live" },
                    { spanish: "ellos/ellas viven", english: "they live" }
                ]
            },
            {
                title: "Common -ER and -IR Verbs",
                type: "vocab",
                content: [
                    { spanish: "comer", english: "to eat (-ER)", pronunciation: "koh-MEHR" },
                    { spanish: "beber", english: "to drink (-ER)", pronunciation: "beh-BEHR" },
                    { spanish: "leer", english: "to read (-ER)", pronunciation: "leh-EHR" },
                    { spanish: "correr", english: "to run (-ER)", pronunciation: "koh-RREHR" },
                    { spanish: "aprender", english: "to learn (-ER)", pronunciation: "ah-prehn-DEHR" },
                    { spanish: "vivir", english: "to live (-IR)", pronunciation: "vee-VEER" },
                    { spanish: "escribir", english: "to write (-IR)", pronunciation: "ehs-kree-BEER" },
                    { spanish: "abrir", english: "to open (-IR)", pronunciation: "ah-BREER" },
                    { spanish: "recibir", english: "to receive (-IR)", pronunciation: "reh-see-BEER" },
                    { spanish: "decidir", english: "to decide (-IR)", pronunciation: "deh-see-DEER" }
                ]
            }
        ]
    },

    // LESSON 18: The Verb IR (To Go)
    {
        id: 18,
        title: "The Verb IR (To Go)",
        description: "Learn this essential irregular verb",
        xp: 30,
        sections: [
            {
                title: "IR Conjugation",
                type: "grammar",
                explanation: "IR (to go) is completely irregular. It's one of the most important verbs to memorize. It's often followed by 'a' (to).",
                examples: [
                    { spanish: "yo voy", english: "I go" },
                    { spanish: "tú vas", english: "you go" },
                    { spanish: "él/ella/usted va", english: "he/she goes / you go (formal)" },
                    { spanish: "nosotros vamos", english: "we go" },
                    { spanish: "vosotros vais", english: "you all go (Spain)" },
                    { spanish: "ellos/ellas/ustedes van", english: "they go / you all go" }
                ]
            },
            {
                title: "IR + A + Place",
                type: "vocab",
                content: [
                    { spanish: "Voy a la escuela.", english: "I go to school." },
                    { spanish: "Vas al trabajo.", english: "You go to work." },
                    { spanish: "Va al supermercado.", english: "He/She goes to the supermarket." },
                    { spanish: "Vamos a la playa.", english: "We go to the beach." },
                    { spanish: "Van al cine.", english: "They go to the movies." },
                    { spanish: "¿A dónde vas?", english: "Where are you going?" },
                    { spanish: "Voy a casa.", english: "I'm going home." },
                    { spanish: "Vamos al restaurante.", english: "We're going to the restaurant." }
                ]
            },
            {
                title: "IR + A + Infinitive (Future)",
                type: "grammar",
                explanation: "IR + a + infinitive verb expresses future actions, similar to 'going to' in English. This is the most common way to express the near future in spoken Spanish.",
                examples: [
                    { spanish: "Voy a estudiar.", english: "I'm going to study." },
                    { spanish: "¿Qué vas a hacer?", english: "What are you going to do?" },
                    { spanish: "Va a llover.", english: "It's going to rain." },
                    { spanish: "Vamos a comer.", english: "We're going to eat." },
                    { spanish: "Van a viajar.", english: "They're going to travel." },
                    { spanish: "¿Vas a venir?", english: "Are you going to come?" }
                ]
            }
        ]
    },

    // LESSON 19: Locations & Prepositions
    {
        id: 19,
        title: "Locations & Prepositions",
        description: "Describe where things are",
        xp: 25,
        sections: [
            {
                title: "Places in Town",
                type: "vocab",
                content: [
                    { spanish: "la casa", english: "house/home", pronunciation: "KAH-sah" },
                    { spanish: "la escuela", english: "school", pronunciation: "ehs-KWEH-lah" },
                    { spanish: "el trabajo", english: "work/job", pronunciation: "trah-BAH-hoh" },
                    { spanish: "la tienda", english: "store/shop", pronunciation: "TYEHN-dah" },
                    { spanish: "el supermercado", english: "supermarket", pronunciation: "soo-pehr-mehr-KAH-doh" },
                    { spanish: "el banco", english: "bank", pronunciation: "BAHN-koh" },
                    { spanish: "el hospital", english: "hospital", pronunciation: "ohs-pee-TAHL" },
                    { spanish: "la farmacia", english: "pharmacy", pronunciation: "fahr-MAH-syah" },
                    { spanish: "el parque", english: "park", pronunciation: "PAHR-keh" },
                    { spanish: "la iglesia", english: "church", pronunciation: "ee-GLEH-syah" }
                ]
            },
            {
                title: "Prepositions of Place",
                type: "vocab",
                content: [
                    { spanish: "en", english: "in/on/at", pronunciation: "ehn" },
                    { spanish: "a", english: "to/at", pronunciation: "ah" },
                    { spanish: "de", english: "of/from", pronunciation: "deh" },
                    { spanish: "cerca de", english: "near/close to", pronunciation: "SEHR-kah deh" },
                    { spanish: "lejos de", english: "far from", pronunciation: "LEH-hohs deh" },
                    { spanish: "al lado de", english: "next to/beside", pronunciation: "ahl LAH-doh deh" },
                    { spanish: "enfrente de", english: "in front of", pronunciation: "ehn-FREHN-teh deh" },
                    { spanish: "detrás de", english: "behind", pronunciation: "deh-TRAHS deh" },
                    { spanish: "entre", english: "between", pronunciation: "EHN-treh" },
                    { spanish: "debajo de", english: "under", pronunciation: "deh-BAH-hoh deh" },
                    { spanish: "encima de", english: "on top of", pronunciation: "ehn-SEE-mah deh" }
                ]
            },
            {
                title: "Giving Directions",
                type: "dialogue",
                lines: [
                    { speaker: "Turista", spanish: "Perdón, ¿dónde está el banco?", english: "Excuse me, where is the bank?" },
                    { speaker: "Local", spanish: "El banco está cerca de aquí.", english: "The bank is near here." },
                    { speaker: "Turista", spanish: "¿Está lejos de la plaza?", english: "Is it far from the plaza?" },
                    { speaker: "Local", spanish: "No, está al lado del supermercado.", english: "No, it's next to the supermarket." },
                    { speaker: "Turista", spanish: "¿Y la farmacia?", english: "And the pharmacy?" },
                    { speaker: "Local", spanish: "La farmacia está enfrente del banco.", english: "The pharmacy is in front of the bank." }
                ]
            }
        ]
    },

    // LESSON 20: Weather & Seasons
    {
        id: 20,
        title: "Weather & Seasons",
        description: "Talk about weather and seasons",
        xp: 25,
        sections: [
            {
                title: "Weather Expressions",
                type: "vocab",
                content: [
                    { spanish: "Hace calor.", english: "It's hot.", pronunciation: "AH-seh kah-LOR" },
                    { spanish: "Hace frío.", english: "It's cold.", pronunciation: "AH-seh FREE-oh" },
                    { spanish: "Hace sol.", english: "It's sunny.", pronunciation: "AH-seh sohl" },
                    { spanish: "Hace viento.", english: "It's windy.", pronunciation: "AH-seh VYEHN-toh" },
                    { spanish: "Hace buen tiempo.", english: "The weather is nice.", pronunciation: "AH-seh bwehn TYEHM-poh" },
                    { spanish: "Hace mal tiempo.", english: "The weather is bad.", pronunciation: "AH-seh mahl TYEHM-poh" },
                    { spanish: "Llueve. / Está lloviendo.", english: "It's raining.", pronunciation: "YWEH-veh" },
                    { spanish: "Nieva. / Está nevando.", english: "It's snowing.", pronunciation: "NYEH-vah" },
                    { spanish: "Está nublado.", english: "It's cloudy.", pronunciation: "ehs-TAH noo-BLAH-doh" }
                ]
            },
            {
                title: "Seasons",
                type: "vocab",
                content: [
                    { spanish: "la primavera", english: "spring", pronunciation: "pree-mah-VEH-rah" },
                    { spanish: "el verano", english: "summer", pronunciation: "veh-RAH-noh" },
                    { spanish: "el otoño", english: "fall/autumn", pronunciation: "oh-TOH-nyoh" },
                    { spanish: "el invierno", english: "winter", pronunciation: "een-VYEHR-noh" },
                    { spanish: "en primavera", english: "in spring" },
                    { spanish: "en verano", english: "in summer" },
                    { spanish: "en otoño", english: "in fall" },
                    { spanish: "en invierno", english: "in winter" }
                ]
            },
            {
                title: "Weather Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Qué tiempo hace hoy?", english: "What's the weather like today?" },
                    { speaker: "Carlos", spanish: "Hace mucho calor. Hace sol.", english: "It's very hot. It's sunny." },
                    { speaker: "Ana", spanish: "¿Y mañana?", english: "And tomorrow?" },
                    { speaker: "Carlos", spanish: "Creo que va a llover.", english: "I think it's going to rain." },
                    { speaker: "Ana", spanish: "En invierno siempre hace frío aquí.", english: "In winter it's always cold here." },
                    { speaker: "Carlos", spanish: "Sí, y a veces nieva.", english: "Yes, and sometimes it snows." }
                ]
            }
        ]
    }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LESSONS_MONTH1;
}
