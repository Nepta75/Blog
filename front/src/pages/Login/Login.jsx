import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginStyled } from './Login.style';
import { createRessource } from '../../services/apiServices';

const Login = () => {
  const history = useHistory();

  const handleClick = async () => {
    const userResponse = await createRessource('user/login', {
      pseudo,
      mdp
    });

    if (userResponse) {
      if (userResponse.success) {
        localStorage.setItem("jwtToken", userResponse.token);
        localStorage.setItem("userId", userResponse.userId);
        if (userResponse.admin) {
          history.push('/admin');
        } else {
          history.push('/');
        }
      } else {
        alert("Mauvais identifiants ou mdp");
      }
    }
  }
 
  const [pseudo, setPseudo] = useState("");
  const [mdp, setMdp] = useState("");

  return (
    <LoginStyled>
      <input
        type="text"
        placeholder="pseudo" 
        onChange={(e) => setPseudo(e.target.value)}
      />
      <input 
        type="password"
        placeholder="mot de pass" 
        onChange={(e) => setMdp(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => handleClick()}
      >
        Connexion
      </button>
    </LoginStyled>
  );
};

export { Login };