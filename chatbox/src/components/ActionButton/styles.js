import styled from 'styled-components';

export const Button = styled.div`
        border-radius: 25px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        padding: 8px;
        background: #f9f9f9;
        cursor: pointer;

        &&:hover{
          background: ${(props) => props.hoverColor || '#999'}
        }
`;

export const ActionTextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;

  p{
    margin-right: 20px;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.textColor}
  }

  @media screen and (max-width: 780px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        p{
          margin: 15px;
          text-align: center
        }
     }
`;
