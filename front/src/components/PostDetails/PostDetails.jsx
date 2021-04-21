import React from 'react';
import { PostDetailsStyled } from './PostDetails.style';

const PostDetails = ({
  title,
  description,
  imageUrl,
  content,
  postId,
}) => {
  return (
    <PostDetailsStyled>
        <img src={imageUrl} alt={title} />
        <div className="postdetails__content">
          <h3>Titre: {title}</h3>
          <div>Description: {description}</div>
          <div>Contenu: {content}</div>
        </div>
    </PostDetailsStyled>
  )
};

export { PostDetails };
