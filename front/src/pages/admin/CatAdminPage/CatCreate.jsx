import React, { useState } from 'react';
import { CatAdminPageStyled } from './CatAdminPage.style';
import { useHistory } from 'react-router-dom';
import { createRessource } from '../../../services/apiServices';
import { CatForm } from './CatForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const CatCreate = () => {

  const [inputs, setInputs] = useState({});
  const history = useHistory();

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const getValue = (name) => {
    return inputs[name] || "";
  }

  return (
    <CatAdminPageStyled>
      <CatForm 
        handleInputChange={handleInputChange}
        getValue={getValue}
      />
      <div className="button-container">
        <Button
          onClick={() => {
            createRessource('cat', {
              catName: getValue("catName"),
              image: getValue("imageUrl"),
              _id: getValue("id"),
            });
            history.push('/admin/cat');
          }}
          type="submit"
          value="Ajouter"
        />
      </div>
    </CatAdminPageStyled>
  );
}

export { CatCreate }