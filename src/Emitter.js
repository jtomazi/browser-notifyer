//Criando o emitter, definindo os eventos.
const Emitter = {
  events: {},

  //Criando função para registrar/guardar os eventos.
  on(event, cb) {
    //Essa primeira linha faz com que o Emitter.events[event] receba ele mesmo caso tenha algum dado, OU recebe um array vazio.
    Emitter.events[event] = Emitter.events[event] || [];
    //Empurra/envia a callback para o array.
    Emitter.events[event].push(cb);
  },

  //Criando função para emitir os eventos. O ...rest é para passar o resto dos parâmetros enviados além do evento.
  emit(event, ...rest) {
    //Se o evento dentro do Emitter.events for igual a falso, não existe o evento chamado, apenas retorne.
    if (event in Emitter.events === false) {
      return;
    }

    //forEach = Para cada elemento do array, execute X função. Nesse caso passamos o elemento como 'e' e pedimento apenas para executar.
    Emitter.events[event].forEach((e) => {
      e(...rest);
    });
  },
};

export { Emitter };
