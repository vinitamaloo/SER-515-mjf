import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const getPostsData = () => { return axios.get("https://jsonplaceholder.typicode.com/posts") };