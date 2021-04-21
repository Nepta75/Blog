import React, {useEffect, useState} from 'react';
import { UserAdminPageStyled } from './UserAdminPage.style';
import { useParams, useHistory } from 'react-router-dom';
import { getRessource, deleteRessource, updateRessource } from '../../../services/apiServices';
import { UserForm } from './UserForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const UserEdit = () => {
  const params = useParams();
  const [inputs, setInputs] = useState({});
  const userId = params.userId;

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const handleCheckboxChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.checked}));
  }

  const remove = () => {
    deleteRessource('user', getValue("id"));
    window.location.href = "/admin/user";
  }

  const update = () => {
    updateRessource('user', getValue("id"), {
      pseudo: getValue("pseudo"),
      mdp: getValue("mdp"),
      admin: getValue("admin") ? true : false,
      email: getValue("email"),
      _id: getValue("id"),
    }).then(data => {
      if (data) {
        alert("Modication éffectué");
      }
    })

  }

  const getValue = (name) => {
    return inputs[name] || "";
  }

  useEffect(() => {
    if (!userId) return null;

    getRessource('user', userId).then(data => {
      if (data) {
        setInputs({
          id: data._id,
          pseudo: data.pseudo,
          mdp: data.mdp,
          admin: data.admin,
          email: data.email,
        });
      }
    });

  }, [userId]);
  console.log('inputs :>> ', inputs);
  return (
    <UserAdminPageStyled>
      <UserForm 
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        getValue={getValue}
      />
      <div className="useredit__button-container">
        <Button
          onClick={() => update()}
          type="submit"
          value="Mettre à jour"
        />
        <Button
          onClick={() => remove()}
          type="submit"
          value="supprimer"
        />
      </div>
    </UserAdminPageStyled>
  );
}

export { UserEdit }