import React from 'react';
import { Link } from 'react-router-dom';
import { ContatoWrapper, UserActionButton, ButtonWrapper } from './styles';


const img = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png';

const Contato = ({
  name, deletar, nameParam, idParam, conversar,
}) => (
  <ContatoWrapper>
    <img src={img} alt="Imagem de perfil" />
    <h2>{name}</h2>
    <ButtonWrapper>
      <Link to={`/conversa/${nameParam}/${idParam}`} style={{ textDecoration: 'none', color: '#000' }}>
        <UserActionButton onClick={conversar}>
          Conversar
        </UserActionButton>
      </Link>
      <UserActionButton onClick={deletar}>Deletar</UserActionButton>
    </ButtonWrapper>
  </ContatoWrapper>
);

export default Contato;
