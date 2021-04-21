import React, {useEffect, useState} from 'react';
import { UserAdminPageStyled } from './UserAdminPage.style';
import { useHistory } from 'react-router-dom';
import { getRessource, createRessource } from '../../../services/apiServices';
import { PostForm } from './PostForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const UserCreate = ({
  postId
}) => {

  const [inputs, setInputs] = useState({});
  const history = useHistory();

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const getValue = (name) => {
    return inputs[name] || "";
  }

  useEffect(() => {
    if (!postId) return null;

    getRessource('post', postId).then(data => {
      if (data.success) {
        setInputs({
          title: data.title,
          id: data._id,
          titleDesc: data.title_description,
          imageUrl: data.image,
          content: data.contenu,
        });
      }
    });

  }, [postId]);

  return (
    <UserAdminPageStyled>
      <PostForm 
        handleInputChange={handleInputChange}
        getValue={getValue}
      />
      <div className="button-container">
        <Button
          onClick={() => {
            createRessource('post', {
              pseudo: getValue("pseudo"),
              mdp: getValue("mdp"),
              admin: getValue("admin"),
              email: getValue("content"),
            });
            history.push('/admin');
          }}
          type="submit"
          value="Ajouter"
        />
      </div>
    </UserAdminPageStyled>
  );
}

export { UserCreate }