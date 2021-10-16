import axios from 'axios';

const url = 'http://localhost:8080/userProfile/getData';

export const getPostsData = () => { return axios.get("https://jsonplaceholder.typicode.com/posts") };
export const getData = () => { return axios.get(url)};
export const getUser = (user) => { return axios.post('http://localhost:8080/admin/getUser', user)};