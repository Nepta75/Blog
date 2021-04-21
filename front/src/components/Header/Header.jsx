import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HeaderStyled } from './Header.style';
import { checkIfUserConnected } from '../../utils/checkIfUserConnected';
import { disconnect } from '../../utils/disconnect';
import { checkIfAdminByUserId } from '../../utils/checkIfAdminByUserId';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [userConnected, setUserConnected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getAsyncData = async () => {
      const isConnected = await checkIfUserConnected();
      const isAdmin = await checkIfAdminByUserId()
      setIsAdmin(isAdmin);
      if (location.pathname.startsWith("/admin")) {
        if (!isAdmin) {
          history.push('/');
        }
      }
      setUserConnected(isConnected);
      return;
    }
    
    getAsyncData();
  }, []);

  return (
    <HeaderStyled>
      <nav>
        <div>Mon Logo</div>
        <ul>
          <li><Link to="/home">Accueil</Link></li>
          {
            isAdmin &&
              <li><Link to="/admin">Admin</Link></li>
            }
          {userConnected ? 
            <li>
              <button
                onClick={() => {
                  disconnect();
                  history.push('/');
                }}
              >
                Deconnexion
              </button>
            </li>
            :
            <li><Link to="/connexion">Connexion</Link></li>
          }
        </ul>
      </nav>
    </HeaderStyled>
  );
}

export { Header };