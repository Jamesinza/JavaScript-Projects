const drumPads = [
  { key: "Q", name: "Heater 1", url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" },
  { key: "W", name: "Heater 2", url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" },
  { key: "E", name: "Heater 3", url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" },
  { key: "A", name: "Heater 4", url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" },
  { key: "S", name: "Clap", url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" },
  { key: "D", name: "Open-HH", url: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" },
  { key: "Z", name: "Kick-n'-Hat", url: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" },
  { key: "X", name: "Kick", url: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" },
  { key: "C", name: "Closed-HH", url: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" }
];

const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");

// Generate drum pads
drumPads.forEach(pad => {
  const button = document.createElement("button");
  button.classList.add("drum-pad");
  button.id = pad.name;
  button.textContent = pad.key;

  const audio = document.createElement("audio");
  audio.classList.add("clip");
  audio.id = pad.key;
  audio.src = pad.url;

  button.appendChild(audio);
  padBank.appendChild(button);

  // Click event
  button.addEventListener("click", () => playSound(pad.key, pad.name));
});

// Play sound function
function playSound(key, name) {
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    display.textContent = name;
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const pad = drumPads.find(p => p.key === key);
  if (pad) playSound(pad.key, pad.name);
});
