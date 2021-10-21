import "./style.css";

class App {
  app: HTMLElement;

  constructor() {
    this.app = document.getElementById("app");
  }

  appendChild = (child: HTMLElement) => {
    if (this.app) {
      this.app.appendChild(child);
    }
  };
}

(() => {
  const app = new App();

  const innerWidth = 200; /* window.innerWidth */
  const innerHeight = 80; /* window.innerHeight */

  const nullCellChar = "¤";
  const fillCellChar = "■";

  for (let i = 0; i < innerHeight; i++) {
    app.app.append(Array(innerWidth).fill(nullCellChar).join(""));
    app.appendChild(document.createElement("br"));
  }
})();
