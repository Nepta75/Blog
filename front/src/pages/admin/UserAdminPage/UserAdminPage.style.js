import styled from 'styled-components';

export const UserAdminPageStyled = styled.div`
  margin: 20px;

  h1 {
    display:flex;
    justify-content: center;
    margin: 20px;
  }

  .user__element {
    display: flex;
    justify-content: space-between;
    background-color: #444;
    padding: 20px 10px;
    margin: 20px;
    color: #fff;
    font-weight: bold;

    .button__container {
      display: flex;
      justify-content: space-between;
    }
  }
`;