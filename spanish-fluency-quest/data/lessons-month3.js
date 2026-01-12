/**
 * Spanish Fluency Quest - Month 3 Lessons (41-60)
 * Advanced: More tenses, Complex grammar, Cultural topics, Advanced vocabulary
 */

const LESSONS_MONTH3 = [
    // LESSON 41: Imperfect Tense Introduction
    {
        id: 41,
        title: "Imperfect Tense: Intro",
        description: "Describe ongoing past actions and backgrounds",
        xp: 35,
        sections: [
            {
                title: "Imperfect vs Preterite",
                type: "grammar",
                explanation: "The imperfect describes ongoing or habitual past actions, descriptions, and background information. Preterite describes completed actions. Use imperfect for 'was doing/used to do'.",
                examples: [
                    { spanish: "Cuando era niño, jugaba mucho.", english: "When I was a child, I played a lot." },
                    { spanish: "Vivíamos en México.", english: "We used to live in Mexico." },
                    { spanish: "Hacía sol cuando salí.", english: "It was sunny when I left." },
                    { spanish: "Ella tenía 20 años.", english: "She was 20 years old." },
                    { spanish: "Mientras comía, sonó el teléfono.", english: "While I was eating, the phone rang." }
                ]
            },
            {
                title: "-AR Verb Imperfect Endings",
                type: "grammar",
                explanation: "For -AR verbs, remove -AR and add: -aba (yo), -abas (tú), -aba (él/ella), -ábamos (nosotros), -aban (ellos). Note: yo and él/ella have the same form!",
                examples: [
                    { spanish: "HABLAR: hablaba, hablabas, hablaba, hablábamos, hablaban", english: "was speaking / used to speak" },
                    { spanish: "Yo hablaba español todos los días.", english: "I used to speak Spanish every day." },
                    { spanish: "Ella trabajaba en un banco.", english: "She used to work at a bank." },
                    { spanish: "Nosotros caminábamos a la escuela.", english: "We used to walk to school." },
                    { spanish: "Ellos estudiaban mucho.", english: "They used to study a lot." }
                ]
            },
            {
                title: "Using the Imperfect",
                type: "dialogue",
                lines: [
                    { speaker: "Abuela", spanish: "Cuando era joven, la vida era diferente.", english: "When I was young, life was different." },
                    { speaker: "Nieto", spanish: "¿Cómo era?", english: "What was it like?" },
                    { speaker: "Abuela", spanish: "No teníamos teléfonos celulares.", english: "We didn't have cell phones." },
                    { speaker: "Nieto", spanish: "¿Y cómo se comunicaban?", english: "And how did you communicate?" },
                    { speaker: "Abuela", spanish: "Escribíamos cartas y hablábamos en persona.", english: "We used to write letters and talk in person." },
                    { speaker: "Nieto", spanish: "¡Qué interesante!", english: "How interesting!" }
                ]
            }
        ]
    },

    // LESSON 42: Imperfect Tense (-ER/-IR and Irregulars)
    {
        id: 42,
        title: "Imperfect: Complete",
        description: "Master the imperfect tense",
        xp: 35,
        sections: [
            {
                title: "-ER/-IR Verb Imperfect Endings",
                type: "grammar",
                explanation: "For -ER and -IR verbs, remove the ending and add: -ía (yo), -ías (tú), -ía (él/ella), -íamos (nosotros), -ían (ellos). All forms have accent marks!",
                examples: [
                    { spanish: "COMER: comía, comías, comía, comíamos, comían", english: "was eating / used to eat" },
                    { spanish: "VIVIR: vivía, vivías, vivía, vivíamos, vivían", english: "was living / used to live" },
                    { spanish: "Yo comía mucha fruta.", english: "I used to eat a lot of fruit." },
                    { spanish: "Nosotros vivíamos cerca del mar.", english: "We used to live near the sea." },
                    { spanish: "Ellos escribían cartas frecuentemente.", english: "They used to write letters frequently." }
                ]
            },
            {
                title: "Irregular Imperfect Verbs",
                type: "grammar",
                explanation: "Only THREE verbs are irregular in the imperfect: SER (era), IR (iba), and VER (veía). Memorize these!",
                examples: [
                    { spanish: "SER: era, eras, era, éramos, eran", english: "was / used to be" },
                    { spanish: "IR: iba, ibas, iba, íbamos, iban", english: "was going / used to go" },
                    { spanish: "VER: veía, veías, veía, veíamos, veían", english: "was seeing / used to see" },
                    { spanish: "Cuando era niño, iba al parque.", english: "When I was a child, I used to go to the park." },
                    { spanish: "Veíamos películas los domingos.", english: "We used to watch movies on Sundays." }
                ]
            },
            {
                title: "Childhood Memories",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Qué hacías cuando eras pequeña?", english: "What did you do when you were little?" },
                    { speaker: "Ana", spanish: "Iba a la playa todos los veranos.", english: "I used to go to the beach every summer." },
                    { speaker: "María", spanish: "¿Con quién ibas?", english: "Who did you go with?" },
                    { speaker: "Ana", spanish: "Iba con mis primos. Éramos muy unidos.", english: "I went with my cousins. We were very close." },
                    { speaker: "María", spanish: "¡Qué bonito! Yo veía mucha televisión.", english: "How nice! I used to watch a lot of TV." },
                    { speaker: "Ana", spanish: "Nosotros también veíamos dibujos animados.", english: "We also used to watch cartoons." }
                ]
            }
        ]
    },

    // LESSON 43: Preterite vs Imperfect
    {
        id: 43,
        title: "Preterite vs Imperfect",
        description: "Know when to use each past tense",
        xp: 40,
        sections: [
            {
                title: "When to Use Each",
                type: "grammar",
                explanation: "PRETERITE: completed actions, specific times, sequence of events. IMPERFECT: background/description, ongoing actions, habitual past, time/age/weather.",
                examples: [
                    { spanish: "Ayer comí pizza. (completed)", english: "Yesterday I ate pizza." },
                    { spanish: "Siempre comía pizza de niño. (habitual)", english: "I always ate pizza as a child." },
                    { spanish: "Llegué a las tres. (specific time)", english: "I arrived at three." },
                    { spanish: "Eran las tres. (time telling)", english: "It was three o'clock." },
                    { spanish: "Llovió ayer. (event)", english: "It rained yesterday." },
                    { spanish: "Llovía cuando salí. (background)", english: "It was raining when I left." }
                ]
            },
            {
                title: "Using Both Together",
                type: "grammar",
                explanation: "Often both tenses appear in the same sentence. Imperfect sets the scene (background), preterite tells what happened (action).",
                examples: [
                    { spanish: "Dormía cuando sonó el teléfono.", english: "I was sleeping when the phone rang." },
                    { spanish: "Hacía sol cuando llegamos.", english: "It was sunny when we arrived." },
                    { spanish: "Estudiaba cuando mi amigo vino.", english: "I was studying when my friend came." },
                    { spanish: "Ella leía mientras él cocinaba.", english: "She was reading while he was cooking." },
                    { spanish: "Tenía 15 años cuando empecé.", english: "I was 15 when I started." }
                ]
            },
            {
                title: "Storytelling",
                type: "dialogue",
                lines: [
                    { speaker: "Narrador", spanish: "Era una noche oscura y hacía frío.", english: "It was a dark night and it was cold." },
                    { speaker: "Narrador", spanish: "Un hombre caminaba solo por la calle.", english: "A man was walking alone down the street." },
                    { speaker: "Narrador", spanish: "De repente, escuchó un ruido.", english: "Suddenly, he heard a noise." },
                    { speaker: "Narrador", spanish: "Se dio vuelta y vio a alguien.", english: "He turned around and saw someone." },
                    { speaker: "Narrador", spanish: "Era su mejor amigo que lo buscaba.", english: "It was his best friend who was looking for him." },
                    { speaker: "Narrador", spanish: "Los dos fueron a cenar juntos.", english: "The two of them went to have dinner together." }
                ]
            }
        ]
    },

    // LESSON 44: Future Tense
    {
        id: 44,
        title: "Future Tense",
        description: "Talk about what will happen",
        xp: 35,
        sections: [
            {
                title: "Future Tense Formation",
                type: "grammar",
                explanation: "For regular verbs, add these endings to the INFINITIVE: -é (yo), -ás (tú), -á (él/ella), -emos (nosotros), -án (ellos). Don't remove anything!",
                examples: [
                    { spanish: "HABLAR: hablaré, hablarás, hablará, hablaremos, hablarán", english: "will speak" },
                    { spanish: "COMER: comeré, comerás, comerá, comeremos, comerán", english: "will eat" },
                    { spanish: "VIVIR: viviré, vivirás, vivirá, viviremos, vivirán", english: "will live" },
                    { spanish: "Mañana estudiaré todo el día.", english: "Tomorrow I will study all day." },
                    { spanish: "¿Vendrás a la fiesta?", english: "Will you come to the party?" }
                ]
            },
            {
                title: "Irregular Future Stems",
                type: "vocab",
                content: [
                    { spanish: "tener → tendr-", english: "tendré, tendrás... (will have)" },
                    { spanish: "poder → podr-", english: "podré, podrás... (will be able)" },
                    { spanish: "saber → sabr-", english: "sabré, sabrás... (will know)" },
                    { spanish: "hacer → har-", english: "haré, harás... (will do/make)" },
                    { spanish: "decir → dir-", english: "diré, dirás... (will say)" },
                    { spanish: "salir → saldr-", english: "saldré, saldrás... (will leave)" },
                    { spanish: "venir → vendr-", english: "vendré, vendrás... (will come)" },
                    { spanish: "poner → pondr-", english: "pondré, pondrás... (will put)" },
                    { spanish: "querer → querr-", english: "querré, querrás... (will want)" }
                ]
            },
            {
                title: "Making Plans",
                type: "dialogue",
                lines: [
                    { speaker: "Carlos", spanish: "¿Qué harás este fin de semana?", english: "What will you do this weekend?" },
                    { speaker: "Ana", spanish: "Iré a la playa con mi familia.", english: "I'll go to the beach with my family." },
                    { speaker: "Carlos", spanish: "¡Qué bien! ¿Cuándo saldrán?", english: "Great! When will you leave?" },
                    { speaker: "Ana", spanish: "Saldremos el sábado temprano.", english: "We'll leave Saturday early." },
                    { speaker: "Carlos", spanish: "¿Podrás enviarme fotos?", english: "Will you be able to send me photos?" },
                    { speaker: "Ana", spanish: "Claro, te las enviaré por mensaje.", english: "Sure, I'll send them to you by message." }
                ]
            }
        ]
    },

    // LESSON 45: Conditional Tense
    {
        id: 45,
        title: "Conditional Tense",
        description: "Express what would happen",
        xp: 35,
        sections: [
            {
                title: "Conditional Formation",
                type: "grammar",
                explanation: "Like future, add endings to the INFINITIVE: -ía (yo), -ías (tú), -ía (él/ella), -íamos (nosotros), -ían (ellos). Same irregular stems as future!",
                examples: [
                    { spanish: "HABLAR: hablaría, hablarías, hablaría, hablaríamos, hablarían", english: "would speak" },
                    { spanish: "COMER: comería, comerías, comería, comeríamos, comerían", english: "would eat" },
                    { spanish: "Me gustaría ir contigo.", english: "I would like to go with you." },
                    { spanish: "¿Podrías ayudarme?", english: "Could you help me?" },
                    { spanish: "Sería mejor esperar.", english: "It would be better to wait." }
                ]
            },
            {
                title: "Uses of Conditional",
                type: "grammar",
                explanation: "Use conditional for: hypothetical situations, polite requests, speculation about the past, and 'would' in English.",
                examples: [
                    { spanish: "Con más dinero, viajaría más.", english: "With more money, I would travel more." },
                    { spanish: "¿Podría hablar con usted?", english: "Could I speak with you?" },
                    { spanish: "Me dijeron que vendría.", english: "They told me he would come." },
                    { spanish: "Yo no haría eso.", english: "I wouldn't do that." },
                    { spanish: "¿Qué harías tú?", english: "What would you do?" },
                    { spanish: "Sería las cinco cuando llegó.", english: "It must have been 5 when he arrived." }
                ]
            },
            {
                title: "Hypothetical Situations",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "Si ganaras la lotería, ¿qué harías?", english: "If you won the lottery, what would you do?" },
                    { speaker: "Juan", spanish: "Primero, compraría una casa grande.", english: "First, I would buy a big house." },
                    { speaker: "María", spanish: "¿Y después?", english: "And then?" },
                    { speaker: "Juan", spanish: "Viajaría por todo el mundo.", english: "I would travel around the world." },
                    { speaker: "María", spanish: "¿No trabajarías más?", english: "Wouldn't you work anymore?" },
                    { speaker: "Juan", spanish: "Tal vez abriría mi propio negocio.", english: "Maybe I would open my own business." }
                ]
            }
        ]
    },

    // LESSON 46: Present Subjunctive Introduction
    {
        id: 46,
        title: "Subjunctive: Introduction",
        description: "Express wishes, doubts, and emotions",
        xp: 40,
        sections: [
            {
                title: "What is the Subjunctive?",
                type: "grammar",
                explanation: "The subjunctive mood expresses uncertainty, wishes, emotions, recommendations, and hypotheticals. It's used after certain expressions and in dependent clauses.",
                examples: [
                    { spanish: "Espero que vengas.", english: "I hope (that) you come." },
                    { spanish: "Quiero que estudies.", english: "I want you to study." },
                    { spanish: "Dudo que sea verdad.", english: "I doubt (that) it's true." },
                    { spanish: "Es importante que hables.", english: "It's important that you speak." },
                    { spanish: "Ojalá llueva.", english: "I hope it rains." }
                ]
            },
            {
                title: "Subjunctive Formation",
                type: "grammar",
                explanation: "Start with yo form present tense, drop -o, add opposite endings: -AR verbs get -e endings, -ER/-IR verbs get -a endings.",
                examples: [
                    { spanish: "HABLAR: hable, hables, hable, hablemos, hablen", english: "(that I) speak..." },
                    { spanish: "COMER: coma, comas, coma, comamos, coman", english: "(that I) eat..." },
                    { spanish: "VIVIR: viva, vivas, viva, vivamos, vivan", english: "(that I) live..." },
                    { spanish: "TENER (tengo): tenga, tengas, tenga, tengamos, tengan", english: "(that I) have..." },
                    { spanish: "HACER (hago): haga, hagas, haga, hagamos, hagan", english: "(that I) do..." }
                ]
            },
            {
                title: "Using the Subjunctive",
                type: "dialogue",
                lines: [
                    { speaker: "Mamá", spanish: "Quiero que limpies tu cuarto.", english: "I want you to clean your room." },
                    { speaker: "Hijo", spanish: "Espero que no sea mucho trabajo.", english: "I hope it's not a lot of work." },
                    { speaker: "Mamá", spanish: "Es necesario que lo hagas hoy.", english: "It's necessary that you do it today." },
                    { speaker: "Hijo", spanish: "Dudo que pueda terminar rápido.", english: "I doubt I can finish quickly." },
                    { speaker: "Mamá", spanish: "Ojalá termines antes de la cena.", english: "I hope you finish before dinner." },
                    { speaker: "Hijo", spanish: "Está bien, lo haré ahora.", english: "Okay, I'll do it now." }
                ]
            }
        ]
    },

    // LESSON 47: More Subjunctive Triggers
    {
        id: 47,
        title: "Subjunctive Triggers",
        description: "Learn when to use the subjunctive",
        xp: 35,
        sections: [
            {
                title: "WEIRDO Categories",
                type: "grammar",
                explanation: "Remember WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt/Denial, Ojalá. These trigger subjunctive in the dependent clause.",
                examples: [
                    { spanish: "Wishes: Espero que vengas.", english: "I hope you come." },
                    { spanish: "Emotions: Me alegra que estés bien.", english: "I'm glad you're well." },
                    { spanish: "Impersonal: Es importante que estudies.", english: "It's important that you study." },
                    { spanish: "Recommendations: Sugiero que hables.", english: "I suggest you speak." },
                    { spanish: "Doubt: No creo que sea verdad.", english: "I don't think it's true." },
                    { spanish: "Ojalá: Ojalá ganen.", english: "I hope they win." }
                ]
            },
            {
                title: "Common Subjunctive Expressions",
                type: "vocab",
                content: [
                    { spanish: "esperar que", english: "to hope that", pronunciation: "ehs-peh-RAHR keh" },
                    { spanish: "querer que", english: "to want that", pronunciation: "keh-REHR keh" },
                    { spanish: "es necesario que", english: "it's necessary that", pronunciation: "" },
                    { spanish: "es importante que", english: "it's important that", pronunciation: "" },
                    { spanish: "es posible que", english: "it's possible that", pronunciation: "" },
                    { spanish: "dudar que", english: "to doubt that", pronunciation: "doo-DAHR" },
                    { spanish: "no creer que", english: "to not believe that", pronunciation: "" },
                    { spanish: "recomendar que", english: "to recommend that", pronunciation: "" },
                    { spanish: "sugerir que", english: "to suggest that", pronunciation: "" },
                    { spanish: "ojalá (que)", english: "hopefully / I wish", pronunciation: "oh-hah-LAH" }
                ]
            },
            {
                title: "Practice with Subjunctive",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "Es posible que llueva mañana.", english: "It's possible that it will rain tomorrow." },
                    { speaker: "Luis", spanish: "Espero que no, porque quiero ir al parque.", english: "I hope not, because I want to go to the park." },
                    { speaker: "Ana", spanish: "Te recomiendo que lleves un paraguas.", english: "I recommend you bring an umbrella." },
                    { speaker: "Luis", spanish: "No creo que sea necesario.", english: "I don't think it's necessary." },
                    { speaker: "Ana", spanish: "Ojalá tengas razón.", english: "I hope you're right." },
                    { speaker: "Luis", spanish: "Me alegra que te preocupes por mí.", english: "I'm glad you worry about me." }
                ]
            }
        ]
    },

    // LESSON 48: Commands (Imperatives)
    {
        id: 48,
        title: "Commands",
        description: "Give instructions and orders",
        xp: 35,
        sections: [
            {
                title: "Informal (Tú) Commands",
                type: "grammar",
                explanation: "Affirmative tú commands use the él/ella present form. Negative tú commands use 'no' + subjunctive. Some verbs have irregular affirmative forms.",
                examples: [
                    { spanish: "¡Habla! / ¡No hables!", english: "Speak! / Don't speak!" },
                    { spanish: "¡Come! / ¡No comas!", english: "Eat! / Don't eat!" },
                    { spanish: "¡Escribe! / ¡No escribas!", english: "Write! / Don't write!" },
                    { spanish: "Irregulars: ven, di, haz, pon, sal, sé, ten, ve", english: "come, say, do, put, leave, be, have, go" },
                    { spanish: "¡Ven aquí!", english: "Come here!" },
                    { spanish: "¡No vayas!", english: "Don't go!" }
                ]
            },
            {
                title: "Formal (Usted/Ustedes) Commands",
                type: "grammar",
                explanation: "Formal commands use subjunctive forms for both affirmative and negative. Usted = singular, Ustedes = plural.",
                examples: [
                    { spanish: "¡Hable! / ¡No hable!", english: "Speak! / Don't speak! (usted)" },
                    { spanish: "¡Hablen! / ¡No hablen!", english: "Speak! / Don't speak! (ustedes)" },
                    { spanish: "¡Coma despacio!", english: "Eat slowly! (usted)" },
                    { spanish: "¡Vengan mañana!", english: "Come tomorrow! (ustedes)" },
                    { spanish: "¡No se preocupe!", english: "Don't worry! (usted)" },
                    { spanish: "Por favor, siéntese.", english: "Please, sit down. (usted)" }
                ]
            },
            {
                title: "Giving Directions",
                type: "dialogue",
                lines: [
                    { speaker: "Turista", spanish: "¿Cómo llego al museo?", english: "How do I get to the museum?" },
                    { speaker: "Local", spanish: "Siga recto por esta calle.", english: "Go straight on this street." },
                    { speaker: "Turista", spanish: "¿Y después?", english: "And then?" },
                    { speaker: "Local", spanish: "Doble a la derecha en la esquina.", english: "Turn right at the corner." },
                    { speaker: "Turista", spanish: "¿Está lejos?", english: "Is it far?" },
                    { speaker: "Local", spanish: "No, camine dos cuadras y lo verá.", english: "No, walk two blocks and you'll see it." }
                ]
            }
        ]
    },

    // LESSON 49: Present Perfect Tense
    {
        id: 49,
        title: "Present Perfect",
        description: "Talk about what has happened",
        xp: 35,
        sections: [
            {
                title: "Present Perfect Formation",
                type: "grammar",
                explanation: "Use HABER (present) + past participle. Past participles: -AR → -ado, -ER/-IR → -ido. He, has, ha, hemos, han + participle.",
                examples: [
                    { spanish: "He hablado con ella.", english: "I have spoken with her." },
                    { spanish: "¿Has comido?", english: "Have you eaten?" },
                    { spanish: "Él ha vivido en España.", english: "He has lived in Spain." },
                    { spanish: "Hemos terminado.", english: "We have finished." },
                    { spanish: "Han llegado.", english: "They have arrived." },
                    { spanish: "Nunca he estado allí.", english: "I have never been there." }
                ]
            },
            {
                title: "Irregular Past Participles",
                type: "vocab",
                content: [
                    { spanish: "abrir → abierto", english: "opened", pronunciation: "ah-BYEHR-toh" },
                    { spanish: "decir → dicho", english: "said", pronunciation: "DEE-choh" },
                    { spanish: "escribir → escrito", english: "written", pronunciation: "ehs-KREE-toh" },
                    { spanish: "hacer → hecho", english: "done/made", pronunciation: "EH-choh" },
                    { spanish: "morir → muerto", english: "died", pronunciation: "MWEHR-toh" },
                    { spanish: "poner → puesto", english: "put", pronunciation: "PWEHS-toh" },
                    { spanish: "romper → roto", english: "broken", pronunciation: "ROH-toh" },
                    { spanish: "ver → visto", english: "seen", pronunciation: "VEES-toh" },
                    { spanish: "volver → vuelto", english: "returned", pronunciation: "VWEHL-toh" }
                ]
            },
            {
                title: "Discussing Experiences",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Has viajado a Europa?", english: "Have you traveled to Europe?" },
                    { speaker: "Luis", spanish: "Sí, he estado en España y Francia.", english: "Yes, I've been to Spain and France." },
                    { speaker: "Ana", spanish: "¡Qué suerte! Yo nunca he ido.", english: "How lucky! I've never gone." },
                    { speaker: "Luis", spanish: "¿Has pensado en ir este año?", english: "Have you thought about going this year?" },
                    { speaker: "Ana", spanish: "Sí, he ahorrado dinero para el viaje.", english: "Yes, I've saved money for the trip." },
                    { speaker: "Luis", spanish: "¡Genial! Te he dicho que vale la pena.", english: "Great! I've told you it's worth it." }
                ]
            }
        ]
    },

    // LESSON 50: Numbers 100+
    {
        id: 50,
        title: "Large Numbers",
        description: "Count to millions",
        xp: 25,
        sections: [
            {
                title: "Hundreds",
                type: "vocab",
                content: [
                    { spanish: "cien / ciento", english: "100", pronunciation: "syehn / SYEHN-toh" },
                    { spanish: "doscientos/as", english: "200", pronunciation: "dohs-SYEHN-tohs" },
                    { spanish: "trescientos/as", english: "300", pronunciation: "trehs-SYEHN-tohs" },
                    { spanish: "cuatrocientos/as", english: "400", pronunciation: "kwah-troh-SYEHN-tohs" },
                    { spanish: "quinientos/as", english: "500", pronunciation: "kee-NYEHN-tohs" },
                    { spanish: "seiscientos/as", english: "600", pronunciation: "says-SYEHN-tohs" },
                    { spanish: "setecientos/as", english: "700", pronunciation: "seh-teh-SYEHN-tohs" },
                    { spanish: "ochocientos/as", english: "800", pronunciation: "oh-choh-SYEHN-tohs" },
                    { spanish: "novecientos/as", english: "900", pronunciation: "noh-veh-SYEHN-tohs" }
                ]
            },
            {
                title: "Thousands and Millions",
                type: "vocab",
                content: [
                    { spanish: "mil", english: "1,000", pronunciation: "meel" },
                    { spanish: "dos mil", english: "2,000", pronunciation: "" },
                    { spanish: "diez mil", english: "10,000", pronunciation: "" },
                    { spanish: "cien mil", english: "100,000", pronunciation: "" },
                    { spanish: "un millón", english: "1,000,000", pronunciation: "mee-YOHN" },
                    { spanish: "dos millones", english: "2,000,000", pronunciation: "" },
                    { spanish: "mil millones", english: "1 billion", pronunciation: "" },
                    { spanish: "Note: millón uses 'de' before nouns", english: "un millón de dólares" }
                ]
            },
            {
                title: "Using Large Numbers",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cuánto cuesta esta casa?", english: "How much does this house cost?" },
                    { speaker: "Agente", spanish: "Cuesta trescientos cincuenta mil dólares.", english: "It costs 350,000 dollars." },
                    { speaker: "Ana", spanish: "¿Y el apartamento?", english: "And the apartment?" },
                    { speaker: "Agente", spanish: "El apartamento cuesta doscientos mil.", english: "The apartment costs 200,000." },
                    { speaker: "Ana", spanish: "¿Cuántas personas viven en esta ciudad?", english: "How many people live in this city?" },
                    { speaker: "Agente", spanish: "Más de dos millones de habitantes.", english: "More than 2 million inhabitants." }
                ]
            }
        ]
    },

    // LESSON 51: Professions & Jobs
    {
        id: 51,
        title: "Professions",
        description: "Talk about careers and jobs",
        xp: 25,
        sections: [
            {
                title: "Common Professions",
                type: "vocab",
                content: [
                    { spanish: "el/la abogado/a", english: "lawyer", pronunciation: "ah-boh-GAH-doh" },
                    { spanish: "el/la médico/a", english: "doctor", pronunciation: "MEH-dee-koh" },
                    { spanish: "el/la enfermero/a", english: "nurse", pronunciation: "ehn-fehr-MEH-roh" },
                    { spanish: "el/la ingeniero/a", english: "engineer", pronunciation: "een-heh-NYEH-roh" },
                    { spanish: "el/la profesor/a", english: "teacher/professor", pronunciation: "proh-feh-SOHR" },
                    { spanish: "el/la contador/a", english: "accountant", pronunciation: "kohn-tah-DOHR" },
                    { spanish: "el/la arquitecto/a", english: "architect", pronunciation: "ahr-kee-TEHK-toh" },
                    { spanish: "el/la programador/a", english: "programmer", pronunciation: "proh-grah-mah-DOHR" }
                ]
            },
            {
                title: "More Jobs",
                type: "vocab",
                content: [
                    { spanish: "el/la cocinero/a", english: "cook/chef", pronunciation: "koh-see-NEH-roh" },
                    { spanish: "el/la mesero/a", english: "waiter/waitress", pronunciation: "meh-SEH-roh" },
                    { spanish: "el/la vendedor/a", english: "salesperson", pronunciation: "vehn-deh-DOHR" },
                    { spanish: "el/la policía", english: "police officer", pronunciation: "poh-lee-SEE-ah" },
                    { spanish: "el/la bombero/a", english: "firefighter", pronunciation: "bohm-BEH-roh" },
                    { spanish: "el/la piloto", english: "pilot", pronunciation: "pee-LOH-toh" },
                    { spanish: "el/la periodista", english: "journalist", pronunciation: "peh-ryoh-DEES-tah" },
                    { spanish: "el/la artista", english: "artist", pronunciation: "ahr-TEES-tah" }
                ]
            },
            {
                title: "Discussing Careers",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿A qué te dedicas?", english: "What do you do for a living?" },
                    { speaker: "Pedro", spanish: "Soy ingeniero. Trabajo en tecnología.", english: "I'm an engineer. I work in technology." },
                    { speaker: "María", spanish: "¡Qué interesante! ¿Te gusta tu trabajo?", english: "How interesting! Do you like your job?" },
                    { speaker: "Pedro", spanish: "Sí, mucho. ¿Y tú qué haces?", english: "Yes, a lot. And what do you do?" },
                    { speaker: "María", spanish: "Soy periodista. Escribo para un periódico.", english: "I'm a journalist. I write for a newspaper." },
                    { spanish: "Pedro", spanish: "¡Genial! Siempre he querido conocer a un periodista.", english: "Great! I've always wanted to meet a journalist." }
                ]
            }
        ]
    },

    // LESSON 52: Technology
    {
        id: 52,
        title: "Technology",
        description: "Modern tech vocabulary",
        xp: 25,
        sections: [
            {
                title: "Devices",
                type: "vocab",
                content: [
                    { spanish: "el teléfono celular / móvil", english: "cell phone", pronunciation: "seh-loo-LAHR" },
                    { spanish: "la computadora / ordenador", english: "computer", pronunciation: "kohm-poo-tah-DOH-rah" },
                    { spanish: "la laptop / portátil", english: "laptop", pronunciation: "LAHP-top" },
                    { spanish: "la tableta", english: "tablet", pronunciation: "tah-BLEH-tah" },
                    { spanish: "el televisor", english: "TV set", pronunciation: "teh-leh-vee-SOHR" },
                    { spanish: "los auriculares", english: "headphones", pronunciation: "ow-ree-koo-LAH-rehs" },
                    { spanish: "el cargador", english: "charger", pronunciation: "kahr-gah-DOHR" },
                    { spanish: "la impresora", english: "printer", pronunciation: "eem-preh-SOH-rah" }
                ]
            },
            {
                title: "Internet & Apps",
                type: "vocab",
                content: [
                    { spanish: "el internet / la red", english: "internet", pronunciation: "een-tehr-NEHT" },
                    { spanish: "el wifi", english: "wifi", pronunciation: "WEE-fee" },
                    { spanish: "la aplicación / app", english: "application/app", pronunciation: "ah-plee-kah-SYOHN" },
                    { spanish: "el correo electrónico", english: "email", pronunciation: "koh-RREH-oh" },
                    { spanish: "el sitio web / página web", english: "website", pronunciation: "SEE-tyoh wehb" },
                    { spanish: "las redes sociales", english: "social media", pronunciation: "REH-dehs" },
                    { spanish: "descargar", english: "to download", pronunciation: "dehs-kahr-GAHR" },
                    { spanish: "subir", english: "to upload", pronunciation: "soo-BEER" },
                    { spanish: "buscar", english: "to search", pronunciation: "boos-KAHR" }
                ]
            },
            {
                title: "Tech Problems",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "Mi computadora no funciona.", english: "My computer isn't working." },
                    { speaker: "Técnico", spanish: "¿Qué problema tiene?", english: "What problem does it have?" },
                    { speaker: "Ana", spanish: "Se congela y no puedo abrir programas.", english: "It freezes and I can't open programs." },
                    { speaker: "Técnico", spanish: "¿Ha intentado reiniciarla?", english: "Have you tried restarting it?" },
                    { speaker: "Ana", spanish: "Sí, pero no se enciende.", english: "Yes, but it doesn't turn on." },
                    { speaker: "Técnico", spanish: "Voy a revisar el disco duro.", english: "I'm going to check the hard drive." }
                ]
            }
        ]
    },

    // LESSON 53: Environment & Nature
    {
        id: 53,
        title: "Environment & Nature",
        description: "Talk about nature and environmental issues",
        xp: 25,
        sections: [
            {
                title: "Nature Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "el bosque", english: "forest", pronunciation: "BOHS-keh" },
                    { spanish: "la selva", english: "jungle", pronunciation: "SEHL-vah" },
                    { spanish: "el océano", english: "ocean", pronunciation: "oh-SEH-ah-noh" },
                    { spanish: "el río", english: "river", pronunciation: "RREE-oh" },
                    { spanish: "el lago", english: "lake", pronunciation: "LAH-goh" },
                    { spanish: "la montaña", english: "mountain", pronunciation: "mohn-TAH-nyah" },
                    { spanish: "el desierto", english: "desert", pronunciation: "deh-SYEHR-toh" },
                    { spanish: "la playa", english: "beach", pronunciation: "PLAH-yah" },
                    { spanish: "el cielo", english: "sky", pronunciation: "SYEH-loh" },
                    { spanish: "la tierra", english: "earth/land", pronunciation: "TYEH-rah" }
                ]
            },
            {
                title: "Environmental Terms",
                type: "vocab",
                content: [
                    { spanish: "el medio ambiente", english: "environment", pronunciation: "MEH-dyoh ahm-BYEHN-teh" },
                    { spanish: "la contaminación", english: "pollution", pronunciation: "kohn-tah-mee-nah-SYOHN" },
                    { spanish: "el cambio climático", english: "climate change", pronunciation: "KAHM-byoh" },
                    { spanish: "reciclar", english: "to recycle", pronunciation: "reh-see-KLAHR" },
                    { spanish: "reutilizar", english: "to reuse", pronunciation: "reh-oo-tee-lee-SAHR" },
                    { spanish: "reducir", english: "to reduce", pronunciation: "reh-doo-SEER" },
                    { spanish: "proteger", english: "to protect", pronunciation: "proh-teh-HEHR" },
                    { spanish: "la energía renovable", english: "renewable energy", pronunciation: "" }
                ]
            },
            {
                title: "Discussing Environment",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "Es importante proteger el medio ambiente.", english: "It's important to protect the environment." },
                    { speaker: "Luis", spanish: "Sí, el cambio climático es un problema serio.", english: "Yes, climate change is a serious problem." },
                    { speaker: "Ana", spanish: "¿Tú reciclas en casa?", english: "Do you recycle at home?" },
                    { speaker: "Luis", spanish: "Sí, separo el plástico, el vidrio y el papel.", english: "Yes, I separate plastic, glass, and paper." },
                    { speaker: "Ana", spanish: "También debemos reducir el uso de plástico.", english: "We should also reduce plastic use." },
                    { speaker: "Luis", spanish: "Tienes razón. Uso bolsas reutilizables.", english: "You're right. I use reusable bags." }
                ]
            }
        ]
    },

    // LESSON 54: Sports & Hobbies
    {
        id: 54,
        title: "Sports & Hobbies",
        description: "Talk about leisure activities",
        xp: 25,
        sections: [
            {
                title: "Sports",
                type: "vocab",
                content: [
                    { spanish: "el fútbol", english: "soccer", pronunciation: "FOOT-bohl" },
                    { spanish: "el baloncesto / básquetbol", english: "basketball", pronunciation: "bah-lohn-SEHS-toh" },
                    { spanish: "el béisbol", english: "baseball", pronunciation: "BAYS-bohl" },
                    { spanish: "el tenis", english: "tennis", pronunciation: "TEH-nees" },
                    { spanish: "la natación", english: "swimming", pronunciation: "nah-tah-SYOHN" },
                    { spanish: "el ciclismo", english: "cycling", pronunciation: "see-KLEES-moh" },
                    { spanish: "el atletismo", english: "track and field", pronunciation: "aht-leh-TEES-moh" },
                    { spanish: "el golf", english: "golf", pronunciation: "gohlf" },
                    { spanish: "el boxeo", english: "boxing", pronunciation: "bohk-SEH-oh" }
                ]
            },
            {
                title: "Hobbies",
                type: "vocab",
                content: [
                    { spanish: "leer", english: "to read", pronunciation: "leh-EHR" },
                    { spanish: "pintar", english: "to paint", pronunciation: "peen-TAHR" },
                    { spanish: "dibujar", english: "to draw", pronunciation: "dee-boo-HAHR" },
                    { spanish: "cocinar", english: "to cook", pronunciation: "koh-see-NAHR" },
                    { spanish: "bailar", english: "to dance", pronunciation: "bai-LAHR" },
                    { spanish: "cantar", english: "to sing", pronunciation: "kahn-TAHR" },
                    { spanish: "tocar (un instrumento)", english: "to play (an instrument)", pronunciation: "toh-KAHR" },
                    { spanish: "jugar videojuegos", english: "to play video games", pronunciation: "" },
                    { spanish: "hacer ejercicio", english: "to exercise", pronunciation: "" },
                    { spanish: "viajar", english: "to travel", pronunciation: "vyah-HAHR" }
                ]
            },
            {
                title: "Discussing Hobbies",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Qué te gusta hacer en tu tiempo libre?", english: "What do you like to do in your free time?" },
                    { speaker: "Pedro", spanish: "Me gusta jugar al fútbol y leer.", english: "I like to play soccer and read." },
                    { speaker: "María", spanish: "¿Juegas en un equipo?", english: "Do you play on a team?" },
                    { speaker: "Pedro", spanish: "Sí, juego los sábados. ¿Y tú qué haces?", english: "Yes, I play on Saturdays. And what do you do?" },
                    { speaker: "María", spanish: "Toco la guitarra y pinto.", english: "I play guitar and paint." },
                    { speaker: "Pedro", spanish: "¡Qué talentosa! Me gustaría ver tus pinturas.", english: "How talented! I'd like to see your paintings." }
                ]
            }
        ]
    },

    // LESSON 55: Travel & Vacation
    {
        id: 55,
        title: "Travel & Vacation",
        description: "Plan trips and discuss travel",
        xp: 25,
        sections: [
            {
                title: "Travel Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "el viaje", english: "trip", pronunciation: "VYAH-heh" },
                    { spanish: "las vacaciones", english: "vacation", pronunciation: "vah-kah-SYOH-nehs" },
                    { spanish: "el pasaporte", english: "passport", pronunciation: "pah-sah-POHR-teh" },
                    { spanish: "la visa", english: "visa", pronunciation: "VEE-sah" },
                    { spanish: "el equipaje", english: "luggage", pronunciation: "eh-kee-PAH-heh" },
                    { spanish: "la maleta", english: "suitcase", pronunciation: "mah-LEH-tah" },
                    { spanish: "el boleto / billete", english: "ticket", pronunciation: "boh-LEH-toh" },
                    { spanish: "la reservación", english: "reservation", pronunciation: "reh-sehr-vah-SYOHN" },
                    { spanish: "el hotel", english: "hotel", pronunciation: "oh-TEHL" },
                    { spanish: "el aeropuerto", english: "airport", pronunciation: "ah-eh-roh-PWEHR-toh" }
                ]
            },
            {
                title: "At the Airport",
                type: "vocab",
                content: [
                    { spanish: "el vuelo", english: "flight", pronunciation: "VWEH-loh" },
                    { spanish: "la puerta de embarque", english: "boarding gate", pronunciation: "PWEHR-tah" },
                    { spanish: "facturar el equipaje", english: "to check luggage", pronunciation: "" },
                    { spanish: "el control de seguridad", english: "security check", pronunciation: "" },
                    { spanish: "abordar", english: "to board", pronunciation: "ah-bohr-DAHR" },
                    { spanish: "despegar", english: "to take off", pronunciation: "dehs-peh-GAHR" },
                    { spanish: "aterrizar", english: "to land", pronunciation: "ah-teh-rree-SAHR" },
                    { spanish: "la aduana", english: "customs", pronunciation: "ah-DWAH-nah" }
                ]
            },
            {
                title: "Planning a Trip",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿A dónde vas de vacaciones?", english: "Where are you going on vacation?" },
                    { speaker: "Luis", spanish: "Voy a México. Ya tengo los boletos.", english: "I'm going to Mexico. I already have the tickets." },
                    { speaker: "Ana", spanish: "¡Qué emocionante! ¿Cuánto tiempo estarás?", english: "How exciting! How long will you be there?" },
                    { speaker: "Luis", spanish: "Dos semanas. Visitaré la playa y las ruinas.", english: "Two weeks. I'll visit the beach and the ruins." },
                    { speaker: "Ana", spanish: "¿Ya hiciste las reservaciones del hotel?", english: "Did you make the hotel reservations already?" },
                    { speaker: "Luis", spanish: "Sí, reservé un hotel cerca del centro.", english: "Yes, I reserved a hotel near downtown." }
                ]
            }
        ]
    },

    // LESSON 56: Cultural Topics - Holidays
    {
        id: 56,
        title: "Hispanic Holidays",
        description: "Learn about cultural celebrations",
        xp: 25,
        sections: [
            {
                title: "Major Holidays",
                type: "vocab",
                content: [
                    { spanish: "la Navidad", english: "Christmas", pronunciation: "nah-vee-DAHD" },
                    { spanish: "el Año Nuevo", english: "New Year", pronunciation: "AH-nyoh NWEH-voh" },
                    { spanish: "la Semana Santa", english: "Holy Week/Easter", pronunciation: "seh-MAH-nah SAHN-tah" },
                    { spanish: "el Día de los Muertos", english: "Day of the Dead", pronunciation: "DEE-ah deh lohs MWEHR-tohs" },
                    { spanish: "el Día de la Independencia", english: "Independence Day", pronunciation: "" },
                    { spanish: "la Nochebuena", english: "Christmas Eve", pronunciation: "NOH-cheh-BWEH-nah" },
                    { spanish: "la Nochevieja", english: "New Year's Eve", pronunciation: "NOH-cheh-VYEH-hah" },
                    { spanish: "el Día de los Reyes Magos", english: "Three Kings Day", pronunciation: "" }
                ]
            },
            {
                title: "Celebration Vocabulary",
                type: "vocab",
                content: [
                    { spanish: "celebrar", english: "to celebrate", pronunciation: "seh-leh-BRAHR" },
                    { spanish: "la fiesta", english: "party", pronunciation: "FYEHS-tah" },
                    { spanish: "el desfile", english: "parade", pronunciation: "dehs-FEE-leh" },
                    { spanish: "los fuegos artificiales", english: "fireworks", pronunciation: "FWEH-gohs" },
                    { spanish: "el regalo", english: "gift", pronunciation: "reh-GAH-loh" },
                    { spanish: "la tradición", english: "tradition", pronunciation: "trah-dee-SYOHN" },
                    { spanish: "la comida típica", english: "traditional food", pronunciation: "" },
                    { spanish: "reunirse con la familia", english: "to gather with family", pronunciation: "" }
                ]
            },
            {
                title: "Discussing Traditions",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Cómo celebras la Navidad?", english: "How do you celebrate Christmas?" },
                    { speaker: "Luis", spanish: "Nos reunimos con toda la familia.", english: "We get together with the whole family." },
                    { speaker: "Ana", spanish: "¿Qué comen de cena?", english: "What do you eat for dinner?" },
                    { speaker: "Luis", spanish: "Comemos tamales y pavo.", english: "We eat tamales and turkey." },
                    { speaker: "Ana", spanish: "¿Intercambian regalos en Nochebuena?", english: "Do you exchange gifts on Christmas Eve?" },
                    { speaker: "Luis", spanish: "No, los niños reciben regalos el Día de Reyes.", english: "No, the children receive gifts on Three Kings Day." }
                ]
            }
        ]
    },

    // LESSON 57: Por vs Para
    {
        id: 57,
        title: "Por vs Para",
        description: "Master these tricky prepositions",
        xp: 35,
        sections: [
            {
                title: "Uses of POR",
                type: "grammar",
                explanation: "POR is used for: exchange, movement through, duration, reason/cause, means of communication, and certain expressions.",
                examples: [
                    { spanish: "Pagué 20 dólares por el libro.", english: "I paid $20 for the book. (exchange)" },
                    { spanish: "Caminamos por el parque.", english: "We walked through the park. (movement)" },
                    { spanish: "Estudié por tres horas.", english: "I studied for three hours. (duration)" },
                    { spanish: "Lo hice por ti.", english: "I did it because of you. (reason)" },
                    { spanish: "Hablamos por teléfono.", english: "We talked by phone. (means)" },
                    { spanish: "¡Por supuesto!", english: "Of course! (expression)" }
                ]
            },
            {
                title: "Uses of PARA",
                type: "grammar",
                explanation: "PARA is used for: purpose, destination, recipient, deadline, and comparison.",
                examples: [
                    { spanish: "Estudio para aprender.", english: "I study (in order) to learn. (purpose)" },
                    { spanish: "Salgo para Madrid.", english: "I'm leaving for Madrid. (destination)" },
                    { spanish: "Este regalo es para ti.", english: "This gift is for you. (recipient)" },
                    { spanish: "Lo necesito para el lunes.", english: "I need it by Monday. (deadline)" },
                    { spanish: "Para un niño, lee muy bien.", english: "For a child, he reads very well. (comparison)" },
                    { spanish: "Trabajo para una empresa grande.", english: "I work for a big company. (employer)" }
                ]
            },
            {
                title: "Por vs Para Practice",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¿Para qué estudias español?", english: "Why (for what purpose) do you study Spanish?" },
                    { speaker: "Luis", spanish: "Estudio para mi trabajo.", english: "I study for my job." },
                    { speaker: "Ana", spanish: "¿Por cuánto tiempo has estudiado?", english: "For how long have you studied?" },
                    { speaker: "Luis", spanish: "Por dos años. Voy a España para el verano.", english: "For two years. I'm going to Spain for the summer." },
                    { speaker: "Ana", spanish: "¡Qué bien! ¿Ya compraste el boleto?", english: "Great! Did you already buy the ticket?" },
                    { speaker: "Luis", spanish: "Sí, pagué 500 euros por el vuelo.", english: "Yes, I paid 500 euros for the flight." }
                ]
            }
        ]
    },

    // LESSON 58: Relative Pronouns
    {
        id: 58,
        title: "Relative Pronouns",
        description: "Connect ideas with que, quien, donde",
        xp: 30,
        sections: [
            {
                title: "QUE (that, which, who)",
                type: "grammar",
                explanation: "QUE is the most common relative pronoun. It can refer to people or things. It connects two clauses that share a common element.",
                examples: [
                    { spanish: "El libro que compré es interesante.", english: "The book (that) I bought is interesting." },
                    { spanish: "La mujer que habla es mi madre.", english: "The woman who is speaking is my mother." },
                    { spanish: "Me gusta la casa que vimos.", english: "I like the house (that) we saw." },
                    { spanish: "El estudiante que estudia pasa.", english: "The student who studies passes." },
                    { spanish: "Todo lo que dices es verdad.", english: "Everything (that) you say is true." }
                ]
            },
            {
                title: "QUIEN(ES), DONDE, CUAL(ES)",
                type: "grammar",
                explanation: "QUIEN(ES) = who (only people, after preposition). DONDE = where. CUAL(ES) = which (after preposition/article).",
                examples: [
                    { spanish: "El amigo con quien fui es simpático.", english: "The friend with whom I went is nice." },
                    { spanish: "La ciudad donde nací es pequeña.", english: "The city where I was born is small." },
                    { spanish: "La razón por la cual vine...", english: "The reason for which I came..." },
                    { spanish: "Las personas a quienes invité...", english: "The people whom I invited..." },
                    { spanish: "El lugar donde trabajo...", english: "The place where I work..." }
                ]
            },
            {
                title: "Using Relative Pronouns",
                type: "dialogue",
                lines: [
                    { speaker: "María", spanish: "¿Conoces al hombre que está hablando?", english: "Do you know the man who is talking?" },
                    { speaker: "Pedro", spanish: "Sí, es el profesor con quien estudié.", english: "Yes, he's the professor with whom I studied." },
                    { speaker: "María", spanish: "¿Es de la universidad donde trabajas?", english: "Is he from the university where you work?" },
                    { speaker: "Pedro", spanish: "Sí, todo lo que enseña es fascinante.", english: "Yes, everything he teaches is fascinating." },
                    { speaker: "María", spanish: "Me gustaría conocerlo.", english: "I'd like to meet him." },
                    { speaker: "Pedro", spanish: "Te presento. Es la persona a quien debes conocer.", english: "I'll introduce you. He's the person you should meet." }
                ]
            }
        ]
    },

    // LESSON 59: Expressions & Idioms
    {
        id: 59,
        title: "Spanish Expressions",
        description: "Learn common idioms and phrases",
        xp: 25,
        sections: [
            {
                title: "Common Expressions",
                type: "vocab",
                content: [
                    { spanish: "tener razón", english: "to be right", pronunciation: "teh-NEHR rah-SOHN" },
                    { spanish: "echar de menos", english: "to miss (someone)", pronunciation: "" },
                    { spanish: "dar un paseo", english: "to take a walk", pronunciation: "" },
                    { spanish: "tener suerte", english: "to be lucky", pronunciation: "" },
                    { spanish: "valer la pena", english: "to be worth it", pronunciation: "" },
                    { spanish: "hacer caso", english: "to pay attention", pronunciation: "" },
                    { spanish: "ponerse de acuerdo", english: "to agree", pronunciation: "" },
                    { spanish: "darse cuenta de", english: "to realize", pronunciation: "" }
                ]
            },
            {
                title: "Idioms",
                type: "vocab",
                content: [
                    { spanish: "costar un ojo de la cara", english: "to cost an arm and a leg", pronunciation: "" },
                    { spanish: "estar en las nubes", english: "to have one's head in the clouds", pronunciation: "" },
                    { spanish: "no tener pelos en la lengua", english: "to speak one's mind freely", pronunciation: "" },
                    { spanish: "ser pan comido", english: "to be a piece of cake", pronunciation: "" },
                    { spanish: "meter la pata", english: "to put one's foot in one's mouth", pronunciation: "" },
                    { spanish: "tomar el pelo", english: "to pull someone's leg", pronunciation: "" },
                    { spanish: "estar como pez en el agua", english: "to feel right at home", pronunciation: "" },
                    { spanish: "llover a cántaros", english: "to rain cats and dogs", pronunciation: "" }
                ]
            },
            {
                title: "Using Expressions",
                type: "dialogue",
                lines: [
                    { speaker: "Ana", spanish: "¡Ayer metí la pata en el trabajo!", english: "Yesterday I put my foot in my mouth at work!" },
                    { speaker: "Luis", spanish: "¿Qué pasó? Cuéntame.", english: "What happened? Tell me." },
                    { speaker: "Ana", spanish: "Le dije al jefe algo que no debía.", english: "I told the boss something I shouldn't have." },
                    { speaker: "Luis", spanish: "¡Ay! ¿Tienes suerte de tener trabajo todavía?", english: "Ouch! Are you lucky to still have a job?" },
                    { speaker: "Ana", spanish: "Sí, pero me di cuenta de que debo tener más cuidado.", english: "Yes, but I realized I should be more careful." },
                    { speaker: "Luis", spanish: "Tienes razón. Mejor cambiar el tema.", english: "You're right. Better change the subject." }
                ]
            }
        ]
    },

    // LESSON 60: Final Review & Celebration
    {
        id: 60,
        title: "Course Completion",
        description: "Review and celebrate your achievement!",
        xp: 50,
        sections: [
            {
                title: "Grammar Summary",
                type: "grammar",
                explanation: "You've learned: present, preterite, imperfect, future, conditional, subjunctive, commands, present perfect. Plus pronouns, comparisons, and more!",
                examples: [
                    { spanish: "Present: Hablo español.", english: "I speak Spanish." },
                    { spanish: "Preterite: Ayer hablé con ella.", english: "Yesterday I spoke with her." },
                    { spanish: "Imperfect: Cuando era niño, hablaba mucho.", english: "When I was a child, I talked a lot." },
                    { spanish: "Future: Mañana hablaré con el jefe.", english: "Tomorrow I will speak with the boss." },
                    { spanish: "Conditional: Hablaría si pudiera.", english: "I would speak if I could." },
                    { spanish: "Subjunctive: Espero que hables español.", english: "I hope you speak Spanish." }
                ]
            },
            {
                title: "Key Vocabulary Themes",
                type: "vocab",
                content: [
                    { spanish: "Greetings & Introductions", english: "Hola, Me llamo..., Mucho gusto" },
                    { spanish: "Numbers & Time", english: "uno, dos, tres... las tres y media" },
                    { spanish: "Family & People", english: "madre, padre, hermano, amigo" },
                    { spanish: "Daily Life", english: "levantarse, comer, trabajar, dormir" },
                    { spanish: "Places & Travel", english: "casa, tienda, aeropuerto, hotel" },
                    { spanish: "Food & Restaurant", english: "comida, bebida, cuenta, propina" },
                    { spanish: "Health & Body", english: "cabeza, mano, enfermo, dolor" },
                    { spanish: "Technology & Modern Life", english: "teléfono, computadora, internet" }
                ]
            },
            {
                title: "¡Felicitaciones!",
                type: "dialogue",
                lines: [
                    { speaker: "Profesor", spanish: "¡Felicitaciones! Has completado el curso.", english: "Congratulations! You've completed the course." },
                    { speaker: "Estudiante", spanish: "¡Gracias! He aprendido muchísimo.", english: "Thank you! I've learned so much." },
                    { speaker: "Profesor", spanish: "Ahora puedes hablar español con confianza.", english: "Now you can speak Spanish with confidence." },
                    { speaker: "Estudiante", spanish: "Ha sido un viaje increíble.", english: "It's been an incredible journey." },
                    { speaker: "Profesor", spanish: "Recuerda: la práctica hace al maestro.", english: "Remember: practice makes perfect." },
                    { speaker: "Estudiante", spanish: "¡Seguiré practicando! ¡Hasta pronto!", english: "I'll keep practicing! See you soon!" }
                ]
            }
        ]
    }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LESSONS_MONTH3;
}
