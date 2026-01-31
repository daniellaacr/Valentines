const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const area   = document.getElementById("buttonsArea");

let yesScale = 1;
let noDodges = 0;

// Redirige a la página del mensaje
yesBtn.addEventListener("click", () => {
  window.location.href = "love.html";
});

// Hace que el "No" se escape al intentar presionarlo
function dodgeNo() {
  const areaRect = area.getBoundingClientRect();
  const btnRect  = noBtn.getBoundingClientRect();

  // Calcula límites para mantenerlo dentro del contenedor
  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  // Posición aleatoria
  const x = Math.max(0, Math.min(maxX, Math.random() * maxX));
  const y = Math.max(0, Math.min(maxY, Math.random() * maxY));

  // Pasa a posición absoluta para poder moverlo libremente
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;

  // Aumenta el "Yes" y lo hace más llamativo
  yesScale = Math.min(2.2, yesScale + 0.12);
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.classList.add("glow");

  noDodges += 1;

  // Si se escapa muchas veces, desaparece 😈
  if (noDodges >= 9) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
    noBtn.textContent = "No";
  }
}

// Se mueve cuando el cursor se acerca o cuando intentan tocarlo
noBtn.addEventListener("mouseenter", dodgeNo);
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  dodgeNo();
});
