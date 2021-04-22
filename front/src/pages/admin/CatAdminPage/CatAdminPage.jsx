import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CatAdminPageStyled } from './CatAdminPage.style';
import { getRessources, deleteRessource } from '../../../services/apiServices'
import { Button } from '../../../components/ui-elements/Button/Button';

const CatAdminPage = () => {
  const [cats, setCats] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await getRessources('cat');
      setCats(response);
    }

    fetchMyAPI();
  }, []);

  const removePost = (id) => {
    deleteRessource('cat', id).then(data => {
      if (data.success) {
        const newCat = cats.filter(cat => cat._id !== id);
        setCats(newCat);
      }
    })
  }

  console.log('cats :>> ', cats);

  return (
    <CatAdminPageStyled>
      <h1>Liste des Categories: </h1>
      <div className="add-cat__container">
        <Button
          onClick={() => history.push('/admin/cat/create')}
          value="ajouter une catégorie"
          background="#05c46b"
          color="#fff"
        />
      </div>
      <div className="admin__cat-container">
        {cats && cats.length > 0 ?
            cats.map(cat => (
              <div className="admin__cat-container__item" key={cat._id} >
                <div>
                  <img src={cat.image} alt={cat.catName} />
                  <div>catégorie: {cat.catName}</div>
                </div>
                <div className="admin__cat-container__button-container">
                  <Button
                    type="submit"
                    onClick={() => removePost(cat._id)}
                    value={"supprimer"}
                  />
                  <Button
                    type="submit"
                    onClick={() => history.push(`/admin/cat/edit/${cat._id}`)}
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
      </div>
    </CatAdminPageStyled>
  );
};

export { CatAdminPage };
