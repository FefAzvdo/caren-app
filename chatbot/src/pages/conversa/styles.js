import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background:#01C5A3;
    width: 100%;
    max-width: 1024px;
    min-height:500px;
    margin: 20px auto;
    padding: 20px;
    border: 5px solid black;
    border-radius: 10px;

    @media screen and (max-width: 500px){
    margin: 20px 0px;
    padding: 20px 0px;
  }

`;

export const ChatHeader = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    width: 80px;
    height: 80px;
    border: 3px solid black;
  }

  @media screen and (max-width: 700px){
    h2{
      font-size: 15px
    }

    img{
      width: 40px;
      height: 40px
    }
  }

`;

export const ChatMiddle = styled.div`
  border: 2px solid #000;
  background: #fff;
  min-height: 50vh;
  margin: 20px 0px;
`;

export const ChatBottom = styled.div`
  border: 2px solid #000;
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background: #f9f9f9;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 15px;
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  width: 90%;
  margin: 5px;
  `;


export const BackButton = styled.div`
  border-radius: 25px;
  border: 2px solid black;
  font-size: 1rem;
  padding: 8px;
  background: #f9f9f9;
  width: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  text-align: center;

&&:hover{
  background: ${(props) => props.hoverColor || '#999'}
}
`;
