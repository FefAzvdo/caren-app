import React from 'react';
import { ChatCardWrapper, ChatCardHeader, ChatCardBody } from './styles';

const ChatCard = ({ sender, message }) => {
  const img = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';
  return (
    <ChatCardWrapper>
      <ChatCardHeader>
        <h2>
          {sender}
        </h2>
        <img
          src={img}
          alt="Imagem de perfil"
        />
      </ChatCardHeader>
      <ChatCardBody>
        {message}
      </ChatCardBody>
    </ChatCardWrapper>
  );
};

export default ChatCard;
