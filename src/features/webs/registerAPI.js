import axios from 'axios';
// const My_server1 = "http://127.0.0.1:8000/register/"
const MY_SERVER = "https://jb-17-03-2024-dj-1.onrender.com/register/"; 

export function registerUser(userData) {
  return axios.post(MY_SERVER, userData);
}