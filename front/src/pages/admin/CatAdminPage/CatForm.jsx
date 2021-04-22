import React from 'react';
import { CatAdminPageStyled } from './CatAdminPage.style'

const CatForm = ({
  getValue,
  handleInputChange,
}) => {
  return (
    <CatAdminPageStyled>
      <div className="catform__container">
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
          <label>nom de la catégorie: </label>
          <input
            name="catName"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("catName")} 
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
      </div>
    </CatAdminPageStyled>
  )
};

export { CatForm };