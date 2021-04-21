import { getRessource } from '../services/apiServices';

export const checkIfUserConnected = async () => {
  const jwt = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('userId');
  if (!jwt && !userId) return false;
  const user = await getRessource('user', userId);
  if (user && jwt) return true;
}