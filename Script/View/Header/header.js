import { createHeader } from './header_itils.js';
import { randomPage, getRandomArbitrary } from '../../Model/models_utils.js';
import { AddBtnNames, boardnames, datasetNames, HeaderAction } from '../view_constants.js';
import { numberLoadCards } from '../../Model/model_constants.js';



export class Header {
    constructor({ onHeaderSearch, onHeaderReboot }) {
        this.cardContainer = createHeader();
        this.onHeaderSearch = onHeaderSearch;
        this.onHeaderReboot = onHeaderReboot;
        this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onHeaderClick);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.cardContainer.children[1].firstChild;
        const formattedValue = value.trim();
        let randomNumberSearch = Math.floor(Math.random() * 300);
        let searchURL = `https://api.unsplash.com/search/photos?page=${randomNumberSearch}&query=${formattedValue}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
        if (formattedValue) {
            this.onHeaderSearch(searchURL);
            searchURL = '';
            this.cardContainer.children[1].reset();
        }
    }

    onHeaderClick = (event) => {
        const {
            target: {
                dataset: { action },
            },
        } = event;
        switch (action) {
            case HeaderAction.openBoardsBtn:
                const boards = event.target.closest('.dropdown');
                boards.children[1].classList.toggle('show');
                break;
            case HeaderAction.reboot:
                let randomNumberReboot = Math.floor(Math.random() * 300);
                let rebootUrl = `https://api.unsplash.com/photos?page=${randomNumberReboot}&per_page=28&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
                this.onHeaderReboot(rebootUrl);
        }
    }
}


