const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  for (let algo of cosasQueAprendimos) {
    const tema = algo.tema;
    const clase = algo.class;
    // Creo un nuevo elemento 'li'
    const cosaEl = document.createElement("li");
    // Le establezco el texto al elemento 'li'
    cosaEl.textContent = tema;
    // Verifico si la clase no es un texto vacio
    if (clase.length > 0) {
      // Si no es un texto vacio, agrego la clase al elemento 'li'
      cosaEl.classList.add(clase);
    }
    // Agrego el elemento 'li' a la lista
    listaEl.appendChild(cosaEl);
  }
}

main();
