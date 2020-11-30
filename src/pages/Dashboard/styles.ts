import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 200px;

  padding: 35px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: #001f5a;
  padding: 0 40px;
`;

export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fb4242;
    font-size: 25px;
    margin-right: 35px;
  }

  span {
    padding: 5px 10px;
    border-radius: 8px;
    color: #fff;
    background-color: #002770;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #002770;
  padding-left: 20px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      color: #e5e5e5;
    }

    p {
      color: #e5e5e5;
    }
  }

  img {
    margin-left: 10px;
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }
`;

export const Body = styled.div`
  background-color: #002770;
  border-radius: 8px;

  padding: 20px;

  h1 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    text-align: center;

    td {
      button {
        border: 0;
        background-color: transparent;
      }
      a {
        text-decoration: none;
      }
    }
  }
`;

export const Button = styled.button`
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;

  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 5px;
  }
`;

export const A = styled(Link)`
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 5px;
  }
`;
