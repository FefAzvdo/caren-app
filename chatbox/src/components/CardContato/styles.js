import styled from 'styled-components';

export const ContatoWrapper = styled.div`
      background: #737373;
      border: 3px solid black;
      margin: 10px 10px;
      padding: 10px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img{
        width: 80px;
        height: 80px;
        border: 3px solid black;
      }

      h2{
        color: #fff;
      }

      @media screen and (max-width: 780px){
        justify-content: space-around;
        flex-direction: row;

        h2{
          margin: 25px
        }
     }

`;

export const UserActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 10px;
  background: #f9f9f9;
  margin: 15px;
  cursor: pointer;
  
    &&:hover{
      background: #999;
      font-weight: bold;
    }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 780px){
    flex-direction: row;
  }
`;
