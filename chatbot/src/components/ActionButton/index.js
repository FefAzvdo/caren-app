import React from 'react';
import { ActionTextButtonWrapper, Button } from './styles';


const ActionButton = ({
  title, onClick, children, textColor, hoverColor,
}) => (
  <ActionTextButtonWrapper textColor={textColor}>
    <p>{title}</p>
    <Button onClick={onClick} hoverColor={hoverColor}>
      {children}
    </Button>
  </ActionTextButtonWrapper>
);

export default ActionButton;
