import { CardList } from "./CardList/CardList.js";
import { Header } from "./Header/header.js";
import { ComplainModal } from "./ModalView/ModalAddBan/ModalComplain.js";

function createPinterestAppCard(header, cardList) {
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');

	appCard.append(header, cardList);
	return appCard;
}

export class View {
	constructor({ containerId, onHeaderAction, onCardAction }) {
		this.cardList = new CardList(onCardAction);
		this.header = new Header(onHeaderAction);
		this.complainModal = new ComplainModal();
		this.rootContainer = document.getElementById(containerId);
		this.appCard = createPinterestAppCard(this.header.cardContainer, this.cardList.cardContainer);
		this.rootContainer.append(this.appCard);
	}

	renderCards = (cards) => {
		this.cardList.renderCards(cards);
	}

	openPhoto = (src) => {
		this.cardList.openPhoto(src);
	}

}
