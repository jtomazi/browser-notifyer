//Importando o arquivo Notifyer, assim não precisa importar o Notifyer no HTML pois já irá puxar tudo por aqui.
import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const App = {
  async start() {
    /* envolve o Notifyer em um try para tratar o erro, e no catch imprime a mensagem de erro definida no Notifyer.js*/
    try {
      await Notifyer.init();

      //Rodar o notifyer quando o countdown iniciar, passando o countdown no Timer.js
      Emitter.on("countdown-start", () => {
        Notifyer.notify({
          title: "Título da notificação",
          body: "Sou o corpo da notificação :)",
        });
      });

      //Reiniciando o timer quando o countdown terminar. Passando o countdown no Timer.js após o clearinterval
      Emitter.on("countdown-end", () => {
        Timer.init();
      });

      Timer.init(0.1 * 60);
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
