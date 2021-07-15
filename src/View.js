import { Timer } from "./Timer.js";

const View = {
  render({ minutes, seconds }) {
    //renderizando o html dessa variável na div com id timer
    const timer = (document.getElementById("timer").innerHTML = `
    <p>Próximo post em:</p>
    <span>${minutes}:${seconds}</span>
    `);
  },
};

export { View };
