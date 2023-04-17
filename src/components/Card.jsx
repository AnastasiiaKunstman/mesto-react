import React from "react";

function Card({card, onCardClick}) {

    // увеличение картинки
    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="element">
            <button type="button" className="element__del" aria-label="Удалить"></button>
            <button type="button" className="element__button-image" aria-label="Увеличить картинку">
                <img src={card.link} alt={card.name} onClick={handleClick} className="element__image" />
            </button>
            <div className="element__description">
                <h2 className="element__title">{card.name}</h2>
                <button type="button" className="element__like" aria-label="Лайк">
                    <p className="element__like-counter">{card.likes.length}</p>
                </button>
            </div>
        </div>
    )
};

export default Card;