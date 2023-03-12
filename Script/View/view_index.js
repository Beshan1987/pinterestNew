import { CardList } from "./CardList/CardList.js";
import { Header } from "./Header/header.js";
import { HeaderAction } from './view_constants.js';


function createPinterestAppCard(header, cardList) {
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');

	appCard.append(header, cardList);
	return appCard;
}


export class CardView {
	constructor({ cards, containerId = 'root', onHeaderAction, onCardAction }) {
		this.CardList = new CardList(cards, onCardAction);
		this.header = new Header(
			{ onHeaderSearch: (searchUrl) => onHeaderAction(HeaderAction.search, searchUrl), onHeaderReboot: (newUrl) => onHeaderAction(HeaderAction.reboot, newUrl) });
		const rootContainer = document.getElementById(containerId);
		const appCard = createPinterestAppCard(this.header.cardContainer, this.CardList.cardContainer);
		rootContainer.append(appCard);
	}

	renderCards = (cards) => {
		this.CardList.renderCards(cards);
		console.log(cards);
	}

	openPhoto = (src) => {
		this.CardList.openPhoto(src);
	}
}
