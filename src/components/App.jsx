import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  
  //попап редактирования профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  //попап добавления новых карточек
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  //попап аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  //попап увеличения карточки
  const [selectedCard, setSelectedCard] = React.useState(null);


  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  //закрытие всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  };

  return (
    <>
      <Header />
      <Main
        onEditPopup={handleEditProfileClick}
        onAddPopup={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль" buttonText="Сохранить" onClose={closeAllPopups}>
        <input
          id="input-username"
          required=""
          type="text"
          minLength={2}
          maxLength={40}
          name="username"
          className="popup__input popup__input_field_name"
          placeholder="Имя"
        />
        <span id="input-username-error" className="popup__input-error" />
        <input
          id="input-job"
          required=""
          type="text"
          minLength={2}
          maxLength={200}
          name="job"
          className="popup__input popup__input_field_job"
          placeholder="О себе"
        />
        <span id="input-job-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} name="card" title="Новое место" buttonText="Сохранить" onClose={closeAllPopups}>
        <input
          id="input-name"
          required=""
          type="text"
          minLength={2}
          maxLength={30}
          name="name"
          className="popup__input popup__input_card_name"
          placeholder="Название"
        />
        <span id="input-name-error" className="popup__input-error" />
        <input
          id="input-link"
          required=""
          type="url"
          name="link"
          className="popup__input popup__input_card_link"
          placeholder="Ссылка на картинку"
        />
        <span id="input-link-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" buttonText="Сохранить" onClose={closeAllPopups}>
        <input
          id="input-avatar"
          required=""
          type="url"
          name="avatar"
          className="popup__input popup__input_avatar_link"
          placeholder="Ссылка на картинку"
        />
        <span id="input-avatar-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups}></PopupWithForm>

      <ImagePopup isOpen={selectedCard} card={selectedCard} onClose={closeAllPopups} />
    </>

  );
}

export default App;