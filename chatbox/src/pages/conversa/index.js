import React, { useState, useEffect } from 'react';
import { IoIosReturnLeft } from 'react-icons/io';

import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAlert } from 'react-alert';
import { Creators as ConversasActions } from '../../store/ducks/conversas';

import ChatCard from '../../components/ChatCard';


import {
  Container,
  ChatHeader,
  ChatMiddle,
  ChatBottom,
  Input,
  BackButton,
} from './styles';


const Conversa = (props) => {
  const { nome, id } = useParams();
  const alert = useAlert();
  const [inputMessage, setInputMessage] = useState('');
  const [digitando, setDigitando] = useState(false);
  const [messageArray, setMessageArray] = useState([]);

  const pushUserMessage = () => {
    const newMessage = { sender: 'Usuário', message: inputMessage };
    messageArray.push(newMessage);
  };

  const pushBotMessage = () => {
    const botAwnser = { sender: nome, message: 'Estou verificando seu pedido, só um momento...' };
    messageArray.push(botAwnser);
  };

  const handleEnviarMensagem = () => {
    if (inputMessage.length === 0) {
      alert.show('Por favor, digite algo');
      return;
    }

    pushUserMessage();

    setTimeout(() => {
      pushBotMessage();
      setDigitando(false);
    }, 2000);

    setInputMessage('');
    setDigitando((prev) => ({ ...prev, digitando: true }));
  };


  useEffect(() => {
    if (messageArray.length === 0) {
      alert.show(`Olá meu nome é ${nome}! Como posso te ajudar ?`);
    }
    setMessageArray(props.conversas_p.chats[id].messages);
  }, []);

  const img = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';


  console.log('MESSAGES >>>>>', props.conversas_p.chats[id].messages);
  return (
    <Container>
      <ChatHeader>
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
          <BackButton>
            <IoIosReturnLeft />
            Voltar
          </BackButton>
        </Link>
        <h2>
          {`Médico(a): ${nome}`}
          {' '}
        </h2>
        <img
          src={img}
          alt="Imagem de perfil"
        />
      </ChatHeader>
      <ChatMiddle>
        { messageArray.length > 0
        && messageArray.map((msg, index) => (
          <ChatCard sender={msg.sender} message={msg.message} key={index} />
        ))}
        {
          digitando
        && (
        <div style={{ padding: 20 }}>
          {nome}
          {' '}
          está digitando...
        </div>
        )
        }
      </ChatMiddle>
      <ChatBottom>
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <BackButton onClick={handleEnviarMensagem}>
          Enviar
        </BackButton>
      </ChatBottom>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  conversas_p: state.conversas,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ConversasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversa);
