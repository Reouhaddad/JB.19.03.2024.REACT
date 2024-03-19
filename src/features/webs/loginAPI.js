import axios from 'axios'
const MY_SERVER= "https://jb-17-03-2024-dj-1.onrender.com/login/"
// const My_server1 = "http://127.0.0.1:8000/login/"
export function login(userData) {
  console.log(userData);
  return axios.post(MY_SERVER, userData);
}

