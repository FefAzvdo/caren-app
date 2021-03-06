import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { TiUserAdd, TiTick, TiTimes } from 'react-icons/ti';
import { FaFileMedical } from 'react-icons/fa';
import { useAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Creators as ContatosActions } from '../../store/ducks/contatos';
import { Creators as ConversasActions } from '../../store/ducks/conversas';

import {
  Container,
  Input,
  SemContato,
} from './styles';


import Contato from '../../components/CardContato';
import ActionButton from '../../components/ActionButton';

const Contatos = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const alert = useAlert();

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleAddContato = () => {
    if (input.length === 0) {
      alert.show('Usuário não pode ser nulo');
      return;
    }

    props.addChat(props.conversas_p.id, input);
    props.adicionarContato(input);

    setInput('');
    closeModal();
  };

  const handleDeletarContato = (id) => {
    props.deletarContato(id);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      maxWidth: 700,
    },
  };

  return (
    <Container>
      <div>
        <h1 style={{ textAlign: 'center' }}>CHATBOT APP</h1>
        {
          props.contatos_p.contatos.map((contato) => (
            <Contato
              key={contato.id}
              nameParam={contato.name}
              idParam={contato.id}
              // conversar={() => handleAddChat(contato.id, contato.name)}
              name={contato.name}
              deletar={() => handleDeletarContato(contato.id)}
            />
          ))
        }
        {
          props.contatos_p.contatos.length <= 0

          && (
          <SemContato>
            <p>Não há nenhum contato cadastrado :(</p>
            <br />
            <p>Clique no botão abaixo para cadastrar um novo contato !</p>
          </SemContato>
          )
        }
      </div>

      <ActionButton title="Adicionar novo contato" onClick={openModal}>
        <TiUserAdd />
      </ActionButton>

      <Link to="/Prontuario" style={{ textDecoration: 'none', color: '#000' }}>
        <ActionButton title="Prontuário">
          <FaFileMedical />
        </ActionButton>
      </Link>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Input
          placeholder="Digite o nome do BOT ."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        >
          <ActionButton title="Adicionar" onClick={handleAddContato} hoverColor="#01c5a3" type="submit">
            <TiTick />
          </ActionButton>

          <ActionButton title="Cancelar" onClick={closeModal} hoverColor="#BB2124">
            <TiTimes />
          </ActionButton>
        </div>
      </Modal>
    </Container>
  );
};


const mapStateToProps = (state) => ({
  contatos_p: state.contatos,
  conversas_p: state.conversas,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...ContatosActions, ...ConversasActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contatos);
