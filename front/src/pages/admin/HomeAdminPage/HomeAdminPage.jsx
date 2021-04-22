import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HomeAdminPageStyled } from './HomeAdminPage.style';
import { getRessources, deleteRessource } from '../../../services/apiServices'
import { Button } from '../../../components/ui-elements/Button/Button';

const HomeAdminPage = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await getRessources('post');
      setPosts(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <HomeAdminPageStyled>
      <Button onClick={() => history.push('/admin/post/') } value="Posts: " />
      <Button onClick={() => history.push('/admin/cat/') } value="Catégories: " />
      <Button onClick={() => history.push('/admin/user/') } value="Utilisateurs: "/>
    </HomeAdminPageStyled>
  );
};

export { HomeAdminPage };
