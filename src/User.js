import React, { useState } from 'react';
import profileImage from '../assets/img/catanacomics.svg';

function User() {
  const [username, setUsername] = useState('catanacomics');
  const [image, setImage] = useState(profileImage);

  const changeUsername = () => {
    const newUsername = prompt('Digite o novo nome de usuário:');
    if (newUsername) setUsername(newUsername);
  };

  const changeProfileImage = () => {
    const newImage = prompt('Digite o novo link da imagem de perfil:');
    if (newImage) setImage(newImage);
  };

  return (
    <div className="usuario">
      <img src={image} alt="imagem de perfil" onClick={changeProfileImage} />
      <div className="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon name="pencil" onClick={changeUsername}></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;
