import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

export const getRessources = (name, token = null) => {
  const url = `${BASE_URL}/${name}`;
  console.log('url :>> ', url);
  console.log(process.env);
  return axios.get(url, token ? { headers: { Authorization: token }} : {}).then((response) => response.data);
}

export const getRessource = (name, id, token = null) => {
  const url = `${BASE_URL}/${name}/${id}`;
  return axios.get(url, token ? { headers: { Authorization: token }} : {}).then((response) => response.data);
}

export const updateRessource = (name, id, body) => {
  const url = `${BASE_URL}/${name}/${id}`;
  return axios.put(url, body, { headers: { Authorization: localStorage.getItem('jwtToken') }}).then((response) => response.data);
}

export const createRessource = (name, body) => {
  const url = `${BASE_URL}/${name}`;
  return axios.post(url, body, { headers: { Authorization: localStorage.getItem('jwtToken') }}).then((response) => response.data);
}

export const deleteRessource = (name, id) => {
  const url = `${BASE_URL}/${name}/${id}`;
  return axios.delete(url, { headers: { Authorization: localStorage.getItem('jwtToken') }}).then((response) => response.data);
}