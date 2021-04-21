import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostAdminPageStyled } from './PostAdminPage.style';
import { getRessources, deleteRessource } from '../../../services/apiServices'
import { Button } from '../../../components/ui-elements/Button/Button';

import { PostInfo } from '../../../components/PostInfo/PostInfo';

const PostAdminPage = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await getRessources('post');
      setPosts(response);
    }

    fetchMyAPI();
  }, []);

  const removePost = (id) => {
    deleteRessource('post', id).then(data => {
      if (data.success) {
        const newPost = posts.filter(post => post._id !== id);
        setPosts(newPost);
      }
    })
  }

  return (
    <PostAdminPageStyled>
      <h1>Liste des Posts: </h1>
      { posts && posts.length > 0 ?
          posts.map(post => (
            <div key={post._id} className="admin__posts-container">
              <PostInfo
                postId={post._id}
                title={post.title}
                description={post.title_description}
                imageUrl={post.image}
                content={post.contenu}
              />
              <div className="admin__posts-container__button-container">
                <Button
                  type="submit"
                  onClick={() => removePost(post._id)}
                  value={"supprimer"}
                />
                <Button
                  type="submit"
                  onClick={() => history.push(`/admin/post/edit/${post._id}`)}
                  value="modifier"
                />
              </div>
            </div>
          ))
        :
        <Fragment>
          Aucun post pour le moment
        </Fragment>
      }
    </PostAdminPageStyled>
  );
};

export { PostAdminPage };
