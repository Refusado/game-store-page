class GameCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const rootElement = document.createElement("div");
        rootElement.textContent = "teste de componente";

        return rootElement;
    }

    styles() {
        const stylesLink = document.createElement("link");
        stylesLink.setAttribute("rel", "stylesheet");
        stylesLink.setAttribute("href", "src/components/gamecard.component.css");

        return stylesLink;
    }
}

customElements.define("game-card", GameCard);