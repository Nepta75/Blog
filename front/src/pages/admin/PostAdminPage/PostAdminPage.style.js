import styled from 'styled-components';

export const PostAdminPageStyled = styled.div`
  margin: 20px;

  .admin__posts-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .admin__posts-container__button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /************* POST FORM ************/
  
  .postform__container {
    width: 100%;
    
    img {
      width: 100%;
      height: auto;
    }

    .fied-container {
      display: flex;
      label {
        width: 30%;
      }
      
      input, textarea {
        width: 70%;
      }
    }
  }
  
  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;