import React from "react";

function PopupWithForm(props) {
    return (
        <>
            <div className={`popup ${props.name}-popup} ${props.isOpen ? `popup_opened` : ""}`}>
                <div className="popup__container">
                    <h2 className="popup__title">{props.title}</h2>
                    <button type="button" className="popup__close" onClick={props.onClose} aria-label="Зыкрыть форму" />
                    <form className="popup__form" name="nameForm" action="#" method="post" noValidate="">
                        {props.children}
                        <button type="submit" className="popup__button-save profile-popup__button-save" aria-label="Сохранение данных">{props.button}</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default PopupWithForm;