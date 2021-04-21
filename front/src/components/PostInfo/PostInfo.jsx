import React from 'react';
import { Link } from 'react-router-dom';
import { PostInfoStyled } from './Postinfo.style';

const PostInfo = ({
  title,
  description,
  imageUrl,
  content,
  postId,
}) => {
  return (
    <PostInfoStyled>
      <Link to={`/post/${postId}`}>
        <img src={imageUrl} alt={title} />
        <div className="postinfo__content">
          <h3>Titre: {title}</h3>
          <div>Description: {description}</div>
        </div>
      </Link>
    </PostInfoStyled>
  );
};

export { PostInfo };
