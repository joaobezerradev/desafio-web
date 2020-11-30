import React, { FormEvent, useCallback, useState } from 'react';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Container, Content, Auth, Title } from './styles';

import authLogo from '../../assets/auth-logo.svg';
import contentImg from '../../assets/content-img.svg';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      const data = {
        email,
        password,
      };

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/');
    },
    [history, signIn, email, password],
  );

  return (
    <Container>
      <Content>
        <p>Faça seu cadastro e venha conhecer nossas soluções inteligentes</p>
        <img src={contentImg} alt="content" />
      </Content>
      <Auth>
        <form onSubmit={handleSubmit}>
          <img src={authLogo} alt="auth-logo" />

          <Title>
            <h1>Faça seu Login</h1>
            <span>
              Ou
              <Link to="/signup">crie sua conta</Link>
            </span>
          </Title>

          <input
            name="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="Password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p>
            Concordo com o<span>Contrato</span>e com os
            <span>Termos de uso</span>
            da Empresa.
          </p>
          <button type="submit">Entrar</button>
        </form>
      </Auth>
    </Container>
  );
};

export default Login;
