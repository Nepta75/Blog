import styled from 'styled-components';

export const HeaderStyled = styled.div`
  nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: grey;
    margin: 0;

    div {
      width: 100px;
      padding: 30px;
      cursor: pointer;
      color: #fff;

      :hover {
        background-color: #fff;
        color: black;
      }
    }
    
    ul {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;

      li {
        list-style: none;

        a, button {
          border: none;
          background: none;
          text-decoration: none;
          color: #fff;
          cursor: pointer;
          padding: 30px;
          width: auto;
          display: flex;
          align-items: center;

          :hover {
            color: black;
          }
        }

        :hover {
          background-color: #fff;
        }
      }
    }
  }
`;