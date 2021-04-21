import React from 'react';
import { UserAdminPageStyled } from './UserAdminPage.style'

const UserForm = ({
  getValue,
  handleInputChange,
  handleCheckboxChange,
}) => {
  return (
    <UserAdminPageStyled>
      <div className="form__container">
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
          <label>pseudo: </label>
          <input
            name="pseudo"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("pseudo")} 
          />
        </div>
        <div className="fied-container">
          <label>mdp: </label>
          <input
            name="mdp"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={getValue("mdp")} 
          />
        </div>
        <div className="fied-container">
          <label>admin: </label>
          <span>
            <input
              name="admin"
              onChange={(e) => handleCheckboxChange(e)}
              type="checkbox"
              checked={getValue("admin")}
            />
          </span>
        </div>
        <div className="fied-container">
          <label>email: </label>
          <input
            name="email"
            onChange={(e) => handleInputChange(e)}
            type="mail"
            value={getValue("email")} 
          />
        </div>
      </div>
    </UserAdminPageStyled>
  )
};

export { UserForm };