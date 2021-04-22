import React, {useEffect, useState} from 'react';
import { PostAdminPageStyled } from './PostAdminPage.style';
import { useHistory } from 'react-router-dom';
import { createRessource, getRessources } from '../../../services/apiServices';
import { PostForm } from './PostForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const PostCreate = ({
  postId
}) => {

  const [inputs, setInputs] = useState({});
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const getValue = (name) => {
    return inputs[name] || "";
  }

  useEffect(() => {
    getRessources('cat').then(data => {
      console.log('data :>> ', data);
      if (data) {
        setCategories(data);
      }
    });

  }, [postId]);

  return (
    <PostAdminPageStyled>
      <PostForm 
        handleInputChange={handleInputChange}
        getValue={getValue}
        categories={categories}
      />
      <div className="button-container">
        <Button
          onClick={() => {
            createRessource('post', {
              title: getValue("title"),
              title_description: getValue("titleDesc"),
              image: getValue("imageUrl"),
              contenu: getValue("content"),
              category: getValue("category"),
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