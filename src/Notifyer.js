const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();

    /* se a permissão for diferente de garantido, lança um erro com a mensagem indicada, o tratamento do erro é no App.js */
    if (permission !== "granted") {
      throw new Error("Permissão negada");
    }
  },

  /* Notificação, título e corpo da mensgaem, passando objetos do arquivo App.js */
  notify({ title, body, icon }) {
    new Notification(title, {
      body,
      icon,
    });
  },
};

//Para exportar o arquivo para outro
export { Notifyer };
