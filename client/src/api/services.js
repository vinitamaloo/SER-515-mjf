import axios from 'axios';

const url = 'http://localhost:8080/referee/add_referee';

export const getPostsData = () => { return axios.get("https://jsonplaceholder.typicode.com/posts") };
export const getData = () => { return axios.get(url)};
export const postReferee = (referee) => {
        return axios.post(url,referee);
}