// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Y hace falta que te diga", time: 18 },
  { text: "Que me muero por tener algo contigo?", time: 20 },
  { text: "¿Y es que no te has dado cuenta", time: 27 },
  { text: "De lo mucho que me cuesta ser tu amiga?", time: 31 },  
  { text: "...", time: 38 },
  { text: "Ya no puedo acercarme a tu boca", time: 38 },
  { text: "Sin deseártela de una manera loca", time: 42 },
  { text: "Necesito controlar tu vida", time: 47 },
  { text: "Saber quién te besa y quién te abriga", time: 50 },
  { text: "¿Y hace falta que te diga", time: 56 },
  { text: "Que me muero por tener algo contigo?", time: 58 },
  { text: "...", time: 63 },
  { text: "¿Y es que no te has dado cuenta", time: 66 },
  { text: "De lo mucho que me cuesta ser tu amiga?", time: 68 },
  { text: "Ya me quedan muy pocos caminos", time: 74 },
  { text: "Y aunque pueda parecerte un desatino", time: 78 },
  { text: "No quisiera yo morirme sin tener", time: 83 },
  { text: "Algo contigo", time: 87 },
  { text: "...", time: 91 },
  { text: "♫.♬.♩.𝄞", time: 94 },
  { text: "♭.♮.♩𝄡.𝄢", time: 98 },
  { text: "🎵🎵🎵🎵🎵🎵🎵🎵", time: 102 },
  { text: "...", time: 108 },
  { text: "Ya no puedo continuar espiando", time: 111 },
  { text: "Día y noche, y tu llegar adivinando", time: 115 },
  { text: "Ya no sé con qué inocente excusa", time: 119 },
  { text: "Pasar por tu casa", time: 124 },
  { text: "Y me quedan muy pocos caminos", time: 130 },
  { text: "Y aunque pueda parecerte un desatino", time: 134 },
  { text: "No quisiera yo morirme sin tener", time: 138 },
  { text: "Algo contigo", time: 143 },
  { text: "...", time: 146 },
  { text: "🎺.🎺.🎺.🎺.🎺.🎺", time: 149 },
  { text: "🎸.🎸.🎸.🎸.🎸.🎸", time: 223 },
  { text: "...", time: 240 },
  { text: "Ya no puedo continuar espiando", time: 244},
  { text: "Día y noche, y tu llegar adivinando", time: 248 },
  { text: "Ya no sé con qué inocente excusa", time: 254 },
  { text: "Pasar por tu casa", time: 256 },
  { text: "Y me quedan muy pocos caminos", time: 263 },
  { text: "Y aunque pueda parecerte un desatino", time: 267 },
  { text: "No quisiera yo morirme sin tener", time: 271 },
  { text: "Algo contigo", time: 275 },
  { text: "...", time: 279 },
  { text: "Algo contigo", time: 281 },
  { text: "...", time: 284 },
  { text: "Algo contigo", time: 287 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);



