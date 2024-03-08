// LoginScreen.tsx
import React from 'react';
import { LoginContainer, FormContainer, Input, Button } from './styles';
import { Select } from 'antd';

const { Option } = Select;

const LoginScreen: React.FC = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <form>
          <div>
            <label>Cartório:</label>
            <Select style={{ width: '100%', marginBottom: '10px' }}>
              <Option value="cartorio1">Cartório 1</Option>
              <Option value="cartorio2">Cartório 2</Option>
              <Option value="cartorio3">Cartório 3</Option>
            </Select>
          </div>
          <div>
            <label>Usuário:</label>
            <Input type="text" style={{ width: 'calc(100% - 24px)' }} />
          </div>
          <div>
            <label>Senha:</label>
            <Input type="password" style={{ width: 'calc(100% - 24px)' }} />
          </div>
          <Button type="submit">Entrar</Button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
