import styled from 'styled-components';

export const CatAdminPageStyled = styled.div`
  margin: 20px;

  .admin__cat-container {
    display: flex;
    width: 100%;
    flex-flow: wrap;

    .admin__cat-container__item {
      width: calc(33% - 50px);
      margin: 25px;
      img {
        width: 100%;
        height: auto;
      }
    }

    
    .admin__cat-container__button-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


`;