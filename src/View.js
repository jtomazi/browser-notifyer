const View = {
  render() {
    return `
    <p>Próximo post em:</p>
    <span>10:00</span>
    `;
  },
};

document.body.innerHTML = View.render;

export { View };
