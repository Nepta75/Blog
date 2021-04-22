import React, {useEffect, useState} from 'react';
import { PostAdminPageStyled } from './PostAdminPage.style';
import { useParams } from 'react-router-dom';
import { getRessource, deleteRessource, updateRessource, getRessources } from '../../../services/apiServices';
import { PostForm } from './PostForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const PostEdit = () => {
  const params = useParams();
  const [inputs, setInputs] = useState({});
  const [categories, setCategories] = useState([]);

  const postId = params.postId;
  
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
      if (data) {
        console.log('data :>> ', data);
        setInputs({
          title: data.title,
          id: data._id,
          titleDesc: data.title_description,
          imageUrl: data.image,
          content: data.contenu,
          category: data.category._id,
        });
      }
    });

    getRessources('cat').then(data => {
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
          onClick={() => updateRessource('post', getValue("id"), {
            title: getValue("title"),
            title_description: getValue("titleDesc"),
            image: getValue("imageUrl"),
            _id: getValue("id"),
            contenu: getValue("content"),
            category: getValue("category"), 
          })}
          type="submit"
          value="Mettre à jour"
        />
        <Button
          onClick={() => deleteRessource('post', getValue("id"))}
          type="submit"
          value="supprimer"
        />
      </div>
    </PostAdminPageStyled>
  );
}

export { PostEdit }