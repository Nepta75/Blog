import React, {useEffect, useState} from 'react';
import { PostAdminPageStyled } from './PostAdminPage.style';
import { useHistory } from 'react-router-dom';
import { getRessource, createRessource } from '../../../services/apiServices';
import { PostForm } from './PostForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const PostCreate = ({
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
    <PostAdminPageStyled>
      <PostForm 
        handleInputChange={handleInputChange}
        getValue={getValue}
      />
      <div className="button-container">
        <Button
          onClick={() => {
            createRessource('post', {
              title: getValue("title"),
              title_description: getValue("titleDesc"),
              image: getValue("imageUrl"),
              contenu: getValue("content"),
            });
            history.push('/admin');
          }}
          type="submit"
          value="Ajouter"
        />
      </div>
    </PostAdminPageStyled>
  );
}

export { PostCreate }