import { getRessource } from '../services/apiServices';

export const checkIfAdminByUserId = async () => {
  const userId = localStorage.getItem('userId');
  const jwtToken = localStorage.getItem('jwtToken');
  if (!userId) return false;

  const user = await getRessource("user", userId, jwtToken);
  if (!user) return false;

  return user.admin;
}