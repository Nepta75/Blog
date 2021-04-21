import React, { Fragment } from 'react';
import { PostAdminPageStyled } from './PostAdminPage.style'

const PostForm = ({
  getValue,
  handleInputChange,
}) => {
  return (
    <PostAdminPageStyled>
      <div className="postform__container">
        <img src={getValue("imageUrl")} alt={getValue("title")} />
        <div className="fied-container">
          <label>_id: </label>
          <input
            name="id"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("id")} 
          />
        </div>
        <div className="fied-container">
          <label>Title: </label>
          <input
            name="title"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("title")} 
          />
        </div>
        <div className="fied-container">
          <label>Description: </label>
          <input
            name="titleDesc"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("titleDesc")} 
          />
        </div>
        <div className="fied-container">
          <label>ImageUrl: </label>
          <input
            name="imageUrl"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("imageUrl")} 
          />
        </div>
        <div className="fied-container">
          <label>Contenu: </label>
          <textarea
            name="content"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("content")}
          />
        </div>
      </div>
    </PostAdminPageStyled>
  )
};

export { PostForm };