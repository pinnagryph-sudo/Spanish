// Spanish Fluency Quest - Comprehensive Exercises
// 300+ exercises: Fill-in-blank, Translation, Quiz

const exercisesData = {
  // FILL IN THE BLANK EXERCISES (100+)
  fillInBlank: [
    // Greetings & Basics (Lessons 1-5)
    { id: 'fib1', sentence: '¡___! ¿Cómo estás?', answer: 'Hola', hint: 'Greeting', lessonId: 1 },
    { id: 'fib2', sentence: 'Buenos ___, señor García.', answer: 'días', hint: 'Morning greeting', lessonId: 1 },
    { id: 'fib3', sentence: 'Mucho ___. Me llamo Ana.', answer: 'gusto', hint: 'Nice to meet you', lessonId: 1 },
    { id: 'fib4', sentence: '¿Cómo te ___?', answer: 'llamas', hint: 'What is your name?', lessonId: 2 },
    { id: 'fib5', sentence: 'Yo ___ de México.', answer: 'soy', hint: 'I am from...', lessonId: 2 },
    { id: 'fib6', sentence: '¿De dónde ___ usted?', answer: 'es', hint: 'Where are you from? (formal)', lessonId: 2 },
    { id: 'fib7', sentence: '___ favor, ¿dónde está el baño?', answer: 'Por', hint: 'Please', lessonId: 3 },
    { id: 'fib8', sentence: 'Muchas ___ por tu ayuda.', answer: 'gracias', hint: 'Thank you', lessonId: 3 },
    { id: 'fib9', sentence: 'De ___, no hay problema.', answer: 'nada', hint: "You're welcome", lessonId: 3 },
    { id: 'fib10', sentence: 'Lo ___, llegué tarde.', answer: 'siento', hint: "I'm sorry", lessonId: 3 },
    
    // Numbers & Counting (Lessons 6-10)
    { id: 'fib11', sentence: 'Tengo ___ años. (25)', answer: 'veinticinco', hint: 'Twenty-five', lessonId: 6 },
    { id: 'fib12', sentence: 'Son las ___ de la tarde. (3)', answer: 'tres', hint: 'Three', lessonId: 6 },
    { id: 'fib13', sentence: 'Hay ___ estudiantes en la clase. (15)', answer: 'quince', hint: 'Fifteen', lessonId: 6 },
    { id: 'fib14', sentence: 'El libro cuesta ___ dólares. (50)', answer: 'cincuenta', hint: 'Fifty', lessonId: 7 },
    { id: 'fib15', sentence: 'Mi número de teléfono es cinco-cuatro-___-ocho. (7)', answer: 'siete', hint: 'Seven', lessonId: 7 },
    { id: 'fib16', sentence: 'Hoy es el ___ de enero. (1st)', answer: 'primero', hint: 'First', lessonId: 8 },
    { id: 'fib17', sentence: 'Es mi ___ cumpleaños. (2nd)', answer: 'segundo', hint: 'Second', lessonId: 8 },
    { id: 'fib18', sentence: 'Vivo en el ___ piso. (3rd)', answer: 'tercer', hint: 'Third', lessonId: 8 },
    { id: 'fib19', sentence: 'Una ___ tiene doce cosas.', answer: 'docena', hint: 'A dozen', lessonId: 9 },
    { id: 'fib20', sentence: 'La ___ de diez es cinco.', answer: 'mitad', hint: 'Half', lessonId: 9 },
    
    // Time & Calendar (Lessons 11-15)
    { id: 'fib21', sentence: '¿Qué ___ es?', answer: 'hora', hint: 'What time...', lessonId: 10 },
    { id: 'fib22', sentence: 'Son las dos y ___.', answer: 'media', hint: 'Half past', lessonId: 10 },
    { id: 'fib23', sentence: 'Hoy es ___, el primer día de la semana.', answer: 'lunes', hint: 'Monday', lessonId: 11 },
    { id: 'fib24', sentence: 'Mi mes favorito es ___.', answer: 'diciembre', hint: 'December', lessonId: 11 },
    { id: 'fib25', sentence: 'La ___ es mi estación favorita.', answer: 'primavera', hint: 'Spring', lessonId: 12 },
    { id: 'fib26', sentence: 'En ___ hace mucho calor.', answer: 'verano', hint: 'Summer', lessonId: 12 },
    { id: 'fib27', sentence: '___ voy al gimnasio.', answer: 'Siempre', hint: 'Always', lessonId: 13 },
    { id: 'fib28', sentence: 'A ___ como pizza.', answer: 'veces', hint: 'Sometimes', lessonId: 13 },
    { id: 'fib29', sentence: 'La reunión es ___ a las 3.', answer: 'mañana', hint: 'Tomorrow', lessonId: 14 },
    { id: 'fib30', sentence: '___  fui al cine.', answer: 'Ayer', hint: 'Yesterday', lessonId: 14 },
    
    // Food & Drinks (Lessons 16-20)
    { id: 'fib31', sentence: 'Quiero una ___ de agua, por favor.', answer: 'botella', hint: 'Bottle', lessonId: 15 },
    { id: 'fib32', sentence: 'Me gusta el ___ con leche.', answer: 'café', hint: 'Coffee', lessonId: 15 },
    { id: 'fib33', sentence: 'De postre, quiero ___.', answer: 'helado', hint: 'Ice cream', lessonId: 16 },
    { id: 'fib34', sentence: 'La ___ está muy picante.', answer: 'salsa', hint: 'Sauce', lessonId: 16 },
    { id: 'fib35', sentence: '¿Me puede traer la ___, por favor?', answer: 'cuenta', hint: 'Bill/check', lessonId: 17 },
    { id: 'fib36', sentence: 'Necesito un ___ y una cuchara.', answer: 'tenedor', hint: 'Fork', lessonId: 17 },
    { id: 'fib37', sentence: 'Quisiera ___ una mesa para dos.', answer: 'reservar', hint: 'To reserve', lessonId: 18 },
    { id: 'fib38', sentence: 'El ___ nos recomendó el pescado.', answer: 'mesero', hint: 'Waiter', lessonId: 18 },
    { id: 'fib39', sentence: 'Me encanta la comida ___.', answer: 'mexicana', hint: 'Mexican', lessonId: 19 },
    { id: 'fib40', sentence: 'Los ___ son deliciosos.', answer: 'tacos', hint: 'Tacos', lessonId: 19 },
    
    // Family & Relationships (Lessons 21-25)
    { id: 'fib41', sentence: 'Mi ___ se llama María.', answer: 'madre', hint: 'Mother', lessonId: 20 },
    { id: 'fib42', sentence: 'Tengo dos ___ menores.', answer: 'hermanos', hint: 'Siblings', lessonId: 20 },
    { id: 'fib43', sentence: 'Mis ___ viven en España.', answer: 'abuelos', hint: 'Grandparents', lessonId: 21 },
    { id: 'fib44', sentence: 'Mi ___ favorito tiene 5 años.', answer: 'sobrino', hint: 'Nephew', lessonId: 21 },
    { id: 'fib45', sentence: 'Voy a la ___ de mi prima.', answer: 'boda', hint: 'Wedding', lessonId: 22 },
    { id: 'fib46', sentence: 'Ella está ___ con Juan.', answer: 'casada', hint: 'Married', lessonId: 22 },
    { id: 'fib47', sentence: 'Mi mejor ___ vive cerca.', answer: 'amigo', hint: 'Friend', lessonId: 23 },
    { id: 'fib48', sentence: 'Mis ___ son muy amables.', answer: 'vecinos', hint: 'Neighbors', lessonId: 23 },
    { id: 'fib49', sentence: 'La ___ es importante.', answer: 'familia', hint: 'Family', lessonId: 24 },
    { id: 'fib50', sentence: 'Celebramos el ___ de mi abuela.', answer: 'cumpleaños', hint: 'Birthday', lessonId: 24 },
    
    // Daily Routines & Activities (Lessons 26-30)
    { id: 'fib51', sentence: 'Me ___ a las siete.', answer: 'levanto', hint: 'I get up', lessonId: 25 },
    { id: 'fib52', sentence: 'Me ___ los dientes después de comer.', answer: 'cepillo', hint: 'I brush', lessonId: 25 },
    { id: 'fib53', sentence: '___ el desayuno a las ocho.', answer: 'Tomo', hint: 'I have (breakfast)', lessonId: 26 },
    { id: 'fib54', sentence: 'Voy al ___ en autobús.', answer: 'trabajo', hint: 'Work', lessonId: 26 },
    { id: 'fib55', sentence: 'Me gusta ___ televisión por la noche.', answer: 'ver', hint: 'To watch', lessonId: 27 },
    { id: 'fib56', sentence: '___ música mientras cocino.', answer: 'Escucho', hint: 'I listen to', lessonId: 27 },
    { id: 'fib57', sentence: 'Los fines de semana me gusta ___.', answer: 'descansar', hint: 'To rest', lessonId: 28 },
    { id: 'fib58', sentence: 'Voy al ___ para hacer ejercicio.', answer: 'gimnasio', hint: 'Gym', lessonId: 28 },
    { id: 'fib59', sentence: 'Me ___ a las once de la noche.', answer: 'acuesto', hint: 'I go to bed', lessonId: 29 },
    { id: 'fib60', sentence: '___ ocho horas cada noche.', answer: 'Duermo', hint: 'I sleep', lessonId: 29 },
    
    // House & Home (Lessons 31-35)
    { id: 'fib61', sentence: 'Mi ___ tiene tres habitaciones.', answer: 'casa', hint: 'House', lessonId: 30 },
    { id: 'fib62', sentence: 'La ___ es mi cuarto favorito.', answer: 'cocina', hint: 'Kitchen', lessonId: 30 },
    { id: 'fib63', sentence: 'El ___ está en la sala.', answer: 'sofá', hint: 'Sofa', lessonId: 31 },
    { id: 'fib64', sentence: 'Necesito una ___ nueva para mi cuarto.', answer: 'cama', hint: 'Bed', lessonId: 31 },
    { id: 'fib65', sentence: 'Guardo la ropa en el ___.', answer: 'armario', hint: 'Closet', lessonId: 32 },
    { id: 'fib66', sentence: 'La ___ está en el baño.', answer: 'ducha', hint: 'Shower', lessonId: 32 },
    { id: 'fib67', sentence: 'La comida está en la ___.', answer: 'nevera', hint: 'Refrigerator', lessonId: 33 },
    { id: 'fib68', sentence: 'Cocino en la ___.', answer: 'estufa', hint: 'Stove', lessonId: 33 },
    { id: 'fib69', sentence: 'Abre la ___, hace calor.', answer: 'ventana', hint: 'Window', lessonId: 34 },
    { id: 'fib70', sentence: 'Cierra la ___ con llave.', answer: 'puerta', hint: 'Door', lessonId: 34 },
    
    // Transportation (Lessons 36-40)
    { id: 'fib71', sentence: 'Voy al trabajo en ___.', answer: 'carro', hint: 'Car', lessonId: 35 },
    { id: 'fib72', sentence: 'El ___ sale a las nueve.', answer: 'autobús', hint: 'Bus', lessonId: 35 },
    { id: 'fib73', sentence: 'Necesito comprar un ___ de avión.', answer: 'boleto', hint: 'Ticket', lessonId: 36 },
    { id: 'fib74', sentence: 'El ___ tiene retraso.', answer: 'vuelo', hint: 'Flight', lessonId: 36 },
    { id: 'fib75', sentence: 'La estación de ___ está cerca.', answer: 'tren', hint: 'Train', lessonId: 37 },
    { id: 'fib76', sentence: 'Tomo el ___ todos los días.', answer: 'metro', hint: 'Subway', lessonId: 37 },
    { id: 'fib77', sentence: '¿Dónde está la ___ de autobús?', answer: 'parada', hint: 'Stop', lessonId: 38 },
    { id: 'fib78', sentence: 'El ___ es muy rápido.', answer: 'taxi', hint: 'Taxi', lessonId: 38 },
    { id: 'fib79', sentence: 'Me gusta montar en ___.', answer: 'bicicleta', hint: 'Bicycle', lessonId: 39 },
    { id: 'fib80', sentence: 'Hay mucho ___ en la ciudad.', answer: 'tráfico', hint: 'Traffic', lessonId: 39 },
    
    // Weather & Nature (Lessons 41-45)
    { id: 'fib81', sentence: 'Hoy hace mucho ___.', answer: 'calor', hint: 'Hot', lessonId: 40 },
    { id: 'fib82', sentence: 'Está ___ afuera.', answer: 'lloviendo', hint: 'Raining', lessonId: 40 },
    { id: 'fib83', sentence: 'En invierno hace mucho ___.', answer: 'frío', hint: 'Cold', lessonId: 41 },
    { id: 'fib84', sentence: 'Hay muchas ___ en el cielo.', answer: 'nubes', hint: 'Clouds', lessonId: 41 },
    { id: 'fib85', sentence: 'El ___ brilla mucho hoy.', answer: 'sol', hint: 'Sun', lessonId: 42 },
    { id: 'fib86', sentence: 'Hubo una ___ anoche.', answer: 'tormenta', hint: 'Storm', lessonId: 42 },
    { id: 'fib87', sentence: 'Me gusta caminar por el ___.', answer: 'bosque', hint: 'Forest', lessonId: 43 },
    { id: 'fib88', sentence: 'Las ___ son muy altas.', answer: 'montañas', hint: 'Mountains', lessonId: 43 },
    { id: 'fib89', sentence: 'El ___ está muy azul hoy.', answer: 'mar', hint: 'Sea', lessonId: 44 },
    { id: 'fib90', sentence: 'Vamos a la ___ este verano.', answer: 'playa', hint: 'Beach', lessonId: 44 },
    
    // Health & Body (Lessons 46-50)
    { id: 'fib91', sentence: 'Me duele la ___.', answer: 'cabeza', hint: 'Head', lessonId: 45 },
    { id: 'fib92', sentence: 'Tengo dolor de ___.', answer: 'estómago', hint: 'Stomach', lessonId: 45 },
    { id: 'fib93', sentence: 'Necesito ir al ___.', answer: 'médico', hint: 'Doctor', lessonId: 46 },
    { id: 'fib94', sentence: 'Tengo ___ alta.', answer: 'fiebre', hint: 'Fever', lessonId: 46 },
    { id: 'fib95', sentence: 'La ___ me dio una receta.', answer: 'doctora', hint: 'Doctor (f)', lessonId: 47 },
    { id: 'fib96', sentence: 'Compré la medicina en la ___.', answer: 'farmacia', hint: 'Pharmacy', lessonId: 47 },
    { id: 'fib97', sentence: 'Debo tomar las ___ dos veces al día.', answer: 'pastillas', hint: 'Pills', lessonId: 48 },
    { id: 'fib98', sentence: 'Me siento mucho ___ hoy.', answer: 'mejor', hint: 'Better', lessonId: 48 },
    { id: 'fib99', sentence: 'Es importante hacer ___.', answer: 'ejercicio', hint: 'Exercise', lessonId: 49 },
    { id: 'fib100', sentence: 'Quiero llevar una vida ___.', answer: 'saludable', hint: 'Healthy', lessonId: 49 },
    
    // More advanced exercises
    { id: 'fib101', sentence: 'No ___ lo que dices.', answer: 'entiendo', hint: 'I understand', lessonId: 50 },
    { id: 'fib102', sentence: '¿Puedes ___ más despacio?', answer: 'hablar', hint: 'To speak', lessonId: 50 },
    { id: 'fib103', sentence: 'Estoy ___ español.', answer: 'aprendiendo', hint: 'Learning', lessonId: 51 },
    { id: 'fib104', sentence: 'Me ___ mucho esta clase.', answer: 'gusta', hint: 'I like', lessonId: 51 },
    { id: 'fib105', sentence: '¿___ ir al cine esta noche?', answer: 'Quieres', hint: 'Do you want', lessonId: 52 },
    { id: 'fib106', sentence: 'No ___ ir, tengo que trabajar.', answer: 'puedo', hint: 'I can', lessonId: 52 },
    { id: 'fib107', sentence: '___ que estudiar más.', answer: 'Tengo', hint: 'I have', lessonId: 53 },
    { id: 'fib108', sentence: '¿___ dónde es el restaurante?', answer: 'Sabes', hint: 'Do you know', lessonId: 53 },
    { id: 'fib109', sentence: 'Él ___ muy simpático.', answer: 'es', hint: 'He is (permanent)', lessonId: 54 },
    { id: 'fib110', sentence: 'Ella ___ cansada hoy.', answer: 'está', hint: 'She is (temporary)', lessonId: 54 }
  ],

  // TRANSLATION EXERCISES (100+)
  translation: [
    // English to Spanish
    { id: 'tr1', english: 'Hello, how are you?', spanish: '¡Hola, ¿cómo estás?', direction: 'en-es', lessonId: 1 },
    { id: 'tr2', english: 'My name is...', spanish: 'Me llamo...', direction: 'en-es', lessonId: 2 },
    { id: 'tr3', english: 'Thank you very much', spanish: 'Muchas gracias', direction: 'en-es', lessonId: 3 },
    { id: 'tr4', english: "You're welcome", spanish: 'De nada', direction: 'en-es', lessonId: 3 },
    { id: 'tr5', english: 'Where is the bathroom?', spanish: '¿Dónde está el baño?', direction: 'en-es', lessonId: 4 },
    { id: 'tr6', english: 'I am from the United States', spanish: 'Soy de los Estados Unidos', direction: 'en-es', lessonId: 5 },
    { id: 'tr7', english: 'I am 25 years old', spanish: 'Tengo veinticinco años', direction: 'en-es', lessonId: 6 },
    { id: 'tr8', english: 'What time is it?', spanish: '¿Qué hora es?', direction: 'en-es', lessonId: 10 },
    { id: 'tr9', english: 'It is three thirty', spanish: 'Son las tres y media', direction: 'en-es', lessonId: 10 },
    { id: 'tr10', english: 'Today is Monday', spanish: 'Hoy es lunes', direction: 'en-es', lessonId: 11 },
    { id: 'tr11', english: 'I like coffee', spanish: 'Me gusta el café', direction: 'en-es', lessonId: 15 },
    { id: 'tr12', english: 'The food is delicious', spanish: 'La comida está deliciosa', direction: 'en-es', lessonId: 16 },
    { id: 'tr13', english: 'I would like a table for two', spanish: 'Quisiera una mesa para dos', direction: 'en-es', lessonId: 18 },
    { id: 'tr14', english: 'The check, please', spanish: 'La cuenta, por favor', direction: 'en-es', lessonId: 17 },
    { id: 'tr15', english: 'I have two brothers', spanish: 'Tengo dos hermanos', direction: 'en-es', lessonId: 20 },
    { id: 'tr16', english: 'My mother is very kind', spanish: 'Mi madre es muy amable', direction: 'en-es', lessonId: 20 },
    { id: 'tr17', english: 'I wake up at seven', spanish: 'Me despierto a las siete', direction: 'en-es', lessonId: 25 },
    { id: 'tr18', english: 'I go to work by bus', spanish: 'Voy al trabajo en autobús', direction: 'en-es', lessonId: 26 },
    { id: 'tr19', english: 'My house is big', spanish: 'Mi casa es grande', direction: 'en-es', lessonId: 30 },
    { id: 'tr20', english: 'The kitchen is small', spanish: 'La cocina es pequeña', direction: 'en-es', lessonId: 30 },
    
    // Spanish to English
    { id: 'tr21', spanish: '¿Cómo te llamas?', english: 'What is your name?', direction: 'es-en', lessonId: 2 },
    { id: 'tr22', spanish: 'Mucho gusto', english: 'Nice to meet you', direction: 'es-en', lessonId: 1 },
    { id: 'tr23', spanish: 'Lo siento', english: "I'm sorry", direction: 'es-en', lessonId: 3 },
    { id: 'tr24', spanish: 'No entiendo', english: "I don't understand", direction: 'es-en', lessonId: 4 },
    { id: 'tr25', spanish: '¿Cuánto cuesta?', english: 'How much does it cost?', direction: 'es-en', lessonId: 7 },
    { id: 'tr26', spanish: 'Hace mucho calor', english: "It's very hot", direction: 'es-en', lessonId: 40 },
    { id: 'tr27', spanish: 'Está lloviendo', english: "It's raining", direction: 'es-en', lessonId: 40 },
    { id: 'tr28', spanish: 'Me duele la cabeza', english: 'My head hurts', direction: 'es-en', lessonId: 45 },
    { id: 'tr29', spanish: 'Tengo hambre', english: "I'm hungry", direction: 'es-en', lessonId: 15 },
    { id: 'tr30', spanish: 'Tengo sed', english: "I'm thirsty", direction: 'es-en', lessonId: 15 },
    { id: 'tr31', spanish: '¿Dónde está la estación?', english: 'Where is the station?', direction: 'es-en', lessonId: 35 },
    { id: 'tr32', spanish: 'El tren llega a las cinco', english: 'The train arrives at five', direction: 'es-en', lessonId: 37 },
    { id: 'tr33', spanish: 'Quiero ir de vacaciones', english: 'I want to go on vacation', direction: 'es-en', lessonId: 44 },
    { id: 'tr34', spanish: 'La playa es hermosa', english: 'The beach is beautiful', direction: 'es-en', lessonId: 44 },
    { id: 'tr35', spanish: '¿Puedes ayudarme?', english: 'Can you help me?', direction: 'es-en', lessonId: 50 },
    { id: 'tr36', spanish: 'Necesito practicar más', english: 'I need to practice more', direction: 'es-en', lessonId: 51 },
    { id: 'tr37', spanish: 'Me encanta viajar', english: 'I love to travel', direction: 'es-en', lessonId: 44 },
    { id: 'tr38', spanish: '¿Qué hora es?', english: 'What time is it?', direction: 'es-en', lessonId: 10 },
    { id: 'tr39', spanish: 'Son las dos y cuarto', english: "It's quarter past two", direction: 'es-en', lessonId: 10 },
    { id: 'tr40', spanish: 'Mañana es mi cumpleaños', english: 'Tomorrow is my birthday', direction: 'es-en', lessonId: 22 },
    
    // More translations
    { id: 'tr41', english: 'I need a doctor', spanish: 'Necesito un médico', direction: 'en-es', lessonId: 46 },
    { id: 'tr42', english: 'Where can I buy medicine?', spanish: '¿Dónde puedo comprar medicina?', direction: 'en-es', lessonId: 47 },
    { id: 'tr43', english: 'I feel sick', spanish: 'Me siento mal', direction: 'en-es', lessonId: 45 },
    { id: 'tr44', english: 'The weather is nice today', spanish: 'El tiempo está bonito hoy', direction: 'en-es', lessonId: 40 },
    { id: 'tr45', english: 'It is going to rain', spanish: 'Va a llover', direction: 'en-es', lessonId: 41 },
    { id: 'tr46', english: 'I am learning Spanish', spanish: 'Estoy aprendiendo español', direction: 'en-es', lessonId: 51 },
    { id: 'tr47', english: 'Can you speak slower?', spanish: '¿Puedes hablar más despacio?', direction: 'en-es', lessonId: 50 },
    { id: 'tr48', english: 'I work in an office', spanish: 'Trabajo en una oficina', direction: 'en-es', lessonId: 26 },
    { id: 'tr49', english: 'She is my best friend', spanish: 'Ella es mi mejor amiga', direction: 'en-es', lessonId: 23 },
    { id: 'tr50', english: 'We are going to the movies', spanish: 'Vamos al cine', direction: 'en-es', lessonId: 27 },
    { id: 'tr51', spanish: 'Tengo una cita con el dentista', english: 'I have an appointment with the dentist', direction: 'es-en', lessonId: 46 },
    { id: 'tr52', spanish: 'El vuelo sale a las ocho', english: 'The flight leaves at eight', direction: 'es-en', lessonId: 36 },
    { id: 'tr53', spanish: 'Necesito mi pasaporte', english: 'I need my passport', direction: 'es-en', lessonId: 36 },
    { id: 'tr54', spanish: '¿Tienes hermanos?', english: 'Do you have siblings?', direction: 'es-en', lessonId: 20 },
    { id: 'tr55', spanish: 'Mi padre trabaja mucho', english: 'My father works a lot', direction: 'es-en', lessonId: 20 },
    { id: 'tr56', spanish: 'La casa tiene un jardín grande', english: 'The house has a big garden', direction: 'es-en', lessonId: 30 },
    { id: 'tr57', spanish: 'Prefiero el café sin azúcar', english: 'I prefer coffee without sugar', direction: 'es-en', lessonId: 15 },
    { id: 'tr58', spanish: 'El restaurante está cerrado', english: 'The restaurant is closed', direction: 'es-en', lessonId: 18 },
    { id: 'tr59', spanish: 'Hace frío en invierno', english: "It's cold in winter", direction: 'es-en', lessonId: 41 },
    { id: 'tr60', spanish: 'Me gusta nadar en el mar', english: 'I like to swim in the sea', direction: 'es-en', lessonId: 44 },
    
    // Additional translations for comprehensive coverage
    { id: 'tr61', english: 'Good morning', spanish: 'Buenos días', direction: 'en-es', lessonId: 1 },
    { id: 'tr62', english: 'Good afternoon', spanish: 'Buenas tardes', direction: 'en-es', lessonId: 1 },
    { id: 'tr63', english: 'Good night', spanish: 'Buenas noches', direction: 'en-es', lessonId: 1 },
    { id: 'tr64', english: 'See you later', spanish: 'Hasta luego', direction: 'en-es', lessonId: 1 },
    { id: 'tr65', english: 'See you tomorrow', spanish: 'Hasta mañana', direction: 'en-es', lessonId: 1 },
    { id: 'tr66', english: 'Excuse me', spanish: 'Perdón / Con permiso', direction: 'en-es', lessonId: 3 },
    { id: 'tr67', english: 'I speak a little Spanish', spanish: 'Hablo un poco de español', direction: 'en-es', lessonId: 50 },
    { id: 'tr68', english: 'Do you speak English?', spanish: '¿Hablas inglés?', direction: 'en-es', lessonId: 50 },
    { id: 'tr69', english: 'I live in New York', spanish: 'Vivo en Nueva York', direction: 'en-es', lessonId: 5 },
    { id: 'tr70', english: 'What do you do for work?', spanish: '¿En qué trabajas?', direction: 'en-es', lessonId: 26 },
    { id: 'tr71', spanish: 'Soy estudiante', english: "I'm a student", direction: 'es-en', lessonId: 5 },
    { id: 'tr72', spanish: 'Trabajo como ingeniero', english: 'I work as an engineer', direction: 'es-en', lessonId: 26 },
    { id: 'tr73', spanish: '¿Cuál es tu número de teléfono?', english: 'What is your phone number?', direction: 'es-en', lessonId: 7 },
    { id: 'tr74', spanish: 'Me levanto temprano', english: 'I wake up early', direction: 'es-en', lessonId: 25 },
    { id: 'tr75', spanish: 'Desayuno a las siete', english: 'I have breakfast at seven', direction: 'es-en', lessonId: 26 },
    { id: 'tr76', spanish: 'Almuerzo a la una', english: 'I have lunch at one', direction: 'es-en', lessonId: 26 },
    { id: 'tr77', spanish: 'Ceno a las ocho', english: 'I have dinner at eight', direction: 'es-en', lessonId: 26 },
    { id: 'tr78', spanish: 'Me acuesto tarde', english: 'I go to bed late', direction: 'es-en', lessonId: 29 },
    { id: 'tr79', english: 'I like to read books', spanish: 'Me gusta leer libros', direction: 'en-es', lessonId: 27 },
    { id: 'tr80', english: 'She plays the guitar', spanish: 'Ella toca la guitarra', direction: 'en-es', lessonId: 27 },
    { id: 'tr81', english: 'We watch movies on weekends', spanish: 'Vemos películas los fines de semana', direction: 'en-es', lessonId: 28 },
    { id: 'tr82', english: 'They travel a lot', spanish: 'Ellos viajan mucho', direction: 'en-es', lessonId: 44 },
    { id: 'tr83', english: 'The hotel is near the beach', spanish: 'El hotel está cerca de la playa', direction: 'en-es', lessonId: 44 },
    { id: 'tr84', english: 'I need to buy groceries', spanish: 'Necesito comprar comida', direction: 'en-es', lessonId: 16 },
    { id: 'tr85', english: 'The supermarket is closed', spanish: 'El supermercado está cerrado', direction: 'en-es', lessonId: 16 },
    { id: 'tr86', spanish: 'Hoy es el primero de enero', english: 'Today is January first', direction: 'es-en', lessonId: 11 },
    { id: 'tr87', spanish: 'Mi cumpleaños es en julio', english: 'My birthday is in July', direction: 'es-en', lessonId: 11 },
    { id: 'tr88', spanish: '¿Qué día es hoy?', english: 'What day is today?', direction: 'es-en', lessonId: 11 },
    { id: 'tr89', spanish: 'La primavera es mi estación favorita', english: 'Spring is my favorite season', direction: 'es-en', lessonId: 12 },
    { id: 'tr90', spanish: 'En otoño las hojas cambian de color', english: 'In autumn the leaves change color', direction: 'es-en', lessonId: 12 },
    { id: 'tr91', english: 'I have a headache', spanish: 'Tengo dolor de cabeza', direction: 'en-es', lessonId: 45 },
    { id: 'tr92', english: 'My throat hurts', spanish: 'Me duele la garganta', direction: 'en-es', lessonId: 45 },
    { id: 'tr93', english: 'I have a cold', spanish: 'Tengo un resfriado', direction: 'en-es', lessonId: 46 },
    { id: 'tr94', english: 'Take two pills a day', spanish: 'Toma dos pastillas al día', direction: 'en-es', lessonId: 48 },
    { id: 'tr95', english: 'I feel better now', spanish: 'Me siento mejor ahora', direction: 'en-es', lessonId: 48 },
    { id: 'tr96', spanish: 'Debes descansar más', english: 'You should rest more', direction: 'es-en', lessonId: 48 },
    { id: 'tr97', spanish: 'La salud es importante', english: 'Health is important', direction: 'es-en', lessonId: 49 },
    { id: 'tr98', spanish: 'Hago ejercicio tres veces por semana', english: 'I exercise three times a week', direction: 'es-en', lessonId: 49 },
    { id: 'tr99', spanish: 'Como frutas y verduras todos los días', english: 'I eat fruits and vegetables every day', direction: 'es-en', lessonId: 49 },
    { id: 'tr100', spanish: 'Trato de dormir ocho horas', english: 'I try to sleep eight hours', direction: 'es-en', lessonId: 29 }
  ],

  // QUIZ/MULTIPLE CHOICE EXERCISES (100+)
  quiz: [
    // Basic Greetings
    { id: 'q1', question: 'How do you say "Hello" in Spanish?', options: ['Adiós', 'Hola', 'Gracias', 'Por favor'], answer: 'Hola', lessonId: 1 },
    { id: 'q2', question: 'What does "Buenos días" mean?', options: ['Good night', 'Good afternoon', 'Good morning', 'Goodbye'], answer: 'Good morning', lessonId: 1 },
    { id: 'q3', question: 'How do you say "Goodbye" in Spanish?', options: ['Hola', 'Gracias', 'Adiós', 'Perdón'], answer: 'Adiós', lessonId: 1 },
    { id: 'q4', question: 'What does "Mucho gusto" mean?', options: ['Thank you', 'Nice to meet you', 'See you later', 'Good luck'], answer: 'Nice to meet you', lessonId: 1 },
    { id: 'q5', question: '"¿Cómo te llamas?" asks for your...', options: ['Age', 'Name', 'Address', 'Phone number'], answer: 'Name', lessonId: 2 },
    
    // Numbers
    { id: 'q6', question: 'What is "15" in Spanish?', options: ['Catorce', 'Quince', 'Dieciséis', 'Trece'], answer: 'Quince', lessonId: 6 },
    { id: 'q7', question: 'What does "veintiuno" mean?', options: ['20', '21', '22', '12'], answer: '21', lessonId: 6 },
    { id: 'q8', question: 'How do you say "100" in Spanish?', options: ['Ciento', 'Cien', 'Mil', 'Diez'], answer: 'Cien', lessonId: 7 },
    { id: 'q9', question: 'What is "primero"?', options: ['First', 'Second', 'Third', 'Fourth'], answer: 'First', lessonId: 8 },
    { id: 'q10', question: 'How do you say "50" in Spanish?', options: ['Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta'], answer: 'Cincuenta', lessonId: 7 },
    
    // Time
    { id: 'q11', question: '"Son las tres y media" means...', options: ['3:00', '3:15', '3:30', '3:45'], answer: '3:30', lessonId: 10 },
    { id: 'q12', question: 'What does "mediodía" mean?', options: ['Midnight', 'Morning', 'Noon', 'Evening'], answer: 'Noon', lessonId: 10 },
    { id: 'q13', question: '"Son las dos menos cuarto" means...', options: ['1:45', '2:15', '2:45', '1:15'], answer: '1:45', lessonId: 10 },
    
    // Days & Months
    { id: 'q14', question: 'What day is "miércoles"?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], answer: 'Wednesday', lessonId: 11 },
    { id: 'q15', question: 'What month is "agosto"?', options: ['April', 'August', 'October', 'December'], answer: 'August', lessonId: 11 },
    { id: 'q16', question: 'What does "primavera" mean?', options: ['Winter', 'Summer', 'Fall', 'Spring'], answer: 'Spring', lessonId: 12 },
    { id: 'q17', question: 'What season is "invierno"?', options: ['Spring', 'Summer', 'Fall', 'Winter'], answer: 'Winter', lessonId: 12 },
    
    // Food & Drinks
    { id: 'q18', question: 'What is "manzana"?', options: ['Orange', 'Apple', 'Banana', 'Grape'], answer: 'Apple', lessonId: 15 },
    { id: 'q19', question: 'How do you say "water" in Spanish?', options: ['Leche', 'Jugo', 'Agua', 'Vino'], answer: 'Agua', lessonId: 15 },
    { id: 'q20', question: 'What does "pollo" mean?', options: ['Pork', 'Beef', 'Chicken', 'Fish'], answer: 'Chicken', lessonId: 16 },
    { id: 'q21', question: '"La cuenta" in a restaurant means...', options: ['The menu', 'The bill', 'The tip', 'The waiter'], answer: 'The bill', lessonId: 17 },
    { id: 'q22', question: 'What is "helado"?', options: ['Cake', 'Cookie', 'Ice cream', 'Chocolate'], answer: 'Ice cream', lessonId: 16 },
    
    // Family
    { id: 'q23', question: 'What is "hermana"?', options: ['Brother', 'Sister', 'Mother', 'Aunt'], answer: 'Sister', lessonId: 20 },
    { id: 'q24', question: '"Abuelo" means...', options: ['Uncle', 'Father', 'Grandfather', 'Cousin'], answer: 'Grandfather', lessonId: 21 },
    { id: 'q25', question: 'How do you say "parents" in Spanish?', options: ['Hijos', 'Padres', 'Primos', 'Tíos'], answer: 'Padres', lessonId: 20 },
    { id: 'q26', question: 'What is "esposo"?', options: ['Wife', 'Husband', 'Son', 'Daughter'], answer: 'Husband', lessonId: 22 },
    
    // House
    { id: 'q27', question: 'What is "cocina"?', options: ['Bedroom', 'Bathroom', 'Kitchen', 'Living room'], answer: 'Kitchen', lessonId: 30 },
    { id: 'q28', question: '"Dormitorio" means...', options: ['Kitchen', 'Bedroom', 'Dining room', 'Garage'], answer: 'Bedroom', lessonId: 30 },
    { id: 'q29', question: 'What is "nevera"?', options: ['Stove', 'Oven', 'Refrigerator', 'Microwave'], answer: 'Refrigerator', lessonId: 33 },
    { id: 'q30', question: 'How do you say "bed" in Spanish?', options: ['Silla', 'Mesa', 'Sofá', 'Cama'], answer: 'Cama', lessonId: 31 },
    
    // Transportation
    { id: 'q31', question: 'What is "avión"?', options: ['Car', 'Bus', 'Airplane', 'Train'], answer: 'Airplane', lessonId: 36 },
    { id: 'q32', question: '"Tren" means...', options: ['Bus', 'Train', 'Taxi', 'Subway'], answer: 'Train', lessonId: 37 },
    { id: 'q33', question: 'What is "boleto"?', options: ['Passport', 'Ticket', 'Luggage', 'Platform'], answer: 'Ticket', lessonId: 36 },
    { id: 'q34', question: '"Estación" means...', options: ['Station', 'Stop', 'Airport', 'Port'], answer: 'Station', lessonId: 37 },
    
    // Weather
    { id: 'q35', question: 'What does "lluvia" mean?', options: ['Sun', 'Wind', 'Rain', 'Snow'], answer: 'Rain', lessonId: 40 },
    { id: 'q36', question: '"Hace frío" means...', options: ["It's hot", "It's cold", "It's sunny", "It's windy"], answer: "It's cold", lessonId: 41 },
    { id: 'q37', question: 'What is "nieve"?', options: ['Rain', 'Cloud', 'Snow', 'Storm'], answer: 'Snow', lessonId: 41 },
    { id: 'q38', question: '"Nublado" means...', options: ['Sunny', 'Cloudy', 'Rainy', 'Windy'], answer: 'Cloudy', lessonId: 41 },
    
    // Body Parts
    { id: 'q39', question: 'What is "cabeza"?', options: ['Hand', 'Foot', 'Head', 'Arm'], answer: 'Head', lessonId: 45 },
    { id: 'q40', question: '"Mano" means...', options: ['Foot', 'Hand', 'Finger', 'Arm'], answer: 'Hand', lessonId: 45 },
    { id: 'q41', question: 'What is "estómago"?', options: ['Heart', 'Stomach', 'Lung', 'Liver'], answer: 'Stomach', lessonId: 45 },
    
    // Health
    { id: 'q42', question: 'What does "enfermo" mean?', options: ['Healthy', 'Sick', 'Tired', 'Happy'], answer: 'Sick', lessonId: 46 },
    { id: 'q43', question: '"Farmacia" is a...', options: ['Hospital', 'Pharmacy', 'Clinic', 'Laboratory'], answer: 'Pharmacy', lessonId: 47 },
    { id: 'q44', question: 'What is "fiebre"?', options: ['Cold', 'Cough', 'Fever', 'Headache'], answer: 'Fever', lessonId: 46 },
    { id: 'q45', question: '"Pastilla" means...', options: ['Injection', 'Pill', 'Syrup', 'Bandage'], answer: 'Pill', lessonId: 48 },
    
    // Colors
    { id: 'q46', question: 'What color is "rojo"?', options: ['Blue', 'Green', 'Red', 'Yellow'], answer: 'Red', lessonId: 5 },
    { id: 'q47', question: '"Azul" is what color?', options: ['Red', 'Blue', 'Green', 'White'], answer: 'Blue', lessonId: 5 },
    { id: 'q48', question: 'What is "negro"?', options: ['White', 'Gray', 'Black', 'Brown'], answer: 'Black', lessonId: 5 },
    { id: 'q49', question: '"Amarillo" means...', options: ['Orange', 'Yellow', 'Green', 'Purple'], answer: 'Yellow', lessonId: 5 },
    { id: 'q50', question: 'What color is "verde"?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Green', lessonId: 5 },
    
    // Verbs
    { id: 'q51', question: 'What does "comer" mean?', options: ['To drink', 'To eat', 'To sleep', 'To run'], answer: 'To eat', lessonId: 25 },
    { id: 'q52', question: '"Dormir" means...', options: ['To eat', 'To sleep', 'To walk', 'To talk'], answer: 'To sleep', lessonId: 29 },
    { id: 'q53', question: 'What is "hablar"?', options: ['To listen', 'To read', 'To write', 'To speak'], answer: 'To speak', lessonId: 50 },
    { id: 'q54', question: '"Trabajar" means...', options: ['To play', 'To work', 'To rest', 'To study'], answer: 'To work', lessonId: 26 },
    { id: 'q55', question: 'What does "estudiar" mean?', options: ['To teach', 'To learn', 'To study', 'To read'], answer: 'To study', lessonId: 51 },
    
    // Adjectives
    { id: 'q56', question: 'What does "grande" mean?', options: ['Small', 'Big', 'Tall', 'Short'], answer: 'Big', lessonId: 30 },
    { id: 'q57', question: '"Pequeño" means...', options: ['Large', 'Small', 'Medium', 'Wide'], answer: 'Small', lessonId: 30 },
    { id: 'q58', question: 'What is "feliz"?', options: ['Sad', 'Angry', 'Happy', 'Tired'], answer: 'Happy', lessonId: 23 },
    { id: 'q59', question: '"Cansado" means...', options: ['Hungry', 'Thirsty', 'Tired', 'Sick'], answer: 'Tired', lessonId: 25 },
    { id: 'q60', question: 'What does "fácil" mean?', options: ['Difficult', 'Easy', 'Hard', 'Simple'], answer: 'Easy', lessonId: 51 },
    
    // Ser vs Estar
    { id: 'q61', question: 'Which verb for "I am a student"?', options: ['Soy', 'Estoy', 'Tengo', 'Hago'], answer: 'Soy', lessonId: 54 },
    { id: 'q62', question: 'Which verb for "I am tired"?', options: ['Soy', 'Estoy', 'Tengo', 'Voy'], answer: 'Estoy', lessonId: 54 },
    { id: 'q63', question: '"La casa es grande" uses ser because...', options: ['Location', 'Temporary state', 'Permanent characteristic', 'Feeling'], answer: 'Permanent characteristic', lessonId: 54 },
    { id: 'q64', question: '"El café está caliente" uses estar because...', options: ['Nationality', 'Profession', 'Temporary condition', 'Possession'], answer: 'Temporary condition', lessonId: 54 },
    
    // Question words
    { id: 'q65', question: 'What does "¿Qué?" mean?', options: ['Who?', 'What?', 'Where?', 'When?'], answer: 'What?', lessonId: 4 },
    { id: 'q66', question: '"¿Dónde?" asks about...', options: ['Time', 'Place', 'Person', 'Reason'], answer: 'Place', lessonId: 4 },
    { id: 'q67', question: 'What does "¿Cuándo?" mean?', options: ['How?', 'Why?', 'When?', 'Which?'], answer: 'When?', lessonId: 4 },
    { id: 'q68', question: '"¿Por qué?" asks for...', options: ['The time', 'The place', 'The reason', 'The way'], answer: 'The reason', lessonId: 4 },
    { id: 'q69', question: 'What does "¿Quién?" mean?', options: ['What?', 'Which?', 'Who?', 'Whose?'], answer: 'Who?', lessonId: 4 },
    { id: 'q70', question: '"¿Cómo?" asks about...', options: ['When', 'Where', 'How', 'What'], answer: 'How', lessonId: 4 },
    
    // Common phrases
    { id: 'q71', question: 'What does "Por favor" mean?', options: ['Thank you', 'Please', "You're welcome", 'Excuse me'], answer: 'Please', lessonId: 3 },
    { id: 'q72', question: '"De nada" means...', options: ['Please', 'Thanks', "You're welcome", 'Sorry'], answer: "You're welcome", lessonId: 3 },
    { id: 'q73', question: 'What is "Lo siento"?', options: ["I'm sorry", 'Excuse me', 'Please', 'Thank you'], answer: "I'm sorry", lessonId: 3 },
    { id: 'q74', question: '"Con permiso" is used when...', options: ['Thanking', 'Apologizing', 'Passing by someone', 'Greeting'], answer: 'Passing by someone', lessonId: 3 },
    
    // Animals
    { id: 'q75', question: 'What is "perro"?', options: ['Cat', 'Dog', 'Bird', 'Fish'], answer: 'Dog', lessonId: 43 },
    { id: 'q76', question: '"Gato" means...', options: ['Dog', 'Cat', 'Mouse', 'Rabbit'], answer: 'Cat', lessonId: 43 },
    { id: 'q77', question: 'What is "pájaro"?', options: ['Fish', 'Bird', 'Horse', 'Cow'], answer: 'Bird', lessonId: 43 },
    
    // Professions
    { id: 'q78', question: 'What is "médico"?', options: ['Nurse', 'Doctor', 'Dentist', 'Pharmacist'], answer: 'Doctor', lessonId: 46 },
    { id: 'q79', question: '"Profesor" means...', options: ['Student', 'Teacher', 'Director', 'Secretary'], answer: 'Teacher', lessonId: 26 },
    { id: 'q80', question: 'What is "abogado"?', options: ['Accountant', 'Engineer', 'Lawyer', 'Architect'], answer: 'Lawyer', lessonId: 26 },
    
    // More vocabulary quizzes
    { id: 'q81', question: 'What does "siempre" mean?', options: ['Never', 'Sometimes', 'Always', 'Rarely'], answer: 'Always', lessonId: 13 },
    { id: 'q82', question: '"Nunca" means...', options: ['Always', 'Often', 'Sometimes', 'Never'], answer: 'Never', lessonId: 13 },
    { id: 'q83', question: 'What is "a veces"?', options: ['Always', 'Sometimes', 'Never', 'Often'], answer: 'Sometimes', lessonId: 13 },
    { id: 'q84', question: '"Temprano" means...', options: ['Late', 'Early', 'On time', 'Soon'], answer: 'Early', lessonId: 25 },
    { id: 'q85', question: 'What does "tarde" mean?', options: ['Early', 'Late', 'Morning', 'Night'], answer: 'Late', lessonId: 25 },
    
    // Clothing
    { id: 'q86', question: 'What is "camisa"?', options: ['Pants', 'Shirt', 'Skirt', 'Dress'], answer: 'Shirt', lessonId: 32 },
    { id: 'q87', question: '"Zapatos" means...', options: ['Socks', 'Boots', 'Shoes', 'Sandals'], answer: 'Shoes', lessonId: 32 },
    { id: 'q88', question: 'What is "pantalones"?', options: ['Shirt', 'Jacket', 'Pants', 'Dress'], answer: 'Pants', lessonId: 32 },
    { id: 'q89', question: '"Vestido" means...', options: ['Vest', 'Dress', 'Shirt', 'Skirt'], answer: 'Dress', lessonId: 32 },
    
    // Technology
    { id: 'q90', question: 'What is "computadora"?', options: ['Phone', 'Computer', 'Television', 'Radio'], answer: 'Computer', lessonId: 27 },
    { id: 'q91', question: '"Teléfono" means...', options: ['Television', 'Computer', 'Phone', 'Tablet'], answer: 'Phone', lessonId: 27 },
    { id: 'q92', question: 'What is "correo electrónico"?', options: ['Mail', 'Email', 'Message', 'Letter'], answer: 'Email', lessonId: 27 },
    
    // Final review quizzes
    { id: 'q93', question: 'Complete: "Me ___ el chocolate"', options: ['gusto', 'gusta', 'gustan', 'gustas'], answer: 'gusta', lessonId: 51 },
    { id: 'q94', question: 'Complete: "Ella ___ de España"', options: ['es', 'está', 'soy', 'eres'], answer: 'es', lessonId: 54 },
    { id: 'q95', question: 'Complete: "Yo ___ 25 años"', options: ['soy', 'tengo', 'estoy', 'hay'], answer: 'tengo', lessonId: 6 },
    { id: 'q96', question: 'Complete: "___ a la tienda"', options: ['Vamos', 'Somos', 'Tenemos', 'Hacemos'], answer: 'Vamos', lessonId: 35 },
    { id: 'q97', question: 'Complete: "¿___ hora es?"', options: ['Cuál', 'Qué', 'Cuánta', 'Dónde'], answer: 'Qué', lessonId: 10 },
    { id: 'q98', question: 'Complete: "Hace mucho ___"', options: ['sol', 'lluvia', 'nieve', 'calor'], answer: 'calor', lessonId: 40 },
    { id: 'q99', question: 'Complete: "Tengo ___ de cabeza"', options: ['enfermedad', 'dolor', 'fiebre', 'tos'], answer: 'dolor', lessonId: 45 },
    { id: 'q100', question: 'What is the correct order for a Spanish sentence?', options: ['Verb-Subject-Object', 'Subject-Object-Verb', 'Subject-Verb-Object', 'Object-Verb-Subject'], answer: 'Subject-Verb-Object', lessonId: 54 }
  ]
};

// Helper functions for exercises
function getExercisesByLesson(lessonId) {
  return {
    fillInBlank: exercisesData.fillInBlank.filter(e => e.lessonId === lessonId),
    translation: exercisesData.translation.filter(e => e.lessonId === lessonId),
    quiz: exercisesData.quiz.filter(e => e.lessonId === lessonId)
  };
}

function getRandomExercises(type, count = 10) {
  const exercises = exercisesData[type] || [];
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function getAllExercises() {
  return {
    fillInBlank: exercisesData.fillInBlank,
    translation: exercisesData.translation,
    quiz: exercisesData.quiz,
    totalCount: exercisesData.fillInBlank.length + exercisesData.translation.length + exercisesData.quiz.length
  };
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    exercisesData,
    getExercisesByLesson,
    getRandomExercises,
    getAllExercises
  };
}

console.log('Spanish Fluency Quest - Exercises Loaded');
console.log(`Fill-in-Blank: ${exercisesData.fillInBlank.length}`);
console.log(`Translation: ${exercisesData.translation.length}`);
console.log(`Quiz: ${exercisesData.quiz.length}`);
