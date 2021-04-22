import React from 'react';
import { PostAdminPageStyled } from './PostAdminPage.style'
import { find } from 'lodash';

const PostForm = ({
  getValue,
  handleInputChange,
  categories,
}) => {
  const currentCat = find(categories, cat => cat._id === getValue('category'));
  console.log('categories :>> ', categories);
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
          <label>Categorie: </label>

          <select onChange={(e) => handleInputChange(e)} name="category" id="pet-select">
              <option value={currentCat ? currentCat._id : ""}>{currentCat ? currentCat.catName : "Sélectionner une catégorie"}</option>
              {
                categories.map(category => {
                  if (currentCat && category._id === currentCat._id) return null;
                  return (
                    <option key={category._id} value={category._id}>{category.catName}</option>
                  )
                })
              }
          </select>
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