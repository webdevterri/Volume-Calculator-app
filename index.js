const h = document.getElementById("height");
const w = document.getElementById("width");
const l = document.getElementById("length");

const volume = document.getElementById("volume");

document.getElementById("calculate").addEventListener("click", calc);

function calc() {
  const v = w.value * h.value * l.value;

  if (v === 0 || v < 0) {
    volume.innerHTML = `<p class="output-error">Please, make sure to enter numbers larger than 0 in each input.</p>`;
  } else {
    volume.innerHTML = `<p class="output-num">${v}</p>`;
  }
}
