import axios from 'axios';

const url = 'http://localhost:8080/userProfile/getData';
const serverUrl = 'http://localhost:8080/'

export const getPostsData = () => { return axios.get("https://jsonplaceholder.typicode.com/posts") };
export const getData = () => { return axios.get(url)};
export const postTeamData = (teamData) => { return axios.post(serverUrl + 'teamRegister', teamData)};