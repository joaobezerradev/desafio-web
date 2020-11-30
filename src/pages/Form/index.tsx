import React, { FormEvent, useCallback, useState } from 'react';
import * as Yup from 'yup';
import { format } from 'date-fns';

import { FiLogOut } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import sidebarImg from '../../assets/sidebar-top-logo.svg';
import avatarImg from '../../assets/avatar.png';
import validarCpf from '../../utils/validCpf';

import {
  Container,
  Sidebar,
  Content,
  Header,
  Body,
  Info,
  Profile,
  Button,
  A,
  FieldGroup,
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const Form: React.FC = () => {
  const history = useHistory();
  const [inputAux, setInpuAux] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birth_date, setBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [nationality, setNationality] = useState('');
  const [naturalness, setNaturalness] = useState('');
  const { token } = useAuth();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        gender: Yup.string(),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        birth_date: Yup.string().required(),
        nationality: Yup.string(),
        naturalness: Yup.string(),
        cpf: Yup.string().required(),
      });

      const validCpf = validarCpf(cpf);

      if (!validCpf) {
        alert('Insira um cpf valido !');
        return;
      }
      const [year, month, day] = birth_date.split('-');

      const data = {
        name,
        email,
        cpf,
        gender,
        birth_date: `${day}-${month}-${year}`,
        nationality,
        naturalness,
      };

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('persons', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      history.push('/dashboard');
    },
    [
      birth_date,
      cpf,
      email,
      name,
      nationality,
      naturalness,
      gender,
      history,
      token,
    ],
  );
  return (
    <Container>
      <Sidebar>
        <img src={sidebarImg} alt="logo" />

        <A to="/dashboard">Dashboard</A>

        <Button>
          <span> Sair</span>

          <FiLogOut size={20} color="#6c6c80" />
        </Button>
      </Sidebar>

      <Content>
        <Header>
          <Info>
            <h1>Painel</h1>

            <span>{format(new Date(), 'dd/MM/yyyy')}</span>
          </Info>

          <Profile>
            <div>
              <strong>Seja bem vindo(a) !</strong>

              <p>usuario</p>
            </div>

            <img src={avatarImg} alt="foto" />
          </Profile>
        </Header>

        <Body onSubmit={handleSubmit}>
          <h1>Registro</h1>

          <FieldGroup>
            <div>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                name="cpf"
                type="text"
                placeholder="Cpf"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                name="gender"
                type="text"
                placeholder="Genero"
                value={gender}
                onChange={e => setGender(e.target.value)}
              />
              <input
                onFocus={() => setInpuAux(true)}
                onBlur={() => setInpuAux(false)}
                name="birth_date"
                type={inputAux ? 'date' : 'text'}
                value={birth_date}
                onChange={e => setBirth(e.target.value)}
                placeholder="Data de Nascimento"
              />
            </div>
            <div>
              <input
                name="naturalness"
                type="text"
                placeholder="Naturalidade"
                value={naturalness}
                onChange={e => setNaturalness(e.target.value)}
              />
              <input
                name="natioality"
                type="text"
                placeholder="Nacionalidade"
                value={nationality}
                onChange={e => setNationality(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              style={{
                backgroundColor: '#fb4242',
                color: '#fff',
                fontSize: 20,
              }}
            >
              Salvar
            </Button>
          </FieldGroup>
        </Body>
      </Content>
    </Container>
  );
};

export default Form;
