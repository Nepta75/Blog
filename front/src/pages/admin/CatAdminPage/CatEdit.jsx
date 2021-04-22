import React, {useEffect, useState} from 'react';
import { CatAdminPageStyled } from './CatAdminPage.style';
import { useParams } from 'react-router-dom';
import { getRessource, deleteRessource, updateRessource } from '../../../services/apiServices';
import { CatForm } from './CatForm';
import { Button } from '../../../components/ui-elements/Button/Button';

const CatEdit = () => {
  const params = useParams();
  const [inputs, setInputs] = useState({});

  const catId = params.catId;
  
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const getValue = (name) => {
    return inputs[name] || "";
  }

  useEffect(() => {
    if (!catId) return null;

    getRessource('cat', catId).then(data => {
      if (data) {
        setInputs({
          catName: data.catName,
          id: data._id,
          imageUrl: data.image,
        });
      }
    });
  }, [catId]);

  return (
    <CatAdminPageStyled>
      <CatForm 
        handleInputChange={handleInputChange}
        getValue={getValue}
      />
      <div className="button-container">
        <Button
          onClick={() => updateRessource('cat', getValue("id"), {
            catName: getValue("catName"),
            image: getValue("imageUrl"),
            _id: getValue("id"),
          })}
          type="submit"
          value="Mettre à jour"
        />
        <Button
          onClick={() => deleteRessource('cat', getValue("id"))}
          type="submit"
          value="supprimer"
        />
      </div>
    </CatAdminPageStyled>
  );
}

export { CatEdit }