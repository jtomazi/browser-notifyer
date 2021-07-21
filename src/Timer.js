import { View } from "./View.js";
import { Emitter } from "./Emitter.js";

const Timer = {
  time: 60 * 60,
  currentTime: 0,
  interval: null, //variável do interval para poder para a decrementação e não passar de 0 (-1, -2, -3...)

  //Criando função para definir o tempo em minutos (tempo / 60) usando Math.floor (arredondamento para baixo).
  timeToMinutes: (time) => Math.floor(time / 60),

  //Criando função para definir o tempo em segundos, que seria a sobra da divisão acima/divisão por 60.
  timeToSeconds: (time) => time % 60,

  //Formatando o tempo, para quando o tempo estiver com menos de 2 caracteres (maxLength), preencher o número com 0.
  formatTime: (time) => String(time).padStart(2, "0"),

  //Passando o time definido em App.js, caso o App.time for vazio, usar o valor de Timer.time (60 minutos)
  init(time) {
    Emitter.emit("countdown-start");
    Timer.time = time || Timer.time;
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  //countdown para decrementar o tempo
  countdown() {
    Timer.currentTime = Timer.currentTime - 1; //decrementa o currentTime

    //Atribuindo o tempo formatado a variável minutes e seconds.
    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

    //Criando objeto e passando os valores de minutos e tempo que serão exibidos/chamados no View.js
    View.render({
      minutes,
      seconds,
    });

    // if para interromper a decrementação quando o currentTime for igual a 0
    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval); //clearInterval interrompe o interval, é necessário passar a variável como parâmetro
      Emitter.emit("countdown-end");
      return;
    }
  },
};

export { Timer };
