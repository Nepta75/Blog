export const disconnect = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId');
}