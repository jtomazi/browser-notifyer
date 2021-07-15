import { View } from "./View.js";
View.render();

const Timer = {
  time: 0.1 * 60,
  currentTime: 0,
  interval: null, //variável do interval para poder para a decrementação e não passar de 0 (-1, -2, -3...)
  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  /* countdown para decrementar o tempo */
  countdown() {
    Timer.currentTime = Timer.currentTime - 1; //decrementa o currentTime
    console.log(Timer.currentTime);
    /* if para interromper a decrementação quando o currentTime for igual a 0*/
    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval); //clearInterval interrompe o interval, é necessário passar a variável como parâmetro
      return;
    }
  },
};

export { Timer };
