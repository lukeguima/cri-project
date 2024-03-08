import styled from 'styled-components';

export const LoginContainer = styled.div`
  background: linear-gradient(to bottom, #00695c 0%, #99ffcc 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #008B8B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
