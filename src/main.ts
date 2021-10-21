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

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  for (let i = 0; i < innerHeight; i++) {
    app.app.append(Array(innerWidth).fill(".").join(""));
    app.appendChild(document.createElement("br"));
  }
})();
