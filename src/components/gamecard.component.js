class GameCard extends HTMLElement {
    constructor() {
        super();


        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        // ADDING VALUES
        const title     = this.hasAttribute('card-title') ? this.getAttribute('card-title') : 'Undefined';
        const price     = this.hasAttribute('card-price') ? this.getAttribute('card-price') : 'Undefined price';
        const company   = this.hasAttribute('card-company') ? this.getAttribute('card-company') : 'Undefined company';
        const category  = this.hasAttribute('card-category') ? this.getAttribute('card-category') : 'Undefined cat';

        // ROOT ELEMENTS
        const rootElement = document.createElement('div');
        const cardLeft = document.createElement('div');
        const cardRight = document.createElement('div');

        // ROOT ELEMENTS CLASSES
        rootElement.classList.add('card');
        cardLeft.classList.add('card__left');
        cardRight.classList.add('card__right');

        // CARD LEFT ELEMENTS
        const cardTitle = document.createElement('h3');
        const cardPrice = document.createElement('p');
        const cardCompany = document.createElement('p');

        cardTitle.textContent = title;
        cardPrice.textContent = price;
        cardCompany.textContent = company;

        // CARD LEFT ELEMENTS CLASSES
        cardTitle.classList.add('card__title');
        cardPrice.classList.add('card__price');
        cardCompany.classList.add('card__company');

        cardLeft.appendChild(cardTitle);
        cardLeft.appendChild(cardPrice);
        cardLeft.appendChild(cardCompany);

        // CARD RIGHT ELEMENTS
        const cardBtn = document.createElement('button');
        const cardCat = document.createElement('span');

        cardBtn.textContent = 'Ver mais';
        cardCat.textContent = category;

        cardCat.classList.add('card__cat');
        cardBtn.classList.add('card__button');

        cardRight.appendChild(cardBtn);
        cardRight.appendChild(cardCat);

        // APPENDING ELEMENTS
        rootElement.appendChild(cardLeft);
        rootElement.appendChild(cardRight);

        return rootElement;
    }

    styles() {
        const stylesLink = document.createElement('link');
        stylesLink.setAttribute('rel', 'stylesheet');
        stylesLink.setAttribute('href', 'src/components/gamecard.component.css');

        return stylesLink;
    }
}

customElements.define('game-card', GameCard);