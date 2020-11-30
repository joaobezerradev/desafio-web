import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;

  p {
    font-size: 48px;
    font-weight: bold;
    line-height: 55px;
  }
`;

export const Auth = styled.div`
  width: 30%;
  background-color: #fff;

  display: flex;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 300px;
      border: 1px solid #fb4242;
      padding-left: 12px;
      background: #fff;
      border-radius: 8px;
      padding: 16px 24px;
      font-size: 16px;
      color: #6c6c80;

      & + input {
        margin-top: 10px;
      }
    }

    button {
      background: #f0f0f5;
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      margin-top: 5px;
      background-color: #fb4242;
      width: 300px;

      color: #fff;
    }
  }
  p {
    margin: 5px 0;
    color: #000;
    width: 300px;
    font-size: 12px;

    span {
      margin: 0 3px;
      color: #3f3cfb;
      font-size: 12px;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  h1 {
    margin-right: 200px;
    font-size: 18px;
    font-weight: 700;
    color: #fb4242;
  }

  span {
    margin-right: 260px;
    color: #000;
    font-size: 10px;

    a {
      margin-left: 3px;
      font-size: 10px;
      text-decoration: none;
    }
  }
`;
