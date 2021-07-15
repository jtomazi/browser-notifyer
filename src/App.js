//Importando o arquivo Notifyer, assim não precisa importar o Notifyer no HTML pois já irá puxar tudo por aqui.
import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    /* envolve o Notifyer em um try para tratar o erro, e no catch imprime a mensagem de erro definida no Notifyer*/
    try {
      Timer.init();
      /* criando objeto com os valores para a notificação */

      await Notifyer.init();
      Notifyer.notify({
        title: "Hora do post",
        body: "Crie algum conteúdo de valor",
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };