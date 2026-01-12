/**
 * Spanish Fluency Quest - Month 2 Lessons (21-40)
 * Intermediate: More verbs, Past tense, Daily life, More vocabulary
 */

const LESSONS_MONTH2 = [
    // LESSON 21: Time & Daily Routine
    {
        id: 21,
        title: "Telling Time",
        description: "Learn to tell time in Spanish",
        xp: 25,
        sections: [
            {
                title: "Hours",
                type: "grammar",
                explanation: "Use 'Es la una' for 1:00 and 'Son las + number' for other hours. Use 'de la mañana' (AM), 'de la tarde' (afternoon), 'de la noche' (evening/night).",
                examples: [
                    { spanish: "Es la una.", english: "It's 1:00." },
                    { spanish: "Son las dos.", english: "It's 2:00." },
                    { spanish: "Son las tres de la tarde.", english: "It's 3:00 PM." },
                    { spanish: "Son las ocho de la mañana.", english: "It's 8:00 AM." },
                    { spanish: "Son las diez de la noche.", english: "It's 10:00 PM." },
                    { spanish: "Es mediodía.", english: "It's noon." },
                    { spanish: "Es medianoche.", english: "It's midnight." }
                ]
            },
            {
                title: "Minutes",
                type: "grammar",
                explanation: "Add 'y' (and) for minutes past the hour, 'menos' (minus) for minutes before. 'Y media' = half past, 'y cuarto' = quarter past, 'menos cuarto' = quarter to.",
                examples: [
                    { spanish: "Son las tres y diez.", english: "It's 3:10." },
                    { spanish: "Son las cinco y cuarto.", english: "It's 5:15." },
                    { spanish: "Son las siete y media.", english: "It's 7:30." },
                    { spanish: "Son las nueve menos cuarto.", english: "It's 8:45 (9 minus quarter)." },
                    { spanish: "Son las dos menos diez.", english: "It's 1:50 (2 minus 10)." },
                    { spanish: "¿A qué hora?", english: "At what time?" },
                    { spanish: "A las seis.", english: "At 6:00." }
                ]
            },
            {
                title: "Daily Schedule",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿A qué hora te levantas?", english: "What time do you get up?" },
                    { speaker: "Luis", spanish: "Me levanto a las siete de la mañana.", english: "I get up at 7:00 AM." },
                    { speaker: "Ana", spanish: "¿Y a qué hora empiezas a trabajar?", english: "And what time do you start work?" },
                    { speaker: "Luis", spanish: "Empiezo a las nueve.", english: "I start at 9:00." },
                    { speaker: "Ana", spanish: "¿Cuándo comes el almuerzo?", english: "When do you eat lunch?" },
                    { speaker: "Luis", spanish: "Como a la una y media.", english: "I eat at 1:30." }
                ]
            }
        ]
    },

    // LESSON 22: Daily Routine
    {
        id: 22,
        title: "Daily Routine",
        description: "Describe your daily activities",
        xp: 25,
        sections: [
            {
                title: "Morning Routine",
                type: "vocab",
                content: [
                    { spanish: "despertarse", english: "to wake up", pronunciation: "dehs-pehr-TAHR-seh" },
                    { spanish: "levantarse", english: "to get up", pronunciation: "leh-vahn-TAHR-seh" },
                    { spanish: "ducharse", english: "to shower", pronunciation: "doo-CHAHR-seh" },
                    { spanish: "bañarse", english: "to bathe", pronunciation: "bah-NYAHR-seh" },
                    { spanish: "lavarse los dientes", english: "to brush teeth", pronunciation: "lah-VAHR-seh" },
                    { spanish: "peinarse", english: "to comb hair", pronunciation: "pay-NAHR-seh" },
                    { spanish: "vestirse", english: "to get dressed", pronunciation: "vehs-TEER-seh" },
                    { spanish: "desayunar", english: "to eat breakfast", pronunciation: "deh-sah-yoo-NAHR" }
                ]
            },
            {
                title: "Evening Routine",
                type: "vocab",
                content: [
                    { spanish: "volver a casa", english: "to return home", pronunciation: "vohl-VEHR" },
                    { spanish: "cenar", english: "to eat dinner", pronunciation: "seh-NAHR" },
                    { spanish: "ver la televisión", english: "to watch TV", pronunciation: "vehr" },
                    { spanish: "leer", english: "to read", pronunciation: "leh-EHR" },
                    { spanish: "acostarse", english: "to go to bed", pronunciation: "ah-kohs-TAHR-seh" },
                    { spanish: "dormirse", english: "to fall asleep", pronunciation: "dohr-MEER-seh" },
                    { spanish: "relajarse", english: "to relax", pronunciation: "reh-lah-HAHR-seh" },
                    { spanish: "quitarse la ropa", english: "to take off clothes", pronunciation: "kee-TAHR-seh" }
                ]
            },
            {
                title: "My Day",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Cómo es tu día típico?", english: "What's your typical day like?" },
                    { speaker: "Pedro", spanish: "Me despierto a las seis y me levanto.", english: "I wake up at 6 and get up." },
                    { speaker: "María", spanish: "¿Te duchas por la mañana?", english: "Do you shower in the morning?" },
                    { speaker: "Pedro", spanish: "Sí, me ducho y me visto.", english: "Yes, I shower and get dressed." },
                    { speaker: "María", spanish: "¿A qué hora te acuestas?", english: "What time do you go to bed?" },
                    { speaker: "Pedro", spanish: "Normalmente me acuesto a las once.", english: "Usually I go to bed at 11." }
                ]
            }
        ]
    },

    // LESSON 23: Reflexive Verbs
    {
        id: 23,
        title: "Reflexive Verbs",
        description: "Learn verbs that reflect back to the subject",
        xp: 30,
        sections: [
            {
                title: "Reflexive Pronouns",
                type: "grammar",
                explanation: "Reflexive verbs have 'se' attached to the infinitive and use reflexive pronouns: me (myself), te (yourself), se (himself/herself), nos (ourselves), os (yourselves-Spain), se (themselves).",
                examples: [
                    { spanish: "LEVANTARSE (to get up)", english: "Reflexive verb example" },
                    { spanish: "yo me levanto", english: "I get up" },
                    { spanish: "tú te levantas", english: "you get up" },
                    { spanish: "él/ella se levanta", english: "he/she gets up" },
                    { spanish: "nosotros nos levantamos", english: "we get up" },
                    { spanish: "ellos se levantan", english: "they get up" }
                ]
            },
            {
                title: "Common Reflexive Verbs",
                type: "vocab",
                content: [
                    { spanish: "llamarse", english: "to be called/named", pronunciation: "yah-MAHR-seh" },
                    { spanish: "sentirse", english: "to feel", pronunciation: "sehn-TEER-seh" },
                    { spanish: "ponerse", english: "to put on (clothes)", pronunciation: "poh-NEHR-seh" },
                    { spanish: "quitarse", english: "to take off", pronunciation: "kee-TAHR-seh" },
                    { spanish: "sentarse", english: "to sit down", pronunciation: "sehn-TAHR-seh" },
                    { spanish: "irse", english: "to leave/go away", pronunciation: "EER-seh" },
                    { spanish: "quedarse", english: "to stay", pronunciation: "keh-DAHR-seh" },
                    { spanish: "divertirse", english: "to have fun", pronunciation: "dee-vehr-TEER-seh" },
                    { spanish: "preocuparse", english: "to worry", pronunciation: "preh-oh-koo-PAHR-seh" },
                    { spanish: "acordarse", english: "to remember", pronunciation: "ah-kohr-DAHR-seh" }
                ]
            },
            {
                title: "Using Reflexive Verbs",
                type: "grammar",
                explanation: "Some verbs change meaning when reflexive. The pronoun usually goes before the conjugated verb, but attaches to infinitives and gerunds.",
                examples: [
                    { spanish: "Duermo bien.", english: "I sleep well." },
                    { spanish: "Me duermo a las once.", english: "I fall asleep at 11." },
                    { spanish: "Llamo a mi mamá.", english: "I call my mom." },
                    { spanish: "Me llamo Ana.", english: "I'm called Ana / My name is Ana." },
                    { spanish: "Voy a ducharme.", english: "I'm going to shower." },
                    { spanish: "Estoy vistiéndome.", english: "I'm getting dressed." }
                ]
            }
        ]
    },

    // LESSON 24: Clothing
    {
        id: 24,
        title: "Clothing",
        description: "Learn vocabulary for clothes",
        xp: 25,
        sections: [
            {
                title: "Basic Clothing",
                type: "vocab",
                content: [
                    { spanish: "la camisa", english: "shirt", pronunciation: "kah-MEE-sah" },
                    { spanish: "la camiseta", english: "t-shirt", pronunciation: "kah-mee-SEH-tah" },
                    { spanish: "los pantalones", english: "pants", pronunciation: "pahn-tah-LOH-nehs" },
                    { spanish: "los jeans / vaqueros", english: "jeans", pronunciation: "vahkEH-rohs" },
                    { spanish: "la falda", english: "skirt", pronunciation: "FAHL-dah" },
                    { spanish: "el vestido", english: "dress", pronunciation: "vehs-TEE-doh" },
                    { spanish: "el traje", english: "suit", pronunciation: "TRAH-heh" },
                    { spanish: "la chaqueta", english: "jacket", pronunciation: "chah-KEH-tah" },
                    { spanish: "el abrigo", english: "coat", pronunciation: "ah-BREE-goh" },
                    { spanish: "el suéter", english: "sweater", pronunciation: "SWEH-tehr" }
                ]
            },
            {
                title: "Accessories & Footwear",
                type: "vocab",
                content: [
                    { spanish: "los zapatos", english: "shoes", pronunciation: "sah-PAH-tohs" },
                    { spanish: "las botas", english: "boots", pronunciation: "BOH-tahs" },
                    { spanish: "las sandalias", english: "sandals", pronunciation: "sahn-DAH-lyahs" },
                    { spanish: "los calcetines", english: "socks", pronunciation: "kahl-seh-TEE-nehs" },
                    { spanish: "el sombrero", english: "hat", pronunciation: "sohm-BREH-roh" },
                    { spanish: "la gorra", english: "cap", pronunciation: "GOH-rah" },
                    { spanish: "el cinturón", english: "belt", pronunciation: "seen-too-ROHN" },
                    { spanish: "la corbata", english: "tie", pronunciation: "kohr-BAH-tah" },
                    { spanish: "los guantes", english: "gloves", pronunciation: "GWAHN-tehs" },
                    { spanish: "la bufanda", english: "scarf", pronunciation: "boo-FAHN-dah" }
                ]
            },
            {
                title: "Shopping for Clothes",
                type: "dialogue",
                lines: [
                    { speaker: "Cliente", spanish: "Busco una camisa azul.", english: "I'm looking for a blue shirt." },
                    { speaker: "Vendedor", spanish: "¿Qué talla usa?", english: "What size do you wear?" },
                    { speaker: "Cliente", spanish: "Uso talla mediana.", english: "I wear medium." },
                    { speaker: "Vendedor", spanish: "Aquí tiene. ¿Le gustaría probársela?", english: "Here you go. Would you like to try it on?" },
                    { speaker: "Cliente", spanish: "Sí, ¿dónde está el probador?", english: "Yes, where is the fitting room?" },
                    { speaker: "Vendedor", spanish: "Está al fondo a la derecha.", english: "It's in the back on the right." }
                ]
            }
        ]
    },

    // LESSON 25: Body Parts
    {
        id: 25,
        title: "Body Parts",
        description: "Learn vocabulary for the human body",
        xp: 25,
        sections: [
            {
                title: "Head & Face",
                type: "vocab",
                content: [
                    { spanish: "la cabeza", english: "head", pronunciation: "kah-BEH-sah" },
                    { spanish: "la cara", english: "face", pronunciation: "KAH-rah" },
                    { spanish: "el pelo / cabello", english: "hair", pronunciation: "PEH-loh" },
                    { spanish: "los ojos", english: "eyes", pronunciation: "OH-hohs" },
                    { spanish: "la nariz", english: "nose", pronunciation: "nah-REES" },
                    { spanish: "la boca", english: "mouth", pronunciation: "BOH-kah" },
                    { spanish: "los labios", english: "lips", pronunciation: "LAH-byohs" },
                    { spanish: "los dientes", english: "teeth", pronunciation: "DYEHN-tehs" },
                    { spanish: "la lengua", english: "tongue", pronunciation: "LEHN-gwah" },
                    { spanish: "las orejas", english: "ears", pronunciation: "oh-REH-hahs" }
                ]
            },
            {
                title: "Body",
                type: "vocab",
                content: [
                    { spanish: "el cuerpo", english: "body", pronunciation: "KWEHR-poh" },
                    { spanish: "el cuello", english: "neck", pronunciation: "KWEH-yoh" },
                    { spanish: "los hombros", english: "shoulders", pronunciation: "OHM-brohs" },
                    { spanish: "el brazo", english: "arm", pronunciation: "BRAH-soh" },
                    { spanish: "la mano", english: "hand", pronunciation: "MAH-noh" },
                    { spanish: "los dedos", english: "fingers", pronunciation: "DEH-dohs" },
                    { spanish: "la pierna", english: "leg", pronunciation: "PYEHR-nah" },
                    { spanish: "el pie", english: "foot", pronunciation: "pyeh" },
                    { spanish: "la espalda", english: "back", pronunciation: "ehs-PAHL-dah" },
                    { spanish: "el estómago", english: "stomach", pronunciation: "ehs-TOH-mah-goh" }
                ]
            },
            {
                title: "At the Doctor",
                type: "dialogue",
                lines: [
                    { speaker: "Doctor", spanish: "¿Qué le pasa?", english: "What's wrong?" },
                    { speaker: "Paciente", spanish: "Me duele la cabeza.", english: "My head hurts." },
                    { speaker: "Doctor", spanish: "¿Desde cuándo?", english: "Since when?" },
                    { speaker: "Paciente", spanish: "Desde ayer. También me duele la garganta.", english: "Since yesterday. My throat also hurts." },
                    { speaker: "Doctor", spanish: "Abra la boca, por favor.", english: "Open your mouth, please." },
                    { speaker: "Doctor", spanish: "Tiene una infección. Tome estas pastillas.", english: "You have an infection. Take these pills." }
                ]
            }
        ]
    },

    // LESSON 26: Health & Feelings
    {
        id: 26,
        title: "Health & Feelings",
        description: "Express how you feel physically and emotionally",
        xp: 25,
        sections: [
            {
                title: "Physical States",
                type: "vocab",
                content: [
                    { spanish: "estar enfermo/a", english: "to be sick", pronunciation: "ehn-FEHR-moh" },
                    { spanish: "estar sano/a", english: "to be healthy", pronunciation: "SAH-noh" },
                    { spanish: "tener fiebre", english: "to have a fever", pronunciation: "FYEH-breh" },
                    { spanish: "tener tos", english: "to have a cough", pronunciation: "tohs" },
                    { spanish: "tener gripe", english: "to have the flu", pronunciation: "GREE-peh" },
                    { spanish: "doler", english: "to hurt", pronunciation: "doh-LEHR" },
                    { spanish: "Me duele...", english: "My... hurts", pronunciation: "meh DWEH-leh" },
                    { spanish: "estar cansado/a", english: "to be tired", pronunciation: "kahn-SAH-doh" },
                    { spanish: "estar mareado/a", english: "to be dizzy", pronunciation: "mah-reh-AH-doh" }
                ]
            },
            {
                title: "Emotions",
                type: "vocab",
                content: [
                    { spanish: "feliz / contento/a", english: "happy", pronunciation: "feh-LEES" },
                    { spanish: "triste", english: "sad", pronunciation: "TREES-teh" },
                    { spanish: "enojado/a / enfadado/a", english: "angry", pronunciation: "eh-noh-HAH-doh" },
                    { spanish: "nervioso/a", english: "nervous", pronunciation: "nehr-VYOH-soh" },
                    { spanish: "preocupado/a", english: "worried", pronunciation: "preh-oh-koo-PAH-doh" },
                    { spanish: "emocionado/a", english: "excited", pronunciation: "eh-moh-syoh-NAH-doh" },
                    { spanish: "aburrido/a", english: "bored", pronunciation: "ah-boo-RREE-doh" },
                    { spanish: "sorprendido/a", english: "surprised", pronunciation: "sohr-prehn-DEE-doh" },
                    { spanish: "asustado/a", english: "scared", pronunciation: "ah-soos-TAH-doh" },
                    { spanish: "confundido/a", english: "confused", pronunciation: "kohn-foon-DEE-doh" }
                ]
            },
            {
                title: "Expressing Feelings",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cómo te sientes hoy?", english: "How do you feel today?" },
                    { speaker: "Carlos", spanish: "Me siento un poco triste.", english: "I feel a little sad." },
                    { speaker: "Ana", spanish: "¿Por qué? ¿Qué pasa?", english: "Why? What's wrong?" },
                    { speaker: "Carlos", spanish: "Estoy preocupado por mi examen.", english: "I'm worried about my exam." },
                    { speaker: "Ana", spanish: "No te preocupes. Vas a estar bien.", english: "Don't worry. You're going to be fine." },
                    { speaker: "Carlos", spanish: "Gracias. Me siento mejor ahora.", english: "Thanks. I feel better now." }
                ]
            }
        ]
    },

    // LESSON 27: House & Furniture
    {
        id: 27,
        title: "House & Furniture",
        description: "Learn vocabulary for home",
        xp: 25,
        sections: [
            {
                title: "Rooms of the House",
                type: "vocab",
                content: [
                    { spanish: "la casa", english: "house", pronunciation: "KAH-sah" },
                    { spanish: "el apartamento / piso", english: "apartment", pronunciation: "ah-pahr-tah-MEHN-toh" },
                    { spanish: "la habitación / el cuarto", english: "room", pronunciation: "ah-bee-tah-SYOHN" },
                    { spanish: "la cocina", english: "kitchen", pronunciation: "koh-SEE-nah" },
                    { spanish: "el comedor", english: "dining room", pronunciation: "koh-meh-DOHR" },
                    { spanish: "la sala / el salón", english: "living room", pronunciation: "SAH-lah" },
                    { spanish: "el dormitorio", english: "bedroom", pronunciation: "dohr-mee-TOH-ryoh" },
                    { spanish: "el baño", english: "bathroom", pronunciation: "BAH-nyoh" },
                    { spanish: "el garaje", english: "garage", pronunciation: "gah-RAH-heh" },
                    { spanish: "el jardín", english: "garden", pronunciation: "hahr-DEEN" }
                ]
            },
            {
                title: "Furniture",
                type: "vocab",
                content: [
                    { spanish: "la cama", english: "bed", pronunciation: "KAH-mah" },
                    { spanish: "la mesa", english: "table", pronunciation: "MEH-sah" },
                    { spanish: "la silla", english: "chair", pronunciation: "SEE-yah" },
                    { spanish: "el sofá", english: "sofa", pronunciation: "soh-FAH" },
                    { spanish: "el armario", english: "closet/wardrobe", pronunciation: "ahr-MAH-ryoh" },
                    { spanish: "la estantería", english: "bookshelf", pronunciation: "ehs-tahn-teh-REE-ah" },
                    { spanish: "el escritorio", english: "desk", pronunciation: "ehs-kree-TOH-ryoh" },
                    { spanish: "la lámpara", english: "lamp", pronunciation: "LAHM-pah-rah" },
                    { spanish: "la alfombra", english: "rug/carpet", pronunciation: "ahl-FOHM-brah" },
                    { spanish: "el espejo", english: "mirror", pronunciation: "ehs-PEH-hoh" }
                ]
            },
            {
                title: "Describing Your Home",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Cómo es tu casa?", english: "What's your house like?" },
                    { speaker: "Juan", spanish: "Es pequeña pero cómoda.", english: "It's small but comfortable." },
                    { speaker: "María", spanish: "¿Cuántas habitaciones tiene?", english: "How many rooms does it have?" },
                    { speaker: "Juan", spanish: "Tiene dos dormitorios y un baño.", english: "It has two bedrooms and one bathroom." },
                    { speaker: "María", spanish: "¿Tienes jardín?", english: "Do you have a garden?" },
                    { speaker: "Juan", spanish: "Sí, tenemos un jardín pequeño detrás.", english: "Yes, we have a small garden in back." }
                ]
            }
        ]
    },

    // LESSON 28: Household Chores
    {
        id: 28,
        title: "Household Chores",
        description: "Talk about housework",
        xp: 25,
        sections: [
            {
                title: "Cleaning",
                type: "vocab",
                content: [
                    { spanish: "limpiar", english: "to clean", pronunciation: "leem-PYAHR" },
                    { spanish: "barrer", english: "to sweep", pronunciation: "bah-RREHR" },
                    { spanish: "pasar la aspiradora", english: "to vacuum", pronunciation: "ahs-pee-rah-DOH-rah" },
                    { spanish: "fregar / lavar los platos", english: "to wash dishes", pronunciation: "freh-GAHR" },
                    { spanish: "lavar la ropa", english: "to do laundry", pronunciation: "lah-VAHR" },
                    { spanish: "planchar", english: "to iron", pronunciation: "plahn-CHAHR" },
                    { spanish: "ordenar", english: "to tidy up", pronunciation: "ohr-deh-NAHR" },
                    { spanish: "hacer la cama", english: "to make the bed", pronunciation: "ah-SEHR" }
                ]
            },
            {
                title: "Other Chores",
                type: "vocab",
                content: [
                    { spanish: "cocinar", english: "to cook", pronunciation: "koh-see-NAHR" },
                    { spanish: "sacar la basura", english: "to take out trash", pronunciation: "sah-KAHR" },
                    { spanish: "regar las plantas", english: "to water plants", pronunciation: "reh-GAHR" },
                    { spanish: "cortar el césped", english: "to mow the lawn", pronunciation: "kohr-TAHR" },
                    { spanish: "pasear al perro", english: "to walk the dog", pronunciation: "pah-seh-AHR" },
                    { spanish: "ir de compras", english: "to go shopping", pronunciation: "eer deh KOHM-prahs" },
                    { spanish: "poner la mesa", english: "to set the table", pronunciation: "poh-NEHR" },
                    { spanish: "quitar la mesa", english: "to clear the table", pronunciation: "kee-TAHR" }
                ]
            },
            {
                title: "Dividing Chores",
                type: "dialogue",
                lines: [
                    { speaker: "Mamá", spanish: "Tenemos que limpiar la casa hoy.", english: "We have to clean the house today." },
                    { speaker: "Hijo", spanish: "¿Qué tengo que hacer?", english: "What do I have to do?" },
                    { speaker: "Mamá", spanish: "Tú haces tu cama y ordenas tu cuarto.", english: "You make your bed and tidy your room." },
                    { speaker: "Hijo", spanish: "¿Y mi hermana?", english: "And my sister?" },
                    { speaker: "Mamá", spanish: "Ella va a pasar la aspiradora.", english: "She's going to vacuum." },
                    { speaker: "Hijo", spanish: "Bueno, lo hago ahora.", english: "Okay, I'll do it now." }
                ]
            }
        ]
    },

    // LESSON 29: Transportation
    {
        id: 29,
        title: "Transportation",
        description: "Learn modes of transport",
        xp: 25,
        sections: [
            {
                title: "Vehicles",
                type: "vocab",
                content: [
                    { spanish: "el carro / coche", english: "car", pronunciation: "KAH-rroh / KOH-cheh" },
                    { spanish: "el autobús / bus", english: "bus", pronunciation: "ow-toh-BOOS" },
                    { spanish: "el tren", english: "train", pronunciation: "trehn" },
                    { spanish: "el metro", english: "subway/metro", pronunciation: "MEH-troh" },
                    { spanish: "el avión", english: "airplane", pronunciation: "ah-VYOHN" },
                    { spanish: "el barco", english: "boat/ship", pronunciation: "BAHR-koh" },
                    { spanish: "la bicicleta / bici", english: "bicycle/bike", pronunciation: "bee-see-KLEH-tah" },
                    { spanish: "la moto(cicleta)", english: "motorcycle", pronunciation: "MOH-toh" },
                    { spanish: "el taxi", english: "taxi", pronunciation: "TAHK-see" },
                    { spanish: "el helicóptero", english: "helicopter", pronunciation: "eh-lee-KOHP-teh-roh" }
                ]
            },
            {
                title: "Travel Verbs",
                type: "vocab",
                content: [
                    { spanish: "ir en...", english: "to go by...", pronunciation: "eer ehn" },
                    { spanish: "conducir / manejar", english: "to drive", pronunciation: "kohn-doo-SEER" },
                    { spanish: "tomar (el bus)", english: "to take (the bus)", pronunciation: "toh-MAHR" },
                    { spanish: "montar en bici", english: "to ride a bike", pronunciation: "mohn-TAHR" },
                    { spanish: "caminar / andar", english: "to walk", pronunciation: "kah-mee-NAHR" },
                    { spanish: "volar", english: "to fly", pronunciation: "voh-LAHR" },
                    { spanish: "llegar", english: "to arrive", pronunciation: "yeh-GAHR" },
                    { spanish: "salir", english: "to leave/depart", pronunciation: "sah-LEER" }
                ]
            },
            {
                title: "Getting Around",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cómo vas al trabajo?", english: "How do you get to work?" },
                    { speaker: "Luis", spanish: "Voy en metro. Es más rápido.", english: "I go by subway. It's faster." },
                    { speaker: "Ana", spanish: "¿A qué hora sale el metro?", english: "What time does the subway leave?" },
                    { speaker: "Luis", spanish: "Hay uno cada diez minutos.", english: "There's one every ten minutes." },
                    { speaker: "Ana", spanish: "¿Y los fines de semana?", english: "And on weekends?" },
                    { spanish: "Luis", spanish: "Los fines de semana conduzco mi carro.", english: "On weekends I drive my car." }
                ]
            }
        ]
    },

    // LESSON 30: The Verb GUSTAR (To Like)
    {
        id: 30,
        title: "The Verb GUSTAR",
        description: "Express likes and dislikes",
        xp: 30,
        sections: [
            {
                title: "How GUSTAR Works",
                type: "grammar",
                explanation: "GUSTAR literally means 'to please'. The thing liked is the subject. Use 'gusta' with singular nouns/infinitives and 'gustan' with plural nouns. Add indirect object pronouns.",
                examples: [
                    { spanish: "Me gusta el café.", english: "I like coffee. (Coffee pleases me)" },
                    { spanish: "Te gusta bailar.", english: "You like to dance." },
                    { spanish: "Le gusta la música.", english: "He/She likes music." },
                    { spanish: "Nos gustan los perros.", english: "We like dogs." },
                    { spanish: "Les gustan las películas.", english: "They like movies." },
                    { spanish: "Me gusta mucho.", english: "I like it a lot." }
                ]
            },
            {
                title: "Indirect Object Pronouns",
                type: "grammar",
                explanation: "These pronouns indicate who is pleased: me (to me), te (to you), le (to him/her/you formal), nos (to us), os (to you all-Spain), les (to them/you all formal).",
                examples: [
                    { spanish: "A mí me gusta...", english: "I like... (emphatic)" },
                    { spanish: "A ti te gusta...", english: "You like... (emphatic)" },
                    { spanish: "A él/ella le gusta...", english: "He/She likes..." },
                    { spanish: "A nosotros nos gusta...", english: "We like..." },
                    { spanish: "A ellos les gusta...", english: "They like..." },
                    { spanish: "A Juan le gusta...", english: "Juan likes..." }
                ]
            },
            {
                title: "Talking About Preferences",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Qué te gusta hacer los fines de semana?", english: "What do you like to do on weekends?" },
                    { speaker: "Pedro", spanish: "Me gusta ir al cine y leer.", english: "I like going to the movies and reading." },
                    { speaker: "María", spanish: "¿Te gustan los deportes?", english: "Do you like sports?" },
                    { speaker: "Pedro", spanish: "Sí, me gusta el fútbol. ¿Y a ti?", english: "Yes, I like soccer. And you?" },
                    { speaker: "María", spanish: "A mí me gusta más el tenis.", english: "I prefer tennis. (Tennis pleases me more)" },
                    { speaker: "Pedro", spanish: "¡Interesante! A mi hermana también le gusta.", english: "Interesting! My sister likes it too." }
                ]
            }
        ]
    },

    // LESSON 31: Preterite Tense (Regular -AR)
    {
        id: 31,
        title: "Past Tense: -AR Verbs",
        description: "Talk about completed actions in the past",
        xp: 35,
        sections: [
            {
                title: "Preterite -AR Endings",
                type: "grammar",
                explanation: "The preterite (past tense) describes completed actions. For -AR verbs, remove -AR and add: -é (yo), -aste (tú), -ó (él/ella), -amos (nosotros), -aron (ellos).",
                examples: [
                    { spanish: "HABLAR → hablé, hablaste, habló, hablamos, hablaron", english: "I spoke, you spoke, he spoke, we spoke, they spoke" },
                    { spanish: "Yo hablé con María ayer.", english: "I spoke with María yesterday." },
                    { spanish: "Tú compraste un libro.", english: "You bought a book." },
                    { spanish: "Ella estudió mucho.", english: "She studied a lot." },
                    { spanish: "Nosotros trabajamos ayer.", english: "We worked yesterday." },
                    { spanish: "Ellos caminaron al parque.", english: "They walked to the park." }
                ]
            },
            {
                title: "Time Expressions for Past",
                type: "vocab",
                content: [
                    { spanish: "ayer", english: "yesterday", pronunciation: "ah-YEHR" },
                    { spanish: "anoche", english: "last night", pronunciation: "ah-NOH-cheh" },
                    { spanish: "la semana pasada", english: "last week", pronunciation: "pah-SAH-dah" },
                    { spanish: "el mes pasado", english: "last month", pronunciation: "mehs" },
                    { spanish: "el año pasado", english: "last year", pronunciation: "AH-nyoh" },
                    { spanish: "hace dos días", english: "two days ago", pronunciation: "AH-seh" },
                    { spanish: "hace una semana", english: "a week ago", pronunciation: "" },
                    { spanish: "el otro día", english: "the other day", pronunciation: "" }
                ]
            },
            {
                title: "Talking About Yesterday",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Qué hiciste ayer?", english: "What did you do yesterday?" },
                    { speaker: "Luis", spanish: "Trabajé todo el día.", english: "I worked all day." },
                    { speaker: "Ana", spanish: "¿Y después del trabajo?", english: "And after work?" },
                    { speaker: "Luis", spanish: "Cené con mi familia y miré la tele.", english: "I had dinner with my family and watched TV." },
                    { speaker: "Ana", spanish: "¿A qué hora te acostaste?", english: "What time did you go to bed?" },
                    { speaker: "Luis", spanish: "Me acosté a las once.", english: "I went to bed at eleven." }
                ]
            }
        ]
    },

    // LESSON 32: Preterite Tense (Regular -ER/-IR)
    {
        id: 32,
        title: "Past Tense: -ER/-IR Verbs",
        description: "Complete your past tense knowledge",
        xp: 35,
        sections: [
            {
                title: "Preterite -ER/-IR Endings",
                type: "grammar",
                explanation: "For -ER and -IR verbs, remove the ending and add: -í (yo), -iste (tú), -ió (él/ella), -imos (nosotros), -ieron (ellos). Note: -ER and -IR have the same preterite endings!",
                examples: [
                    { spanish: "COMER → comí, comiste, comió, comimos, comieron", english: "I ate, you ate, he ate, we ate, they ate" },
                    { spanish: "VIVIR → viví, viviste, vivió, vivimos, vivieron", english: "I lived, you lived, he lived, we lived, they lived" },
                    { spanish: "Comí pizza anoche.", english: "I ate pizza last night." },
                    { spanish: "¿Escribiste la carta?", english: "Did you write the letter?" },
                    { spanish: "Ella recibió un regalo.", english: "She received a gift." }
                ]
            },
            {
                title: "More Practice Sentences",
                type: "grammar",
                explanation: "Practice recognizing and using preterite forms of common -ER and -IR verbs.",
                examples: [
                    { spanish: "Bebí mucha agua.", english: "I drank a lot of water." },
                    { spanish: "¿Aprendiste español en la escuela?", english: "Did you learn Spanish at school?" },
                    { spanish: "Él vendió su carro.", english: "He sold his car." },
                    { spanish: "Abrimos las ventanas.", english: "We opened the windows." },
                    { spanish: "Ellos decidieron ir.", english: "They decided to go." },
                    { spanish: "¿Cuándo volviste?", english: "When did you return?" }
                ]
            },
            {
                title: "Weekend Plans",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Qué tal tu fin de semana?", english: "How was your weekend?" },
                    { speaker: "Pedro", spanish: "¡Muy bueno! Salí con amigos.", english: "Very good! I went out with friends." },
                    { speaker: "María", spanish: "¿A dónde fueron?", english: "Where did you go?" },
                    { speaker: "Pedro", spanish: "Comimos en un restaurante nuevo.", english: "We ate at a new restaurant." },
                    { speaker: "María", spanish: "¿Te gustó la comida?", english: "Did you like the food?" },
                    { speaker: "Pedro", spanish: "Sí, comí un bistec delicioso.", english: "Yes, I ate a delicious steak." }
                ]
            }
        ]
    },

    // LESSON 33: Irregular Preterite Verbs
    {
        id: 33,
        title: "Irregular Past Verbs",
        description: "Master the most common irregular verbs",
        xp: 40,
        sections: [
            {
                title: "IR and SER (Same in Preterite!)",
                type: "grammar",
                explanation: "IR (to go) and SER (to be) have the same forms in the preterite! Context tells you which meaning. Forms: fui, fuiste, fue, fuimos, fueron.",
                examples: [
                    { spanish: "Fui al cine. (IR)", english: "I went to the movies." },
                    { spanish: "Fue un día increíble. (SER)", english: "It was an incredible day." },
                    { spanish: "¿Fuiste a la fiesta?", english: "Did you go to the party?" },
                    { spanish: "Fue mi mejor amigo.", english: "He was my best friend." },
                    { spanish: "Fuimos a México.", english: "We went to Mexico." },
                    { spanish: "Fueron muy amables.", english: "They were very kind." }
                ]
            },
            {
                title: "HACER, TENER, ESTAR",
                type: "grammar",
                explanation: "These common verbs have irregular preterite stems: HACER (hic-), TENER (tuv-), ESTAR (estuv-). They use special endings: -e, -iste, -o, -imos, -ieron.",
                examples: [
                    { spanish: "HACER: hice, hiciste, hizo, hicimos, hicieron", english: "to do/make" },
                    { spanish: "¿Qué hiciste ayer?", english: "What did you do yesterday?" },
                    { spanish: "TENER: tuve, tuviste, tuvo, tuvimos, tuvieron", english: "to have" },
                    { spanish: "Tuve un problema.", english: "I had a problem." },
                    { spanish: "ESTAR: estuve, estuviste, estuvo, estuvimos, estuvieron", english: "to be" },
                    { spanish: "Estuve enfermo.", english: "I was sick." }
                ]
            },
            {
                title: "Other Important Irregulars",
                type: "vocab",
                content: [
                    { spanish: "poder → pude, pudiste, pudo...", english: "to be able (could)" },
                    { spanish: "poner → puse, pusiste, puso...", english: "to put" },
                    { spanish: "saber → supe, supiste, supo...", english: "to know (found out)" },
                    { spanish: "venir → vine, viniste, vino...", english: "to come" },
                    { spanish: "decir → dije, dijiste, dijo...", english: "to say" },
                    { spanish: "traer → traje, trajiste, trajo...", english: "to bring" },
                    { spanish: "dar → di, diste, dio...", english: "to give" },
                    { spanish: "ver → vi, viste, vio...", english: "to see" }
                ]
            }
        ]
    },

    // LESSON 34: Shopping
    {
        id: 34,
        title: "Shopping",
        description: "Learn to shop in Spanish",
        xp: 25,
        sections: [
            {
                title: "Types of Stores",
                type: "vocab",
                content: [
                    { spanish: "la tienda", english: "store", pronunciation: "TYEHN-dah" },
                    { spanish: "el supermercado", english: "supermarket", pronunciation: "soo-pehr-mehr-KAH-doh" },
                    { spanish: "el mercado", english: "market", pronunciation: "mehr-KAH-doh" },
                    { spanish: "la panadería", english: "bakery", pronunciation: "pah-nah-deh-REE-ah" },
                    { spanish: "la carnicería", english: "butcher shop", pronunciation: "kahr-nee-seh-REE-ah" },
                    { spanish: "la frutería", english: "fruit shop", pronunciation: "froo-teh-REE-ah" },
                    { spanish: "la farmacia", english: "pharmacy", pronunciation: "fahr-MAH-syah" },
                    { spanish: "la librería", english: "bookstore", pronunciation: "lee-breh-REE-ah" },
                    { spanish: "el centro comercial", english: "shopping mall", pronunciation: "SEHN-troh" }
                ]
            },
            {
                title: "Shopping Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "comprar", english: "to buy", pronunciation: "kohm-PRAHR" },
                    { spanish: "vender", english: "to sell", pronunciation: "vehn-DEHR" },
                    { spanish: "pagar", english: "to pay", pronunciation: "pah-GAHR" },
                    { spanish: "costar", english: "to cost", pronunciation: "kohs-TAHR" },
                    { spanish: "el precio", english: "price", pronunciation: "PREH-syoh" },
                    { spanish: "barato", english: "cheap", pronunciation: "bah-RAH-toh" },
                    { spanish: "caro", english: "expensive", pronunciation: "KAH-roh" },
                    { spanish: "la oferta", english: "sale/offer", pronunciation: "oh-FEHR-tah" },
                    { spanish: "el descuento", english: "discount", pronunciation: "dehs-KWEHN-toh" },
                    { spanish: "la caja", english: "cash register", pronunciation: "KAH-hah" }
                ]
            },
            {
                title: "At the Store",
                type: "dialogue",
                lines: [
                    { speaker: "Cliente", spanish: "Buenos días. Busco una camisa.", english: "Good morning. I'm looking for a shirt." },
                    { speaker: "Vendedor", spanish: "Las camisas están por aquí. ¿Qué color prefiere?", english: "The shirts are over here. What color do you prefer?" },
                    { speaker: "Cliente", spanish: "¿Cuánto cuesta esta azul?", english: "How much does this blue one cost?" },
                    { speaker: "Vendedor", spanish: "Está en oferta, son 20 euros.", english: "It's on sale, it's 20 euros." },
                    { speaker: "Cliente", spanish: "Perfecto. La llevo.", english: "Perfect. I'll take it." },
                    { speaker: "Vendedor", spanish: "¿Paga en efectivo o con tarjeta?", english: "Are you paying cash or card?" }
                ]
            }
        ]
    },

    // LESSON 35: At the Restaurant
    {
        id: 35,
        title: "At the Restaurant",
        description: "Order food and drinks like a local",
        xp: 25,
        sections: [
            {
                title: "Restaurant Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "el restaurante", english: "restaurant", pronunciation: "rehs-tow-RAHN-teh" },
                    { spanish: "el mesero / camarero", english: "waiter", pronunciation: "meh-SEH-roh" },
                    { spanish: "la mesera / camarera", english: "waitress", pronunciation: "meh-SEH-rah" },
                    { spanish: "el menú / la carta", english: "menu", pronunciation: "meh-NOO" },
                    { spanish: "la cuenta", english: "the bill/check", pronunciation: "KWEHN-tah" },
                    { spanish: "la propina", english: "tip", pronunciation: "proh-PEE-nah" },
                    { spanish: "reservar", english: "to reserve", pronunciation: "reh-sehr-VAHR" },
                    { spanish: "pedir", english: "to order", pronunciation: "peh-DEER" },
                    { spanish: "recomendar", english: "to recommend", pronunciation: "reh-koh-mehn-DAHR" }
                ]
            },
            {
                title: "Ordering Food",
                type: "vocab",
                content: [
                    { spanish: "el desayuno", english: "breakfast", pronunciation: "deh-sah-YOO-noh" },
                    { spanish: "el almuerzo", english: "lunch", pronunciation: "ahl-MWEHR-soh" },
                    { spanish: "la cena", english: "dinner", pronunciation: "SEH-nah" },
                    { spanish: "el plato principal", english: "main course", pronunciation: "PLAH-toh" },
                    { spanish: "la entrada", english: "appetizer", pronunciation: "ehn-TRAH-dah" },
                    { spanish: "el postre", english: "dessert", pronunciation: "POHS-treh" },
                    { spanish: "Para mí...", english: "For me...", pronunciation: "" },
                    { spanish: "Quisiera...", english: "I would like...", pronunciation: "kee-SYEH-rah" },
                    { spanish: "Me trae...", english: "Bring me...", pronunciation: "" }
                ]
            },
            {
                title: "Restaurant Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Mesero", spanish: "Buenas noches. ¿Tienen reservación?", english: "Good evening. Do you have a reservation?" },
                    { speaker: "Cliente", spanish: "Sí, a nombre de García.", english: "Yes, under the name García." },
                    { speaker: "Mesero", spanish: "Aquí está el menú. ¿Qué les puedo traer?", english: "Here's the menu. What can I bring you?" },
                    { speaker: "Cliente", spanish: "Para mí, el pescado con ensalada.", english: "For me, the fish with salad." },
                    { speaker: "Mesero", spanish: "¿Y para beber?", english: "And to drink?" },
                    { speaker: "Cliente", spanish: "Una copa de vino blanco, por favor.", english: "A glass of white wine, please." }
                ]
            }
        ]
    },

    // LESSON 36: Comparatives
    {
        id: 36,
        title: "Making Comparisons",
        description: "Compare people and things",
        xp: 30,
        sections: [
            {
                title: "Comparative Forms",
                type: "grammar",
                explanation: "Use 'más...que' (more...than), 'menos...que' (less...than), 'tan...como' (as...as) to compare. 'Que' becomes 'de' before numbers.",
                examples: [
                    { spanish: "Juan es más alto que Pedro.", english: "Juan is taller than Pedro." },
                    { spanish: "Esta casa es menos cara.", english: "This house is less expensive." },
                    { spanish: "Ella es tan inteligente como él.", english: "She is as intelligent as he is." },
                    { spanish: "Tengo más de cinco libros.", english: "I have more than five books." },
                    { spanish: "Es mejor que el otro.", english: "It's better than the other one." },
                    { spanish: "Es peor que antes.", english: "It's worse than before." }
                ]
            },
            {
                title: "Irregular Comparatives",
                type: "vocab",
                content: [
                    { spanish: "bueno → mejor", english: "good → better", pronunciation: "meh-HOHR" },
                    { spanish: "malo → peor", english: "bad → worse", pronunciation: "peh-OHR" },
                    { spanish: "grande → mayor", english: "big → bigger/older", pronunciation: "mah-YOHR" },
                    { spanish: "pequeño → menor", english: "small → smaller/younger", pronunciation: "meh-NOHR" },
                    { spanish: "viejo → mayor", english: "old → older (age)", pronunciation: "" },
                    { spanish: "joven → menor", english: "young → younger", pronunciation: "" }
                ]
            },
            {
                title: "Comparing Things",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cuál prefieres, el rojo o el azul?", english: "Which do you prefer, the red or the blue?" },
                    { speaker: "Luis", spanish: "El rojo es más bonito.", english: "The red one is prettier." },
                    { speaker: "Ana", spanish: "Pero es más caro que el azul.", english: "But it's more expensive than the blue one." },
                    { speaker: "Luis", spanish: "Sí, es verdad. El azul es tan bueno como el rojo.", english: "Yes, true. The blue one is as good as the red one." },
                    { speaker: "Ana", spanish: "¿Y cuál es mejor para ti?", english: "And which is better for you?" },
                    { speaker: "Luis", spanish: "Creo que el azul es la mejor opción.", english: "I think the blue one is the best option." }
                ]
            }
        ]
    },

    // LESSON 37: Superlatives
    {
        id: 37,
        title: "Superlatives",
        description: "Express the most, the best, the least",
        xp: 25,
        sections: [
            {
                title: "Superlative Forms",
                type: "grammar",
                explanation: "Use 'el/la/los/las más + adjective' for 'the most' and 'el/la/los/las menos + adjective' for 'the least'. Add 'de' to specify the group.",
                examples: [
                    { spanish: "Juan es el más alto de la clase.", english: "Juan is the tallest in the class." },
                    { spanish: "Esta es la ciudad más grande.", english: "This is the biggest city." },
                    { spanish: "Son los menos caros.", english: "They are the least expensive." },
                    { spanish: "Es la mejor película del año.", english: "It's the best movie of the year." },
                    { spanish: "Es el peor restaurante de la ciudad.", english: "It's the worst restaurant in the city." },
                    { spanish: "Mi hermana es la mayor.", english: "My sister is the oldest." }
                ]
            },
            {
                title: "Absolute Superlatives",
                type: "grammar",
                explanation: "Add '-ísimo/a/os/as' to adjectives to express 'extremely' or 'very very'. This is called the absolute superlative.",
                examples: [
                    { spanish: "guapo → guapísimo", english: "handsome → extremely handsome" },
                    { spanish: "rico → riquísimo", english: "delicious → extremely delicious" },
                    { spanish: "fácil → facilísimo", english: "easy → extremely easy" },
                    { spanish: "La comida está riquísima.", english: "The food is extremely delicious." },
                    { spanish: "Estoy cansadísimo.", english: "I'm extremely tired." },
                    { spanish: "Es larguísimo.", english: "It's extremely long." }
                ]
            },
            {
                title: "Using Superlatives",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Cuál es tu restaurante favorito?", english: "What's your favorite restaurant?" },
                    { speaker: "Pedro", spanish: "El italiano. Es el mejor de la ciudad.", english: "The Italian one. It's the best in the city." },
                    { speaker: "María", spanish: "¿Por qué te gusta tanto?", english: "Why do you like it so much?" },
                    { speaker: "Pedro", spanish: "La pasta está riquísima.", english: "The pasta is extremely delicious." },
                    { speaker: "María", spanish: "¿Es caro?", english: "Is it expensive?" },
                    { speaker: "Pedro", spanish: "No, es el menos caro de los restaurantes italianos.", english: "No, it's the least expensive of the Italian restaurants." }
                ]
            }
        ]
    },

    // LESSON 38: Direct Object Pronouns
    {
        id: 38,
        title: "Direct Object Pronouns",
        description: "Replace nouns to avoid repetition",
        xp: 30,
        sections: [
            {
                title: "Direct Object Pronouns",
                type: "grammar",
                explanation: "Direct object pronouns replace the thing receiving the action. They go before conjugated verbs: me (me), te (you), lo/la (him/her/it/you formal), nos (us), los/las (them/you all).",
                examples: [
                    { spanish: "Veo el libro. → Lo veo.", english: "I see the book. → I see it." },
                    { spanish: "Compro las flores. → Las compro.", english: "I buy the flowers. → I buy them." },
                    { spanish: "¿Me escuchas?", english: "Do you hear me?" },
                    { spanish: "Te quiero.", english: "I love you." },
                    { spanish: "La conozco.", english: "I know her." },
                    { spanish: "Los invité.", english: "I invited them." }
                ]
            },
            {
                title: "Placement of Pronouns",
                type: "grammar",
                explanation: "Direct object pronouns go BEFORE conjugated verbs, but can attach to infinitives and present participles (-ando/-iendo).",
                examples: [
                    { spanish: "Lo veo. / Puedo verlo.", english: "I see it. / I can see it." },
                    { spanish: "La estoy llamando. / Estoy llamándola.", english: "I'm calling her." },
                    { spanish: "Las voy a comprar. / Voy a comprarlas.", english: "I'm going to buy them." },
                    { spanish: "¿Me puedes ayudar? / ¿Puedes ayudarme?", english: "Can you help me?" },
                    { spanish: "Te necesito.", english: "I need you." },
                    { spanish: "Nos invitaron.", english: "They invited us." }
                ]
            },
            {
                title: "Practice Conversation",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Tienes el libro?", english: "Do you have the book?" },
                    { speaker: "Luis", spanish: "Sí, lo tengo aquí.", english: "Yes, I have it here." },
                    { speaker: "Ana", spanish: "¿Me lo puedes prestar?", english: "Can you lend it to me?" },
                    { speaker: "Luis", spanish: "Claro, te lo doy mañana.", english: "Sure, I'll give it to you tomorrow." },
                    { speaker: "Ana", spanish: "¿Y las revistas?", english: "And the magazines?" },
                    { speaker: "Luis", spanish: "Las dejé en casa.", english: "I left them at home." }
                ]
            }
        ]
    },

    // LESSON 39: Indirect Object Pronouns
    {
        id: 39,
        title: "Indirect Object Pronouns",
        description: "Learn to say 'to/for whom'",
        xp: 30,
        sections: [
            {
                title: "Indirect Object Pronouns",
                type: "grammar",
                explanation: "Indirect object pronouns indicate to/for whom something is done: me (to me), te (to you), le (to him/her/you formal), nos (to us), les (to them/you all). They go before the verb.",
                examples: [
                    { spanish: "Me da el libro.", english: "He gives me the book." },
                    { spanish: "Te escribo una carta.", english: "I write you a letter." },
                    { spanish: "Le digo la verdad.", english: "I tell him/her the truth." },
                    { spanish: "Nos envían un paquete.", english: "They send us a package." },
                    { spanish: "Les compro regalos.", english: "I buy them gifts." },
                    { spanish: "¿Qué te pasa?", english: "What's wrong with you?" }
                ]
            },
            {
                title: "Clarifying with 'A'",
                type: "grammar",
                explanation: "Since 'le' and 'les' can mean different things, clarify with 'a + person': 'A Juan le doy el libro' (I give the book to Juan).",
                examples: [
                    { spanish: "Le hablo a María.", english: "I talk to María." },
                    { spanish: "Les escribo a mis padres.", english: "I write to my parents." },
                    { spanish: "A él le gusta el café.", english: "He likes coffee." },
                    { spanish: "A ellos les doy las llaves.", english: "I give them the keys." },
                    { spanish: "¿A quién le mandaste el correo?", english: "To whom did you send the email?" },
                    { spanish: "A mi hermana le compré un regalo.", english: "I bought my sister a gift." }
                ]
            },
            {
                title: "Using Both Pronouns",
                type: "dialogue",
                lines: [
                    { speaker: "Mamá", spanish: "¿Le diste el regalo a tu abuela?", english: "Did you give the gift to your grandmother?" },
                    { speaker: "Hijo", spanish: "Sí, se lo di ayer.", english: "Yes, I gave it to her yesterday." },
                    { speaker: "Mamá", spanish: "¿Y le mandaste una tarjeta a tu tío?", english: "And did you send a card to your uncle?" },
                    { speaker: "Hijo", spanish: "Se la mandé por correo.", english: "I sent it to him by mail." },
                    { speaker: "Mamá", spanish: "Muy bien. ¿Me puedes ayudar con la cena?", english: "Very good. Can you help me with dinner?" },
                    { speaker: "Hijo", spanish: "Claro, te ayudo ahora.", english: "Sure, I'll help you now." }
                ]
            }
        ]
    },

    // LESSON 40: Review & Conversation Practice
    {
        id: 40,
        title: "Month 2 Review",
        description: "Practice everything you've learned",
        xp: 35,
        sections: [
            {
                title: "Grammar Review",
                type: "grammar",
                explanation: "Let's review the key grammar points from Month 2: reflexive verbs, preterite tense, gustar, comparatives, superlatives, and object pronouns.",
                examples: [
                    { spanish: "Me despierto a las siete.", english: "I wake up at 7. (reflexive)" },
                    { spanish: "Ayer comí pizza.", english: "Yesterday I ate pizza. (preterite)" },
                    { spanish: "Me gusta el café.", english: "I like coffee. (gustar)" },
                    { spanish: "Juan es más alto que Pedro.", english: "Juan is taller than Pedro. (comparative)" },
                    { spanish: "Es el mejor restaurante.", english: "It's the best restaurant. (superlative)" },
                    { spanish: "Lo compré ayer.", english: "I bought it yesterday. (direct object)" }
                ]
            },
            {
                title: "Vocabulary Review",
                type: "vocab",
                content: [
                    { spanish: "el tiempo", english: "time / weather", pronunciation: "TYEHM-poh" },
                    { spanish: "la ropa", english: "clothing", pronunciation: "ROH-pah" },
                    { spanish: "el cuerpo", english: "body", pronunciation: "KWEHR-poh" },
                    { spanish: "la salud", english: "health", pronunciation: "sah-LOOD" },
                    { spanish: "la casa", english: "house", pronunciation: "KAH-sah" },
                    { spanish: "el transporte", english: "transportation", pronunciation: "trahns-POHR-teh" },
                    { spanish: "la tienda", english: "store", pronunciation: "TYEHN-dah" },
                    { spanish: "el restaurante", english: "restaurant", pronunciation: "rehs-tow-RAHN-teh" }
                ]
            },
            {
                title: "Comprehensive Dialogue",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¡Hola! ¿Cómo te fue ayer?", english: "Hi! How did it go yesterday?" },
                    { speaker: "Luis", spanish: "Muy bien. Me levanté temprano y fui de compras.", english: "Very well. I got up early and went shopping." },
                    { speaker: "Ana", spanish: "¿Qué compraste?", english: "What did you buy?" },
                    { speaker: "Luis", spanish: "Una camisa azul. Era la más barata de la tienda.", english: "A blue shirt. It was the cheapest in the store." },
                    { speaker: "Ana", spanish: "¿Te gusta más que la roja que tienes?", english: "Do you like it more than the red one you have?" },
                    { speaker: "Luis", spanish: "Sí, me gusta muchísimo. Te la muestro después.", english: "Yes, I like it very much. I'll show it to you later." }
                ]
            }
        ]
    }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LESSONS_MONTH2;
}
