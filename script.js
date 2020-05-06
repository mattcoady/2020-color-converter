const COLORS_2020 = {
  white: "#ffffff",
  pampas: "#f9f8f7",
  gallery: "#ededed",
  alto: "#dedede",
  silverAlto: "#d8d8d8",
  silver: "#c9c9c9",
  silverChalice: "#aaaaaa",
  gray: "#808080",
  scorpion: "#606060",
  emperor: "#505050",
  mineShaft: "#303030",
  crow: "#202020",
  raven: "#101010",
  ghost: "#c8cbd6",
  manatee: "#9296a9",
  unbounceBlue: "#0033ff",
  linkWater: "#d8e8ff",
  dodgerBlue: "#4993ff",
  kleinBlue: "#0022B0",
  radicalRed: "#ff3e51",
  amaranth: "#ea2d48",
  pink: "#ffc0c0",
  shamrock: "#27cc8d",
  frostedMint: "#e0fff3",
  jungleGreen: "#29a573",
  orange: "#ffa300",
  varden: "#fff8dc",
  blazeOrange: "#ff6800"
};

const right = document.querySelector(".right");
const left = document.querySelector(".left");

const items = Object.entries(COLORS_2020).forEach(([name, hex]) => {
  const elm = document.createElement("div");
  elm.style.backgroundColor = hex;
  elm.className = "sample";

  const nameBlack = document.createElement("div");
  const nameWhite = document.createElement("div");

  const nameActual = document.createElement("div");
  nameActual.innerText = '$'+name;

  nameBlack.innerText = hex;
  nameWhite.innerText = hex;

  nameWhite.style.color = "white";

  elm.appendChild(nameBlack);
  elm.appendChild(nameWhite);

  elm.appendChild(nameActual);

  right.appendChild(elm);
});

const input = document.querySelector("input");
document.addEventListener("keyup", () => {
  left.style.backgroundColor = `#${input.value}`;
});
