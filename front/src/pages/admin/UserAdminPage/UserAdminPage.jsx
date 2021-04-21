import React, { Fragment, useEffect, useState } from 'react';
import { map, filter } from 'lodash';
import { useHistory } from 'react-router-dom';
import { UserAdminPageStyled } from './UserAdminPage.style';
import { getRessources, deleteRessource } from '../../../services/apiServices'
import { Button } from '../../../components/ui-elements/Button/Button';

const UserAdminPage = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log('iciiiii')
    const fetchMyAPI = async () => {
      const response = await getRessources('user', localStorage.getItem('jwtToken'));
      setUsers(response);
    }

    fetchMyAPI();
  }, []);

  const remove = (id) => {
    deleteRessource('user', id).then(data => {
      if (data.success) {
        const newPost = filter(users, user => user._id !== id);
        setUsers(newPost);
      }
    })
  }

  console.log('users :>> ', users);

  return (
    <UserAdminPageStyled>
      <h1>Liste des users: </h1>
      { users.success ?
          map(users.users, user => (
            <div key={user._id} className="user__element">
              <div>
                <div>Pseudo: {user.pseudo}</div>
                <div>admin: {user.admin ? 'oui' : 'non'}</div>
              </div>
              <div className="button__container">
                <Button onClick={() => history.push(`/admin/user/edit/${user._id}`)} value="modifier" background={"#fff"} color={"black"} />
                <Button onClick={() => remove(user._id)} value="supprimer" background={"#fff"} color={"black"}/>
              </div>
            </div>
          ))    
      :
        <Fragment>
          Aucun users trouvé.
        </Fragment>
      }
    </UserAdminPageStyled>
  );
};

export { UserAdminPage };
