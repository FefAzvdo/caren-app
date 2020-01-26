import React, { useState, useEffect } from 'react';
import { IoIosReturnLeft } from 'react-icons/io';

import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  console.log('PROPS =>', props);
  const { nome, id } = useParams();


  const [inputMessage, setInputMessage] = useState('');

  const [chat, setChats] = useState(props.conversas_p.chats[id]);

  console.log('CHAT =>', chat);

  const handleEnviarMensagem = () => {
    const newMessage = { sender: 'Usuário', message: inputMessage };
    chat.messages.push(newMessage);
    setInputMessage('');
  };
  const img = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';


  // useEffect(() => {
  //   if (props.conversas_p.chats.message.length === 0) {
  //     props.addMessage(id, nome, 'Sejá bem vindo');
  //   }
  // }, []);

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
          Médico(a):
          {' '}
          {nome}
          <br />
          Id:
          {' '}
          {id}
        </h2>
        <img
          src={img}
          alt="Imagem de perfil"
        />
      </ChatHeader>
      <ChatMiddle>
        {/* {props.conversas_p.chats.map((chat) => (
          chat.message.map((message) => <ChatCard sender={nome} message={message} />)
        ))} */}
        <ChatCard sender={nome} message="Olá" />
        { chat.messages.length > 0
        && chat.messages.map((msg) => (
          <ChatCard sender={msg.sender} message={msg.message} />
        ))}
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
