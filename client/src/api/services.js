import axios from 'axios';

const serverUrl = 'http://localhost:8080/'

export const getPostsData = () => { return axios.get("https://jsonplaceholder.typicode.com/posts") };

//export const getData = () => { return axios.get(serverUrl + 'userProfile/getData')};
export const postTeamData = (teamData) => { return axios.post(serverUrl + 'teamRegister', teamData)};
export const getUser = (user) => { return axios.post(serverUrl + 'admin/getUser', user)};
export const postReferee = (referee) => {
        return axios.post(serverUrl + 'referee/add_referee',referee);
}
export const postSetScores = (setScores) => {
        return axios.post(serverUrl + 'setScores/add_set_scores',setScores);
}

