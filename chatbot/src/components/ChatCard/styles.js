import styled from 'styled-components';

export const ChatCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 500px){
    padding: 5px
  }
`;

export const ChatCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ccc;
  padding: 5px;

  img{
    width: 40px;
    height: 40px;
    border: 3px solid black;
  }

  @media screen and (max-width: 700px){
    img{
      display: none;
    }

    h2{
      font-size: 12px
    }
  }
`;

export const ChatCardBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #eee;
  padding: 20px;

  
`;
