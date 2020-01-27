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

`;

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  font-size: 21px;
  border: 0;
  border-bottom: 1px solid black;
  `;

export const SemContato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  `;
