import React, { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FiEdit, FiLogOut, FiTrash } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import sidebarImg from '../../assets/sidebar-top-logo.svg';

import avatarImg from '../../assets/avatar.png';

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
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface PersonProps {
  id: string;
  name: string;
  gender?: string;
  email?: string;
  birth_date: string;
  nationality?: string;
  naturalness?: string;
  cpf: string;
}

const Dashboard: React.FC = () => {
  const [persons, setPersons] = useState<Array<PersonProps>>([]);
  const { signOut, token } = useAuth();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await api.get('persons', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPersons(response.data);
    }
    loadData();
  }, [token]);

  const handleDelete = useCallback(
    async (id: string) => {
      setPersons(persons.filter(person => person.id !== id));

      await api.delete(`persons/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [token, persons],
  );
  return (
    <Container>
      <Sidebar>
        <img src={sidebarImg} alt="logo" />

        <A to="/newPerson">Novo Cliente</A>

        <Button onClick={signOut}>
          <span>Sair</span>
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

        <Body>
          <h1>Nossos Clientes</h1>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Genero</th>
                <th>Email</th>
                <th>Data de Nascimento</th>
                <th>Nacionalidade</th>
                <th>Naturalidade</th>
                <th>Cpf</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {persons.map(person => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.gender}</td>
                  <td>{person.email}</td>
                  <td>{person.birth_date}</td>
                  <td>{person.nationality}</td>
                  <td>{person.naturalness}</td>
                  <td>{person.cpf}</td>
                  <td>
                    <Link to={`/updatePerson/${person.id}`}>
                      <FiEdit color="#fff" size={16} />
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(person.id)}
                      type="button"
                    >
                      <FiTrash color="#fff" size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Body>
      </Content>
    </Container>
  );
};

export default Dashboard;
