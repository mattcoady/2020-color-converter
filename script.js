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

const [left, right] = Array.from(document.querySelectorAll(".col"));

Object.entries(COLORS_2020).map(([name, hex]) => {
  const elm = document.createElement("div");
  elm.style.backgroundColor = hex;
  elm.className = "sample";

  const elms = Array.apply(null, Array(4)).map(() =>
    document.createElement("div")
  );

  const [nameBlack, nameWhite, nameVarWhite, nameVarBlack] = elms;

  nameVarBlack.innerText = "$" + name;
  nameVarWhite.innerText = "$" + name;
  nameBlack.innerText = hex;
  nameWhite.innerText = hex;

  nameWhite.style.color = "white";
  nameVarWhite.style.color = "white";

  elms.forEach(e => elm.appendChild(e));

  return elm;
}).forEach(e => right.appendChild(e));

const input = document.querySelector("input");
document.addEventListener("keyup", () => {
  left.style.backgroundColor = `#${input.value.replace('#','').trim()}`;
});
