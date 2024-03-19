import axios from 'axios';

const MY_SERVER = "https://jb-17-03-2024-dj-1.onrender.com/products/";
// const MY_SERVER1 = "http://127.0.0.1:8000/products/";

export function getProds() {
  return axios.get(MY_SERVER)
}

export function addProd(prod) {
  return axios.post(MY_SERVER,prod)
}

export function deleteProd(id) {
  return axios.delete(`${MY_SERVER}${id}`);
}

// upd 

