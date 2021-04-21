import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { PostPageStyled } from './PostPage.style';
import { getRessources, getRessource } from '../../services/apiServices';
import { PostInfo } from '../../components/PostInfo/PostInfo';
import { PostDetails } from '../../components/PostDetails/PostDetails';

const PostPage = () => {

  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    if (!postId) {
      async function fetchMyAPI() {
        let response = await getRessources('post');
        setPosts(response);
      }
      fetchMyAPI();
    } else {
      async function fetchMyAPI() {
        let response = await getRessource('post', postId);
        setCurrentPost(response);
      }
      fetchMyAPI();
    }
  }, [postId]);

  return (
    <PostPageStyled>
      {!currentPost ?
        <Fragment>
          <h1>List des derniers articles</h1>
          {
            posts.map(post => (
              <PostInfo
                key={post._id}
                postId={post._id}
                title={post.title}
                description={post.title_description}
                imageUrl={post.image}
                content={post.contenu}
              />
            ))
          }
        </Fragment>
        :
        <PostDetails
          postId={currentPost._id}
          title={currentPost.title}
          description={currentPost.title_description}
          imageUrl={currentPost.image}
          content={currentPost.contenu} 
        />
      }
    </PostPageStyled>
  );
};

export { PostPage };
