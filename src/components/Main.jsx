import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onAddPopup, onEditPopup, onCardClick}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    //Получаем информацию с сервера
    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userInfo, cards]) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar)
                setCards(cards);
            })
            .catch((err) => alert(err));
    }, []);


    return (
        <main className="content">
            <section className="profile">
                <button type="button" className="profile__edit-avatar-button" onClick={onEditAvatar} aria-label="Редактировать аватар">
                    <img src={userAvatar} className="profile__avatar" alt="Аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__info-edit-button" onClick={onEditPopup} aria-label="Редактировать профиль" />
                <button type="button" className="profile__add-button" onClick={onAddPopup} aria-label="Добавить новые фото" />
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;